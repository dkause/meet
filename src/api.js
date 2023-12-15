// Two functions: 1. extract locations and remove duplicates, 2. getEvents which will return the list of all events
import mockData from "./mock-data";

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
export const getEvents = async () => {
    return mockData
}