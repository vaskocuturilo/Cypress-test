export class AccountSubPage {

    elements = {
        closeAccountSubPage : () => cy.get('.operation--close'),
        confirmUserField : () => cy.get('.form--close [type="text"]'),   
        confirmPinField : () => cy.get('.form--close [type="password"]'),
        confirmButton : () => cy.get('.form--close button'),

    } 


    verifyCloseAccountSubPage() {
        this.elements.closeAccountSubPage().should('be.visible');
        this.elements.closeAccountSubPage().contains('Close account').should((elem) => {
          expect(elem.text()).to.equal('Close account');
        });
      }  


    closeAccount(username, pin) {
     this.elements.confirmUserField().clear().type(username);
     this.elements.confirmPinField().clear().type(pin);
     this.elements.confirmButton().click();
    }
}

export const accountSubPage = new AccountSubPage();