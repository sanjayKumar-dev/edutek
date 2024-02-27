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

export const studentDashboardList = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <Dashboard />,
        isSelected: true
    },
    {
        id: 2,
        name: 'Attendance',
        icon: <VerifiedUserOutlinedIcon />,
        isSelected: false
    },
    {
        id: 3,
        name: 'My Profile',
        icon: <AccountBoxIcon />,
        isSelected: false
    },
    {
        id: 4,
        name: 'Fees',
        icon: <AccountBalanceWalletIcon />,
        isSelected: false
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