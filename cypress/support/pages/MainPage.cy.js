export class MainPage {

 elements = {
    title : () => cy.title(),
    userInput: () => cy.get('[placeholder="user"]'),
    passwordInput : () => cy.get('[placeholder="PIN"]').should('be.visible'),
    loginButton: () => cy.get('[class="login__btn"]').should('be.visible'),
    welcomeText : () => cy.get('.welcome'),
    balance : () => cy.get('.balance__value'),
    movements : () => cy.get('.movements', { timeout: 20000 }),
    transferTo : () => cy.get('.form__input--to'),
    amount : () => cy.get('.form__input--amount'), 
    transferButton : () => cy.get('[class="form__btn form__btn--transfer"]')     
} 

checkMainPageElementsBeforeAuthorization() {
    this.elements.welcomeText().should('be.visible').and('contain', 'Log in to get started') 
    this.elements.title().should('eq', 'Bankist');
    this.elements.userInput().should('be.visible');
    this.elements.passwordInput().should('be.visible');
    this.elements.loginButton().should('be.visible');
 }

 checkWelcomeMessage(name) { 
    return this.elements.welcomeText().should('contain', `Welcome back, ${name}`);
}

checkUserBalance(value) {
  return this.elements.balance().should('be.visible').contains(value);
  }

checkUserMovements(deposit, withdrawal) {
  this.elements
  .movements()
  .find('.movements__value').first().invoke('text').should('contain', deposit);

  this.elements
  .movements()
  .find('.movements__value').eq(1).invoke('text').should('contain', withdrawal);
}

checkMovementsBalanceOnMainPage(length) {
  return this.elements
  .movements()
  .find('.movements__row')
  .should('have.length', length);
  }  
}

export const mainPage = new MainPage();