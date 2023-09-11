import { writable } from 'svelte/store';

export const isMenuEdited = writable({
    isEdit : false,
    menuId: null
});

