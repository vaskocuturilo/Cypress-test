class LoginPage {
      addCredential(username, password) {
        cy.get('[placeholder="user"]').first().type(username)
        cy.get('[placeholder="PIN"]').first().type(password)
        cy.get('[class="login__btn"]').click();
      }

      checkWelcomeMessage(name) {
        return cy.get('[class="welcome"]').should('contain', `Welcome back, ${name}`)
      }

      checkUserBalance(value) {
        return cy.get('.balance__value').should('be.visible').contains(value)
      }
}

export default LoginPage;