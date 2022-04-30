import { useContext } from "react"
import Calendar, { MonthArray } from "../../Classes/calendarClass"
import CalendarContext, { View } from "../../context/calendarContext"


const MonthView = ({ className }: { className?: string }) => {
    const { date, setDate, setView } = useContext(CalendarContext)
    const monthElement = (_month: string, _index: number) => {
        return (
            <div
                key={_index}
                className={`${_month === date.monthName && 'bg-green-600'}`}
                onClick={() => {
                    setDate(new Calendar(new Date(date.date.getFullYear(), _index)))
                    setView(View.Date)
                }}>
                {_month.slice(0, 3)}
            </div>
        )
    }
    return (
        <div className={className}>
            <div onClick={() => setView(View.Year)}>{date.date.getFullYear()}</div>
            <div className='grid grid-cols-4'>
                {MonthArray.map((month, index) => monthElement(month, index))}
            </div>

        </div>
    )
}

export default MonthView