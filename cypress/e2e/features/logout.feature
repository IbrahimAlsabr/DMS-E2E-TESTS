Feature: Doctor Logout
	Scenario: Doctor logs in then logs out successfully
		Given the doctor is logged in
		When doctor clicks on the logout button in the sidebar
		Then doctor should see the confirm logout button
		When doctor clicks on the confirm logout button
		Then doctor should see the login page after logout

# Scenario: Doctor clicks on the cancel logout button
# 	Given the doctor is on the system
# 	And doctor clicks one the logout button in the sidebar
# 	Then doctor should see the confirm logout button
# 	When doctor clicks on the cancel logout button
# 	Then doctor should see the system page