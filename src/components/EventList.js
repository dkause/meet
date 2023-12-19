import Event from './Event'

const EventList = ({ events }) => {
  return (
    <div role='list' className='grid' id='event-list'>
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </div>
  )
}

export default EventList
