import dayjs, { Dayjs } from 'dayjs'
import { FC, useCallback, useState } from 'react'
import { classNames } from '../../../../helpers/classNames'
import cls from './Calendar.module.scss'
import { ControlCalendar } from '../ControlCalendar/ControlCalendar'

import 'dayjs/locale/ru'
import { CalendarVariant, IEvent } from '../../types/calendar'
import { Month } from '../Month/Month'
import { Week } from '../Week/Week'
dayjs.locale('ru')

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
  const [variant, setVariant] = useState<CalendarVariant>(CalendarVariant.MONTH)

  const nextMonth = useCallback(() => {
    variant === CalendarVariant.MONTH
      ? setCurrentDate(currentDate.add(1, 'month'))
      : setCurrentDate(currentDate.add(1, 'week'))
  }, [setCurrentDate, currentDate, variant])

  const prevMonth = useCallback(() => {
    variant === CalendarVariant.MONTH
      ? setCurrentDate(currentDate.subtract(1, 'month'))
      : setCurrentDate(currentDate.subtract(1, 'week'))
  }, [setCurrentDate, currentDate, variant])

  return (
    <div className={cls.calendarWrapper}>
      <ControlCalendar
        currentDate={currentDate}
        onNext={nextMonth}
        onPrev={prevMonth}
        variant={variant}
        setVariant={setVariant}
      />
      <div className={classNames(cls.Calendar, {}, [className])}>
        {variant === CalendarVariant.MONTH && (
          <Month
            currentDate={currentDate}
            events={events}
            onChange={onChange}
            value={value}
          />
        )}

        {variant === CalendarVariant.WEEK && <Week currentDate={currentDate} />}
      </div>
    </div>
  )
}
