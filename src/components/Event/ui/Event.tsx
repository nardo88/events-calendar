import dayjs from 'dayjs'
import { ChangeEvent, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from '../../../helpers/classNames'
import { Event } from '../../App/types'
import {
  getEventFinishedAt,
  getEventStartedAt,
  getEventTitle,
} from '../selectors/eventEditor'
import { eventEditorActions } from '../services/eventSlice'
import cls from './Event.module.scss'

interface EventProps {
  className?: string
  addEvent: (event: Event) => void
}

export const EventEditor: FC<EventProps> = ({ className, addEvent }) => {
  const dispatch = useDispatch()
  const startedAt = useSelector(getEventStartedAt)
  const finishedAt = useSelector(getEventFinishedAt)
  const title = useSelector(getEventTitle)

  const setStartDate = (value: any, type: 'date' | 'time') => {
    if (type === 'date') {
      dispatch(
        eventEditorActions.setStartedAt(
          dayjs(`${value} ${dayjs(startedAt).format('HH:mm')}`).valueOf()
        )
      )
    } else {
      dispatch(
        eventEditorActions.setStartedAt(
          dayjs(`${dayjs(startedAt).format('YYYY.MM.DD')} ${value}`).valueOf()
        )
      )
    }
  }

  const setFinishDate = (value: any, type: 'date' | 'time') => {
    if (type === 'date') {
      dispatch(
        eventEditorActions.setFinishedAt(
          dayjs(`${value} ${dayjs(finishedAt).format('HH:mm')}`).valueOf()
        )
      )
    } else {
      dispatch(
        eventEditorActions.setFinishedAt(
          dayjs(`${dayjs(finishedAt).format('YYYY.MM.DD')} ${value}`).valueOf()
        )
      )
    }
  }

  const clickHandler = () => {
    if (!title) {
      return alert('Заполните заголовок события')
    }
    addEvent({
      title,
      startedAt,
      finishedAt,
      id: dayjs().valueOf().toString(),
    })

    dispatch(eventEditorActions.setTitle(''))
  }
  return (
    <div className={classNames(cls.Event, {}, [className])}>
      <h2>Добавить событие</h2>
      <div className={cls.eventForm}>
        <div className={cls.formItem}>
          <div className={cls.title}>
            <span>Заголовок</span>
            <input
              className={cls.input}
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch(eventEditorActions.setTitle(e.target.value))
              }}
            />
          </div>
        </div>
        <div className={cls.formItem}>
          <div className={cls.inputWrapper}>
            <span>Дата начала</span>
            <input
              className={cls.input}
              type="date"
              value={dayjs(startedAt).format('YYYY-MM-DD')}
              onKeyDown={(e: any) => e.preventDefault()}
              onChange={(e) => setStartDate(e.target.value, 'date')}
            />
          </div>
          <div className={cls.inputWrapper}>
            <span>Время начала</span>
            <input
              className={cls.input}
              type="time"
              value={dayjs(startedAt).format('HH:mm')}
              onKeyDown={(e: any) => e.preventDefault()}
              onChange={(e) => setStartDate(e.target.value, 'time')}
            />
          </div>
        </div>
        <div className={cls.formItem}>
          <div className={cls.inputWrapper}>
            <span>Дата окончания</span>
            <input
              className={cls.input}
              type="date"
              value={dayjs(finishedAt).format('YYYY-MM-DD')}
              onKeyDown={(e: any) => e.preventDefault()}
              onChange={(e) => setFinishDate(e.target.value, 'date')}
            />
          </div>
          <div className={cls.inputWrapper}>
            <span>Время окончания</span>
            <input
              className={cls.input}
              type="time"
              value={dayjs(finishedAt).format('HH:mm')}
              onKeyDown={(e: any) => e.preventDefault()}
              onChange={(e) => setFinishDate(e.target.value, 'time')}
            />
          </div>
        </div>
        <div className={cls.formItem}>
          <button onClick={clickHandler} className={cls.saveBtn}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}
