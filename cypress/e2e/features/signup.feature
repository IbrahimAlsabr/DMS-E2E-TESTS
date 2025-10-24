Feature: Doctor Signup
	Background:
		Given the doctor is on the signup page

	Scenario: Successful signup with valid credentials
		When the doctor enters email "assad@dms.com" and password "Qwerty123!" and confirm password "Qwerty123!"
		And clicks on the next button after entering email and password and confirm password
		Then the doctor should see the next step after entering email and password and confirm password
		When the doctor enters first name "John" and last name "Doe" and selects the gender "ذكر" and selects the date of birth "1990-01-01"
		And clicks on the next button
		Then the doctor should see the next step
		When the doctor selects the specialty "الطب الباطني" and enters the phone number "0987654321" and writes the bio "I am a cardiologist with 10 years of experience in the field of cardiology" and clicks on the condtions agreement button
		And clicks on the submit button
		Then the doctor should see the success message "مرحباً بك في منصة إدارة العيادات الطبية!"