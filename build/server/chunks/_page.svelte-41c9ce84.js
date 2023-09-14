import { c as create_ssr_component, v as validate_component } from './ssr-3e906495.js';
import { C as CreateProduct } from './CreateProduct-b80af749.js';
import './utils-2dd7664d.js';
import './RepositoryFactory-e953311f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-3ab47950.js';
import './index-3be464aa.js';
import './Indicator.svelte_svelte_type_style_lang-4cae1de8.js';
import './Fileupload-f29886df.js';
import 'tailwind-merge';
import './Input-01303dee.js';
import './Wrapper-12bc4865.js';
import './dev-1873bb41.js';
import './CreateSeo-a60e382f.js';
import 'moment';
import './Editor-c3e36d04.js';

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
//# sourceMappingURL=_page.svelte-41c9ce84.js.map
