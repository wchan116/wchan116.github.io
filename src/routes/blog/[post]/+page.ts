import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.svx`);

		return {
			Content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, e);
	}
};
