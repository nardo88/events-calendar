import { createAsyncThunk } from '@reduxjs/toolkit'
import { Event } from '../types'
import { eventActions } from './appSlice'

export const setEvents = createAsyncThunk(
  'event/setEvents',
  async (_, thunkApi) => {
    try {
      const data = localStorage.getItem('events')
      const events: Event[] = data ? JSON.parse(data) : []
      thunkApi.dispatch(eventActions.addEvents(events))
    } catch (e) {
      return thunkApi.rejectWithValue('Ошибка получения данных')
    }
  }
)
