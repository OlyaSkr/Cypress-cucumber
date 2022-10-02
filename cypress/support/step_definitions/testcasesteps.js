import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const basePage = require("../../pages/basepage");
const headerPage = require("../../pages/headerpage");
const mainPage = require("../../pages/mainpage");
const resourcesPage = require("../../pages/resourcespage");
const developerDocsPage = require("../../pages/developerdocspage");

Given("I am on the Telnyx page", () => {
    basePage.navigate();
});
When("I click to accept cookies", () => {
    basePage.acceptCookiesButtonClick();
});
Then("I click on the “Call Us” button", () => {
    headerPage.callUsButtonClick();
});
Then("I should see a “Talk to an Expert” label", () => {
    headerPage.elements.talkToExpertLabel().should("be.visible");
});
Then("I should see a “Call Sales” button is available for users", () => {
    headerPage.elements.callSalesButton().should("be.visible");
});
When("I click on the “Support Center” button", () => {
    headerPage.supportCenterButtonClick();
});
Then("I should see a “Support Center” label", () => {
    headerPage.elements.supportCenterLabel().should("be.visible");
});
Then("I should see a “telnyx.com” in the title of the psge", () => {
    cy.url().should("contain", "telnyx.com");
});
When("I click on the “Log in” link", () => {
    headerPage.logInLinkClick();
});
Then("I should see a “Log in” label", () => {
    headerPage.elements.logInLabel().should("be.visible");
});
Then("I should see a “Login” button", () => {
    headerPage.elements.loginButton().should("be.visible");
});
Then("I should see a “Single Sign-On” button", () => {
    headerPage.elements.singleSignOnButton().should("be.visible");
});
Then("I should see a “portal.telnyx.com” in the title of the psge", () => {
    cy.url().should("contain", "portal.telnyx.com");
});
Then("I enter email in the Email input field", () => {
    mainPage.emailInputFieldType("useraccount@gmail.com");
});
Then("I click on the “Try for free” button", () => {
    mainPage.submitButtonClick();
});
Then("I should see a “useraccount@gmail.com” email in the Email input field", () => {
    mainPage.elements.emailInputField().should("have.value", "useraccount@gmail.com");
});
Then("I should see a “sign-up” in the title of the page", () => {
    cy.url().should("contain", "sign-up");
});
When("I scrollIntoView to the “Switch + Save with Telnyx” label", () => {
    mainPage.switchSaveLabelscrollIntoView();
});
Then("I click on the “Create a free account” button", () => {
    mainPage.createFreeTrialAccountClick();
});
Then("I should see a “Create a free account” label", () => {
    mainPage.elements.createFreeAccountLabel().should("be.visible");
});
Then("I should go to the sign up page", () => {
    cy.url().should("eq", "https://telnyx.com/sign-up");
});
When("I scrollIntoView to the “Powerful products” label", () => {
    mainPage.powerfulProductsLabelscrollIntoView();
});
Then("I click on the “Explore our products” link", () => {
    mainPage.exploreOurProductsLinkClick();
});
Then("I should see a “Products” label", () => {
    mainPage.elements.exploreOurProductsLink().should("be.visible");
});
Then("I should see a “products” in the title of the page", () => {
    cy.url().should("contain", "products");
});
Then("I click on the Developers Docs link", () => {
    resourcesPage.developerDocsLinkClick();
});
Then("I should see a “Telnyx API Documentation” label", () => {
    resourcesPage.elements.telnyxApiDocumentationLabel().should("be.visible");
});
Then("I should see a “docs” in the title of the page", () => {
    cy.url().should("contain", "docs");
});
When("I click on the Customer Stories link", () => {
    resourcesPage.customerStoriesClick();
});
Then("I should see a “You’re in good company” label", () => {
    resourcesPage.elements.youAreInAgoodCompaneLabel().should("be.visible");
});
Then("I should see a “customer-stories” in the title of the page", () => {
    cy.url().should("contain", "customer-stories");
});
Then("I should see “Get started” link", () => {
    resourcesPage.elements.getStartedLink().should("be.visible");
});
When("I click on the Blog link", () => {
    resourcesPage.blogClick();
});
Then("I click on the “VERIFY API” in the Filter by product", () => {
    resourcesPage.verifyApiClick();
});
Then("I click on the “Guides & Tutorials” in the Filter by content", () => {
    resourcesPage.guidesTutorialsClick();
});
Then("I should see “VERIFY API” selected Filter by product", () => {
    resourcesPage.elements.verifyApi().invoke("attr", "aria-checked").should("include", "true");
});
Then("I should see “Guides & Tutorials” selected in Filter by content", () => {
    resourcesPage.elements.guidesTutorials().invoke("attr", "aria-checked").should("include", "true");
});
When("I click on the Bring Your Own Carrier link", () => {
    resourcesPage.bringYourOwnCarrierLinkClick();
});
Then("I should see “Try it Free” button", () => {
    cy.contains("Try it Free").should("be.visible");
});
Then("I should see “bring-your-own-carrier” in the title of the site", () => {
    cy.url().should("contain", "bring-your-own-carrier");
});
When("I click on the Mission Control link", () => {
    resourcesPage.missionControlClick();
});
Then("I should see “Mission Control Portal” label", () => {
    resourcesPage.elements.missionControlLabel().should("be.visible");
});
Then("I should see “mission-control” in the title of the site", () => {
    cy.url().should("contain", "mission-control");
});

Then("I should see “twilio-pricing-calculator” in the title of the site", () => {
    cy.url().should("contain", "twilio-pricing-calculator");
});
Then("I click on the Developer Docs link in the Resources menu", () => {
    developerDocsPage.developerDocsLinkClick();
});
Then("I click on the Account link", () => {
    developerDocsPage.accountLinkClick();
});
Then("I click on the “See the Specs” button", () => {
    developerDocsPage.seeTheSpecsButtonClick();
});
Then("I make a screenshot of the page overview", () => {
    developerDocsPage.overviewLabelScreeshot();
});
Then("I click on the Phone Numbers link", () => {
    developerDocsPage.phoneNumbersLinkClick();
});
Then("I click on the “Buy Your First Number” button", () => {
    developerDocsPage.buyYourFirstNumberButtonClick();
});
Then("I make a screenshot of the “Setup Guide”", () => {
    developerDocsPage.setupGuideLinkScreeshot();
});
Then("I click on the WebRTC link", () => {
    developerDocsPage.webRtcLabelclick();
});
Then("I click on the “Setup WebRTC” button", () => {
    developerDocsPage.setupWebRtcButtonClick();
});
Then("I make a screenshot of the “WebRTC Quickstart”", () => {
    developerDocsPage.webRtcQuickstartLabelScreeshot();
});
Then("I click on the Video Rooms link", () => {
    developerDocsPage.videoRoomsLinkClick();
});
Then("I click on the “Checkout our SDKs” button", () => {
    developerDocsPage.checkOutOurSdksButtonClick();
});
Then("I make a screenshot of the “Client SDKs”", () => {
    developerDocsPage.clientSdksLabelScreeshot();
});
