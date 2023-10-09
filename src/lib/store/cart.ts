import { getCookie } from "$lib/Utils/cookieUtils";
import { writable } from "svelte/store";
interface Product {
    id: number,
    name: string;
    origin: string;
    image: string;
    url: string;
    price: number;
    quantity: number;
    isSelect: boolean;
}
const initialData: Product[] = [];
export let cart = writable(getCookie('cart') ?? initialData);