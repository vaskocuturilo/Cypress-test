/// <reference types ="cypress"/>

Cypress.Commands.add('login', (username, password, name) => {
  cy.visit('/')
  cy.get('[placeholder="user"]').type(username)
  cy.get('[placeholder="PIN"]').type(password)
  cy.get('[class="login__btn"]').click()
  cy.get('[class="welcome"]').should('contain', `Welcome back, ${name}`)
})

describe('Testing main page for http://test-engineer.online/', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'Bankist')
    cy.get('[placeholder="user"]').should('be.visible');
    cy.get('[placeholder="PIN"]').should('be.visible');
    cy.get('[class="login__btn"]').should('be.visible');
   })

   it('This is test for js account', () => {
    cy.login('js', '1111','Jonas')
    
    cy.get('.balance__value')
    .should('be.visible')
    .contains('25 952,59 €')
  })

  it('This is test for jd account', () => {
    cy.login('jd', '2222','Jessica')
    
    cy.get('.balance__value')
    .should('be.visible')
    .contains('$11,720.00')
  })

  it('This is test for jd account', () => {
    cy.login('jd', '2222','Jessica')
    
    cy.get('.balance__value')
    .should('be.visible')
    .contains('$11,720.00')
  })

})
