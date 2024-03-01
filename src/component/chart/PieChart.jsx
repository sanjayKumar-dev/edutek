import React, { useContext, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import DarkthemeContext from '../../utils/DarkthemeContext'

const PieChart = () => {
    const { isDarkMode } = useContext(DarkthemeContext)
    const chartRef = useRef(null)

    useEffect(() => {
        const chart = echarts.init(chartRef.current, `${isDarkMode ? 'dark' : ''}`, { renderer: 'svg' })
        const options = {
            backgroundColor: '',
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Subject',
                    type: 'pie',
                    radius: '50%',
                    label: {
                        show: true,
                        formatter: '{b} : {c}'
                    },
                    data: [
                        { value: 81, name: 'English' },
                        { value: 82, name: 'Maths' },
                        { value: 78, name: 'Physics' },
                        { value: 51, name: 'Chemistry' },
                        { value: 91, name: 'Computer' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        chart.setOption(options)
        return () => {
            chart.dispose()
        }
    }, [isDarkMode])
    return (
        <div ref={chartRef} style={{ height: '18rem' }} />
    )
}

export default PieChart