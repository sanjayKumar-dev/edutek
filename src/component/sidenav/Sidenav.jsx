import React, { useState } from 'react'
import './Sidenav.css'
import { studentDashboardList } from '../../utils/studentDashboard'
import { Drawer } from '@mui/material'

const Sidenav = ({ isOpen, handleSidenav }) => {
    const [selected, setSelected] = useState(1)

    return (
        <div>
            <Drawer open={isOpen} onClose={handleSidenav} variant="persistent"
                sx={{
                    width: '240px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '240px',
                        boxSizing: 'border-box',
                    }
                }}
                PaperProps={{ style: { border: 'none' } }}>
                <div className='pt-4 sidenav-div ' >
                    {studentDashboardList.map((iconObj) => {
                        return (
                            <div className={`flex px-4 py-3 mx-2 cursor-pointer ${selected === iconObj.id ? 'selected-tab' : 'icon'}`} key={iconObj.id} onClick={() => setSelected(iconObj.id)}>
                                {iconObj.icon}
                                <h3 className='ms-4 text-sm'>{iconObj.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </Drawer>
        </div>
    )
}

export default Sidenav