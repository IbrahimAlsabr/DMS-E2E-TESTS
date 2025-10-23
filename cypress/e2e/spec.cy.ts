import { DoctorLoginPage } from '../support/pageObjects/doctor-login-page';

describe('Tiryaq E2E Tests', () => {
	const doctorLoginPage = new DoctorLoginPage();

	beforeEach(() => {
		doctorLoginPage.visit();
	});


	describe('Doctor Login Form UI', () => {
		it('should display email input field with correct placeholder', () => {
			doctorLoginPage.emailInput
				.should('be.visible')
				.and('have.attr', 'placeholder', 'doctor@example.com');
		});

		it('should display password input field with correct placeholder', () => {
			doctorLoginPage.passwordInput
				.should('be.visible')
				.and('have.attr', 'placeholder', 'أدخل كلمة المرور');
		});

		it('should have a disabled login button by default', () => {
			doctorLoginPage.loginButton
				.should('be.visible')
				.and('contain.text', 'تسجيل الدخول')
				.and('have.attr', 'disabled');
		});
	});

	describe('Doctor Login Form Validation', () => {
		it('should allow typing in email and password fields', () => {
			doctorLoginPage.fillEmail('test@example.com')
			doctorLoginPage.emailInput.should('have.value', 'test@example.com');
			doctorLoginPage.fillPassword('testpassword');
			doctorLoginPage.passwordInput.should('have.value', 'testpassword');
		});

		it('should validate invalid email format', () => {
			doctorLoginPage.fillEmail('invalid-email');
			doctorLoginPage.emailInput.blur();
			doctorLoginPage.emailInput.should('have.class', 'error');
		});

		it('should show error message for short password', () => {
			doctorLoginPage.fillPassword('short');
			doctorLoginPage.passwordInput.blur();
			cy.get('span.error-message').should('be.visible')
				.and('contain.text', 'يجب أن تحتوي كلمة المرور على الأقل 6 أحرف');
		});
	});

	describe('Doctor Login Functionality', () => {
		it('should enable login button after filling valid fields', () => {
			doctorLoginPage.fillEmail('test@example.com');
			doctorLoginPage.fillPassword('testpassword');
			doctorLoginPage.loginButton.should('not.have.attr', 'disabled');
		});

		it('should show error message for invalid credentials', () => {
			doctorLoginPage.fillEmail('test@example.com');
			doctorLoginPage.fillPassword('wrongpassword');
			doctorLoginPage.clickLoginButton();

			doctorLoginPage.errorMessage.should('be.visible')
				.should('contain.text', 'Registration failed: Bad credentials');
		});

		it('should navigate to dashboard after successful login', () => {
			doctorLoginPage.fillEmail('doctor@dms.com');
			doctorLoginPage.fillPassword('Qwerty123!');
			doctorLoginPage.clickLoginButton();

			cy.url().should('include', '/doctor-dashboard');
		});
	});
});
