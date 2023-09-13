import { BASE_API } from '$lib/Const';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    try {
        const response = await fetch(`${BASE_API}/front/menu`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return { menu : data.data };

    } catch (error) {
        console.log(error);
    }
};