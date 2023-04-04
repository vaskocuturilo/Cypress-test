/// <reference types ="cypress"/>

import LoginPage from "./Login.cy"
import MainPage from "./MainPage.cy";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Testing main page for bank account', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for check account Jonas', () => {
    loginPage.addCredential('js', '1111')
    mainPage.checkWelcomeMessage('Jonas')
    mainPage.checkUserBalance('993,50 €')
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
