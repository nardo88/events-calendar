import { Dayjs } from 'dayjs'
import { FC } from 'react'
import { classNames } from '../../../../helpers/classNames'
import cls from './ControlCalendar.module.scss'

interface ControlCalendarProps {
  className?: string
  currentDate: Dayjs
  onNext: () => void
  onPrev: () => void
}

export const ControlCalendar: FC<ControlCalendarProps> = ({
  className,
  currentDate,
  onNext,
  onPrev,
}) => {
  return (
    <div className={classNames(cls.ControlCalendar, {}, [className])}>
      <p>{currentDate.format('MMMM YYYY')}</p>
      <div>
        <button onClick={onPrev}>prev</button>
        <button onClick={onNext}>next</button>
      </div>
    </div>
  )
}
