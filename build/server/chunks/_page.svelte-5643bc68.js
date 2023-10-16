import { c as create_ssr_component, v as validate_component } from './ssr-e41dcf02.js';
import { C as CreateProduct } from './CreateProduct-5d23bf68.js';
import './utils-a4f7b281.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-6e9dcca6.js';
import './index-92a6d03f.js';
import './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import './Fileupload-f6d15a88.js';
import 'tailwind-merge';
import './Input-81fd4d1e.js';
import './Wrapper-3c132686.js';
import './dev-1873bb41.js';
import './Textarea-677f2e1b.js';
import './CreateSeo-4ab4b82c.js';
import './common-0496d5da.js';
import './index2-be839c26.js';
import 'moment';
import './Editor-97fd80a2.js';
import './toastError2-475540f6.js';

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
//# sourceMappingURL=_page.svelte-5643bc68.js.map
