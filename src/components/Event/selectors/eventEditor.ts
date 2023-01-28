import { StateSchema } from '../../../store/types'

export const getEventTitle = (state: StateSchema) => state.editor.title || ''
export const getEventStartedAt = (state: StateSchema) => state.editor.startedAt
export const getEventFinishedAt = (state: StateSchema) =>
  state.editor.finishedAt
