export class PatientDetailsPage {

	get menuSatus() {
		return cy.get('app-menu-status .status-badge');
	}

	clickMenuSatus() {
		this.menuSatus.click();
	}

	get cancelAppointmentButton() {
		return cy.get('.status-badge.cancelled').contains('ملغى');
	}

	clickCancelAppointmentButton() {
		this.cancelAppointmentButton.click();
	}

	get confirmCancelAppointmentButton() {
		return cy.get('button.confirm-btn').contains('إلغاء');
	}

	clickConfirmCancelAppointmentButton() {
		this.confirmCancelAppointmentButton.click();
	}

	get invoicesSection() {
		return cy.get('a').contains('الفواتير');
	}

	clickInvoicesSection() {
		this.invoicesSection.click();
	}

	get downloadInvoiceButton() {
		// Find the download invoice button by its title attribute
		return cy.get('mat-icon[title="تحميل الفاتورة"]').first();
	}

	clickDownloadInvoiceButton() {
		this.downloadInvoiceButton.click();
	}
}