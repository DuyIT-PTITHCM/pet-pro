import { c as create_ssr_component, v as validate_component } from './ssr-6197c9bb.js';
import { C as CreateProduct } from './CreateProduct-8550d5c6.js';
import './utils-779d328f.js';
import './RepositoryFactory-5f61db19.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-561efc4f.js';
import './index-6d3e2f99.js';
import './Indicator.svelte_svelte_type_style_lang-5ca2282a.js';
import './Fileupload-83b87f66.js';
import 'tailwind-merge';
import './Input-b6c6b4cd.js';
import './Wrapper-48062af6.js';
import './dev-1873bb41.js';
import './Tabs-abd98335.js';
import 'moment';
import './CreateSeo-bdf73302.js';
import './Editor-da3639b3.js';

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
//# sourceMappingURL=_page.svelte-5f703ec0.js.map
