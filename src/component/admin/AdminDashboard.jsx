import React, { useEffect } from 'react'
import WelcomeCard from '../student/WelcomeCard'
import DayInfo from '../dayInfo/DayInfo'
import { useLocation } from 'react-router'

const AdminDashboard = () => {
    const url = useLocation()
    useEffect(() => {
        console.log(url.pathname.includes('admin'));
    }, [])
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

export default AdminDashboard