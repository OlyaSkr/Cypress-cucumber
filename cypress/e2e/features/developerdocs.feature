Feature: Verify the elements in the Developer Docs of the Telnyx site

    Background:
        Given I am on the Telnyx page

    Scenario: Verify the Account link and see the specs in Developer Docs menu
        When I click to accept cookies
        Then I click on the Developer Docs link in the Resources menu
        Then I click on the Account link
        Then I click on the “See the Specs” button
        Then I make a screenshot of the page overview

    Scenario: Verify the Phone Numbers link and make a screenshot in Developer Docs menu
        When I click on the Developer Docs link in the Resources menu
        Then I click on the Phone Numbers link
        Then I click on the “Buy Your First Number” button
        Then I make a screenshot of the “Setup Guide”

    Scenario: Verify the WebRTC link and make a screenshot in Developer Docs menu
        When I click on the Developer Docs link in the Resources menu
        Then I click on the WebRTC link
        Then I click on the “Setup WebRTC” button
        Then I make a screenshot of the “WebRTC Quickstart”

    Scenario: Verify the Video Rooms link and make a screenshot in Developer Docs menu
        When I click on the Developer Docs link in the Resources menu
        Then I click on the Video Rooms link
        Then I click on the “Checkout our SDKs” button
        Then I make a screenshot of the “Client SDKs”