import {basename} from "path";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	const pages = import.meta.glob('/src/pages/*.md');

	let list = [];
	for (const [key, module] of Object.entries(pages)) {
		const {attributes} = await module();
		const slug = basename(key, '.md');
		list.push({
			slug,
			title: attributes?.title || slug
		})
	}

	return {
		pages: list
	}
}
