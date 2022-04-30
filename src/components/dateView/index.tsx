import { useContext, useEffect, useState } from "react"
import Calendar from "../../Classes/calendarClass"
import CalendarContext, { View } from "../../context/calendarContext"


const DateView = ({ className }: { className?: string }) => {
    const { date, setDate, setView } = useContext(CalendarContext)
    const [dateView, setDateView] = useState(date)
    useEffect(() => setDateView(date), [date])
    const dayElement = (_date: Date) => {
        return (
            <div key={_date.toISOString()}
                onClick={() => { setDate(new Calendar(_date)) }}
                className={`
                ${_date.getDate() === date.date.getDate()
                    && _date.getMonth() === date.date.getMonth()
                    && _date.getFullYear() === date.date.getFullYear() && 'bg-green-500'}
                `}>
                {_date.getDate()}
            </div>
        )
    }
    const changeView = (_year: number, _month: number) => {
        setDateView(new Calendar(new Date(_year, _month, date.date.getDate())))
    }
    return (
        <div className={className}>
            <div className='flex justify-around'>
                <div onClick={() => changeView(dateView.date.getFullYear() - 1, dateView.date.getMonth())}>{'<<'}</div>
                <div onClick={() => changeView(dateView.date.getFullYear(), dateView.date.getMonth() - 1)}>{'<'}</div>
                <div onClick={() => setView(View.Month)}>{dateView.date.getFullYear()}/{dateView.monthName}</div>
                <div onClick={() => changeView(dateView.date.getFullYear(), dateView.date.getMonth() + 1)}>{'>'}</div>
                <div onClick={() => changeView(dateView.date.getFullYear() + 1, dateView.date.getMonth())}>{'>>'}</div>
            </div>
            <div className='flex justify-around'>
                <div>
                    <div>Mon</div>
                    {dateView.daysColumns.Monday.map((date) => dayElement(date))}
                </div>
                <div>
                    <div>Tue</div>
                    {dateView.daysColumns.Tuesday.map((date) => dayElement(date))}
                </div>
                <div>
                    <div>Wed</div>
                    {dateView.daysColumns.Wednesday.map((date) => dayElement(date))}
                </div>
                <div>
                    <div>Thu</div>
                    {dateView.daysColumns.Thursday.map((date) => dayElement(date))}
                </div>
                <div>
                    <div>Fri</div>
                    {dateView.daysColumns.Friday.map((date) => dayElement(date))}
                </div>
                <div>
                    <div>Sat</div>
                    {dateView.daysColumns.Saturday.map((date) => dayElement(date))}
                </div>
                <div>
                    <div>Sun</div>
                    {dateView.daysColumns.Sunday.map((date) => dayElement(date))}
                </div>
            </div>
        </div>
    )
}

export default DateView