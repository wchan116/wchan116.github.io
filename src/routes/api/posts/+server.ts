import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	const paths = import.meta.glob('/src/lib/posts/*.svx', { eager: true });

	return Object.entries(paths)
		.map(([fileName, file]) => {
			const slug = fileName.split('/').at(-1)?.replace('.svx', '') ?? '';

			if (file && typeof file === 'object' && 'metadata' in file) {
				const metadata = file.metadata as Post;

				return { ...metadata, slug } satisfies Post;
			}
		})
		.filter((post) => post?.published);
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
