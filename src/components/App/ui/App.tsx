import { Dayjs } from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { dispatch } from '../../../store'
import { Calendar } from '../../Calendar'
import { EventEditor } from '../../Event'
import { getEvents } from '../selectors/events'
import { eventActions } from '../services/appSlice'
import { setEvents } from '../services/asyncAction'
import { Event } from '../types'
import cls from './App.module.scss'

export function App() {
  const events = useSelector(getEvents)
  const [currentDay, setCurrentDay] = useState<null | Dayjs>(null)

  const addEvent = useCallback((event: Event) => {
    dispatch(eventActions.addEventItem(event))
  }, [])

  useEffect(() => {
    dispatch(setEvents())
  }, [])

  return (
    <div className={cls.App}>
      <EventEditor addEvent={addEvent} />
      <Calendar events={events} value={currentDay} onChange={setCurrentDay} />
    </div>
  )
}
