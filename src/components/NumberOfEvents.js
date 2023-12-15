const NumberOfEvents = (props) => {
    const handleInputChanged = (event) => {
        const value = event.target.value
    }
    return (
        <div id="number-of-events">
            <input
                type="text"
                defaultValue={32}
                value={props.numberOfEvents}
                onChange={handleInputChanged}
            />
        </div>
    )
}
export default NumberOfEvents;  