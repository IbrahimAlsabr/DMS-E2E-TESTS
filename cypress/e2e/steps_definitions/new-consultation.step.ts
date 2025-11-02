import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ConsultationPage } from '../../support/pageObjects/Consultation.page';

const consultationPage = new ConsultationPage();

Given('the doctor is on the new consultation page', () => {
	// cy.visit('/new-consultation');

	// consultationPage.clickNewComplaintButton();
	cy.url().should('include', '/new-consultation');
});

When('the doctor adds a new consultation from fixture', () => {
	cy.fixture('new-consultation.json').then((consultation) => {
		// Intercept the actual API endpoint: /api/v1/patients/{patientId}/medical-cases
		cy.intercept('POST', '**/api/v1/patients/*/medical-cases').as('addConsultation');

		consultationPage.fillNewComplaint(consultation.newComplaint);
		consultationPage.fillHistoryOfIllness(consultation.historyOfIllness);
		consultationPage.clickNextButton();

		consultationPage.addSymptom(consultation.symptoms[0]);
		consultationPage.addSymptom(consultation.symptoms[1]);
		consultationPage.addSymptom(consultation.symptoms[2]);

		consultationPage.fillNote(consultation.note);
		consultationPage.uploadFiles(consultation.uploadFiles);
		consultationPage.clickNextButton();

		consultationPage.addDiagnosis(consultation.diagnosis);
		consultationPage.fillFinalDiagnosis(consultation.finalDiagnosis);
		consultationPage.fillTreatmentPlan(consultation.treatmentPlan);
		consultationPage.clickNextButton();
		consultationPage.clickNextButton();

		consultationPage.fillPayment(consultation.payment);
		consultationPage.clickNextButton();

		consultationPage.clickSubmitButton();

		cy.wait(3000);

	});
});

Then('the consultation should be successfully added', () => {
	cy.wait('@addConsultation', { timeout: 15000 }).then((interception) => {
		console.log('Interception:', interception);

		if (interception.response?.statusCode !== 200) {
			// Log the error response for debugging
			cy.log('API Error Response:', JSON.stringify(interception.response?.body, null, 2));
			cy.log('Request Body:', JSON.stringify(interception.request?.body, null, 2));
		}
		expect(interception.response?.statusCode).to.equal(200);
	});
});