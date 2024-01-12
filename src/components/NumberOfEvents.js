
const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value
    setCurrentNOE(value)
    let errorText =''
    if (isNaN(value)) {
      errorText = 'Please enter a number'
    } else if (Number(value) === 0) {
      errorText = 'Please enter at least "1", so we can display at least one event'
    } else if (Number(value) > 50) {
      errorText = 'We can only display 50 events at once, please enter a value less 50'
    }
    setErrorAlert(errorText)
  }
  return (
    <div id='number-of-events' className="numberOfEvents">
        
      <label for='number-of-events-input'>Events to display:</label>
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
