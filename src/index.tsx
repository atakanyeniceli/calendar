import CalendarView from './components/calendarView';
import { CalendarProvider } from './context/calendarContext';
import './calendar.css'

const Calendar = <CalendarProvider>
    <CalendarView />
</CalendarProvider>

export default Calendar

