import { c as create_ssr_component, v as validate_component } from './ssr-4b2a575b.js';
import { C as CreateProduct } from './CreateProduct-28584ed8.js';
import './utils-5762d6f4.js';
import './RepositoryFactory-7d37287f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-f80bcef4.js';
import 'accounting';
import './loading-c8f33dc7.js';
import './index-f06f6a44.js';
import './Icon-29f6d43e.js';
import './Fileupload-b277a6e9.js';
import 'tailwind-merge';
import './Input-a505f525.js';
import './Wrapper-8421d661.js';
import './dev-1873bb41.js';
import 'moment';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mode = "create";
  let title = "Create Products";
  let products = {
    productName: null,
    description: null,
    price: null,
    originalPrice: null,
    stockQuantity: null,
    origin: null,
    notes: null,
    type: null,
    status: null,
    discount: null,
    slug: null,
    createdBy: 1,
    editedBy: 1,
    categoryId: null,
    images: "",
    expirationDate: null
  };
  return `${validate_component(CreateProduct, "CreateProduct").$$render($$result, { mode, products, title }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b81e2c0a.js.map
