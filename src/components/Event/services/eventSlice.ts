import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { EventEditorSchema } from '../types'

const initialState: EventEditorSchema = {
  title: '',
  finishedAt: dayjs().valueOf(),
  startedAt: dayjs().valueOf(),
}

const eventEditorSlice = createSlice({
  name: 'eventEditor',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setStartedAt: (state, action: PayloadAction<number>) => {
      state.startedAt = action.payload
    },
    setFinishedAt: (state, action: PayloadAction<number>) => {
      state.finishedAt = action.payload
    },
  },
})

export const { reducer: eventEditorReducer } = eventEditorSlice
export const { actions: eventEditorActions } = eventEditorSlice
