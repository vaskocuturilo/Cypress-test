export class SummarySubPage {
    elements = {
        sortButton : () => cy.get('.btn--sort')
    }
    
    tapSortButton() {
        this.elements.sortButton().should('be.visible');
        this.elements.sortButton().click();

    }
}

export const onSummarySubPage = new SummarySubPage();