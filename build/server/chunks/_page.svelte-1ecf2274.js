import { c as create_ssr_component, v as validate_component } from './ssr-a6fe4ea2.js';
import { C as CreateProduct } from './CreateProduct-12660f91.js';
import './utils-22ec5563.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-9de519c5.js';
import './index-eecbf3f9.js';
import './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import './Fileupload-d32ca100.js';
import 'tailwind-merge';
import './Input-28e48a82.js';
import './Wrapper-3bde006e.js';
import './dev-1873bb41.js';
import './Textarea-22da094e.js';
import './CreateSeo-2001dbdc.js';
import './common-f14333dd.js';
import './index2-e28c90c4.js';
import 'moment';
import './Editor-63c08df2.js';
import './toastError2-4d5b9c2d.js';

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
//# sourceMappingURL=_page.svelte-1ecf2274.js.map
