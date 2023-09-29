import { c as create_ssr_component, v as validate_component } from './ssr-8f3207f5.js';
import { C as CreateProduct } from './CreateProduct-06d46256.js';
import './utils-2dd7664d.js';
import './RepositoryFactory-283a094c.js';
import './Const-3b06302f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './accounting-d72f8257.js';
import 'accounting';
import './loading-3ab47950.js';
import './index-3be464aa.js';
import './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import './Fileupload-ac4371a6.js';
import 'tailwind-merge';
import './Input-c07b967b.js';
import './Wrapper-ae21bffe.js';
import './dev-1873bb41.js';
import './CreateSeo-12646cbc.js';
import 'moment';
import './Editor-03d75bad.js';

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
//# sourceMappingURL=_page.svelte-aa0be537.js.map
