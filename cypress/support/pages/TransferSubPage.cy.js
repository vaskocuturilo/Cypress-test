
export class TransferSubPage {

    elements = {
        transferTo : () => cy.get('.form__input--to'),
        amount : () => cy.get('.form__input--amount'), 
        transferButton : () => cy.get('[class="form__btn form__btn--transfer"]')     
    } 
  
    transferMoney(person, total) {
        this.elements.transferTo().clear().type(person);
        this.elements.amount().clear().type(total);
        this.elements.transferButton().click();
        }    
}


export const transferSubPage = new TransferSubPage();