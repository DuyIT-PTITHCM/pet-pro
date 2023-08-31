import { c as create_ssr_component } from './ssr-ff87f5ac.js';
import { R as RepositoryFactory } from './RepositoryFactory-ccdbdc61.js';
import './utils-cbfaeced.js';
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
//# sourceMappingURL=_page.svelte-bc306923.js.map
