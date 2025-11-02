
import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import { TakeAppointmentPage } from '../../support/pageObjects/TakeAppointment.page';

const takeAppointmentPage = new TakeAppointmentPage();


Given('the doctor is on the available appointments page', () => {
	takeAppointmentPage.visit();
});

When('the doctor takes an appointment', () => {

	cy.fixture('add-patient.json').then((patient) => {
		cy.intercept('POST', '**/api/v1/doctors/appointments').as('takeAppointment');
		takeAppointmentPage.clickFirstAvailableAppointment();

		takeAppointmentPage.fillSearch(patient.lastName);
		takeAppointmentPage.clickFirstPatientContainsTheName(patient.lastName);
		takeAppointmentPage.clickSaveButton();
	});
});

Then('the appointment should be successfully taken', () => {
	cy.wait('@takeAppointment', { timeout: 10000 }).then((interception) => {
		expect(interception.response?.statusCode).to.equal(200);
	});
});
