import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import { PatientsPage } from '../../support/pageObjects/Patients.page';

const patientsPage = new PatientsPage();


Given('the doctor is on the patients page', () => {
	cy.visit('/doctor-patients');
});

When('the doctor searches for the patient by name', () => {
	cy.fixture('add-patient.json').then((addPatient) => {
		patientsPage.fillSearch(addPatient.lastName);
	});
});

Then('the doctor should see the patient in the list', () => {
	patientsPage.firstPatient.should('be.visible');
});

When('the doctor clicks on the new consultation button for the patient', () => {
	patientsPage.clickNewConsultationButtonForPatient();
});

Then('the doctor should see the new consultation page', () => {
	cy.url().should('include', '/new-consultation');
});

// view patient details
When('the doctor clicks on the show patient details button', () => {
	patientsPage.visit();
	patientsPage.clickShowPatientDetailsButton();
});

Then('the doctor should see the patient details page', () => {
	cy.url().should('include', '/doctor-patient-details');
});



When('the doctor clicks on the menu icon for the patient', () => {
	patientsPage.clickMenuIcon();
});

Then('the doctor should see the menu options', () => {
	patientsPage.deletePatientButton.should('be.visible');
});

When('the doctor clicks on the delete patient button', () => {
	// Intercept the delete patient API call
	cy.intercept('DELETE', '**/api/v1/doctors/patients/*').as('deletePatient');

	patientsPage.clickDeletePatientButton();
	patientsPage.confirmDeletePatientButton.should('be.visible');
	patientsPage.clickConfirmDeletePatientButton();
});

Then('the patient should be successfully deleted', () => {

	cy.wait('@deletePatient', { timeout: 10000 }).then((interception) => {
		expect(interception.response?.statusCode).to.equal(200);
	});
	cy.reload();
});