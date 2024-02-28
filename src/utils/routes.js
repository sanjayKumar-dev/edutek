import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../component/Dashboard"

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    }
])

export default appRoutes