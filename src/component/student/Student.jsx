import React from 'react'
import './Student.css'
import WelcomeCard from './WelcomeCard'
import DayInfo from '../dayInfo/DayInfo'
import PieChart from '../chart/PieChart'
import Homework from './Homework'
import { HomeworkPendingHeader, HomeworkPendingLists } from '../../mock-data/HomeworkMock'

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
            <div className='flex'>
                <div className='w-6/12 card-container my-4 px-4 pt-2'>
                    <PieChart />
                </div>
                <div className='w-6/12 my-4 ms-3'>
                    <Homework headers={HomeworkPendingHeader} data={HomeworkPendingLists} />
                </div>
            </div>


        </div>
    )
}

export default Student