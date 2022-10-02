Feature: Verify the elements on the main page of the Telnyx site

    Background:
        Given I am on the Telnyx page

    Scenario: Verify the email form on the main page
        When I click to accept cookies
        Then I enter email in the Email input field
        Then I click on the “Try for free” button
        Then I should see a “useraccount@gmail.com” email in the Email input field
        Then I should see a “sign-up” in the title of the page

    Scenario: Verify Explore our products link on the main page
        When I scrollIntoView to the “Switch + Save with Telnyx” label
        Then I click on the “Create a free account” button
        Then I should see a “Create a free account” label
        Then I should go to the sign up page

    Scenario: Verify Create a free trial account link on the main page
        When I scrollIntoView to the “Powerful products” label
        Then I click on the “Explore our products” link
        Then I should see a “Products” label
        Then I should see a “products” in the title of the page