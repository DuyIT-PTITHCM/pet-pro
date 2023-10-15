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
const component = async () => component_cache ??= (await import('./_page.svelte-658207f2.js')).default;
const server_id = "src/routes/(app)/gio-hang/+page.server.ts";
const imports = ["_app/immutable/nodes/13.0876da86.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/await_block.65442e8f.js","_app/immutable/chunks/index.c6264268.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.050b325a.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.6c969b4e.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.9d0d763a.js","_app/immutable/chunks/toastError.aad4e73c.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.fa008dc3.js","_app/immutable/chunks/index.039cfffe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Badge.521cbc97.js","_app/immutable/chunks/CloseButton.4d512cac.js","_app/immutable/chunks/index.d6f5a4af.js","_app/immutable/chunks/Frame.fe52c097.js","_app/immutable/chunks/Button.15a7e48e.js","_app/immutable/chunks/Checkbox.0acd6859.js","_app/immutable/chunks/Input.ac251b9f.js","_app/immutable/chunks/Wrapper.787308e2.js","_app/immutable/chunks/Textarea.e8185dd0.js"];
const stylesheets = ["_app/immutable/assets/13.9a3f5599.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-52abc22a.js.map
