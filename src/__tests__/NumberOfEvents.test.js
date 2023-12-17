import { render } from '@testing-library/react'
import NumberOfEvents from '../components/NumberOfEvents'
import userEvent from '@testing-library/user-event'

describe('<NumberOfEvents /> component', () => {
  test('NumberOfEvents component should contain an element with role "textbox"', () => {
    const { getByRole } = render(<NumberOfEvents />)
    const textboxElement = getByRole('textbox')
    expect(textboxElement).toBeInTheDocument()
  })
  test('NumberOfEvents component should contain an element with role "textbox" and default value of 32', () => {
    const { getByRole } = render(<NumberOfEvents />)
    const textboxElement = getByRole('textbox')
    expect(textboxElement).toBeInTheDocument()
    expect(textboxElement.value).toBe('32')
  })
  test('NumberOfEvents value should change depending on the value a user types in', async () => {
    const { getByRole } = render(<NumberOfEvents />)
    const textboxElement = getByRole('textbox')
    await userEvent.type(textboxElement, '{backspace}{backspace}10')
    expect(textboxElement).toBeInTheDocument()
    expect(textboxElement.value).toBe('10')
  })
  test('NumberOfEvents should alert when not a number is typed in by user', async () => {
    const { getByRole } = render(<NumberOfEvents />)
    const textboxElement = getByRole('textbox')
    window.alert = jest.fn() // Mock the alert function
    await userEvent.type(textboxElement, 'four')
    expect(window.alert).toHaveBeenCalledWith('value is not a number')
  })
  test('NumberOfEvents should alert when value typed in by user is bigger than 50', async () => {
    const { getByRole } = render(<NumberOfEvents />)
    const textboxElement = getByRole('textbox')
    window.alert = jest.fn() // Mock the alert function
    await userEvent.type(textboxElement, '52')
    expect(window.alert).toHaveBeenCalledWith('zero')
  })
})
