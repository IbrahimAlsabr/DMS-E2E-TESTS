import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the doctor has finished the account lifecycle', () => {
	cy.url().should('include', '/doctor-dashboard');
});

When('the doctor deletes the account', () => {
	cy.window().its('localStorage').then((localStorage) => {
		const token = localStorage.getItem('token') ||
			localStorage.getItem('authToken') ||
			localStorage.getItem('accessToken');

		cy.request({
			method: 'DELETE',
			url: 'https://api.tiryaq.online/api/v1/auth/delete',
			headers: {
				...(token && { 'Authorization': `Bearer ${token}` }),
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			expect(response.status).to.eq(200);

			localStorage.removeItem('token');
			localStorage.removeItem('authToken');
			localStorage.removeItem('accessToken');

			cy.reload();

			// cy.visit('/doctor-login');
			cy.url().should('include', '/doctor-login');
		});
	});
});

Then('the doctor should be successfully deleted', () => {
	cy.url().should('include', '/doctor-login');
});