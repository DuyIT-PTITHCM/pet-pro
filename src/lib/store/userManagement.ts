import { writable } from 'svelte/store';

export const isUserEdited = writable(false);

export const me = writable({
    id: Number,
    avatar: String,
    name: String,
    phone: String,
    email: String,
    role: String
});