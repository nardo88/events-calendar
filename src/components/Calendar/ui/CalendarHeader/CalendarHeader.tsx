import { FC } from 'react'
import cls from './CalendarHeader.module.scss'

export const CalendarHeader: FC = () => {
  return (
    <>
      <div className={cls.dayName}>пн</div>
      <div className={cls.dayName}>вт</div>
      <div className={cls.dayName}>ср</div>
      <div className={cls.dayName}>чт</div>
      <div className={cls.dayName}>пт</div>
      <div className={cls.dayName}>сб</div>
      <div className={cls.dayName}>вск</div>
    </>
  )
}
