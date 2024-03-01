import React from 'react'
import moment from 'moment'
import './Attendance.css'
import { Tooltip } from '@mui/material'


const Attendance = () => {

    const renderDayBox = (day, index) => {
        return (
            <Tooltip title={day ? day.format('MMMM DD YYYY') : ''} arrow>
                <div key={index} className={day ? 'day-box' : 'day-box-borderless'}>
                    {/* {day ? day.date() : ''} */}
                </div>
            </Tooltip>
        )
    }

    const getDaysInMonth = () => {
        const daysInMonth = []
        const totalDays = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
        ).getDate()

        const firstWeekDay = moment().startOf('month').weekday()
        console.log('moment().startOf()', moment().startOf('month'));

        for (let i = 0; i < firstWeekDay; i++) {
            daysInMonth.push(null)
        }
        for (let i = 0; i < totalDays; i++) {
            daysInMonth.push(moment().startOf('month').add(i, 'days'))
        }

        return daysInMonth
    }

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
        <div className="calendar">
            <div>
                <h1 className='text-center font-semibold text-lg pb-2'>Attendence For this Month</h1>
            </div>
            <div className='flex'>
                {
                    weekDays.map((day, i) => <div className='week-day font-light text-xs' key={i}>{day}</div>)
                }
            </div>
            <div className="day-boxes">
                {getDaysInMonth().map((day, index) => renderDayBox(day, index))}
            </div>
        </div>
    )
}

export default Attendance