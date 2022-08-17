<script>
	import "./global-styles.css";

	export let data;
</script>
<nav class="main-nav">
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		{#each data.pages as page}
			<li>
				<a href="/{page.slug}">{page.title}</a>
			</li>
		{/each}
	</ul>
</nav>
<main>
	<slot></slot>
</main>
