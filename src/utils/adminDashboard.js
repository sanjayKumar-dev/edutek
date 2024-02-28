import { Dashboard } from "@mui/icons-material"
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import ListAltIcon from '@mui/icons-material/ListAlt'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import RateReviewIcon from '@mui/icons-material/RateReview'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ReceiptIcon from '@mui/icons-material/Receipt'

export const adminSidenavList = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <Dashboard />,
        isSelected: false,
        child: []
    },
    {
        id: 2,
        name: 'Front Office',
        icon: <VerifiedUserOutlinedIcon />,
        isSelected: false,
        child: [
            {
                id: 2.1,
                name: 'Admission Enquiry'
            },
            {
                id: 2.2,
                name: 'Visitor Book'
            },
            {
                id: 2.3,
                name: 'Phone Call Log'
            },
            {
                id: 2.4,
                name: 'Postal'
            },
            {
                id: 2.5,
                name: 'Complaints'
            }
        ]
    },
    {
        id: 3,
        name: 'Student Information',
        icon: <AccountBoxIcon />,
        isSelected: false,
        child: [

            {
                id: 3.1,
                name: 'Student Details',
                routes: ''
            },
            {
                id: 3.2,
                name: 'Student Admission',
                routes: ''
            },
            {
                id: 3.3,
                name: 'Suspended Student',
                routes: ''
            },
            {
                id: 3.4,
                name: 'Student House',
                routes: ''
            },
            {
                id: 3.5,
                name: 'Student Complaints',
                routes: ''
            }
        ]
    },
    {
        id: 4,
        name: 'Fees collection',
        icon: <AccountBalanceWalletIcon />,
        isSelected: false,
        child: [
            {
                id: 4.1,
                name: 'Collect Fees',
                routes: ''
            },
            {
                id: 3.2,
                name: 'Offline Bank Payments',
                routes: ''
            },
            {
                id: 3.3,
                name: 'Search Fees Payment',
                routes: ''
            },
            {
                id: 3.4,
                name: 'Fees Reminder',
                routes: ''
            },
            {
                id: 3.5,
                name: 'Search Due Fees',
                routes: ''
            }
        ]
    },
    {
        id: 5,
        name: 'Class Timetable',
        icon: <AccessTimeIcon />,
        isSelected: false
    },
    {
        id: 6,
        name: 'Syllabus Status',
        icon: <PendingActionsIcon />,
        isSelected: false
    },
    {
        id: 7,
        name: 'Homework',
        icon: <ListAltIcon />,
        isSelected: false
    },
    {
        id: 8,
        name: 'Leaves',
        icon: <CheckCircleOutlineIcon />,
        isSelected: false
    },
    {
        id: 9,
        name: 'Attendance',
        icon: <EditCalendarIcon />,
        isSelected: false
    },
    {
        id: 10,
        name: 'Teacher Review',
        icon: <RateReviewIcon />,
        isSelected: false
    },
    {
        id: 11,
        name: 'Notice Board',
        icon: <EventNoteIcon />,
        isSelected: false
    },
    {
        id: 12,
        name: 'Examination',
        icon: <ReceiptIcon />,
        isSelected: false
    },

]