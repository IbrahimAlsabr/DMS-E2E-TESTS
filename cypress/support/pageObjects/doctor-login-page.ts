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
		cy.visit('/doctor-login');
	}

	fillEmail(email: string) {
		this.emailInput.type(email);
	}

	fillPassword(password: string) {
		this.passwordInput.type(password);
	}

	clickLoginButton() {
		this.loginButton.click();
	}



}