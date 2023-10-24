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
const component = async () => component_cache ??= (await import('./_page.svelte-58bfbf0a.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.a7669f1d.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/index.4ef71c6a.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.6f1e06b8.js","_app/immutable/chunks/Products.05fe147b.js","_app/immutable/chunks/await_block.e9331cab.js","_app/immutable/chunks/Button.904f7a9b.js","_app/immutable/chunks/Frame.883e6da5.js","_app/immutable/chunks/CardPlaceholder.fadd93ad.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/index.b73f4ba6.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cartAction.2e80689c.js","_app/immutable/chunks/cart.e2464a95.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/toastError.26f99cd1.js","_app/immutable/chunks/navigation.fc8927ec.js","_app/immutable/chunks/singletons.a17c0f3b.js","_app/immutable/chunks/common.83329562.js","_app/immutable/chunks/Blogs.a9bd6943.js","_app/immutable/chunks/stores.1148ffb6.js","_app/immutable/chunks/meta.617d04fa.js","_app/immutable/chunks/HeaderPage.8e7b074b.js","_app/immutable/chunks/index.3f3ee2d2.js","_app/immutable/chunks/CloseButton.8dd97fc7.js","_app/immutable/chunks/Drawer.f1f0cfdf.js"];
const stylesheets = ["_app/immutable/assets/11.7032c626.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/Products.3ab14aab.css","_app/immutable/assets/HeaderPage.c9383bc6.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-d435b2e1.js.map
