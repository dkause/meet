import { loadFeature, defineFeature } from 'jest-cucumber'
import { render, fireEvent, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import NumberOfEvents from '../components/NumberOfEvents.js'

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')

defineFeature(feature, (test) => {
  test('User specifies the number of events', ({ given, when, then }) => {
    const setCurrentNOE = jest.fn()
    const setErrorAlert = jest.fn()
    const { getByRole } = render(
      <NumberOfEvents
        currentNOE={[]}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
    )
    const textboxElement = getByRole('textbox')
    given("the user is on the event app's home screen", () => {
      userEvent.clear(textboxElement)
    })

    when('the user specifies the number of events to display', async () => {
      await fireEvent.change(textboxElement, { target: { value: '10' } })
    })

    then('the app should display the specified number of events', () => {
      expect(setCurrentNOE).toHaveBeenCalledWith('10')
    })
  })

  test('User does not specify the number of events, default of 32 is used', ({
    given,
    when,
    then
  }) => {
    let AppComponent
    let AppDOM
    let EventlistItems
    given("the user is on the event app's home screen", async () => {
      AppComponent = render(<App />)
      AppDOM = AppComponent.container.firstChild
      const EventListDOM = AppDOM.querySelector('#event-list')

      await waitFor(() => {
        EventlistItems = within(EventListDOM).getAllByRole('article')
      })
    })

    when('the user does not enter a number of events to display', () => {})

    then('the app should display 32 events', () => {
      expect(EventlistItems.length).toBe(32)
    })
  })
})
