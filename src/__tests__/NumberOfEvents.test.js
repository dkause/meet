import {
  fireEvent,
  render,
  screen} from '@testing-library/react'
import App from '../App.js'
import NumberOfEvents from '../components/NumberOfEvents.js'
import userEvent from '@testing-library/user-event'


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
  test('Number of Events displayed is changed on user input', async () => {
    render(<App />)
    const NumberOfEventsDOM = await screen.findByTestId('event-number-input')
    await userEvent.type(NumberOfEventsDOM, '{backspace}{backspace}10')
    expect(NumberOfEventsDOM).toBeInTheDocument()
    expect(NumberOfEventsDOM.value).toBe('10')
  })
})
