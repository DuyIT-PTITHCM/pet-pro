import { c as create_ssr_component, v as validate_component } from './ssr-ca1a55ab.js';
import { C as CreateProduct } from './CreateProduct-3bd8920f.js';
import './utils-ea986cb1.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-6832c8ba.js';
import './index-36a920ec.js';
import './Indicator.svelte_svelte_type_style_lang-b4bd0601.js';
import './Fileupload-3bdd9980.js';
import 'tailwind-merge';
import './Input-c2602e14.js';
import './Wrapper-8a21dfe5.js';
import './dev-1873bb41.js';
import './CreateSeo-f947ac28.js';
import './common-0496d5da.js';
import './index2-09122478.js';
import 'moment';
import './Editor-79a97520.js';
import './toastError2-7b7d76cc.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mode = "create";
  let title = "products.createProduct";
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
//# sourceMappingURL=_page.svelte-65683e14.js.map
