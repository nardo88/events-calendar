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
        <button
          className={classNames(cls.btn, {}, [cls.left])}
          onClick={onPrev}>
          &lt;
        </button>
        <button className={classNames(cls.btn, {}, [])} onClick={onNext}>
          &gt;
        </button>
      </div>
    </div>
  )
}
