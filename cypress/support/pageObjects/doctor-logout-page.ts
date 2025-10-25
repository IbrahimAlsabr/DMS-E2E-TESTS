export class DoctorLogoutPage {
	get logoutButton() {
		return cy.get('li.logout-item > a.logout-link').contains('تسجيل الخروج');
	}

	get confirmLogoutButton() {
		return cy.get('button.btn.confirm-btn').contains('تسجيل الخروج');
	}

	clickLogout() {
		this.logoutButton.click({ force: true });
	}

	clickConfirmLogout() {
		this.confirmLogoutButton.click({ force: true });
	}
}