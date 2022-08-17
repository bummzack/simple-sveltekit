import {parseFrontMatter} from "$lib/parser";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;

	const body = await parseFrontMatter(slug);
	if (body) {
		return body
	}

	throw error(404, "Not found");
}
