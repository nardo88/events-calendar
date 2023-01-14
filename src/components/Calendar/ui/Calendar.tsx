import { FC } from 'react'
import cls from './Calendar.module.scss'

interface CalendarProps {
  className?: string
}

export const Calendar: FC<CalendarProps> = ({ className }) => {
  return <div className={cls.Calendar}></div>
}
