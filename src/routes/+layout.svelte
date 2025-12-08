<script lang="ts">
	import favicon from '$lib/assets/lighthouse.ico';
	import { resolve } from '$app/paths';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>wchan blog</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar bg-neutral shadow-sm">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href={resolve('/')}>wchan</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a class="link link-hover" href={resolve('/about')}>About</a></li>
			<li><a class="link link-hover" href={resolve('/blog')}>Blog</a></li>
		</ul>
	</div>
</nav>

<main class="container md:px-16 py-8 px-8 prose max-w-7xl m-auto">
	{@render children()}
</main>
