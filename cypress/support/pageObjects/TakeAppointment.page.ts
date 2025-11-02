export class TakeAppointmentPage {

	 visit() {
		cy.visit('/doctor-available-appointments');
	}

	get firstAvailableAppointment() {
		return cy.get('.slot-container')
			.find('span.slot-status.available')
			.contains('متاح')
			.parents('button')
			.first();
	}

	clickFirstAvailableAppointment() {
		this.firstAvailableAppointment.click();
	}

	get searchInput() {
		return cy.get('input[type="search"][placeholder="ابحث عن مريض بالاسم أو رقم الهاتف..."]');
	}

	fillSearch(searchTerm: string) {
		this.searchInput.clear();
		this.searchInput.type(searchTerm);
	}

	firstPatientContainsTheName(name: string) {
		return cy.get('app-patient-card')
			.contains('h4', name, { matchCase: false })
			.parents('app-patient-card')
			.first();
	}

	clickFirstPatientContainsTheName(name: string) {
		this.firstPatientContainsTheName(name).click();
	}

	get saveButton() {
		return cy.get('button.primary-btn').contains('حفظ الموعد');
	}

	clickSaveButton() {
		this.saveButton.click();
	}

}