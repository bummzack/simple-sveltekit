export async function parseFrontMatter(slug) {
	const pages = import.meta.glob('/src/pages/*.md');
	const name = `/src/pages/${slug}.md`;
	if (name in pages) {
		const {html, attributes} = await pages[name]();
		return {
			attributes,
			html
		};
	}

	return null;
}
