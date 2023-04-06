/// <reference types ="cypress"/>

import LoginPage from "./Login.cy"
import MainPage from "./MainPage.cy";
import RequestSubPage from "./RequestLoanSubPage.cy"

const loginPage = new LoginPage();
const mainPage = new MainPage();
const requestSubPage = new RequestSubPage();

describe('Testing request loan functionality', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for check request loan for accout Jonas', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    requestSubPage.verifyRequestLoanSubPage();
    requestSubPage.requestLoan(100);
    mainPage.checkUserMovements('100,00 €','1300,00 €');
  })

  it('This is test for check request loan for accout Jessica', () => {
    loginPage.addCredential('jd', '2222');
    mainPage.checkWelcomeMessage('Jessica');
    requestSubPage.verifyRequestLoanSubPage();
    requestSubPage.requestLoan(200);
    mainPage.checkUserMovements('$200.00', '$5,000.00');
    })
})
