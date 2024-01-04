Feature: Show/Hide Events Details
    As a user
    I want to be able to show and hide details of events
    So that I can view more information about an event when I need to and hide it when I don't

    Scenario: User wants to see more details about an event
        Given the user is on the main page
        And the list of events is displayed
        When the user clicks on the "Show details" button of an event
        Then the details of that event should be displayed

    Scenario: User wants to hide details of an event
        Given the user is viewing the details of an event
        When the user clicks on the "Hide details" button
        Then the details of that event should be hidden