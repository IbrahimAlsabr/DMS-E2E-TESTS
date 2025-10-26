export class DoctorLoginPage {

	get emailInput() {
		return cy.get('input[type="email"]');
	}

	get passwordInput() {
		return cy.get('input[type="password"]');
	}

	get loginButton() {
		return cy.get('button[type="submit"]');
	}

	get errorMessage() {
		return cy.get('div.auth-error');
	}

	visit() {
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.visit('/doctor-login');
	}

	fillEmail(email: string) {
		this.emailInput.clear();
		this.emailInput.type(email);
	}

	fillPassword(password: string) {
		this.passwordInput.clear();
		this.passwordInput.type(password);
	}

	clickLoginButton() {
		this.loginButton.click();
	}
}