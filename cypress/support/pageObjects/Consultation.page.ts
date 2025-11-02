export class ConsultationPage {

	// get newComplaintButton() {
	// 	// Wait for app-radio-card to be visible, then find the one containing "شكوى جديدة"
	// 	return cy.get('app-radio-card')
	// 		.should('be.visible')
	// 		.contains('شكوى جديدة')
	// 		.parents('app-radio-card')
	// 		.find('.option-card.clickable')
	// 		.should('be.visible');
	// }

	// clickNewComplaintButton() {
	// 	// The getter already waits for visibility, so just click
	// 	this.newComplaintButton.click();
	// }

	get newComplaintInput() {
		return cy.get('input[type="text"][placeholder="أدخل الشكوى الرئيسية..."]');
	}

	fillNewComplaint(newComplaint: string) {
		this.newComplaintInput.clear();
		this.newComplaintInput.type(newComplaint);
	}

	get historyOfIllnessInput() {
		return cy.get('textarea[placeholder="أدخل القصة المرضية..."]');
	}

	fillHistoryOfIllness(historyOfIllness: string) {
		this.historyOfIllnessInput.clear();
		this.historyOfIllnessInput.type(historyOfIllness);
	}

	get nextButton() {
		return cy.get('app-dotted-pagination').find('button.btn--next');
	}

	clickNextButton() {
		this.nextButton.click();
	}

	get symptomsInput() {
		return cy.get('input.symptoms-input');
	}

	addSymptom(symptom: string) {
		this.symptomsInput.type(`${symptom}{enter}`);
	}

	get noteInput() {
		return cy.get('textarea[placeholder="أضف أي ملاحظات أو تعليقات إضافية..."]');
	}

	fillNote(note: string) {
		this.noteInput.clear();
		this.noteInput.type(note);
	}

	get uploadFilesInput() {
		return cy.get('.upload-section').find('input[type="file"]');
	}

	uploadFiles(filePath: string | string[]) {
		this.uploadFilesInput.selectFile(filePath, { force: true });
	}

	get diagnosisInput() {
		return cy.get('input.symptoms-input[placeholder="أضف علامة تفريقية واضغط Enter"]');
	}

	addDiagnosis(diagnosis: string) {
		this.diagnosisInput.type(`${diagnosis}{enter}`);
	}

	get finalDiagnosisInput() {
		return cy.get('textarea[placeholder="اكتب التشخيص النهائي هنا..."]');
	}

	fillFinalDiagnosis(finalDiagnosis: string) {
		this.finalDiagnosisInput.clear();
		this.finalDiagnosisInput.type(finalDiagnosis);
	}

	get treatmentPlanInput() {
		return cy.get('textarea[placeholder="اكتب خطة العلاج هنا..."]');
	}

	fillTreatmentPlan(treatmentPlan: string) {
		this.treatmentPlanInput.clear();
		this.treatmentPlanInput.type(treatmentPlan);
	}

	get paymentInput() {
		return cy.get('input#positiveNumber');
	}

	fillPayment(amount: number | string) {
		this.paymentInput.clear();
		this.paymentInput.type(String(amount));
	}

	get submitButton() {
		return cy.get('button[type="submit"].primary-btn').contains('حفظ الاستشارة');
	}

	clickSubmitButton() {
		this.submitButton.click();
	}
}