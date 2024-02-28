import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../component/Dashboard"
import Admin from "../component/admin/Admin"
import AdminDashboard from "../component/admin/AdminDashboard"

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "/admin",
                element: <AdminDashboard />
            },
            {
                path: "/admin/dashboard",
                element: <AdminDashboard />
            }
        ]
    },

])

export default appRoutes