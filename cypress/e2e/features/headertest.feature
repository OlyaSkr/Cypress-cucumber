Feature: Verify the elements in the header of the Telnyx site

    Background:
        Given I am on the Telnyx page

    Scenario: Call Us button is available for users on the header of the main page
        When I click to accept cookies
        Then I click on the “Call Us” button
        Then I should see a “Talk to an Expert” label
        Then I should see a “Call Sales” button is available for users

    Scenario: Support center button is available for users on the header of the main page
        When I click on the “Support Center” button
        Then I should see a “Support Center” label
        Then I should see a “telnyx.com” in the title of the psge

    Scenario: Log in link is available for users on the header of the main page
        When I click on the “Log in” link
        Then I should see a “Log in” label
        Then I should see a “Login” button
        Then I should see a “Single Sign-On” button
        Then I should see a “portal.telnyx.com” in the title of the psge



