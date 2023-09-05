import { BASE_API } from '$lib/Const.js';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const slug = params.slug;
    
    try {
        const response = await fetch(`${BASE_API}/front/product/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return { ...data };

    } catch (error) {
        console.log(error);
    }
}