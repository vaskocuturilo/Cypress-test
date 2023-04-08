/// <reference types ="cypress"/>

import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"
import { accountSubPage } from "../../support/pages/AccountSubPage.cy"

describe('Testing close account functionality.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for close account Jonas', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    accountSubPage.closeAccount('js','1111')
    mainPage.checkWelcomeMessage('Jonas');
    })
  
 it('This is test for close account Jessica', () => {
    loginPage.addCredential('jd', '2222');
    mainPage.checkWelcomeMessage('Jessica');
    accountSubPage.closeAccount('jd','2222')
    mainPage.checkWelcomeMessage('Jessica');
    })
    
it('This is test for close account Tom', () => {
    loginPage.addCredential('th', '3333');
    mainPage.checkWelcomeMessage('Tom');
    accountSubPage.closeAccount('th','3333')
    mainPage.checkWelcomeMessage('Tom');
    })
})