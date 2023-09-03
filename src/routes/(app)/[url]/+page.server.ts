import { BASE_API } from '$lib/Const.js';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const url = params.url;
    try {
        const response = await fetch(`${BASE_API}/front/menu-detail/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        return { ...data };


    } catch (error) {
        console.log(error);
    }
}