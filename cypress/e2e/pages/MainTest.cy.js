/// <reference types ="cypress"/>

import LoginPage from "./Login.cy"
import MainPage from "./MainPage.cy";

const loginObj = new LoginPage();
const mainObj = new MainPage();

describe('Testing main page for bank account', () => {
  beforeEach(() => {
  mainObj.visit()
  mainObj.checkElements()
  }) 

  it('This is test for js account', () => {
    loginObj.addCredential('js', '1111')
    loginObj.checkWelcomeMessage('Jonas')
    loginObj.checkUserBalance('25 952,59 €')
    })

  it('This is test for jd account', () => {
    loginObj.addCredential('jd', '2222')
    loginObj.checkWelcomeMessage('Jessica')
    loginObj.checkUserBalance('$11,720.00')
    })

  it('This is test for th account', () => {
    loginObj.addCredential('th', '3333')
    loginObj.checkWelcomeMessage('Tom')
    loginObj.checkUserBalance('5 000,00 ₽')
    })    
})
