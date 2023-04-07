/// <reference types ="cypress"/>

import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"
import { loanSubPage } from "../../support/pages/LoanSubPage.cy"
import { onSummarySubPage } from "../../support/pages/SummarySubPage.cy"

describe('Testing sort functionality on the main page for bank account application.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it('This is test for check sort functionality account Jonas.', () => {
    loginPage.addCredential('js', '1111');
    mainPage.checkWelcomeMessage('Jonas');
    loanSubPage.requestLoan(200);
    loanSubPage.requestLoan(1000);
    mainPage.checkUserMovements('1000,00 €','200,00 €');
    onSummarySubPage.tapSortButton(); 
    mainPage.checkUserMovements('1300,00 €','1000,00 €');

    })

 it('This is test for check sort functionality account Jessica.', () => {
    loginPage.addCredential('jd', '2222');
    mainPage.checkWelcomeMessage('Jessica');
    loanSubPage.requestLoan(200);
    loanSubPage.requestLoan(1000);
    mainPage.checkUserMovements('$1,000.00','$200.00');
    onSummarySubPage.tapSortButton(); 
    mainPage.checkUserMovements('$5,000.00','$1,000.00');

    })
})