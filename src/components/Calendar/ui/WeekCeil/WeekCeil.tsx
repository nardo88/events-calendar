import { FC } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { DayNum } from '../../types/calendar'
import cls from './WeekCeil.module.scss'

interface WeekCeilProps {
  className?: string
  dayOfMonth: number // число
  value: number // время unix
  day: DayNum // день недели
}

const dayTitles: Record<DayNum, string> = {
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
  0: 'Вск',
}

export const WeekCeil: FC<WeekCeilProps> = (props) => {
  const { className, day, dayOfMonth, value } = props
  return (
    <div className={classNames(cls.WeekCeil, {}, [className])}>
      <div className={cls.dayOfWeek}>{`${dayOfMonth} ${dayTitles[day]}`}</div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
      <div className={cls.ceil}></div>
    </div>
  )
}
