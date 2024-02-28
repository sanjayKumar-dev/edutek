import React from 'react'
import './Student.css'
import WelcomeCard from './WelcomeCard'
import DayInfo from '../dayInfo/DayInfo'

const Student = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-7/12'>
                    <WelcomeCard />
                </div>
                <div className='w-5/12 ms-3 card-container '>
                    <DayInfo />
                </div>
            </div>


        </div>
    )
}

export default Student