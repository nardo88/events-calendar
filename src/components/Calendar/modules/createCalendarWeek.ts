import { Dayjs } from 'dayjs'
import { DayNum } from '../types/calendar'

export interface DayOfWeekType {
  dayOfMonth: number // число
  value: number // время unix
  day: DayNum // день недели
}

export const createCalendarWeek = (currentDate: Dayjs): DayOfWeekType[] => {
  const monday = currentDate.startOf('week')
  const date = new Date(monday.valueOf())
  const table: DayOfWeekType[] = []

  for (let i = 0; i < 7; i++) {
    table.push({
      dayOfMonth: date.getDate(),
      value: date.getTime(),
      day: date.getDay() as DayNum,
    })
    date.setDate(date.getDate() + 1)
  }

  return table
}
