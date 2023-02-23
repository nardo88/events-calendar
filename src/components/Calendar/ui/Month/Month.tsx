import { Dayjs } from 'dayjs'
import { FC } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { createCalendarMonth } from '../../modules/createCalendarMonth'
import { IEvent } from '../../types/calendar'
import { CalendarHeader } from '../CalendarHeader/CalendarHeader'
import { Cell } from '../Cell/Cell'
import cls from './Month.module.scss'

interface MonthProps {
  className?: string
  currentDate: Dayjs
  events: IEvent[]
  value: Dayjs | null
  onChange: (val: Dayjs) => void
}

export const Month: FC<MonthProps> = (props) => {
  const { className, currentDate, events, onChange, value } = props
  const calendar = createCalendarMonth(currentDate.year(), currentDate.month())

  return (
    <div className={classNames(cls.Month, {}, [className])}>
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
  )
}
