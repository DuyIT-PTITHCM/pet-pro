import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

// Tạo writable store với giá trị ban đầu là 0
export const count = writable(0);
export const countread = readable(0);