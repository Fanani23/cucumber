import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

When("I enter valid checkout information", () => {
  cy.get('[data-test="firstName"]').type("John");
  cy.get('[data-test="lastName"]').type("Doe");
  cy.get('[data-test="postalCode"]').type("12345");
});

When("I click on continue", () => {
  cy.get('[data-test="continue"]').click();
});

When("I click on finish", () => {
  cy.get('[data-test="finish"]').click();
});

Then("I should see the checkout complete message", () => {
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
});

When("I click on continue without entering information", () => {
  cy.get('[data-test="continue"]').click();
});

Then("I should see an error message for missing information", () => {
  cy.get('[data-test="error"]').should("be.visible");
});
