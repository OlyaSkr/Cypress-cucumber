class Base {
    elements = {
        acceptCookiesButton: () => cy.get('[aria-label="close and deny"]~div>div>button'),
    };
    navigate() {
        cy.visit("https://telnyx.com/");
    }
    acceptCookiesButtonClick() {
        this.elements.acceptCookiesButton().click();
    }
}
module.exports = new Base();
