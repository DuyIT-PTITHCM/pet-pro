import { c as create_ssr_component } from './ssr-3f0a2cd3.js';
import { R as RepositoryFactory } from './RepositoryFactory-21209de9.js';
import './utils-88625f8a.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const productService = RepositoryFactory.get("productRepository");
  let product;
  async function productDetail() {
    product = await productService.show(12);
    console.log(product);
  }
  productDetail();
  return `<h1 data-svelte-h="svelte-crvoeg">alo</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b096fbf5.js.map
