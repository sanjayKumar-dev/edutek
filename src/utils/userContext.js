import { createContext } from "react"

export const userContext = createContext({
    userName: "Sanjay Kumar",
    schoolName: "EDUTECK",
    role: "STUDENT",
    qoutesOfDay: "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X"
})

export const adminDetails = createContext({
    userName: "Sanjay Kumar",
    schoolName: "EDUTECK",
    role: "SUPER_ADMIN",
    qoutesOfDay: "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X"

})