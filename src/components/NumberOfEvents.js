import { useState } from 'react'

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    console.log('<NumberOfEvents/>', event.target.value)
    const value = event.target.value
    setCurrentNOE(value)
    if (isNaN(value)) {
      alert('value is not a number')
    } else if (Number(value) === 0) {
      alert('zero')
    } else if (Number(value) > 50) {
      alert('value is bigger as 50')
    }
  }
  return (
    <div id='number-of-events'>
      <input
        id='number-of-events-input'
        data-testid='event-number-input'
        type='text'
        value={currentNOE}
        onChange={handleInputChanged}
      />
    </div>
  )
}

export default NumberOfEvents
