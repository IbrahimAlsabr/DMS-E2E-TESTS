import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorSignupPage } from '../../support/pageObjects/doctor-signup-page';
import { DoctorLoginPage } from '../../support/pageObjects/doctor-login-page';
import { DoctorLogoutPage } from '../../support/pageObjects/doctor-logout-page';

const doctorSignupPage = new DoctorSignupPage();
const doctorLoginPage = new DoctorLoginPage();
const doctorLogoutPage = new DoctorLogoutPage();

// Store credentials for reuse
let storedCredentials: { email: string; password: string } = { email: '', password: '' };

Given('the doctor is on the signup page of the system', () => {
	doctorSignupPage.visit();
});

When('the doctor completes the full registration process with:', (dataTable: any) => {
	
	const rows: Array<{ Field: string; Value: string }> = dataTable.hashes();
	const data: Record<string, string> = rows.reduce((acc: Record<string, string>, row) => {
		acc[row.Field] = row.Value;
		return acc;
	}, {});

	// Store credentials for later use
	storedCredentials.email = data.Email;
	storedCredentials.password = data.Password;

	cy.intercept('POST', '**/api/v1/auth/register/doctor').as('doctorSignup');

	// Step 1: Account credentials
	doctorSignupPage.fillEmail(data.Email);
	doctorSignupPage.fillPassword(data.Password);
	doctorSignupPage.fillConfirmPassword(data['Confirm Password']);
	doctorSignupPage.clickNextButton();

	// Wait for step 2 to load
	doctorSignupPage.firstNameInput.should('be.visible');

	// Step 2: Personal information
	doctorSignupPage.fillFirstName(data['First Name']);
	doctorSignupPage.fillLastName(data['Last Name']);
	doctorSignupPage.selectGender(data.Gender);
	doctorSignupPage.fillDateOfBirth(data['Date of Birth']);
	doctorSignupPage.clickNextButton();

	// Wait for step 3 to load
	doctorSignupPage.phoneNumberInput.should('be.visible');

	// Step 3: Professional information
	doctorSignupPage.selectSpecialty(data.Specialty);
	doctorSignupPage.fillPhoneNumber(data['Phone Number']);
	doctorSignupPage.fillBio(data.Bio);
	doctorSignupPage.clickConditionsAgreementButton();
	doctorSignupPage.clickSubmitButton();

	cy.wait('@doctorSignup', { timeout: 15000 }).then((interception) => {
		expect(interception.response?.statusCode).to.eq(201);
	});
});

Then('the doctor should be successfully registered and redirected to dashboard', () => {
	cy.wait(7000);
	cy.url().should('include', '/doctor-dashboard');
});

When('the doctor logs out of the system', () => {
	doctorLogoutPage.clickLogout();
	doctorLogoutPage.confirmLogoutButton.should('be.visible');
	doctorLogoutPage.clickConfirmLogout();
});

Then('the doctor should be redirected to the login page', () => {
	cy.url().should('include', '/doctor-login');
});

When('the doctor logs back in with the same credentials', () => {
	cy.intercept('POST', '**/api/v1/auth/login').as('doctorLogin');

	doctorLoginPage.fillEmail(storedCredentials.email);
	doctorLoginPage.fillPassword(storedCredentials.password);
	doctorLoginPage.clickLoginButton();

	cy.wait('@doctorLogin', { timeout: 15000 }).then((interception) => {
		expect(interception.response?.statusCode).to.eq(200);
	});
});

Then('the doctor should be successfully authenticated and see the dashboard', () => {
	cy.url().should('include', '/doctor-dashboard');
});
