import React, { useContext, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import DarkthemeContext from '../../utils/DarkthemeContext'

const AttenPercentage = () => {
    const { isDarkMode } = useContext(DarkthemeContext)
    const chartRef = useRef(null)

    useEffect(() => {
        const chart = echarts.init(chartRef.current, `${isDarkMode ? 'dark' : ''}`, { renderer: 'svg' })
        const options = {
            backgroundColor: '',
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {d}%'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Overall Attendence',
                    type: 'pie',
                    radius: ['70%', '55%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{b} : {c}%'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 30,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: true
                    },
                    data: [
                        { value: 90, name: 'Present' },
                        { value: 10, name: 'Absent' },
                    ],
                    color: ['#91cc75', '#ee6666']
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

export default AttenPercentage