import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorLogoutPage } from '../../support/pageObjects/doctor-logout-page';
import { DoctorLoginPage } from '../../support/pageObjects/doctor-login-page';

const doctorLogoutPage = new DoctorLogoutPage();
const doctorLoginPage = new DoctorLoginPage();

Given('the doctor is logged in', () => {
	doctorLoginPage.visit();
	doctorLoginPage.fillEmail('doctor@dms.com');
	doctorLoginPage.fillPassword('Qwerty123!');
	doctorLoginPage.clickLoginButton();
	cy.url().should('include', '/doctor-dashboard');
});

When('doctor clicks on the logout button in the sidebar', () => {
	doctorLogoutPage.clickLogout();
});

Then('doctor should see the confirm logout button', () => {
	doctorLogoutPage.confirmLogoutButton.should('be.visible');
});

When('doctor clicks on the confirm logout button', () => {
	doctorLogoutPage.clickConfirmLogout();
});

Then('doctor should see the login page after logout', () => {
	cy.url().should('include', '/doctor-login');
});