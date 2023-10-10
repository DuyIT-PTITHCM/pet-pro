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
const component = async () => component_cache ??= (await import('./_layout.svelte-9ff5c002.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.7256454c.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/GradientButton.12e21665.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/loading.1f4ce7e9.js","_app/immutable/chunks/index.8cc36c51.js","_app/immutable/chunks/Button.b295e07c.js","_app/immutable/chunks/ToastError.442510ca.js","_app/immutable/chunks/toastError.ab1f0c9f.js","_app/immutable/chunks/cart.87070627.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.737e04d0.js","_app/immutable/chunks/Modal.f3c62f20.js","_app/immutable/chunks/Frame.d281645f.js","_app/immutable/chunks/CloseButton.1bc3e16b.js","_app/immutable/chunks/Popover.afd2e0a3.js","_app/immutable/chunks/Popper.a9b290b2.js","_app/immutable/chunks/LanguageSelect.7cfaec31.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a2b2468f.js","_app/immutable/chunks/navigation.6634408b.js","_app/immutable/chunks/index.8abb4eea.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.a1c80af7.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.3d406c15.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-2975ded7.js.map
