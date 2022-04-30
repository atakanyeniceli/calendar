import React, { createContext, useState } from "react"
import { useEffect } from "react"
import Calendar from "../../Classes/calendarClass"

export enum View {
    Date,
    Month,
    Year
}

interface IContext {
    view: View,
    setView: React.Dispatch<React.SetStateAction<View>>,
    date: Calendar,
    setDate: React.Dispatch<React.SetStateAction<Calendar>>
}

const contextDefaultValue = {
    view: View.Date,
    setView: React.useState,
    date: new Calendar(),
    setDate: React.useState
}

const CalendarContext = createContext<IContext>(contextDefaultValue)

interface IProps {
    children: JSX.Element,
    onValue?: Date,
    onChange?: React.Dispatch<React.SetStateAction<Date>>
}

export const CalendarProvider = ({ children, onValue, onChange }: IProps) => {
    const [view, setView] = useState<View>(View.Date)
    const [date, setDate] = useState<Calendar>(new Calendar())
    useEffect(() => {
        if (onChange !== undefined)
            onChange(date.date)
    }, [date])
    useEffect(() => {
        if (onValue !== undefined)
            setDate(new Calendar(onValue))
    }, [onValue])
    const values = { view, setView, date, setDate }
    return <CalendarContext.Provider value={values}>{children}</CalendarContext.Provider>
}


export default CalendarContext