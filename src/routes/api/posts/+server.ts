import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import { compareDesc, parseISO } from 'date-fns';

export const prerender = true;

async function getPosts() {
	const paths = import.meta.glob<Record<string, object>>('/src/lib/posts/*.svx', { eager: true });

	return Object.entries(paths)
		.map(([fileName, file]) => {
			const slug = fileName.split('/').at(-1)?.replace('.svx', '') ?? '';

			const metadata = file.metadata as Post;

			return { ...metadata, slug } satisfies Post;
		})
		.filter((post) => post?.published)
		.sort((post1, post2) => compareDesc(parseISO(post1.date), parseISO(post2?.date)));
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
