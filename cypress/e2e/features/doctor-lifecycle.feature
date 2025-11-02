Feature: Doctor Account Lifecycle Management
	As a healthcare professional
	I want to create an account, log out, and log back in
	So that I can securely access the medical system

	Scenario: Complete doctor account lifecycle

		# Signup
		Given the doctor is on the signup page
		When the doctor completes the full registration process from fixture
		Then the doctor should be successfully registered and redirected to dashboard

		# Add patient
		Given the doctor is on the dashboard page
		When the doctor adds a patient from fixture
		Then the patient should be successfully added

		# search for the patient
		Given the doctor is on the patients page
		When the doctor searches for the patient by name
		Then the doctor should see the patient in the list

		# add new consultation
		Given the doctor is on the patients page
		When the doctor clicks on the new consultation button for the patient
		Then the doctor should see the new consultation page

		# add new consultation
		Given the doctor is on the new consultation page
		When the doctor adds a new consultation from fixture
		Then the consultation should be successfully added

		# take appointment
		Given the doctor is on the available appointments page
		When the doctor takes an appointment
		Then the appointment should be successfully taken

		# view patient details
		When the doctor clicks on the show patient details button
		Then the doctor should see the patient details page

		# cancel appointment
		When the doctor clicks on the cancel appointment button
		Then the appointment should be successfully cancelled

		# download invoice
		When the doctor clicks on the invoices section and then clicks on the download invoice button
		Then the pdf file should be downloaded


		# # delete patient
		# When the doctor clicks on the menu icon for the patient
		# Then the doctor should see the menu options
		# When the doctor clicks on the delete patient button
		# Then the patient should be successfully deleted

		# logout
		When the doctor logs out of the system
		Then the doctor should be redirected to the login page

		# login
		When the doctor logs back in with stored credentials
		Then the doctor should be successfully authenticated and see the dashboard

		# # delete account
		# Given the doctor has finished the account lifecycle
		# When the doctor deletes the account
		# Then the doctor should be successfully deleted