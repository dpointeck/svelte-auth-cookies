import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types'

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		user: locals.user,
	}
}
