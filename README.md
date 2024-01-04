# 🥩 MeetApp
presents location based it-events  
## Key Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Short cut to the Home Screen.
- Display Charts Visualizing Event Details

## Feature: Filter Events by City

As a **user**,  
I should be able to **filter events by city**  
So that **I can see a list of events taking place in the city**  
SCENARIO 1  
User filters events by city

- **Given** the user opened the events app  
- **When** they select the option to filter by city and they enter the name of   the city  
- **Then** events from that city will be displayed to them


## Feature: Show/Hide Event Details

As a **user**,  
I should be able to **view details of the events**  
So that **I can see what is taking place in the event**  

***Scenario: User views events details***

- **Given** the user was on the events page  
- **When** the user selects the city "CityName" from the filter options  
- **Then** the events displayed should be filtered to show only those in "CityName"  


## Feature: Specify Number of Events  

As a **user**,  
I should be able to **specify the number of events**  
So that **I can control how many events are showb in the list**  

***Scenario: User specifies the number of events***

- **Given** the user was on the event apps home screen  
- **When** the user navigates to settings or options  
- and enters the specified number of events to display  
- **Then** the app should confirm the changes to the numner  
and display the specified number of events


## Feature: Filter Events by City (ChatGPT helped until the end)

As a **user**,  
I should be able **filter events by city**  
So that **I can see a list of events taking place in the city**

***Scenario: User filtered events by city***

- **Given** the user was on the events app home screen
And there are events available in different cities
- **When** the user navigates to the events filter section
And selects the option to filter events by city
And chooses the desired city as "{city}"
And applies the filter
- **Then** the app will display only the events that are taking place in the selected city
And the user will see a clear indication that the events are filtered by city


## Feature: Use the App offline

As a **user**,  
I should be able to **use the app offline**  
So that **I can search cities and view events without connection**

***Scenario: User rides subway with no connection and uses the app***

- **Given** the user has the app installed on their device
And the user is about to ride the subway with no internet connection
- **When** the user opens the app
And attempts to browse events or access app features
- **Then** the app should provide a notification or indication that it's offline
And the user should still be able to view previously loaded data or cached content

### Feature: add a app shortcut on the home screen

As a **user**,  
I should be able to **add a shortcut to the home screen**  
So that **I can access the app fast and easy from the homescreen**  

***Scenario: User adds a shortcut for the app on their home screen***

- **Given** the app is installed on the user's device  
And the user is on the device's home screen  
- **When** the user performs an action to add a shortcut for the app  
- **Then** a shortcut icon for the app should appear on the home screen  

### Feature: Visualize the events data

As a **user**,  
I should be able to **display charts visualizing event details**  
So that **I can assess the events content fast at a glimpse**

***Scenario: User wants to visualize the events data in charts and tables***

- **Given** the user is using the events app  
And there is events data available for visualization  
- **When** the user navigates to the data visualization section  
And selects the option to view events data in charts and tables  
- **Then** the app should display visual representations such as charts and tables for the events data And the user should have the ability to interact with and customize the visualizations

## Why ServerLess for  🥩 Meet

- scalable  
We start with very few users
- cost effective  
no permanent server cost  
- industry standard  
good practise to use
- easy to deploy  
I can focus on Code, no server configuration or maintanance needed

## Flowdiagram

```mermaid
sequenceDiagram;
MeetApp->>AWS Lambda: Authentication
AWS Lambda->>OAuth: User?
OAuth->>AWS Lambda: Yes 
AWS Lambda->>MeetApp: Redirect for consent 
MeetApp->>OAuth: User grants consent
destroy OAuth 
OAuth->>AWS Lambda: Token
MeetApp->>AWS Lambda: Request
AWS Lambda->>GoogleCal: Request
GoogleCal->>AWS Lambda: Response
AWS Lambda->>MeetApp: Response
