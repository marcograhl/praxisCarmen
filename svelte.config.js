import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import postcssPresetEnv from 'postcss-preset-env';
import atImport from 'postcss-import';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: {
				prependData: `
				@custom-media --below_small (width < 40em);
				@custom-media --below_med (width < 60em);
				@custom-media --below_large (width < 70em);
				@custom-media --below_xlarge (width < 80em);

				@custom-media --above_small (width > 40em);
				@custom-media --above_med (width > 60em);
				@custom-media --above_large (width > 70em);
				@custom-media --above_xlarge (width > 80em);
			`,
				plugins: [
					atImport,
					postcssPresetEnv({
						stage: 2,
						features: {
							'nesting-rules': true,
							'custom-media-queries': true,
							'media-query-ranges': true
						}
					})
				]
			}
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/assets',
			$utilities: 'src/utilities',
			$partials: 'src/_includes/partials',
			$blocks: 'src/_includes/blocks',
			$fonts: 'src/fonts'
		}
	}
};

export default config;
