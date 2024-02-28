import React, { useEffect, useState } from 'react'
import './DayInfo.css'

const DayInfo = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setCurrentTime(new Date());
    }
    return (
        <div className='dayinfo-container flex justify-center items-center'>
            <div>
                <h1 className='text-3xl font-semibold'>{currentTime.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}

export default DayInfo