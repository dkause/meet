Feature: Specify Number of Events

    As a user,
    I want to specify the number of events,
    So that I can control how many events are shown in the list.

    Scenario: User specifies the number of events
        Given the user is on the event app's home screen
        When the user specifies the number of events to display
        Then the app should display the specified number of events
    
    Scenario: User does not specify the number of events, default of 32 is used 
        Given the user is on the event app's home screen
        When the user does not enter a number of events to display
        Then the app should display 32 events