import { writable } from 'svelte/store';

export const isMenuEdited = writable(false);

// export const isMenuEdited = writable({
//     isEdit : false,
//     menuId: 0
// });

