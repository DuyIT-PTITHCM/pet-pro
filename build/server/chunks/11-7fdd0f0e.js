import { B as BASE_API } from './Const-aff6847f.js';

const load = async ({ fetch, params }) => {
  const url = params.url;
  try {
    const response = await fetch(`${BASE_API}/front/menu-detail/${url}`, {
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

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7673f1f2.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.7a916164.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/Products.de098be6.js","_app/immutable/chunks/cartAction.0bd45e39.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.b91b529b.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.8cc36c51.js","_app/immutable/chunks/toastError.ab1f0c9f.js","_app/immutable/chunks/Button.b295e07c.js","_app/immutable/chunks/Frame.d281645f.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.2c82c845.js","_app/immutable/chunks/stores.628209dc.js","_app/immutable/chunks/singletons.0e1b7327.js","_app/immutable/chunks/meta.63dd062e.js"];
const stylesheets = ["_app/immutable/assets/11.a0e103bb.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/Products.43e52c3c.css","_app/immutable/assets/CarouselCustom.c4897d6c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-7fdd0f0e.js.map
