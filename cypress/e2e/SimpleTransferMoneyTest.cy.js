/// <reference types ="cypress"/>

import LoginPage from "./pages/Login.cy"
import MainPage from "./pages/MainPage.cy";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Testingt transfer monet functionality.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for check transfer money from Jonas account', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    mainPage.transferMoney('jd', 50);
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
    
  it.only('This is test for check transfer money from Tom account', () => {
    loginPage.addCredential('th', '3333');
    mainPage.checkWelcomeMessage('Tom');
    mainPage.transferMoney('jd', 50);
    mainPage.checkMovementsBalanceOnMainPage(3)
    mainPage.checkUserMovements('-50,00 ₽','5 000,00 ₽');
    mainPage.checkUserBalance('4 650,00 ₽')  
  })
})
