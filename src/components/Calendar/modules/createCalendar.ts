import { IDay } from '../types/calendar'

export function createCalendar(year: any, month: number): IDay[] {
  const date = new Date(year, month)
  const lastDate = new Date(year, month)

  const table = []

  for (let i = getDay(lastDate); i > 0; i--) {
    lastDate.setDate(lastDate.getDate() - 1)
    table.unshift({
      value: lastDate.getDate(),
      date: lastDate.getTime(),
      notCurrentMonth: true,
    })
  }

  while (date.getMonth() === month) {
    table.push({ value: date.getDate(), date: date.getTime() })
    date.setDate(date.getDate() + 1)
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      table.push({
        value: date.getDate(),
        date: date.getTime(),
        notCurrentMonth: true,
      })
      date.setDate(date.getDate() + 1)
    }
  }

  return table
}

function getDay(date: Date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay()
  if (day === 0) day = 7 // сделать воскресенье (0) последним днем
  return day - 1
}
