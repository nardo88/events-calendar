import dayjs, { Dayjs } from 'dayjs'
import { FC, useCallback, useState } from 'react'
import { classNames } from '../../../helpers/classNames'
import cls from './Calendar.module.scss'
import { ControlCalendar } from './ControlCalendar/ControlCalendar'
import { createCalendar } from './createCalendar'

import 'dayjs/locale/ru'
import { CalendarHeader } from './CalendarHeader/CalendarHeader'
import { Cell } from './Cell/Cell'
dayjs.locale('ru')

export interface IEvent {
  title: string
  startedAt: number
  finishedAt: number
  id: string
}

interface CalendarProps {
  className?: string
  events: IEvent[]
  value: Dayjs | null
  onChange: (val: Dayjs) => void
}

export const Calendar: FC<CalendarProps> = ({
  className,
  events,
  value,
  onChange,
}) => {
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
        <CalendarHeader />
        {calendar.map((date, index) => (
          <Cell
            key={date.date}
            setCurrentDay={onChange}
            currentDay={value}
            events={events}
            {...date}
          />
        ))}
      </div>
    </div>
  )
}
