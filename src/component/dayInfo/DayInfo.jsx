import React, { useEffect, useState } from 'react'
import './DayInfo.css'

const DayInfo = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)

        return function cleanup() {
            clearInterval(timerID)
        }
    })

    function tick() {
        setCurrentDateTime(new Date())
    }

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        week: 'numeric'
    }
    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(currentDateTime)
    return (
        <div className='dayinfo-container flex justify-center items-center'>
            <div>
                <h1 className='text-3xl font-semibold'>{currentDateTime.toLocaleTimeString()}</h1>
                <p className='mt-1 font-light'>{formattedDateTime}</p>
            </div>
        </div>
    )
}

export default DayInfo