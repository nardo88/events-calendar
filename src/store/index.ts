import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { eventReducer } from '../components/App'
import { eventEditorReducer } from '../components/Event'

const rootReducers = combineReducers({
  events: eventReducer,
  editor: eventEditorReducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export const dispatch = store.dispatch

export default store
