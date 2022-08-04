import { sveltekit } from '@sveltejs/kit/vite';
import {plugin, Mode} from 'vite-plugin-markdown';
import {resolve} from "path";

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			"$pages": resolve(__dirname, './src/pages')
		}
	},
	plugins: [
		sveltekit(),
		plugin({
			mode: Mode.HTML
		})
	]
};

export default config;
