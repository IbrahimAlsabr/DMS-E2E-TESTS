import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { PatientDetailsPage } from "../../support/pageObjects/Patient-details.page";

const patientDetailsPage = new PatientDetailsPage();

When('the doctor clicks on the cancel appointment button', () => {
	cy.intercept('PUT', '**/api/v1/doctors/appointments/*/status').as('cancelAppointment');

	patientDetailsPage.clickMenuSatus();
	patientDetailsPage.clickCancelAppointmentButton();
	patientDetailsPage.clickConfirmCancelAppointmentButton();

});

Then('the appointment should be successfully cancelled', () => {
	cy.wait('@cancelAppointment', { timeout: 10000 }).then((interception) => {
		expect(interception.response?.statusCode).to.equal(200);
	});
});

When('the doctor clicks on the invoices section and then clicks on the download invoice button', () => {
	patientDetailsPage.clickInvoicesSection();
	patientDetailsPage.clickDownloadInvoiceButton();
});
Then('the pdf file should be downloaded', () => {
	cy.wait(6000);

	cy.task('readDir', 'cypress/downloads').then((files: string[]) => {
		const pdfFiles = files.filter((file: string) => file.endsWith('.pdf'));
		expect(pdfFiles.length).to.be.greaterThan(0);
	});
});