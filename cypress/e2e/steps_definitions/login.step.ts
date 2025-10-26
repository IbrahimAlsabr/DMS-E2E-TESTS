import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorLoginPage } from '../../support/pageObjects/LoginPage';

const doctorLoginPage = new DoctorLoginPage();

When('the doctor logs back in with stored credentials', () => {
	
	cy.visit('/doctor-login');
	cy.url().should('include', '/doctor-login');
	
	cy.fixture('doctor.json').then((doctor) => {

		cy.intercept('POST', '**/api/v1/auth/login').as('doctorLogin');

		doctorLoginPage.fillEmail(doctor.email);
		doctorLoginPage.fillPassword(doctor.password);
		doctorLoginPage.clickLoginButton();

		cy.wait('@doctorLogin', { timeout: 15000 }).then((interception) => {
			expect(interception.response?.statusCode).to.eq(200);
		});
	});
});

Then('the doctor should be successfully authenticated and see the dashboard', () => {
	cy.url().should('include', '/doctor-dashboard');
});