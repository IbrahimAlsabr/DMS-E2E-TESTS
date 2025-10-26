import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorLogoutPage } from '../../support/pageObjects/LogoutPage';

const doctorLogoutPage = new DoctorLogoutPage();

When('the doctor logs out of the system', () => {
	doctorLogoutPage.clickLogout();
	doctorLogoutPage.confirmLogoutButton.should('be.visible');
	doctorLogoutPage.clickConfirmLogout();
});

Then('the doctor should be redirected to the login page', () => {
	cy.url().should('include', '/doctor-login');
});
