// language.js
import { getCookie } from '$lib/Utils/cookieUtils';
import { writable } from 'svelte/store';

export const selectedLanguage = writable(getCookie('lang')?? "en");