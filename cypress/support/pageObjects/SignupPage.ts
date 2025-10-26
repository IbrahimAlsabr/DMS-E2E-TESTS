export class DoctorSignupPage {

	get emailInput() {
		return cy.get('input[type="email"]');
	}

	get passwordInput() {
		return cy.get('input[type="password"]').eq(0);
	}

	get confirmPasswordInput() {
		return cy.get('input[type="password"]').eq(1);
	}

	get nextButton() {
		return cy.get('button[type="button"]:contains("التالي")');
	}

	get firstNameInput() {
		return cy.get('input[type="text"]').eq(0);
	}

	get lastNameInput() {
		return cy.get('input[type="text"]').eq(2);
	}

	get genderInput() {
		return cy.get('select').eq(0);
	}

	get dateOfBirthInput() {
		return cy.get('input[type="date"]').eq(0);
	}

	get phoneNumberInput() {
		return cy.get('input[type="tel"]').eq(0);
	}

	get bioInput() {
		return cy.get('textarea').eq(0);
	}

	get conditionsAgreementButton() {
		return cy.get('input[type="checkbox"]').eq(0);
	}

	get specialtyInput() {
		return cy.get('select').eq(0);
	}

	selectSpecialty(valueOrLabel: string) {
		this.specialtyInput.select(valueOrLabel, { force: true });
	}

	clickConditionsAgreementButton() {
		this.conditionsAgreementButton.check({ force: true });
	}

	fillBio(bio: string) {
		this.bioInput.type(bio);
	}

	fillPhoneNumber(phoneNumber: string) {
		this.phoneNumberInput.type(phoneNumber);
	}

	selectGender(valueOrLabel: string) {
		// Cypress select supports value or visible text
		this.genderInput.select(valueOrLabel, { force: true });
	}

	fillDateOfBirth(dateOfBirth: string) {
		this.dateOfBirthInput.type(dateOfBirth);
	}

	visit() {
		cy.clearLocalStorage();
		cy.visit('/doctor-signup');
	}

	fillEmail(email: string) {
		this.emailInput.clear();
		this.emailInput.type(email);
	}

	fillPassword(password: string) {
		this.passwordInput.clear();
		this.passwordInput.type(password);
	}

	fillConfirmPassword(confirmPassword: string) {
		this.confirmPasswordInput.clear();
		this.confirmPasswordInput.type(confirmPassword);
	}

	clickNextButton() {
		this.nextButton.click();
	}

	fillFirstName(firstName: string) {
		this.firstNameInput.type(firstName);
	}

	fillLastName(lastName: string) {
		this.lastNameInput.type(lastName);
	}

	get submitButton() {
		return cy.get('button[type="button"]:contains("إنشاء الحساب")');
	}

	clickSubmitButton() {
		this.submitButton.click();
	}

}