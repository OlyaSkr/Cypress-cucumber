Feature: Verify the Resources drop-menu items on the Telnyx site

  Background:
    Given I am on the Telnyx page

  Scenario: Verify the Developer Docs link in the Resources drop-menu
    When I click to accept cookies
    Then I click on the Developers Docs link
    Then I should see a “Telnyx API Documentation” label
    Then I should see a “docs” in the title of the page

  Scenario: Verify the Customer Stories link in the Resources drop-menu
    When I click on the Customer Stories link
    Then I should see a “You’re in good company” label
    Then I should see a “customer-stories” in the title of the page
    Then I should see “Get started” link

  Scenario: Verify the search filters when you click on the blog link in the Resources drop-menu
    When I click on the Blog link
    Then I click on the “VERIFY API” in the Filter by product
    Then I click on the “Guides & Tutorials” in the Filter by content
    Then I should see “VERIFY API” selected Filter by product
    Then I should see “Guides & Tutorials” selected in Filter by content

  Scenario: Verify Bring Your Own Carrier link in the Resources drop-menu
    When I click on the Bring Your Own Carrier link
    Then I should see “Try it Free” button
    Then I should see “bring-your-own-carrier” in the title of the site

  Scenario: Verify Mission Control link in the Resources drop-menu
    When I click on the Mission Control link
    Then I should see “Mission Control Portal” label
    Then I should see “mission-control” in the title of the site


