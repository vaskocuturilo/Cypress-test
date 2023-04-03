class LoginPage {

  elements  = {
    usernameInput : () => cy.get('[placeholder="user"]'),
    passwordInput : () => cy.get('[placeholder="PIN"]'),
    loginButton : () => cy.get('[class="login__btn"]')
  }

  enterUsername(username) {
    this.elements.usernameInput().type(username)
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password)
  }

  tapLoginButton() {
    this.elements.loginButton().click()
  }

  addCredential(username, password) {
   this.enterUsername(username)
   this.enterPassword(password)
   this.tapLoginButton()
  }
}

export default LoginPage;