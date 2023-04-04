/// <reference types ="cypress"/>

import LoginPage from "./Login.cy"
import MainPage from "./MainPage.cy";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Testing main page for bank account', () => {
  beforeEach(() => {
    cy.visit('/')   
  })
  
  it ('This is simple test for check main page', ()=>{
    mainPage.visit()
    mainPage.checkAllElements()
  })
}) 
