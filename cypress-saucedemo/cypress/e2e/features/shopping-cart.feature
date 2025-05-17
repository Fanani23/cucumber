Feature: Shopping Cart Functionality

  Background:
    Given I am logged in as "standard_user"
    And I am on the products page

  Scenario: Add a product to the cart
    When I add a product to the cart
    Then the cart badge should show "1"
    And the product should be in the cart

  Scenario: Remove a product from the cart
    When I add a product to the cart
    And I go to the cart page
    And I remove the product from the cart
    Then the cart should be empty

  Scenario: Continue shopping from cart
    When I add a product to the cart
    And I go to the cart page
    And I click on continue shopping
    Then I should be back on the products page