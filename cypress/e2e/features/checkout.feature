Feature: Checkout Functionality

  Background:
    Given I am logged in as "standard_user"
    And I have products in my cart
    And I am on the cart page

  Scenario: Successfully complete checkout with valid information
    When I click on the checkout button
    And I enter valid checkout information
    And I click on continue
    And I click on finish
    Then I should see the checkout complete message

  Scenario: Fail to complete checkout with missing information
    When I click on the checkout button
    And I click on continue without entering information
    Then I should see an error message for missing information