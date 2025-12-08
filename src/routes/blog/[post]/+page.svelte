<script lang="ts">
	let { data } = $props();
	const { Content } = data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="lg:px-32">
	<h1>{data.meta.title}</h1>
	<Content />
</article>
