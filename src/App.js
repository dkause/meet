// This code imports necessary dependencies and components for a React application related to searching and displaying events. It also imports functions for extracting locations and retrieving events from an API.
import React, { useState, useEffect } from 'react'
import CitySearch from './components/CitySearch'
import EventList from './components/EventList'
import NumberOfEvents from './components/NumberOfEvents'
import { extractLocations, getEvents } from './api'

const App = () => {
  const [events, setEvents] = useState([])
  const [currentNOE, setCurrentNOE] = useState(32)
  const [allLocations, setAllLocations] = useState([])
  const [currentCity, setCurrentCity] = useState('See all cities')
  
  const fetchData = async () => {
    const allEvents = await getEvents()
    const filteredEvents = currentCity === 'See all cities' ? allEvents : allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE))
    setAllLocations(extractLocations(allEvents)) 
  }
  useEffect(() => {
    fetchData()
  }, [currentCity, currentNOE])
  console.log('<App /> currentNOE', currentNOE)
  return (
    <div className='App'>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE}/>
      <EventList events={events} />
    </div>
  )
}

export default App
