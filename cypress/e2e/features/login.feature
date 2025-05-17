Feature: Login Functionality

  Scenario: Successfully login with valid credentials
    Given I visit the SauceDemo website
    When I enter valid username "standard_user" and password "secret_sauce"
    And I click on the login button
    Then I should be redirected to the products page

  Scenario: Fail to login with invalid credentials
    Given I visit the SauceDemo website
    When I enter invalid username "invalid_user" and password "wrong_password"
    And I click on the login button
    Then I should see an error message

  Scenario: Fail to login with locked out user
    Given I visit the SauceDemo website
    When I enter valid username "locked_out_user" and password "secret_sauce"
    And I click on the login button
    Then I should see a locked out error message