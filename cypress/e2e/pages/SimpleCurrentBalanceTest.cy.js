/// <reference types ="cypress"/>

import LoginPage from "./Login.cy"
import MainPage from "./MainPage.cy";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Testing main page for bank account', () => {
  beforeEach(() => {
    mainPage.visit('/')
  })

  it('This is test for js account', () => {
    loginPage.addCredential('js', '1111')
    mainPage.checkWelcomeMessage('Jonas')
    mainPage.checkUserBalance('25 952,59 €')
    mainPage.checkMovementsBalanceOnMainPage(8)
    })

  it('This is test for jd account', () => {
    loginPage.addCredential('jd', '2222')
    mainPage.checkWelcomeMessage('Jessica')
    mainPage.checkUserBalance('$11,720.00')
    mainPage.checkMovementsBalanceOnMainPage(8)
    })

  it('This is test for th account', () => {
    loginPage.addCredential('th', '3333')
    mainPage.checkWelcomeMessage('Tom')
    mainPage.checkUserBalance('5 000,00 ₽')
    mainPage.checkMovementsBalanceOnMainPage(1)
    })    
})
