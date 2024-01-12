import React, { useState, useEffect } from 'react'
import CitySearch from './components/CitySearch'
import EventList from './components/EventList'
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alerts'
import NumberOfEvents from './components/NumberOfEvents'
import { extractLocations, getEvents } from './api'
import CityEventsChart from './components/CityEventsChart'
import EventGenresChart from './components/EventGenresChart'
import logo from './img/meet-app-144.png'

const App = () => {
  const [events, setEvents] = useState([])
  const [currentNOE, setCurrentNOE] = useState(32)
  const [allLocations, setAllLocations] = useState([])
  const [currentCity, setCurrentCity] = useState('See all cities')
  const [infoAlert, setInfoAlert] = useState('')
  const [errorAlert, setErrorAlert] = useState('')
  const [warningAlert, setWarningAlert] = useState('')

  const fetchData = async () => {
    const allEvents = await getEvents()
    const filteredEvents =
      currentCity === 'See all cities'
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE))
    setAllLocations(extractLocations(allEvents))
  }
  useEffect(() => {
    let warningText = ''
    if (navigator.onLine) {
      warningText = ''
    } else {
      warningText = 'You are offline, the app is working in offline mode'
    }
    setWarningAlert(warningText)
    fetchData()
  }, [currentCity, currentNOE])

  return (
    <div className='App'>
      <h1 className='page-title'>
        <img src={logo} alt=''></img>Meet App - Flesh Up Your IT-Skills
      </h1>
      {/* <div role='alertdialog' className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div> */}
      <div className='searchContainer'>
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
        <NumberOfEvents
          currentNOE={currentNOE}
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
        <div role='alertdialog' className='info'>
          {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        </div>
      </div>
      <div className='charts-container'>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  )
}

export default App
