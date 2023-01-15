import dayjs, { Dayjs } from 'dayjs'
import { FC, useCallback, useState } from 'react'
import { classNames } from '../../../helpers/classNames'
import cls from './Calendar.module.scss'
import { ControlCalendar } from './ControlCalendar/ControlCalendar'
import { createCalendar } from './createCalendar'

import 'dayjs/locale/ru'
import { Events } from './Events/Events'
dayjs.locale('ru')

export interface IEvent {
  title: string
  startedAt: number
}

interface CalendarProps {
  className?: string
  events: IEvent[]
}

export const Calendar: FC<CalendarProps> = ({ className, events }) => {
  const [currentDate, setCurrentDate] = useState(dayjs())
  const [currentDay, setCurrentDay] = useState<null | Dayjs>(null)

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
            <div
              key={index}
              className={classNames(
                cls.cell,
                {
                  [cls.today]:
                    !!date && dayjs(date?.date).isSame(dayjs(), 'day'),
                },
                []
              )}>
              <div className={cls.date}>{date ? date.value : ''}</div>
              <div
                onClick={() => setCurrentDay(dayjs(date?.date || null))}
                className={classNames(cls.overlay, {
                  [cls.currentDay]:
                    !!date &&
                    dayjs(date?.date).isSame(dayjs(currentDay), 'day'),
                })}
              />
              <Events
                events={events.filter((event) =>
                  dayjs(event.startedAt).isSame(date?.date, 'day')
                )}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
