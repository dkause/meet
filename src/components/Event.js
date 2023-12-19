import { useState } from 'react'

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false)
  // Thanks Copilot
  const formatDate = (dateString) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const timeOptions = { hour: '2-digit', minute: '2-digit' }
    const date = new Date(dateString)
    return `${date.toLocaleDateString(
      undefined,
      dateOptions
    )} ${date.toLocaleTimeString(undefined, timeOptions)}`
  }

  const handleButtonClick = () => {
    setShowDetails(!showDetails) // !showDetails means the opposite of showDetails it toogles the state
  }

  return (
    <article id='summary'>
      <header>
        <h2>{event.summary}</h2>
        <div>{formatDate(event.created)}</div>
        <div>{event.location}</div>
      </header>

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
