export class PatientsPage {
	get searchInput() {
		return cy.get('input[type="search"]');
	}

	get firstPatient() {
		return cy.get('app-patient-overview').first();
	}

	get newConsultationButtonForPatient() {
		return cy.get('app-patient-overview').first()
			.find('span:contains("استشارة جديدة")')
			.parent('button');
	}

	get showPatientDetailsButton() {
		return cy.get('app-patient-overview').first()
			.find('span:contains("عرض")')
			.parent('button');
	}
	
	clickShowPatientDetailsButton() {
		this.showPatientDetailsButton.click();
	}

	visit() {
		cy.visit('/doctor-patients');
	}

	fillSearch(search: string) {
		this.searchInput.clear();
		this.searchInput.type(search);
	}

	clickNewConsultationButtonForPatient() {
		this.newConsultationButtonForPatient.click();
	}

	get menuIcon() {
		return cy.get('app-patient-overview').first()
			.find('mat-icon.mat-mdc-menu-trigger');
	}

	clickMenuIcon() {
		this.menuIcon.click();
	}

	get deletePatientButton() {
		return cy.get('button.mat-mdc-menu-item').contains('حذف المريض');
	}

	clickDeletePatientButton() {
		this.deletePatientButton.click();
	}

	get confirmDeletePatientButton() {
		return cy.get('button.confirm-btn').contains('حذف نهائياً');
	}

	clickConfirmDeletePatientButton() {
		this.confirmDeletePatientButton.click();
	}
}