<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<article>
    {@html data.html}

	{#if data.attributes.image}
		<img src={data.attributes.image} alt="Image for {data.attributes.title}">
	{/if}
</article>

