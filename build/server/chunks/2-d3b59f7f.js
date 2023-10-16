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
const component = async () => component_cache ??= (await import('./_layout.svelte-acccbfb8.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.e8938663.js","_app/immutable/chunks/scheduler.55b91a48.js","_app/immutable/chunks/index.7e3b7554.js","_app/immutable/chunks/GradientButton.91922136.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1776aff9.js","_app/immutable/chunks/loading.50bbf321.js","_app/immutable/chunks/index.da60e115.js","_app/immutable/chunks/Button.2f670aeb.js","_app/immutable/chunks/ToastError.010244c9.js","_app/immutable/chunks/toastError.0df01849.js","_app/immutable/chunks/index.7e9e7dee.js","_app/immutable/chunks/Modal.6a70786f.js","_app/immutable/chunks/Frame.f89a1a9d.js","_app/immutable/chunks/CloseButton.11b5e26d.js","_app/immutable/chunks/Popover.bd32018e.js","_app/immutable/chunks/Popper.474e131a.js","_app/immutable/chunks/LanguageSelect.37fd3f90.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.bbc2a345.js","_app/immutable/chunks/navigation.40becb13.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.e73c42fa.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.3fcbaf98.js","_app/immutable/chunks/cart.c0b90bce.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.6474ec01.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-d3b59f7f.js.map
