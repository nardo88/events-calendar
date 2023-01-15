import './App.scss'
import { Calendar } from './components/Calendar'

const events = [
  { title: 'Event1', startedAt: 1672898400000 },
  { title: 'Event2', startedAt: 1672984800000 },
  { title: 'Event3', startedAt: 1673157600000 },
  { title: 'Event4', startedAt: 1673244000000 },
  { title: 'Event5', startedAt: 1673503200000 },
  { title: 'Event6', startedAt: 1673589600000 },
  { title: 'Event7', startedAt: 1673676000000 },
  { title: 'Event8', startedAt: 1673676000000 },
  { title: 'Event9', startedAt: 1673676000000 },
  { title: 'Event10', startedAt: 1673676000000 },
  { title: 'Event11', startedAt: 1673676000000 },
  { title: 'Event12', startedAt: 1673935200000 },
  { title: 'Event13', startedAt: 1674194400000 },
  { title: 'Event14', startedAt: 1674626400000 },
  { title: 'Event15', startedAt: 1674885600000 },
]

function App() {
  return (
    <div className="App">
      <Calendar events={events} />
    </div>
  )
}

export default App
