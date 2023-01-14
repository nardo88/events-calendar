import dayjs from 'dayjs'
import { FC, useState } from 'react'
import { classNames } from '../../../helpers/classNames'
import cls from './Calendar.module.scss'

interface CalendarProps {
  className?: string
}

const ROWS_COUNT = 5
export const Calendar: FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const date = new Date()
  const date1 = dayjs()

  const startingDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const startingDate1 = dayjs().date(1)

  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1))

  const dates = []
  for (let i = 0; i < ROWS_COUNT * 7; i++) {
    const date = new Date(startingDate)
    dates.push({ date }) // тут буудем пушить еще и собития
    startingDate.setDate(startingDate.getDate() + 1)
  }

  return (
    <div className={classNames(cls.Calendar, {}, [className])}>
      {dates.map((date, index) => {
        return (
          <div key={index} className={classNames(cls.cell, {}, [])}>
            <div className="date">{date.date.getDate()}</div>
          </div>
        )
      })}
    </div>
  )
}
