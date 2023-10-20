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
const component = async () => component_cache ??= (await import('./_page.svelte-68a37909.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.dc145374.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/Products.6fe6419c.js","_app/immutable/chunks/await_block.8d853c36.js","_app/immutable/chunks/Button.b295e07c.js","_app/immutable/chunks/CloseButton.a6bf7a9d.js","_app/immutable/chunks/CardPlaceholder.0f4007c6.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.2c82c845.js","_app/immutable/chunks/index.8cc36c51.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cartAction.3adb9e9a.js","_app/immutable/chunks/cart.b91b529b.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/toastError.ab1f0c9f.js","_app/immutable/chunks/navigation.148a0a56.js","_app/immutable/chunks/singletons.fa57075e.js","_app/immutable/chunks/stores.946f5941.js","_app/immutable/chunks/meta.63dd062e.js","_app/immutable/chunks/HeaderPage.9ede1a6d.js","_app/immutable/chunks/index.737e04d0.js","_app/immutable/chunks/Drawer.db57454f.js"];
const stylesheets = ["_app/immutable/assets/11.7032c626.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/Products.43e52c3c.css","_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/HeaderPage.c9383bc6.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-97eb4a9f.js.map
