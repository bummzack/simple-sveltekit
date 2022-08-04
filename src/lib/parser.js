export async function parseFrontMatter(slug) {
	const pages = import.meta.glob('/src/pages/*.md');
	const name = `/src/pages/${slug}.md`;
	if (name in pages) {
		const {html:content, attributes:data} = await pages[name]();
		return {
			data,
			content
		};
	}

	return null;
}
