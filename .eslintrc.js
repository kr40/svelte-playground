/* eslint-disable no-undef */
module.exports = {
	extends: ['eslint:recommended', 'google', 'plugin:import/errors', 'prettier'],
	env: {
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['svelte3', 'import'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				// 'import/no-extraneous-dependencies': 'off',
				// 'import/no-mutable-exports': 'off',
				// 'import/first': 'off',
			},
		},
	],
	rules: {
		'require-jsdoc': 'off',
		// 'no-use-before-define': ['error', 'nofunc'],
		// 'import/prefer-default-export': 'off',
	},
};
