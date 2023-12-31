const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const postcssJitProps = require('postcss-jit-props');
const postcssCustomMedia = require('postcss-custom-media')
const postcssGlobalData = require('@csstools/postcss-global-data')
const OpenProps = require('open-props');



const config = {
	plugins: [
		require('postcss-import-ext-glob'),
		atImport(),
    postcssGlobalData({
      files: [
				'./src/design-tokens/media.css'
      ]
    }),
    postcssCustomMedia(),
	require('tailwindcss'),
	postcssJitProps(OpenProps),
	postcssPresetEnv({
		stage: 3,
		features: {
			'nesting-rules': true,
			'custom-media-queries': true,
			'media-query-ranges': true,
			'cascade-layers': false
		}
	})
	],
};

module.exports = config;
