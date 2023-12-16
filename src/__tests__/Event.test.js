import Event from '../components/Event'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockData from '../mock-data'

const mockEvent = mockData[0] // only first element of mockdata

describe('<Event /> component', () => {
  let EventComponent
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />)
  })
  // Tests
  test('renders element for events title', () => {
    const title = EventComponent.queryByText(mockEvent.summary)
    expect(title).toBeInTheDocument()
  })
  test('renders element for events start time', () => {
    const startTime = EventComponent.queryByText(mockEvent.created)
    expect(startTime).toBeInTheDocument()
  })
  test('renders element for events location', () => {
    const location = EventComponent.queryByText(mockEvent.location)
    expect(location).toBeInTheDocument()
  })
  test('renders event detailsbutton with title(show details)', () => {
    const detailsButton = EventComponent.queryByText('Show details')
    expect(detailsButton).toBeInTheDocument()
  })
  test('by default events details are hidden', () => {
    const showEventDetails = EventComponent.queryByText(
      'This is the details div'
    )
    expect(showEventDetails).not.toBeInTheDocument()
  })
  test('click on detailsButton shows event details', async () =>  {

    const user = userEvent.setup()
    // const detailsButton = EventComponent.container.querySelector('.detailsButton')
    const detailsButton = EventComponent.queryByText('Show details')
    await user.click(detailsButton)

    const showEventDetails = EventComponent.queryByText(
      'This is the details div'
      )
    expect(showEventDetails).toBeInTheDocument()
  })
  test('click on detailsButton hides event details', async () =>  {

    const user = userEvent.setup()
    // const detailsButton = EventComponent.container.querySelector('.detailsButton')
    const detailsButton = EventComponent.queryByText('hide details')
    await user.click(detailsButton)

    const showEventDetails = EventComponent.queryByText(
      'This is the details div'
      )
    expect(showEventDetails).not.toBeInTheDocument()
  })
})