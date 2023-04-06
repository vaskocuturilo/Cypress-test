export class LoanSubPage {
    elements = {
        loanSubPage: () => cy.get('.operation--loan'),
        loanField : () => cy.get('.operation--loan [type="number"]'),
        loadButton : () => cy.get('.operation--loan button')
      } 

      verifyRequestLoanSubPage() {
        this.elements.loanSubPage().should('be.visible');
        this.elements.loanSubPage().contains('Request loan').should((elem) => {
          expect(elem.text()).to.equal('Request loan');
        });
      }  

      requestLoan(amount) {
        this.elements.loanField().clear().type(amount);
        this.elements.loadButton().click();
      }  
}

export const loanSubPage = new LoanSubPage();