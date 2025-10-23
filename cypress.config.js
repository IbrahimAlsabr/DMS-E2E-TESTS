const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://www.tiryaq.online',
		video: true,
		screenshotOnRunFailure: true,
		specPattern: 'cypress/e2e/**/*.{js,ts}',
		supportFile: 'cypress/support/e2e.ts',
	},
})