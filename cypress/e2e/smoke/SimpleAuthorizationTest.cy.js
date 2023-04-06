/// <reference types ="cypress"/>

import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"

describe('Testing main page for bank account', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for check account Jonas', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    mainPage.checkUserBalance('993,50 €');
    })

  it('This is test for check account Jessica', () => {
    loginPage.addCredential('jd', '2222')
    mainPage.checkWelcomeMessage('Jessica')
    mainPage.checkUserBalance('$4,850')
    })

  it('This is test for check account Tom', () => {
    loginPage.addCredential('th', '3333')
    mainPage.checkWelcomeMessage('Tom')
    mainPage.checkUserBalance('4 700,00 ₽')
    })    
})
