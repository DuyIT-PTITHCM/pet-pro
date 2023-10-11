import { getCookie } from "$lib/Utils/cookieUtils";
import { writable } from "svelte/store";
export let cart = writable(getCookie('cart'));

export let cartItemQuantity =  writable(getCookie('cartQuantity'));