Feature: Doctor Account Lifecycle Management
	As a healthcare professional
	I want to create an account, log out, and log back in
	So that I can securely access the medical system

	Scenario: Complete doctor account lifecycle
		Given the doctor is on the signup page
		When the doctor completes the full registration process from fixture
		Then the doctor should be successfully registered and redirected to dashboard

		When the doctor logs out of the system
		Then the doctor should be redirected to the login page

		When the doctor logs back in with stored credentials
		Then the doctor should be successfully authenticated and see the dashboard

		Given the doctor is on the dashboard page
		When the doctor adds a patient from fixture
		Then the patient should be successfully added