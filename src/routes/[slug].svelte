<script>
    export let data = {};
    export let content;
</script>

<article>
    {@html content}
	{#if data.image}
		<img src={data.image} alt="Image for {data.title}">
	{/if}
</article>

