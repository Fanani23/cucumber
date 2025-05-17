import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the SauceDemo website", () => {
  cy.visit("/");
});

When(
  "I enter valid username {string} and password {string}",
  (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
  }
);

When(
  "I enter invalid username {string} and password {string}",
  (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
  }
);

When("I click on the login button", () => {
  cy.get("#login-button").click();
});

Then("I should be redirected to the products page", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("have.text", "Products");
});

Then("I should see an error message", () => {
  cy.get('[data-test="error"]').should("be.visible");
});

Then("I should see a locked out error message", () => {
  cy.get('[data-test="error"]').should("contain", "locked out");
});

Given("I am logged in as {string}", (userType) => {
  cy.fixture("users").then((users) => {
    const user = users[userType];
    cy.visit("/");
    cy.get("#user-name").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });
});

Given("I am on the products page", () => {
  cy.url().should("include", "/inventory.html");
});
