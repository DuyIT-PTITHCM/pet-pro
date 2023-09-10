import { c as create_ssr_component, v as validate_component } from './ssr-14a856f3.js';
import { C as CreateProduct } from './CreateProduct-61c89e6f.js';
import './utils-9f8bdf1a.js';
import './RepositoryFactory-7d37287f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-01041b6e.js';
import './index-1c7c9ace.js';
import './Indicator.svelte_svelte_type_style_lang-e4e9e84a.js';
import './Fileupload-5c378f6e.js';
import 'tailwind-merge';
import './Input-a84ee897.js';
import './Wrapper-570c015a.js';
import './dev-1873bb41.js';
import './Editor-ecf1a8e8.js';
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
//# sourceMappingURL=_page.svelte-f0d003c1.js.map
