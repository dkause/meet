const NumberOfEvents = (props) => {
  const handleInputChanged = (event) => {
    const value = event.target.value
    if (isNaN(value)) {
      alert('value is not a number')
    } else if ((value) => 50) {
      alert('zero')
    }
  }
  return (
    <div id='number-of-events'>
      <input
        type='text'
        defaultValue={32}
        value={props.numberOfEvents}
        onChange={handleInputChanged}
      />
    </div>
  )
}

export default NumberOfEvents
