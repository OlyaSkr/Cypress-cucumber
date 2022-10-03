class DeveloperDocs {
    elements = {
        accountLink: () => cy.get(".fsStYO>div>a:nth-child(2)>span"),
        seeTheSpecsButton: () => cy.get('[href="/docs/api/v2/account"]'),
        overviewLabel: () => cy.get(".eFmwRr>span"),
        phoneNumbersLink: () => cy.get(".fsStYO>div>a:nth-child(5)>span"),
        buyYourFirstNumberButton: () => cy.get(".hhNmHu"),
        setupGuideLink: () => cy.get('[id="setup-guide"]'),
        webRtcLabel: () => cy.get(".fsStYO>div>a:nth-child(10)>span"),
        setupWebRtcButton: () => cy.get('.fkNdTQ[href*="webrtc/quickstart"]'),
        webRtcQuickstartLabel: () => cy.get('[id="webrtc-quickstart"]'),
        videoRoomsLink: () => cy.get(".fsStYO>div>a:nth-child(11)>span"),
        checkOutOurSdksButton: () => cy.get('[href*="/basic-concepts#client-sdks"]'),
        clientSdksLabel: () => cy.get('[id="client-sdks"]'),
    };
    developerDocsLinkClick() {
        cy.contains("Developer Docs").click({ force: true });
    }
    accountLinkClick() {
        this.elements.accountLink().click();
    }
    seeTheSpecsButtonClick() {
        this.elements.seeTheSpecsButton().click();
    }
    overviewLabelScreeshot() {
        this.elements.overviewLabel().screenshot("overview-screenshot");
    }
    phoneNumbersLinkClick() {
        this.elements.phoneNumbersLink().click({ force: true });
    }
    buyYourFirstNumberButtonClick() {
        this.elements.buyYourFirstNumberButton().click();
    }
    setupGuideLinkScreeshot() {
        this.elements.setupGuideLink().screenshot("setupguide-screenshot");
    }
    webRtcLabelclick() {
        this.elements.webRtcLabel().click({ force: true });
    }
    setupWebRtcButtonClick() {
        this.elements.setupWebRtcButton().click({ force: true });
    }
    webRtcQuickstartLabelScreeshot() {
        this.elements.webRtcQuickstartLabel().screenshot("webrtcquickstart-screenshot");
    }
    videoRoomsLinkClick() {
        this.elements.videoRoomsLink().click({ force: true });
    }
    checkOutOurSdksButtonClick() {
        this.elements.checkOutOurSdksButton().click({ force: true });
    }
    clientSdksLabelScreeshot() {
        this.elements.clientSdksLabel().screenshot("clientsdks-screenshot");
    }
}
module.exports = new DeveloperDocs();
