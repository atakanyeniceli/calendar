

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
export const MonthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


class Calendar {
    date: Date
    monthName: string
    daysColumns: {
        Sunday: Array<Date>,
        Monday: Array<Date>,
        Tuesday: Array<Date>,
        Wednesday: Array<Date>,
        Thursday: Array<Date>,
        Friday: Array<Date>,
        Saturday: Array<Date>
    }
    getDays() {
        let tempArray: Array<Date> = []

        const currentMonthFirstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
        const currentMonthLastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0)

        const columnsStartDate = currentMonthFirstDay.getDay() === days.Sunday
            ? new Date(this.date.getFullYear(), this.date.getMonth(), -5)
            : new Date(this.date.getFullYear(), this.date.getMonth(), (days.Monday - currentMonthFirstDay.getDay()) + 1)

        const columnStopDate = currentMonthLastDay.getDay() === days.Sunday
            ? currentMonthLastDay
            : new Date(this.date.getFullYear(), this.date.getMonth(), currentMonthLastDay.getDate() + (7 - currentMonthLastDay.getDay()))

        for (let i = columnsStartDate; i <= columnStopDate;) {
            const tempDate = new Date(columnsStartDate.getFullYear(), columnsStartDate.getMonth(), columnsStartDate.getDate())
            tempArray.push(tempDate)
            columnsStartDate.setDate(columnsStartDate.getDate() + 1)
        }
        return tempArray
    }
    constructor(_date: Date = new Date()) {
        this.date = _date
        this.monthName = MonthArray[this.date.getMonth()]
        const daysArray = this.getDays()
        this.daysColumns = {
            Sunday: daysArray.filter((_date) => _date.getDay() === days.Sunday),
            Monday: daysArray.filter((_date) => _date.getDay() === days.Monday),
            Tuesday: daysArray.filter((_date) => _date.getDay() === days.Tuesday),
            Wednesday: daysArray.filter((_date) => _date.getDay() === days.Wednesday),
            Thursday: daysArray.filter((_date) => _date.getDay() === days.Thursday),
            Friday: daysArray.filter((_date) => _date.getDay() === days.Friday),
            Saturday: daysArray.filter((_date) => _date.getDay() === days.Saturday)
        }
    }
}

export default Calendar