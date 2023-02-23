import { Dayjs } from 'dayjs'
import { FC } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { createCalendarWeek } from '../../modules/createCalendarWeek'
import { WeekCeil } from '../WeekCeil/WeekCeil'
import cls from './Week.module.scss'
import { WeekTitles } from './WeekTitles'

interface WeekProps {
  className?: string
  currentDate: Dayjs
}

export const Week: FC<WeekProps> = (props) => {
  const { className, currentDate } = props
  const calendar = createCalendarWeek(currentDate)
  console.log('calendar: ', calendar)
  return (
    <div className={classNames(cls.Week, {}, [className])}>
      <WeekTitles />
      {calendar.map((item) => (
        <WeekCeil key={item.value} {...item} />
      ))}
    </div>
  )
}
