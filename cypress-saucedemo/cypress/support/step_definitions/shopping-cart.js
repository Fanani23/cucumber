import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I add a product to the cart", () => {
  cy.get(".inventory_item")
    .first()
    .within(() => {
      cy.get("button").click();
    });
});

Then("the cart badge should show {string}", (count) => {
  cy.get(".shopping_cart_badge").should("have.text", count);
});

Then("the product should be in the cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.get(".cart_item").should("have.length", 1);
});

When("I go to the cart page", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

When("I remove the product from the cart", () => {
  cy.get(".cart_item").within(() => {
    cy.get("button").click();
  });
});

Then("the cart should be empty", () => {
  cy.get(".cart_item").should("not.exist");
});

When("I click on continue shopping", () => {
  cy.get('[data-test="continue-shopping"]').click();
});

Then("I should be back on the products page", () => {
  cy.url().should("include", "/inventory.html");
});

Given("I have products in my cart", () => {
  cy.visit("/inventory.html");
  cy.get(".inventory_item")
    .first()
    .within(() => {
      cy.get("button").click();
    });
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

Given("I am on the cart page", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});
