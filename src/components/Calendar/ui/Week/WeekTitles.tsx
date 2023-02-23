import { FC } from 'react'
import { classNames } from '../../../../helpers/classNames'
import cls from './WeekTitles.module.scss'

export const WeekTitles: FC = () => {
  return (
    <div className={classNames(cls.WeekTitles, {}, [])}>
      <div className={cls.empty}></div>
      <div className={cls.ceil}>00:00</div>
      <div className={cls.ceil}>01:00</div>
      <div className={cls.ceil}>02:00</div>
      <div className={cls.ceil}>03:00</div>
      <div className={cls.ceil}>04:00</div>
      <div className={cls.ceil}>05:00</div>
      <div className={cls.ceil}>06:00</div>
      <div className={cls.ceil}>07:00</div>
      <div className={cls.ceil}>08:00</div>
      <div className={cls.ceil}>09:00</div>
      <div className={cls.ceil}>10:00</div>
      <div className={cls.ceil}>11:00</div>
      <div className={cls.ceil}>12:00</div>
      <div className={cls.ceil}>13:00</div>
      <div className={cls.ceil}>14:00</div>
      <div className={cls.ceil}>15:00</div>
      <div className={cls.ceil}>16:00</div>
      <div className={cls.ceil}>17:00</div>
      <div className={cls.ceil}>18:00</div>
      <div className={cls.ceil}>19:00</div>
      <div className={cls.ceil}>20:00</div>
      <div className={cls.ceil}>21:00</div>
      <div className={cls.ceil}>22:00</div>
      <div className={cls.ceil}>23:00</div>
      <div className={cls.ceil}>00:00</div>
    </div>
  )
}
