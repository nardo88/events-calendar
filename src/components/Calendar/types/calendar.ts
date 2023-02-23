export interface IDay {
  value: number
  date: number
  notCurrentMonth?: boolean
}

export interface IEvent {
  title: string
  startedAt: number
  finishedAt: number
  id: string
}

export enum CalendarVariant {
  MONTH = 'month',
  WEEK = 'week',
}

export type DayNum = 1 | 2 | 3 | 4 | 5 | 6 | 0
