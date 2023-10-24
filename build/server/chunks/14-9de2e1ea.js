import { B as BASE_API } from './Const-aff6847f.js';

const load = async ({ fetch, params }) => {
  const slug = params.slug;
  try {
    const response = await fetch(`${BASE_API}/front/product/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return { ...data };
  } catch (error) {
    console.log(error);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d342c3f4.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/14.58ece994.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/index.4ef71c6a.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.2e80689c.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.e2464a95.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.b73f4ba6.js","_app/immutable/chunks/toastError.26f99cd1.js","_app/immutable/chunks/CarouselCustom.23476e7b.js","_app/immutable/chunks/common.83329562.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.6f1e06b8.js","_app/immutable/chunks/SideMenuHeading.a4e27efc.js","_app/immutable/chunks/await_block.e9331cab.js","_app/immutable/chunks/Products.26f86456.js","_app/immutable/chunks/Button.904f7a9b.js","_app/immutable/chunks/CloseButton.e6267c57.js","_app/immutable/chunks/CardPlaceholder.fadd93ad.js","_app/immutable/chunks/navigation.be112991.js","_app/immutable/chunks/singletons.1377760f.js","_app/immutable/chunks/Modal.754febc0.js","_app/immutable/chunks/Hr.8c18fdbc.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/Products.43e52c3c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-9de2e1ea.js.map
