import React, { useState } from 'react'
import './Sidenav.css'
import { studentDashboardList } from '../../utils/studentDashboard'

const Sidenav = () => {
    const [selected, setSelected] = useState(1)

    return (
        <div>
            <div className='mt-4'>
                {studentDashboardList.map((iconObj) => {
                    return (
                        <div className={`flex p-3 m-2 cursor-pointer ${selected === iconObj.id ? 'selected-tab' : 'icon'}`} key={iconObj.id} onClick={() => setSelected(iconObj.id)}>
                            {iconObj.icon}
                            <h3 className='ms-4'>{iconObj.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidenav