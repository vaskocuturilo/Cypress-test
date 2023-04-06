/// <reference types ="cypress"/>
import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"
import { transferSubPage } from "../../support/pages/TransferSubPage.cy"

describe('Testingt transfer money functionality.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it.only('This is test for check transfer money from Jonas account', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    transferSubPage.transferMoney('jd', 50);
    mainPage.checkMovementsBalanceOnMainPage(3)
    mainPage.checkUserMovements('-50,00 €', '1300,00 €');
    mainPage.checkUserBalance('943,50 €')
    })

  it('This is test for check transfer money from Jessica account', () => {
    loginPage.addCredential('jd', '2222');
    mainPage.checkWelcomeMessage('Jessica');
    mainPage.transferMoney('js', 50);
    mainPage.checkMovementsBalanceOnMainPage(3)
    mainPage.checkUserMovements('-$50.00', '$5,000.00');
    mainPage.checkUserBalance('$4,800.00')
    })
    
  it('This is test for check transfer money from Tom account', () => {
    loginPage.addCredential('th', '3333');
    mainPage.checkWelcomeMessage('Tom');
    mainPage.transferMoney('jd', 50);
    mainPage.checkMovementsBalanceOnMainPage(3)
    mainPage.checkUserMovements('-50,00 ₽','5 000,00 ₽');
    mainPage.checkUserBalance('4 650,00 ₽')  
  })
})
