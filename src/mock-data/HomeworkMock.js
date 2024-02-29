const formatDate = (day) => {
    const updatedDate = new Date(new Date().getTime() + (day * 24 * 60 * 60 * 1000))
    return updatedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const HomeworkPendingLists = [
    {
        subject: "English",
        creationData: "",
        evalutionDate: "",
        maxMark: 40,
        markObtained: null,
        submisstionDate: formatDate(5),
        note: "",
        status: "pending"
    },
    {
        subject: "Maths",
        creationData: "",
        evalutionDate: "",
        maxMark: 40,
        markObtained: null,
        submisstionDate: formatDate(2),
        note: "",
        status: "pending"
    },
    {
        subject: "Chemistry",
        creationData: "",
        evalutionDate: "",
        maxMark: 40,
        markObtained: null,
        submisstionDate: formatDate(10),
        note: "",
        status: "pending"
    }
]

export const HomeworkPendingHeader = [
    {
        title: "Subject",
        dataKey: "subject"
    },
    {
        title: "Submisstion Date",
        dataKey: "submisstionDate"
    },
    {
        title: "Status",
        dataKey: "status"
    }
]