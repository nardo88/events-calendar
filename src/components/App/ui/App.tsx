import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar } from '../../Calendar'
import { EventEditor } from '../../Event'
import { getEvents } from '../selectors/events'
import { eventActions } from '../services/appSlice'
import { setEvents } from '../services/asyncAction'
import { Event } from '../types'
import cls from './App.module.scss'

export function App() {
  const dispatch = useDispatch()
  const events = useSelector(getEvents)

  const addEvent = useCallback(
    (event: Event) => {
      dispatch(eventActions.addEventItem(event))
    },
    [dispatch]
  )

  useEffect(() => {
    // @ts-ignore
    dispatch(setEvents())
  }, [dispatch])
  return (
    <div className={cls.App}>
      <EventEditor addEvent={addEvent} />
      <Calendar events={events} />
    </div>
  )
}
