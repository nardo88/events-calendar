import dayjs, { Dayjs } from 'dayjs'
import { classNames } from '../../../../helpers/classNames'
import { IEvent } from '../Calendar'
import { Events } from '../Events/Events'
import cls from './Cell.module.scss'

interface CellProps {
  className?: string
  notCurrentMonth?: boolean
  value: number
  date: number
  currentDay: Dayjs | null
  events: IEvent[]
  setCurrentDay: (val: Dayjs) => void
}

export const Cell = (props: CellProps) => {
  const {
    className,
    date,
    value,
    notCurrentMonth,
    setCurrentDay,
    currentDay,
    events,
  } = props
  return (
    <div
      className={classNames(
        cls.cell,
        {
          [cls.today]: dayjs(date).isSame(dayjs(), 'day'),
          [cls.notCurrentMonth]: notCurrentMonth,
        },
        [className]
      )}>
      <div className={cls.date}>{value}</div>
      <div
        onClick={() => (notCurrentMonth ? null : setCurrentDay(dayjs(date)))}
        className={classNames(cls.overlay, {
          [cls.currentDay]:
            !!date && dayjs(date).isSame(dayjs(currentDay), 'day'),
          [cls.pointer]: !notCurrentMonth,
        })}
      />
      <Events
        events={events.filter((event) =>
          dayjs(event.startedAt).isSame(date, 'day')
        )}
      />
    </div>
  )
}
