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
