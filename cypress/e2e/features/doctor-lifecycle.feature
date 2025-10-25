Feature: Doctor Account Lifecycle Management
	As a healthcare professional
	I want to create an account, log out, and log back in
	So that I can securely access the medical system

	Scenario: Complete doctor account lifecycle
		Given the doctor is on the signup page of the system
		When the doctor completes the full registration process with:
			| Field            | Value                                                              |
			| Email            | doctor.lifecycle11@dms.com                                          |
			| Password         | SecurePass123!                                                     |
			| Confirm Password | SecurePass123!                                                     |
			| First Name       | Dr. Ahmed                                                          |
			| Last Name        | Hassan                                                             |
			| Gender           | ذكر                                                                |
			| Date of Birth    | 1985-06-15                                                         |
			| Specialty        | الطب الباطني                                                       |
			| Phone Number     | +966501234567                                                      |
			| Bio              | Experienced internal medicine specialist with 10 years of practice |
		Then the doctor should be successfully registered and redirected to dashboard
		When the doctor logs out of the system
		Then the doctor should be redirected to the login page
		When the doctor logs back in with the same credentials
		Then the doctor should be successfully authenticated and see the dashboard
