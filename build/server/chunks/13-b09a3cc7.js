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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-828d5a5e.js')).default;
const server_id = "src/routes/(app)/gio-hang/+page.server.ts";
const imports = ["_app/immutable/nodes/13.d3d29a5d.js","_app/immutable/chunks/scheduler.55b91a48.js","_app/immutable/chunks/await_block.ae6c5cfd.js","_app/immutable/chunks/index.7e3b7554.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.78d906fc.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.c0b90bce.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.da60e115.js","_app/immutable/chunks/toastError.0df01849.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1776aff9.js","_app/immutable/chunks/index.e73c42fa.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Badge.13f6d719.js","_app/immutable/chunks/CloseButton.227fd449.js","_app/immutable/chunks/index.7e9e7dee.js","_app/immutable/chunks/Button.2f670aeb.js","_app/immutable/chunks/Checkbox.6513177d.js","_app/immutable/chunks/Input.f507dcdb.js","_app/immutable/chunks/Wrapper.f5bd90e1.js","_app/immutable/chunks/Textarea.91f45cad.js"];
const stylesheets = ["_app/immutable/assets/13.9a3f5599.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-b09a3cc7.js.map
