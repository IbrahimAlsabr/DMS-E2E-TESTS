import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorSignupPage } from '../../support/pageObjects/SignupPage';
import { DoctorLoginPage } from '../../support/pageObjects/LoginPage';

const doctorSignupPage = new DoctorSignupPage();
const doctorLoginPage = new DoctorLoginPage();


Given('the doctor is on the signup page', () => {
	doctorSignupPage.visit();
});

When('the doctor completes the full registration process from fixture', () => {

	cy.fixture('doctor.json').then((doctor) => {
		cy.intercept('POST', '**/api/v1/auth/register/doctor').as('doctorSignup');

		cy.clearCookies();
		cy.clearLocalStorage();

		// Step 1: Account credentials
		doctorSignupPage.fillEmail(doctor.email);
		doctorSignupPage.fillPassword(doctor.password);
		doctorSignupPage.fillConfirmPassword(doctor.confirmPassword);
		doctorSignupPage.clickNextButton();

		// Wait for step 2 to load
		doctorSignupPage.firstNameInput.should('be.visible');

		// Step 2: Personal information
		doctorSignupPage.fillFirstName(doctor.firstName);
		doctorSignupPage.fillLastName(doctor.lastName);
		doctorSignupPage.selectGender(doctor.gender);
		doctorSignupPage.fillDateOfBirth(doctor.dateOfBirth);
		doctorSignupPage.clickNextButton();

		// Wait for step 3 to load
		doctorSignupPage.phoneNumberInput.should('be.visible');

		// Step 3: Professional information
		doctorSignupPage.selectSpecialty(doctor.specialty);
		doctorSignupPage.fillPhoneNumber(doctor.phoneNumber);
		doctorSignupPage.fillBio(doctor.bio);
		doctorSignupPage.clickConditionsAgreementButton();
		doctorSignupPage.clickSubmitButton();

		cy.wait('@doctorSignup', { timeout: 15000 }).then((interception) => {
			expect(interception.response?.statusCode).to.eq(201);
		});
	});
});

Then('the doctor should be successfully registered and redirected to dashboard', () => {
	cy.wait(7000);
	cy.url().should('include', '/doctor-dashboard');
});