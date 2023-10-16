import { B as BASE_API } from './Const-aff6847f.js';

const load = async () => {
  try {
    const response = await fetch(`${BASE_API}/front/menu`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return { menu: data.data };
  } catch (error) {
    console.log(error);
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-1b1772cd.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.f1231149.js","_app/immutable/chunks/scheduler.55b91a48.js","_app/immutable/chunks/index.7e3b7554.js","_app/immutable/chunks/GradientButton.91922136.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1776aff9.js","_app/immutable/chunks/loading.50bbf321.js","_app/immutable/chunks/index.da60e115.js","_app/immutable/chunks/Button.2f670aeb.js","_app/immutable/chunks/ToastError.010244c9.js","_app/immutable/chunks/toastError.0df01849.js","_app/immutable/chunks/index.7e9e7dee.js","_app/immutable/chunks/Modal.231bf54a.js","_app/immutable/chunks/CloseButton.227fd449.js","_app/immutable/chunks/Popover.ac7e0d3e.js","_app/immutable/chunks/Popper.1efc8174.js","_app/immutable/chunks/LanguageSelect.be76dbaa.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.21666735.js","_app/immutable/chunks/navigation.bb23a854.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.e73c42fa.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.c0dce944.js","_app/immutable/chunks/cart.c0b90bce.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.6474ec01.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-d6580b85.js.map
