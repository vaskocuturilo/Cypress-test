/// <reference types ="cypress"/>

import { mainPage } from "../../support/pages/MainPage.cy"

describe('Testing main page for application bank account', () => {
  beforeEach(() => {
    cy.visit('/')   
  })
  
  it ('This is simple test for check main page', ()=> {
    mainPage.checkMainPageElementsBeforeAuthorization()
  })
}) 
