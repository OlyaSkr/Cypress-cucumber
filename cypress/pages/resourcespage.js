class Resources {
    elements = {
        developerDocsLink: () => cy.get("div:nth-child(1)>a>span"),
        telnyxApiDocumentationLabel: () => cy.get('[id*="api-v2"]'),
        youAreInAgoodCompaneLabel: () => cy.get(".fMtsmY>div>header>p"),
        getStartedLink: () => cy.get(".bgmPIp>div>a"),
        verifyApi: () => cy.get("div:nth-child(1)>ul>li:nth-child(2)>button"),
        guidesTutorials: () => cy.get("div:nth-child(2)>ul>li:nth-child(2)>button"),
        missionControlLabel: () => cy.get(".sc-473c7edd-9>span"),
    };
    developerDocsLinkClick() {
        cy.contains("Developer Docs").click({ force: true });
    }
    customerStoriesClick() {
        cy.contains("Customer Stories").click({ force: true });
    }
    blogClick() {
        cy.contains("Blog").click({ force: true });
    }
    verifyApiClick() {
        this.elements.verifyApi().click();
    }
    guidesTutorialsClick() {
        this.elements.guidesTutorials().click();
    }
    bringYourOwnCarrierLinkClick() {
        cy.contains("Bring Your Own Carrier").click({ force: true });
    }
    missionControlClick() {
        cy.contains("Mission Control").click({ force: true });
    }
}
module.exports = new Resources();
