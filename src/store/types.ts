import { EventSchema } from '../components/App/types'
import { EventEditorSchema } from '../components/Event/'

export interface StateSchema {
  events: EventSchema
  editor: EventEditorSchema
}
