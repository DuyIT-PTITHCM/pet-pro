import { c as create_ssr_component, v as validate_component } from './ssr-8f3207f5.js';
import { C as CreateProduct } from './CreateProduct-cf479779.js';
import './utils-2dd7664d.js';
import './RepositoryFactory-27484a07.js';
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
import './CreateSeo-cc8f9de3.js';
import 'moment';
import './Editor-3153c256.js';
import './toastError2-3194e7be.js';

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
//# sourceMappingURL=_page.svelte-bc1637e8.js.map
