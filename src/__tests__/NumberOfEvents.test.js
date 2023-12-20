import {
  fireEvent,
  render,
  screen,
  within,
  waitFor
} from '@testing-library/react'
import App from '../App.js'
import NumberOfEvents from '../components/NumberOfEvents.js'
import userEvent from '@testing-library/user-event'

import EventList from '../components/EventList.js'

describe('<NumberOfEvents /> component', () => {
  test('NumberOfEvents component should contain an element with role "textbox"', () => {
    const { getByRole } = render(<NumberOfEvents />)
    const textboxElement = getByRole('textbox')
    expect(textboxElement).toBeInTheDocument()
  })
  test('NumberOfEvents component should contain a default value of 32', () => {
    const { getByRole } = render(<NumberOfEvents currentNOE={32} />)
    const textboxElement = getByRole('textbox')
    expect(textboxElement.value).toBe('32')
  })
  test('NumberOfEvents value should change depending on the value a user types in', async () => {
    const setCurrentNOE = jest.fn()
    const { getByRole } = render(
      <NumberOfEvents currentNOE={[]} setCurrentNOE={setCurrentNOE} />
    )
    const textboxElement = getByRole('textbox')
    userEvent.clear(textboxElement)
    await fireEvent.change(textboxElement, { target: { value: '10' } })
    expect(setCurrentNOE).toHaveBeenCalledWith('10')
  })
  test('NumberOfEvents should alert when not a number is typed in by user', async () => {
    const setCurrentNOE = jest.fn()
    const { getByRole } = render(
      <NumberOfEvents currentNOE={[]} setCurrentNOE={setCurrentNOE} />
    )
    const textboxElement = getByRole('textbox')
    window.alert = jest.fn()
    await userEvent.type(textboxElement, 'four')
    expect(window.alert).toHaveBeenCalledWith('value is not a number')
  })
  test('NumberOfEvents should alert when value typed in by user is bigger than 50', async () => {
    const setCurrentNOE = jest.fn()
    const { getByRole } = render(
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
    )
    const textboxElement = getByRole('textbox')
    window.alert = jest.fn()
    await userEvent.type(textboxElement, '52')
    expect(window.alert).toHaveBeenCalledWith('value is bigger as 50')
  })
})

describe('<Number of Event /> integration', () => {
  test('Number of Events displayed is changed on user imput', async () => {
    const Appcomponent = render(<App />)
    const AppDOM = Appcomponent.container.firstChild

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
    const NumberOfEvents = within(NumberOfEventsDOM).queryByRole('textbox')
    await userEvent.type(NumberOfEvents, '{backspace}{backspace}10')
    expect(NumberOfEvents).toBeInTheDocument()
    expect(NumberOfEvents.value).toBe('10')
  })
  test('Number of Events length is correctly changed on user input', async () => {
    render(<App />)
    const textboxElement = screen.getByTestId('event-number-input')
    fireEvent.change(textboxElement, { target: { value: '5' } })

    const eventList = await screen.findAllByTestId('event-list')
    expect(eventList.length).toBe(5)
  })

  test('Number of events displayed resets to default when input in NumberOfEvents is cleared', async () => {
    const setCurrentNOE = jest.fn()
    const { getByRole } = render(
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
    )
    const textboxElement = getByRole('textbox')
    await userEvent.type(textboxElement, '{selectall}{backspace}')

    expect(textboxElement).toHaveValue('32')
  })
})
