const NumberOfEvents = (props) => {
  const handleInputChanged = (event) => {
    const value = event.target.value
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
        type='text'
        defaultValue={32}
        value={props.numberOfEvents}
        onChange={handleInputChanged}
      />
    </div>
  )
}

export default NumberOfEvents