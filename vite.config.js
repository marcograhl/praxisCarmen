import { sveltekit } from '@sveltejs/kit/vite';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit';	
import { FontaineTransform } from "fontaine";
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		inlangPlugin(),
		sveltekit(),
	 FontaineTransform.vite({ fallbacks: ["Arial", "Roboto"] }),
	]
});
