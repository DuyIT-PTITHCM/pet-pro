import { BASE_API } from '$lib/Const.js';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const code = params.code;
    try {
        const response = await fetch(`${BASE_API}/front/order/${code}`, {
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