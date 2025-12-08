<script lang="ts">
	import { resolve } from '$app/paths';
	import { parseISO } from 'date-fns';

	let { data } = $props();
</script>

<svelte:head>
	<title>wchan - Blog</title>
</svelte:head>

<section>
	<ul class="list bg-base-200 rounded-box shadow-md">
		{#each data.posts as post (post.slug)}
			<li class="list-row">
				<div>
					<a href={resolve('/blog/[post]', { post: post.slug })} class="title">{post.title}</a>
					<p class="date text-xs">Posted on {parseISO(post.date)}</p>
					<p class="description">{post.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
