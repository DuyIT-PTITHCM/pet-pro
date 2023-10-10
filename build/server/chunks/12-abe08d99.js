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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e31a8a38.js')).default;
const server_id = "src/routes/(app)/gio-hang/+page.server.ts";
const imports = ["_app/immutable/nodes/12.4ce24427.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/cart.87070627.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.8cc36c51.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.88188bbd.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/toastError.ab1f0c9f.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/Badge.da0ccf8f.js","_app/immutable/chunks/CloseButton.1bc3e16b.js","_app/immutable/chunks/index.737e04d0.js","_app/immutable/chunks/Frame.d281645f.js","_app/immutable/chunks/Button.b295e07c.js","_app/immutable/chunks/Checkbox.bdc4d394.js","_app/immutable/chunks/Input.d1ea90ba.js","_app/immutable/chunks/Wrapper.b9f0f2e0.js"];
const stylesheets = ["_app/immutable/assets/12.9a3f5599.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-abe08d99.js.map
