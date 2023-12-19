// Two functions: 1. extract locations and remove duplicates, 2. getEvents which will return the list of all events
import mockData from './mock-data'

/**
 * @param {*} events:
 * The following functions should be in the "api.js" file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will remove all dubs by creating a new array using the spread operator and spreading a Set
 * The Set will remove all duplicates from the array
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location)
  const locations = [...new Set(extractedLocations)]
  return locations
}
const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
  const result = await response.json()
  return result
}
const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code)
    const response = await fetch(
      'https://q9pfpy8nih.execute-api.eu-central-1.amazonaws.com/dev/api/token' +
        '/' +
        encodeCode
    )
    if (!response.ok) {
      throw new Error(`http Error! status: ${response.status}`)
    }
    const { access_token } = await response.json()
    access_token && localStorage.setItem('access_token', access_token)
    return access_token
  } catch (error) {
    error.json()
  }
}

const removeQuery = () => {
  let newurl
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.history.pushState('', '', newurl)
  } else {
    newurl = window.location.protocol + '//' + window.location.host
    window.history.pushState('', '', newurl)
  }
}
export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData
  }
  const token = await getAccessToken()
  if (token) {
    removeQuery()
    const url =
      'https://q9pfpy8nih.execute-api.eu-central-1.amazonaws.com/dev/api/get-events' +
      '/' +
      token
    const response = await fetch(url)
    const result = await response.json()
    if (result) {
      return result.events
    } else return null
  }
}
export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token')
  const tokenCheck = accessToken && (await checkToken(accessToken))

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token')
    const searchParams = new URLSearchParams(window.location.search)
    const code = await searchParams.get('code')
    if (!code) {
      const response = await fetch(
        'https://q9pfpy8nih.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
      )
      const result = await response.json()
      const { authUrl } = result
      return (window.location.href = authUrl)
    }
    return code && getAccessToken(code)
  }
  return accessToken
}
