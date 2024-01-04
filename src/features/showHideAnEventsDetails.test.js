import { loadFeature, defineFeature } from 'jest-cucumber'
import { render, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, (test) => {
  test('User wants to see more details about an event', ({
    given,
    and,
    when,
    then
  }) => {
    let Appcomponent
    given('the user is on the main page', () => {})
    Appcomponent = render(<App />)
    and('the list of events is displayed', async () => {
      const AppDOM = Appcomponent.container.firstChild
      const EventListDOM = AppDOM.querySelector('#event-list')

      await waitFor(() => {
        const EventlistItems = within(EventListDOM).getAllByRole('article')
        expect(EventlistItems.length).toBe(32)
      })
    })
    when(
      'the user clicks on the "Show Details" button of an event',
      async () => {
        const EventListDOM = Appcomponent.container.querySelector('#event-list')
        const EventDOM = EventListDOM.firstChild
        const ShowDetailsButton = within(EventDOM).getByText('Show details')
        userEvent.click(ShowDetailsButton)
      }
    )
    then('the details of that event should be displayed', async () => {
      const EventListDOM = Appcomponent.container.querySelector('#event-list')
      const EventDOM = EventListDOM.firstChild
      const DetailsDiv = within(EventDOM).getByText('Show details')
      expect(DetailsDiv).toBeInTheDocument()
    })
  })

  test('User wants to hide details of an event', ({ given, when, then }) => {
    let Appcomponent
    let EventListDOM
    let expandedEventElement
    given('the user is viewing the details of an event', async () => {
      Appcomponent = render(<App />)
      const AppDOM = Appcomponent.container.firstChild
      EventListDOM = AppDOM.querySelector('#event-list')

      await waitFor(() => {
        const EventlistItems = within(EventListDOM).getAllByRole('article')
        expect(EventlistItems.length).toBe(32)
      }).then(() => {
        const eventList = Appcomponent.container.querySelector('#event-list') 
        const eventElements = within(eventList).getAllByRole('article')
        const eventButton = within(eventElements[0]).queryByTestId('detailsButton')
        userEvent.click(eventButton)
        expandedEventElement = eventElements[0]
    })
  })
    when('the user clicks on the "Hide details" button', async () => {
      const HideDetailsButton = within(expandedEventElement).getByTestId('detailsButton')
      userEvent.click(HideDetailsButton)
    })

    then('the details of that event should be hidden', () => {
      const details = within(expandedEventElement).queryByTestId('showEventDetails')
      expect(details).not.toBeInTheDocument()
    })
  })
})
