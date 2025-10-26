export class AddPatientPage {

	get addNewPatientButton() {
		// More robust selector for the "Add New Patient" button
		return cy.get('button.primary-btn:contains("مريض جديد")');
	}

	get firstNameInput() {
		return cy.get('input[type="text"]').eq(0);
	}

	get lastNameInput() {
		return cy.get('input[type="text"]').eq(1);
	}

	get dateOfBirthInput() {
		return cy.get('input[type="date"]').eq(0);
	}

	get genderInput() {
		return cy.get('select').eq(0);
	}

	get maritalStatusInput() {
		return cy.get('select').eq(1);
	}

	get phoneNumberInput() {
		return cy.get('input[type="tel"]').eq(0);
	}

	get addressInput() {
		return cy.get('input[type="text"]').eq(2);
	}

	get workInput() {
		return cy.get('input[type="text"]').eq(3);
	}

	get nextButton() {
		return cy.get('button[type="button"]:contains("التالي")');
	}

	get bloodTypeInput() {
		return cy.get('select').eq(0);
	}

	get bloodPressureInput() {
		return cy.get('select').eq(1);
	}

	// Smoking radio buttons - select by value
	get smokeYesInput() {
		return cy.get('input[name="smoke"][value="YES"]');
	}

	get smokeNoInput() {
		return cy.get('input[name="smoke"][value="NO"]');
	}

	get numberOfSmokesInput() {
		return cy.get('input[type="text"]').eq(0);
	}

	get alcoholYesInput() {
		return cy.get('input[name="alcohol"][value="YES"]');
	}

	get alcoholNoInput() {
		return cy.get('input[name="alcohol"][value="NO"]');
	}

	get dailyDrinksInput() {
		return cy.get('input[type="text"]').eq(1);
	}

	get medicalHistoryInput() {
		return cy.get('textarea').eq(0);
	}

	get allergiesInput() {
		return cy.get('textarea').eq(1);
	}

	get medicationsInput() {
		return cy.get('textarea').eq(2);
	}

	get submitButton() {
		return cy.get('button[type="submit"]');
	}

	clickAddNewPatientButton() {
		this.addNewPatientButton.click();
	}

	fillFirstName(firstName: string) {
		this.firstNameInput.type(firstName);
	}

	fillLastName(lastName: string) {
		this.lastNameInput.type(lastName);
	}

	fillDateOfBirth(dateOfBirth: string) {
		this.dateOfBirthInput.type(dateOfBirth);
	}

	selectGender(gender: string) {
		this.genderInput.select(gender);
	}

	selectMaritalStatus(maritalStatus: string) {
		this.maritalStatusInput.select(maritalStatus);
	}

	fillPhoneNumber(phoneNumber: string) {
		this.phoneNumberInput.type(phoneNumber);
	}

	fillAddress(address: string) {
		this.addressInput.type(address);
	}

	fillWork(work: string) {
		this.workInput.type(work);
	}

	clickNextButton() {
		this.nextButton.click();
	}

	selectBloodType(bloodType: string) {
		this.bloodTypeInput.select(bloodType);
	}

	selectBloodPressure(hasBloodPressure: string) {
		if (hasBloodPressure === 'نعم') {
			this.bloodPressureInput.select('نعم');
		} else {
			this.bloodPressureInput.select('لا');
		}
	}

	selectSmoke(isSmokeYes: string) {
		if (isSmokeYes === 'Yes') {
			this.smokeYesInput.check({ force: true });
		} else {
			this.smokeNoInput.check({ force: true });
		}
	}

	fillNumberOfSmokes(numberOfSmokes: string) {
		this.numberOfSmokesInput.type(numberOfSmokes);
	}

	selectAlcohol(isAlcoholYes: string) {
		if (isAlcoholYes === 'Yes') {
			this.alcoholYesInput.check({ force: true });
		} else {
			this.alcoholNoInput.check({ force: true });
		}
	}

	fillDailyDrinks(dailyDrinks: string) {
		this.dailyDrinksInput.type(dailyDrinks);
	}

	fillMedicalHistory(medicalHistory: string) {
		this.medicalHistoryInput.type(medicalHistory);
	}

	fillAllergies(allergies: string) {
		this.allergiesInput.type(allergies);
	}

	fillMedications(medications: string) {
		this.medicationsInput.type(medications);
	}

	clickSubmitButton() {
		this.submitButton.click();
	}
}