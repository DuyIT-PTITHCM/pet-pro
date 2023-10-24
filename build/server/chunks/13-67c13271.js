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
const component = async () => component_cache ??= (await import('./_page.svelte-c4254031.js')).default;
const server_id = "src/routes/(app)/gio-hang/+page.server.ts";
const imports = ["_app/immutable/nodes/13.566f8356.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/await_block.e9331cab.js","_app/immutable/chunks/index.4ef71c6a.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.2e80689c.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.e2464a95.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.b73f4ba6.js","_app/immutable/chunks/toastError.26f99cd1.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.6f1e06b8.js","_app/immutable/chunks/index.7afe3c5b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Badge.cfe31c64.js","_app/immutable/chunks/CloseButton.8dd97fc7.js","_app/immutable/chunks/index.3f3ee2d2.js","_app/immutable/chunks/Frame.883e6da5.js","_app/immutable/chunks/Button.904f7a9b.js","_app/immutable/chunks/Checkbox.53f0121c.js","_app/immutable/chunks/Input.6ef4688d.js","_app/immutable/chunks/Wrapper.419801f1.js","_app/immutable/chunks/Textarea.0331dad8.js"];
const stylesheets = ["_app/immutable/assets/13.9a3f5599.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-67c13271.js.map
