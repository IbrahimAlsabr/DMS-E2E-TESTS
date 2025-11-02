const { defineConfig } = require('cypress')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
	e2e: {
		specPattern: 'cypress/e2e/**/*.feature',
		async setupNodeEvents(on, config) {
			await addCucumberPreprocessorPlugin(on, config);
			on('file:preprocessor', createBundler({
				plugins: [createEsbuildPlugin(config)],
			}));
			
			// Task to read directory contents (for checking downloaded files)
			on('task', {
				readDir(dirPath) {
					try {
						const files = fs.readdirSync(dirPath);
						return files;
					} catch (error) {
						return [];
					}
				}
			});
			
			return config;
		},
		baseUrl: 'https://www.tiryaq.online',
		supportFile: 'cypress/support/e2e.ts',
		screenshotOnRunFailure: false,
		video: false,
		downloadsFolder: 'cypress/downloads',
	},
})