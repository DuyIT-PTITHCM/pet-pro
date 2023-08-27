import { writable } from 'svelte/store';

interface Toast {
    message: string;
    type: string;
}

const initialData: Toast[] = [];
export const toastErr = writable(initialData);