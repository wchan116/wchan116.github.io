<script lang="ts">
	import { resolve } from '$app/paths';
	import { parseISO } from 'date-fns';

	let { data } = $props();
</script>

<svelte:head>
	<title>wchan - Blog</title>
</svelte:head>

<section>
	<ul>
		{#each data.posts as post (post.slug)}
			<li class="card flex hover:bg-base-300 bg-base-200">
				<a href={resolve('/blog/[post]', { post: post.slug })} class="flex-1 no-underline">
					<div class="card-body">
						<h3>{post.title}</h3>
						<p class="date text-xs">Posted on {parseISO(post.date)}</p>
						<p class="description">{post.description}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>
