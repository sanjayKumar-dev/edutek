const formatDate = (day) => {
    const updatedDate = new Date(new Date().getTime() - (day * 24 * 60 * 60 * 1000))
    return updatedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}
export const AnnouncementMock = [
    {
        date: formatDate(2),
        text: "Holiday on comming Monday"
    },
    {
        date: formatDate(5),
        text: "Best wishes for your exams"
    },
    {
        date: formatDate(7),
        text: "Notice for new Book collection"
    },
    {
        date: formatDate(10),
        text: " Please clear the outstanding dues"
    },
    {
        date: formatDate(11),
        text: "Holiday on comming Monday"
    }
]

export const AnnouncementHeader = [
    {
        title: "Date",
        dataKey: "date"
    },
    {
        title: "Message",
        dataKey: "text"
    }
]