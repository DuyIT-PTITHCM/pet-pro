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
const imports = ["_app/immutable/nodes/2.3ad9c3eb.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/GradientButton.12e21665.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/loading.1f4ce7e9.js","_app/immutable/chunks/index.8cc36c51.js","_app/immutable/chunks/Button.b295e07c.js","_app/immutable/chunks/ToastError.801d24ff.js","_app/immutable/chunks/toastError.ab1f0c9f.js","_app/immutable/chunks/index.737e04d0.js","_app/immutable/chunks/Modal.f3c62f20.js","_app/immutable/chunks/Frame.d281645f.js","_app/immutable/chunks/CloseButton.1bc3e16b.js","_app/immutable/chunks/Popover.afd2e0a3.js","_app/immutable/chunks/Popper.a9b290b2.js","_app/immutable/chunks/LanguageSelect.875c5a8d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.666da90e.js","_app/immutable/chunks/navigation.09ad3971.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.971b2367.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.ce2c7c66.js","_app/immutable/chunks/cart.b91b529b.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.cc5e874d.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-662e39dd.js.map
