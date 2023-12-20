import { render, within } from '@testing-library/react'
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
  test('render NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument()
  })
})
describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup()
    const Appcomponent = render(<App />)
    const AppDom = Appcomponent.container.firstChild

    const CitySearchDom = AppDom.querySelector('#city-search')
    const CitysearchInput = within(CitySearchDom).queryByRole('textbox')

    await user.type(CitysearchInput, 'Berlin')
    const berlinSuggestionItem =
      within(CitySearchDom).queryByText('Berlin, Germany')
    await user.click(berlinSuggestionItem)

    const EventListDom = AppDom.querySelector('#event-list')
    const allRenderedEventItems = within(EventListDom).queryAllByRole('article')

    const allEvents = await getEvents()
    const berlinEvents = allEvents.filter(
      (event) => event.location === 'Berlin, Germany'
    )
    expect(allRenderedEventItems.length).toBe(berlinEvents.length)
    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain('Berlin, Germany')
    })
  })
  test('renders a list of events matching the number of events selected by the user', async () => {
    const user = userEvent.setup()
    const Appcomponent = render(<App />)
    const AppDom = Appcomponent.container.firstChild

    const NumberOfEventsDom = AppDom.querySelector('#number-of-events')
    const NumberOfEventsInput = within(NumberOfEventsDom).queryByRole('textbox')

    await user.type(NumberOfEventsInput, '{backspace}{backspace} 5')

    const EventListDom = AppDom.querySelector('#event-list')
    const allRenderedEventItems = within(EventListDom).queryAllByRole('article')

    expect(allRenderedEventItems.length).toBe(5)
    })
  })

