import { render, waitFor, within } from '@testing-library/react'
import { getEvents } from '../api.js'
import EventList from '../components/EventList.js'
import App from '../App'

describe('<EventList /> component', () => {
  let EventListComponent
  beforeEach(() => {
    EventListComponent = render(<EventList />)
  })

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole('list')).toBeInTheDocument()
  })
  test('renders correct number of events', async () => {
    const allEvents = await getEvents()
    EventListComponent.rerender(<EventList events={allEvents} />)
    expect(EventListComponent.getAllByRole('article')).toHaveLength(
      allEvents.length
    )
  })
})
describe('<EventList /> integration test)', () => {
  test('renders a list of min. one event when the app is mounted and rendered', async () => {
    const Appcomponent = render(<App />)
    const AppDOM = Appcomponent.container.firstChild
    const EventListDOM = AppDOM.querySelector('#event-list')
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('article')
      expect(EventListItems.length).toBeGreaterThan(0)
    })
  })

  test('renders correctly when no events are passed', () => {
    const { queryByRole } = render(<EventList />)
    expect(queryByRole('article')).toBeNull()
  })

  test('renders correctly when events are passed', () => {
    const mockEvents = [
      { id: 1, name: 'Event 1' },
      { id: 2, name: 'Event 2' }
    ]
    const { getAllByRole } = render(<EventList events={mockEvents} />)
    expect(getAllByRole('article')).toHaveLength(mockEvents.length)
  })
})
