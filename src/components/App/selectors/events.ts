import { StateSchema } from '../../../store/types'

export const getEvents = (state: StateSchema) => state.events.events || []
export const getIsLoading = (state: StateSchema) =>
  state.events.isLoading || false
