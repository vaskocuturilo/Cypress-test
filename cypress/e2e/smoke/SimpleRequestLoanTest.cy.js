/// <reference types ="cypress"/>

import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"
import { loanSubPage } from "../../support/pages/LoanSubPage.cy"

describe('Testing request loan functionality', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for check request loan for accout Jonas', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    loanSubPage.verifyRequestLoanSubPage();
    loanSubPage.requestLoan(100);
    mainPage.checkUserMovements('100,00 €','1300,00 €');
  })

  it('This is test for check request loan for accout Jessica', () => {
    loginPage.addCredential('jd', '2222');
    mainPage.checkWelcomeMessage('Jessica');
    loanSubPage.verifyRequestLoanSubPage();
    loanSubPage.requestLoan(200);
    mainPage.checkUserMovements('$200.00', '$5,000.00');
    })
})
