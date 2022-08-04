import {parseFrontMatter} from "$lib/parser";

export async function GET({ params }) {
	const { slug } = params;

	const body = await parseFrontMatter(slug);
	if (body) {
		return {
			body
		}
	}

	return {
		status: 404,
		body: "Not found"
	}
}
