import React from 'react'
import DarkMode from './darkMode/DarkMode.jsx'
import { Badge, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Header = ({ handleSidenav }) => {
    return (
        <header className='header'>
            <div className='flex justify-between'>
                <Toolbar className='justify-between'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleSidenav}
                    >
                        <MenuIcon className='icon' />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        className='icon'
                    >
                        EDUTEK
                    </Typography>


                </Toolbar>
                <div className='pe-7 flex'>
                    <div className='mt-3'>
                        <DarkMode />
                    </div>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon className='icon' />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon className='icon' />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle className='icon' />
                    </IconButton>
                </div>
            </div>
        </header>
    )
}

export default Header