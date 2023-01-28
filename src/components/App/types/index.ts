export interface Event {
  title: string
  startedAt: number
  finishedAt: number
  id: string
}

export interface EventSchema {
  events: Event[]
  isLoading: boolean
  error: string
}
