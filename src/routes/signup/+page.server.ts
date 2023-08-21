import { title } from '$lib/store/meta';
import type { PageServerLoad } from './$types';
title.set("Sign Up");
export const load: PageServerLoad = async ({ cookies }) => {
};
