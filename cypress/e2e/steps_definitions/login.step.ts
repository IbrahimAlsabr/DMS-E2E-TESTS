import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorLoginPage } from '../../support/pageObjects/doctor-login-page';

const doctorLoginPage = new DoctorLoginPage();

Given('the doctor is on the login page', () => {
	doctorLoginPage.visit();
});

When("the doctor enters email {string} and password {string}", (email: string, password: string) => {
	doctorLoginPage.fillEmail(email);
	doctorLoginPage.fillPassword(password);
});

When("clicks on the login button", () => {
	doctorLoginPage.clickLoginButton();
});

Then("the doctor should see the dashboard page", () => {
	cy.url().should('include', '/doctor-dashboard');
});

Then("the doctor should see the error message {string}", (errorMessage: string) => {
	doctorLoginPage.errorMessage.should('be.visible').and('contain.text', errorMessage);
});