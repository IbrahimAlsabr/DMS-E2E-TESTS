import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DoctorSignupPage } from '../../support/pageObjects/doctor-signup-page';

const doctorSignupPage = new DoctorSignupPage();

Given('the doctor is on the signup page', () => {
	doctorSignupPage.visit();
});

When("the doctor enters email {string} and password {string} and confirm password {string}", (email: string, password: string, confirmPassword: string) => {
	doctorSignupPage.fillEmail(email);
	doctorSignupPage.fillPassword(password);
	doctorSignupPage.fillConfirmPassword(confirmPassword);
});

When("clicks on the next button after entering email and password and confirm password", () => {
	doctorSignupPage.clickNextButton();
});

Then("the doctor should see the next step after entering email and password and confirm password", () => {
	// Assert on a field that only exists in step 2 to avoid hidden label issues
	doctorSignupPage.firstNameInput.should('be.visible');
});

When("the doctor enters first name {string} and last name {string} and selects the gender {string} and selects the date of birth {string}", (firstName: string, lastName: string, gender: string, dateOfBirth: string) => {
	doctorSignupPage.fillFirstName(firstName);
	doctorSignupPage.fillLastName(lastName);
	doctorSignupPage.selectGender(gender);
	doctorSignupPage.fillDateOfBirth(dateOfBirth);
});

When("clicks on the next button", () => {
	doctorSignupPage.clickNextButton();
});

Then("the doctor should see the next step", () => {
	doctorSignupPage.phoneNumberInput.should('be.visible');
});

When(/^the doctor selects the specialty "([^"]+)" and enters (?:the )?phone number "([^"]+)" and writes the bio "([^"]+)" and clicks on the condtions agreement button$/, (specialty: string, phoneNumber: string, bio: string) => {
	doctorSignupPage.selectSpecialty(specialty);
	doctorSignupPage.fillPhoneNumber(phoneNumber);
	doctorSignupPage.fillBio(bio);
	doctorSignupPage.clickConditionsAgreementButton();
});

When("clicks on the submit button", () => {
	doctorSignupPage.clickSubmitButton();
});

Then("the doctor should see the success message {string}", (successMessage: string) => {
	cy.contains(successMessage).should('be.visible');
});