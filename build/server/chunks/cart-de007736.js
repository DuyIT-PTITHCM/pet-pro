import { g as getCookie } from './cookieUtils-3c057440.js';
import { w as writable } from './index-36a920ec.js';

const initialData = [];
let cart = writable(getCookie("cart") ?? initialData);

export { cart as c };
//# sourceMappingURL=cart-de007736.js.map
