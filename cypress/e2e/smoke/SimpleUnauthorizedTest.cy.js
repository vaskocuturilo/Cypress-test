/// <reference types ="cypress"/>

import { loginPage } from "../../support/pages/Login.cy"
import { mainPage } from "../../support/pages/MainPage.cy"

describe('Testing simple unauthorizated.', () => {
  beforeEach(() => {
    cy.visit('/')   
  })

  it.only('Test for unauthorizated Jonas account.', () => {
    loginPage.addCredential('js', '111');
    mainPage.checkAlertMessage();
    })

  it('Test for unauthorizated Jessica account.', () => {
    loginPage.addCredential('jd', '222')
    mainPage.checkAlertMessage();
    })

  it('Test for unauthorizated Tom account.', () => {
    loginPage.addCredential('th', '333')
    mainPage.checkAlertMessage();
    })    
})