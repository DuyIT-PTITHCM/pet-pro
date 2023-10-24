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
const component = async () => component_cache ??= (await import('./_layout.svelte-262d718f.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.6b96bd98.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/index.4ef71c6a.js","_app/immutable/chunks/GradientButton.968ae01c.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.6f1e06b8.js","_app/immutable/chunks/loading.73df4687.js","_app/immutable/chunks/index.b73f4ba6.js","_app/immutable/chunks/Button.904f7a9b.js","_app/immutable/chunks/ToastError.81895dc7.js","_app/immutable/chunks/toastError.26f99cd1.js","_app/immutable/chunks/index.3f3ee2d2.js","_app/immutable/chunks/Modal.69bd57e4.js","_app/immutable/chunks/Frame.883e6da5.js","_app/immutable/chunks/CloseButton.8dd97fc7.js","_app/immutable/chunks/Popover.c7d3c635.js","_app/immutable/chunks/Popper.b75a43c6.js","_app/immutable/chunks/LanguageSelect.75156716.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.7afe3c5b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.1148ffb6.js","_app/immutable/chunks/singletons.a17c0f3b.js","_app/immutable/chunks/cart.e2464a95.js"];
const stylesheets = ["_app/immutable/assets/2.64b4bd95.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.8c2c929f.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-76f2f753.js.map
