import { c as create_ssr_component, v as validate_component } from './ssr-0d75b2b1.js';
import { C as CreateProduct } from './CreateProduct-45993c86.js';
import './utils-6372ffc9.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-7776c1fb.js';
import './index-62c253a0.js';
import './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import './Fileupload-6fdd2e79.js';
import 'tailwind-merge';
import './Input-1aa3eef5.js';
import './Wrapper-c7581240.js';
import './dev-1873bb41.js';
import './Textarea-e13170ac.js';
import './CreateSeo-d2770531.js';
import './common-f14333dd.js';
import './index2-780444f8.js';
import 'moment';
import './Editor-ce0557b2.js';
import './toastError2-46921f4f.js';

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
//# sourceMappingURL=_page.svelte-e99de503.js.map
