export class LoginPage {

  elements  = {
    usernameInput : () => cy.get('[placeholder="user"]'),
    passwordInput : () => cy.get('[placeholder="PIN"]'),
    loginButton : () => cy.get('[class="login__btn"]')
  }

  enterUsername(username) {
    this.elements
    .usernameInput()
    .clear()
    .type(username);

    return this;
  }

  enterPassword(password) {
    this.elements
    .passwordInput()
    .clear()
    .type(password);

    return this;
  }

  tapLoginButton() {
    this.elements
    .loginButton()
    .click();

    return this;
  }

  addCredential(username, password) {
   this.enterUsername(username);
   this.enterPassword(password);
   this.tapLoginButton();

   return this;
  }
}

export const loginPage = new LoginPage();