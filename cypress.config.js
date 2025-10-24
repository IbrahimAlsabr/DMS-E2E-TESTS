const { defineConfig } = require('cypress')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
	e2e: {
		specPattern: 'cypress/e2e/**/*.feature',
		async setupNodeEvents(on, config) {
			await addCucumberPreprocessorPlugin(on, config);
			on('file:preprocessor', createBundler({
				plugins: [createEsbuildPlugin(config)],
			}));
			return config;
		},
		baseUrl: 'https://www.tiryaq.online',
		supportFile: 'cypress/support/e2e.ts',
		screenshotOnRunFailure: false,
		video: false,
	},
})