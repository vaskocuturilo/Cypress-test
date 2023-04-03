class MainPage {
    visit() {
        cy.visit("/")
      }

    checkElements(){
        cy.title().should('eq', 'Bankist')
        cy.get('[placeholder="user"]').should('be.visible');
        cy.get('[placeholder="PIN"]').should('be.visible');
        cy.get('[class="login__btn"]').should('be.visible');
       
    }
}

export default MainPage;