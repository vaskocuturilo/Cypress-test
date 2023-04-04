/// <reference types ="cypress"/>

import LoginPage from "./Login.cy"
import MainPage from "./MainPage.cy";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Testing main page for bank account', () => {
  beforeEach(() => {
    mainPage.visit('/')
  })

  it('This is test for check account Jonas, check balance and movements', () => {
    loginPage.addCredential('js', '1111')
    mainPage.checkWelcomeMessage('Jonas')
    mainPage.checkUserBalance('993,50 €')
    mainPage.checkUserMovements('1300,00 €', '-306,50 €')
    mainPage.checkMovementsBalanceOnMainPage(2)
    })

  it('This is test for check account Jessica, check balance and movements', () => {
    loginPage.addCredential('jd', '2222')
    mainPage.checkWelcomeMessage('Jessica')
    mainPage.checkUserBalance('$4,850')
    mainPage.checkUserMovements('$5,000.00','-$150.00')
    mainPage.checkMovementsBalanceOnMainPage(2)
    })

  it('This is test for check account Tom, check balance and movements', () => {
    loginPage.addCredential('th', '3333')
    mainPage.checkWelcomeMessage('Tom')
    mainPage.checkUserBalance('4 700,00 ₽')
    mainPage.checkUserMovements('5 000,00 ₽', '-300,00 ₽')
    mainPage.checkMovementsBalanceOnMainPage(2)
    })    
})
