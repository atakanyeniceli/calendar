import React, { useContext, useState } from 'react'
import Calendar from '../../Classes/calendarClass'
import CalendarContext, { View } from '../../context/calendarContext'

const YearView = ({ className }: { className?: string }) => {
    const { date, setDate, setView } = useContext(CalendarContext)
    const [yearView, setYearView] = useState(date.date)
    const yearRange = {
        start: yearView.getFullYear() - 17,
        stop: yearView.getFullYear() + 2
    }
    const yearArray = () => {
        let tempArray: Array<number> = []
        for (let i = yearRange.start; i <= yearRange.stop; i++) {
            tempArray.push(i)
        }
        return tempArray
    }
    return (
        <div className={className}>
            <div className='flex justify-around'>
                <div onClick={() => setYearView(new Date(yearRange.start - 3, date.date.getMonth()))}>{'<<'}</div>
                <div>{`${yearRange.start}-${yearRange.stop}`}</div>
                <div onClick={() => setYearView(new Date(yearRange.stop + 18, date.date.getMonth()))}>{'>>'}</div>
            </div>
            <div className='grid grid-cols-5'>
                {yearArray().map((year, index) => {
                    return (
                        <div key={index}
                            className={`${year === date.date.getFullYear() && 'bg-green-600'}`}
                            onClick={() => {
                                setDate(new Calendar(new Date(year, date.date.getMonth())))
                                setView(View.Month)
                            }}>
                            {year}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default YearView