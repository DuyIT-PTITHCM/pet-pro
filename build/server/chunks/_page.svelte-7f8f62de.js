import { c as create_ssr_component, v as validate_component } from './ssr-01008541.js';
import { C as CreateProduct } from './CreateProduct-1a72ef25.js';
import './utils-4ce9e277.js';
import './RepositoryFactory-9eb26519.js';
import './Const-3b06302f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-7fd196aa.js';
import './index-cefc8762.js';
import './Indicator.svelte_svelte_type_style_lang-d22f5597.js';
import './Fileupload-31c680ce.js';
import 'tailwind-merge';
import './Input-7a1052fa.js';
import './Wrapper-97dcdf2f.js';
import './dev-1873bb41.js';
import './CreateSeo-cd6b1a22.js';
import 'moment';
import './Editor-38ea325b.js';

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
//# sourceMappingURL=_page.svelte-7f8f62de.js.map
