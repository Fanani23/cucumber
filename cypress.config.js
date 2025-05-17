const { defineConfig } = require("cypress");
const createBundler = require("@cypress/webpack-preprocessor").default;
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("webpack");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [
        new webpack.DefinePlugin({
          CYPRESS_ENV: JSON.stringify(config.env),
        }),
      ],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
  },
});
