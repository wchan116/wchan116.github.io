<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>wchan - Blog</title>
</svelte:head>

<section>
	<ul>
		{#each data.posts as post (post.slug)}
			<li>
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
