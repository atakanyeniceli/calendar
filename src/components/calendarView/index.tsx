import { useContext } from 'react'
import CalendarContext, { View } from '../../context/calendarContext'
import DateView from '../dateView'
import MonthView from '../monthView'
import YearView from '../yearView'

const CalendarView = () => {
    const { view } = useContext(CalendarContext)
    return (
        <div>
            {view === View.Date && <DateView className='text-center' />}
            {view === View.Month && <MonthView className='text-center' />}
            {view === View.Year && <YearView className='text-center' />}
        </div>
    )
}

export default CalendarView