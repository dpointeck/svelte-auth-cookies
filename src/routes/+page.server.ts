import { redirect } from '@sveltejs/kit'
import type {  PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	// redirect to `/` if logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	throw redirect(302, '/testcases')
}