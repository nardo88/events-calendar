import dayjs from 'dayjs'
import { FC, useCallback, useState } from 'react'
import { classNames } from '../../../helpers/classNames'
import cls from './Calendar.module.scss'
import { ControlCalendar } from './ControlCalendar/ControlCalendar'
import { createCalendar } from './createCalendar'

import 'dayjs/locale/ru'
dayjs.locale('ru')

interface CalendarProps {
  className?: string
}

export const Calendar: FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(dayjs())

  const calendar = createCalendar(currentDate.year(), currentDate.month())

  const nextMonth = useCallback(() => {
    setCurrentDate(currentDate.add(1, 'month'))
  }, [setCurrentDate, currentDate])

  const prevMonth = useCallback(() => {
    setCurrentDate(currentDate.subtract(1, 'month'))
  }, [setCurrentDate, currentDate])

  return (
    <div className={cls.calendarWrapper}>
      <ControlCalendar
        currentDate={currentDate}
        onNext={nextMonth}
        onPrev={prevMonth}
      />
      <div className={classNames(cls.Calendar, {}, [className])}>
        {calendar.map((date, index) => {
          return (
            <div key={index} className={classNames(cls.cell, {}, [])}>
              <div className="date">{date}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
