class Main {
    elements = {
        emailInputField: () => cy.get('[type="email"]'),
        submitButton: () => cy.get('[type="submit"]'),
        createFreeAccountLabel: () => cy.get(".gjiitA"),
        switchSaveLabel: () => cy.get('h2 [href*="/sign-up"]>span'),
        createFreeTrialAccount: () => cy.get(' [href*="telnyx.com/sign-up"].sc-5d3a275a-4'),
        createFreeAccountLabel: () => cy.get("h1.gkWopw"),
        powerfulProductsLabel: () => cy.get(".iwfftK>div>header>h2"),
        exploreOurProductsLink: () => cy.get('[href="/products"][class*= "eUnEoi"]'),
        productsLabel: () => cy.get(".juvWNo"),
    };
    emailInputFieldType(email) {
        this.elements.emailInputField().type(email);
    }
    submitButtonClick() {
        this.elements.submitButton().click();
    }
    switchSaveLabelscrollIntoView() {
        this.elements.switchSaveLabel().scrollIntoView();
    }
    createFreeTrialAccountClick() {
        this.elements.createFreeTrialAccount().click();
    }
    powerfulProductsLabelscrollIntoView() {
        this.elements.powerfulProductsLabel().scrollIntoView();
    }
    exploreOurProductsLinkClick() {
        this.elements.exploreOurProductsLink().click();
    }
}
module.exports = new Main();
