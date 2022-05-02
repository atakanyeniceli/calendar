import CalendarView from "./components/calendarView"
import { CalendarProvider } from "./context/calendarContext"
const Calendar = () => {
    return (
        <CalendarProvider>
            <CalendarView />
        </CalendarProvider>
    )
}

export default Calendar