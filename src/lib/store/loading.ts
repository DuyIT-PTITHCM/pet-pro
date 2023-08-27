import { writable } from 'svelte/store';

// Define the initial value
const initialData = false;

// Create a writable store
export const loadingState = writable(initialData);
