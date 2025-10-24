Feature: Doctor Login
	Background:
		Given the doctor is on the login page

	Scenario: Successful login with valid credentials
		When the doctor enters email "doctor@dms.com" and password "Qwerty123!"
		And clicks on the login button
		Then the doctor should see the dashboard page

	Scenario: Unsuccessful login with invalid credentials
		When the doctor enters email "wrong@dms.com" and password "Wrongpassword123!"
		And clicks on the login button
		Then the doctor should see the error message "Registration failed: Bad credentials"

