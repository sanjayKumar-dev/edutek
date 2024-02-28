import React, { useContext, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import DarkthemeContext from '../../utils/DarkthemeContext'

const PieChart = () => {
    const { isDarkMode } = useContext(DarkthemeContext)
    const chartRef = useRef(null)

    useEffect(() => {
        const chart = isDarkMode ? echarts.init(chartRef.current, 'dark') : echarts.init(chartRef.current)
        const options = {
            backgroundColor: `${isDarkMode ? 'rgb(33, 43, 54)' : ''}`,
            title: {
                text: 'Subject wise mark distribution',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Subject',
                    type: 'pie',
                    radius: '50%',
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
        <div ref={chartRef} style={{ height: '20rem' }} />
    )
}

export default PieChart