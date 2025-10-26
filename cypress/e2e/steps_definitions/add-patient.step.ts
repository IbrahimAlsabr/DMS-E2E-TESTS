import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { AddPatientPage } from '../../support/pageObjects/AddPatientPage';

const addPatientPage = new AddPatientPage();

Given('the doctor is on the dashboard page', () => {
	cy.visit('/doctor-dashboard');

	addPatientPage.clickAddNewPatientButton();
	cy.url().should('include', '/add-new-patient');
});

When('the doctor adds a patient from fixture', () => {
	cy.fixture('add-patient.json').then((addPatient) => {

		cy.intercept('POST', '**/api/v1/doctors/patients').as('addPatient');
		addPatientPage.fillFirstName(addPatient.firstName);
		addPatientPage.fillLastName(addPatient.lastName);
		addPatientPage.fillDateOfBirth(addPatient.dateOfBirth);
		addPatientPage.selectGender(addPatient.gender);
		addPatientPage.selectMaritalStatus(addPatient.maritalStatus);
		addPatientPage.fillPhoneNumber(addPatient.phoneNumber);
		addPatientPage.fillAddress(addPatient.address);
		addPatientPage.fillWork(addPatient.work);

		addPatientPage.clickNextButton();

		addPatientPage.selectBloodType(addPatient.bloodType);
		addPatientPage.selectBloodPressure(addPatient.hasBloodPressure);
		addPatientPage.selectSmoke(addPatient.isSmokeYes);
		addPatientPage.fillNumberOfSmokes(addPatient.numberOfSmokes);
		addPatientPage.selectAlcohol(addPatient.isAlcoholYes);
		addPatientPage.fillDailyDrinks(addPatient.dailyDrinks);
		addPatientPage.fillMedicalHistory(addPatient.medicalHistory);
		addPatientPage.fillAllergies(addPatient.allergies);
		addPatientPage.fillMedications(addPatient.medications);

		addPatientPage.clickSubmitButton();

		cy.wait('@addPatient').then((interception) => {
			expect(interception.response.statusCode).to.equal(200);
		});
	});
});

Then('the patient should be successfully added', () => {

});