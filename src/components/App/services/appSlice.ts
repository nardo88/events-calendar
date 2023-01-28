import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Event, EventSchema } from '../types'
import { setEvents } from './asyncAction'

const initialState: EventSchema = {
  events: [],
  isLoading: false,
  error: '',
}

const appSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload
    },
    addEventItem: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload)
      localStorage.setItem('events', JSON.stringify(state.events))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setEvents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(setEvents.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(setEvents.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  },
})

export const { reducer: eventReducer } = appSlice
export const { actions: eventActions } = appSlice
