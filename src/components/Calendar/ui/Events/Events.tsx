import dayjs from 'dayjs'
import { FC } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { IEvent } from '../Calendar'
import cls from './Events.module.scss'

interface EventsProps {
  className?: string
  events: IEvent[]
}

const EventItem: FC<IEvent> = ({ startedAt, title }) => {
  return (
    <div className={cls.EventItem}>{`${dayjs(startedAt).format(
      'HH-mm'
    )} - ${title}`}</div>
  )
}

export const Events: FC<EventsProps> = ({ className, events }) => {
  return (
    <div className={classNames(cls.Events, {}, [className])}>
      {events.slice(0, 3).map((event) => (
        <EventItem key={event.title} {...event} />
      ))}
      {events.length > 3 && <div>{`+ ${events.length - 3} событий`}</div>}
    </div>
  )
}
