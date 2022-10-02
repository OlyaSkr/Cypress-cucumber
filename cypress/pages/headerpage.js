class Header {
    elements = {
        callUsButton: () => cy.get('[class*="bJzgmA"]'),
        talkToExpertLabel: () => cy.get('[class*="bAWpAF"]>span'),
        callSalesButton: () => cy.get(".NjVuW"),
        supportCenterButton: () => cy.get('[href*="support"].bhdWfo'),
        supportCenterLabel: () => cy.get('[class*="headline"]'),
        logInLink: () => cy.get('.blLdCs[href*="portal.telnyx.com"]'),
        logInLabel: () => cy.get('[data-testid="login.signin.title"]'),
        loginButton: () => cy.get('.bdOBIi>[name="login"]'),
        singleSignOnButton: () => cy.get('button[name="sso"]'),
    };
    callUsButtonClick() {
        this.elements.callUsButton().click();
    }
    supportCenterButtonClick() {
        this.elements.supportCenterButton().click({ force: true });
    }
    logInLinkClick() {
        this.elements.logInLink().click();
    }
    productsMouseHover(position) {
        cy.get(`header div>ul>li:nth-child(${position})>span`, {
            timeout: 30000,
        }).realHover({
            timeout: 30000,
        });
    }
    mouseHoverScreenshot(position) {
        cy.get(`.jgxzDd>li>span :nth-child(1)(${position})`, {
            timeout: 30000,
        }).screenshot(`my-screenshot_${position}`);
    }
}

module.exports = new Header();
