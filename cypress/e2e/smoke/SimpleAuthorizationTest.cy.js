/// <reference types ="cypress"/>

import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"

describe('Testing simple authorization.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('Test for Jonas account.', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    mainPage.checkUserBalance('993,50 €');
    })

  it('Test for Jessica account.', () => {
    loginPage.addCredential('jd', '2222')
    mainPage.checkWelcomeMessage('Jessica')
    mainPage.checkUserBalance('$4,850')
    })

  it('Test for Tom account.', () => {
    loginPage.addCredential('th', '3333')
    mainPage.checkWelcomeMessage('Tom')
    mainPage.checkUserBalance('4 700,00 ₽')
    })    
})
