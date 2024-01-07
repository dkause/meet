import React, { useState, useEffect } from 'react'

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleInputChanged = (event) => {
    const value = event.target.value
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1
        })
      : []
    setQuery(value)
    setSuggestions(filteredLocations)

    // infotext für infoAlert
    let infoText
    if (filteredLocations.length === 0) {
      infoText = 'We cannot find the city you are looking for, try another city'
    } else {
      infoText = ''
    }
    setInfoAlert(infoText)
  }

  const handleItemClicked = (event) => {
    const value = event.target.textContent
    setQuery(value)
    setShowSuggestions(false)
    setCurrentCity(value)
    setInfoAlert('') // sets infoalert empty when user clicks on 'See all cities'
  }
  useEffect(() => {
    setSuggestions(allLocations)
  }, [`${allLocations}`])
  return (
    <div id='city-search'>
      <input
        data-testid='city-search'
        type='text'
        className='city'
        placeholder='Search for a city'
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className='suggestions'>
          {suggestions.map((suggestion) => {
            return (
              <li onClick={handleItemClicked} key={suggestion}>
                {suggestion}
              </li>
            )
          })}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  )
}
export default CitySearch
