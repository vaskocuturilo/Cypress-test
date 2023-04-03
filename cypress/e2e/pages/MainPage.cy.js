class MainPage {

 elements = {

    title : () => cy.title(),
    userInput: () => cy.get('[placeholder="user"]'),
    passwordInput : () => cy.get('[placeholder="PIN"]').should('be.visible'),
    loginButton: () => cy.get('[class="login__btn"]').should('be.visible'),
    welcomeText : () => cy.get('[class="welcome"]'),
    balance : () => cy.get('.balance__value')  
} 

visit() {
  cy.visit("/")
}

checkAllElements() {
    this.elements.title().should('eq', 'Bankist');
    this.elements.userInput().should('be.visible');
    this.elements.passwordInput().should('be.visible');
    this.elements.loginButton().should('be.visible');
 }

 checkWelcomeMessage(name) { 
    return this.elements.welcomeText().should('contain', `Welcome back, ${name}`)
}

checkUserBalance(value) {
  return this.elements.balance().should('be.visible').contains(value)
}
}

export default MainPage;