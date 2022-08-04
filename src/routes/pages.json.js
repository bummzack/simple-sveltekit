import {basename} from "path";

export async function GET() {
	const pages = import.meta.glob('/src/pages/*.md');

	let list = [];
	for (const [key, module] of Object.entries(pages)) {
		const {attributes:data} = await module();
		const slug = basename(key, '.md');
		list.push({
			slug,
			title: data?.title || slug
		})
	}

	return {
		status: 200,
		body: list
	}
}
