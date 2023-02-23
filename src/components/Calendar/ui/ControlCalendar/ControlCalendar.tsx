import { Dayjs } from 'dayjs'
import { Dispatch, FC, SetStateAction } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { CalendarVariant } from '../../types/calendar'
import cls from './ControlCalendar.module.scss'

interface ControlCalendarProps {
  className?: string
  currentDate: Dayjs
  variant: CalendarVariant
  setVariant: Dispatch<SetStateAction<CalendarVariant>>
  onNext: () => void
  onPrev: () => void
}

export const ControlCalendar: FC<ControlCalendarProps> = (props) => {
  const { className, currentDate, onNext, onPrev, setVariant, variant } = props
  return (
    <div className={classNames(cls.ControlCalendar, {}, [className])}>
      <div className={cls.dateWrapper}>
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
      <div className={cls.switchTypeWrapper}>
        <button
          onClick={() => setVariant(CalendarVariant.MONTH)}
          className={classNames(
            cls.switchBtn,
            { [cls.active]: variant === CalendarVariant.MONTH },
            []
          )}>
          Месяц
        </button>
        <button
          onClick={() => setVariant(CalendarVariant.WEEK)}
          className={classNames(
            cls.switchBtn,
            { [cls.active]: variant === CalendarVariant.WEEK },
            []
          )}>
          Неделя
        </button>
      </div>
    </div>
  )
}
