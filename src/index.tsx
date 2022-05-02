import CalendarView from "./components/calendarView"
import { CalendarProvider } from "./context/calendarContext"
interface IProps {
    _onValue?: Date,
    _onChange?: React.Dispatch<React.SetStateAction<Date>>
}

const Calendar = ({ _onValue, _onChange }: IProps) => {
    return (
        <CalendarProvider onChange={_onChange} onValue={_onValue}>
            <CalendarView />
        </CalendarProvider>
    )
}

export default Calendar