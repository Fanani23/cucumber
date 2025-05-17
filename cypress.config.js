const { defineConfig } = require("cypress");
const createBundler = require("@cypress/webpack-preprocessor");
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
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/loader",
                },
              ],
            },
          ],
        },
        plugins: [
          new webpack.DefinePlugin({
            CYPRESS_ENV: JSON.stringify(config.env),
          }),
        ],
      },
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
