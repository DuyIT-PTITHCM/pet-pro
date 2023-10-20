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
const component = async () => component_cache ??= (await import('./_page.svelte-691c714e.js')).default;
const server_id = "src/routes/(app)/gio-hang/+page.server.ts";
const imports = ["_app/immutable/nodes/13.16a80a17.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/await_block.8d853c36.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.3adb9e9a.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.b91b529b.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.8cc36c51.js","_app/immutable/chunks/toastError.ab1f0c9f.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/index.971b2367.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Badge.74aa1d93.js","_app/immutable/chunks/CloseButton.a6bf7a9d.js","_app/immutable/chunks/index.737e04d0.js","_app/immutable/chunks/Button.b295e07c.js","_app/immutable/chunks/Checkbox.bdc4d394.js","_app/immutable/chunks/Input.d1ea90ba.js","_app/immutable/chunks/Wrapper.b9f0f2e0.js","_app/immutable/chunks/Textarea.90966e6d.js"];
const stylesheets = ["_app/immutable/assets/13.9a3f5599.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-f24f8890.js.map
