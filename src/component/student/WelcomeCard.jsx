import React, { useContext } from 'react'
import { userContext } from '../../utils/userContext'
import logo from '../assets/student-dashboard.svg'

const WelcomeCard = () => {
    const { userName, qoutesOfDay } = useContext(userContext)
    return (
        <div className='student-card py-14 px-5 w-6/12 flex justify-between'>
            <div className='text-xl font-semibold w-9/12'>
                Hi, Welcome back <span className='font-bold'>{userName}</span>👋
                <p className='text-base font-light pe-8 mt-4'>{qoutesOfDay}</p>
            </div>
            <div className='w-3/12 '>
                <img src={logo} alt="student-dashboard" className='' />
            </div>
        </div>
    )
}

export default WelcomeCard