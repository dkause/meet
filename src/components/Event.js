import { useState } from 'react'

export const formatDate = (dateString) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const timeOptions = { hour: '2-digit', minute: '2-digit' }
  const date = new Date(dateString)
  return `${date.toLocaleDateString(
    undefined,
    dateOptions
  )} ${date.toLocaleTimeString(undefined, timeOptions)}`
}

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleButtonClick = () => {
    setShowDetails(!showDetails)
  }

  return (
    <article id='summary' data-testid='event-list'>
      <h2>{event.summary}</h2>
      <p>{formatDate(event.created)}</p>
      <p>{event.location}</p>

      <button className='detailsButton' onClick={handleButtonClick}>
        {showDetails ? 'Hide details' : 'Show details'}{' '}
      </button>
      {showDetails ? (
        <div className='showEventDetails'>This is the details div</div>
      ) : null}
    </article>
  )
}
export default Event
