import domdomegg from 'eslint-config-domdomegg';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
	...domdomegg,
	{
		// CommonJS Node scripts (build/tooling helpers)
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'commonjs',
		},
	},
];
