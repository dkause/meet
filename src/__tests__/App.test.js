import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getEvents } from '../api'
import App from '../App'
import CitySearch from '../components/CitySearch'

describe('<App /> component', () => {
  let AppDOM
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument()
  })
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument()
  })
  test('render NumberOfEvents', async () => {
    render(<App />)
    const numberOfEventsElement = await screen.findAllByTestId('event-list')
    expect(numberOfEventsElement.length).toBeGreaterThan(0)
  })
})

describe('<Number of Event /> integration', () => {
  test('Number of Events displayed is changed on user imput', async () => {
    render(<App />)

    const NumberOfEvents = await screen.findByTestId('event-number-input')
    await userEvent.type(NumberOfEvents, '{backspace}{backspace}10')
    expect(NumberOfEvents).toBeInTheDocument()
    expect(NumberOfEvents.value).toBe('10')
  })
  
})