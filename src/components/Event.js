import { useState } from 'react'

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleButtonClick = () => {
    setShowDetails(!showDetails) // !showDetails means the opposite of showDetails it toogles the state
  }

  return (
    <li id='summary'>
      <h2>{event.summary}</h2>
      <div>{event.created}</div>
      <div>{event.location}</div>
      <button className='detailsButton' onClick={handleButtonClick}>
        {showDetails ? 'Hide details' : 'Show details'} {/* Toogle the button text */}
      </button>
      {showDetails ? (
        <div className='showEventDetails'>This is the details div</div>
      ) : null}
    </li>
  )
}
export default Event
// can you please write me a function which displays a div depending on its state?
