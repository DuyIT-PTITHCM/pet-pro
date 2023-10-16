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
const component = async () => component_cache ??= (await import('./_layout.svelte-a3a93cf6.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.ff90bdcf.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/index.c6264268.js","_app/immutable/chunks/GradientButton.f6abf431.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.fa008dc3.js","_app/immutable/chunks/loading.7b8fb688.js","_app/immutable/chunks/index.9d0d763a.js","_app/immutable/chunks/Button.15a7e48e.js","_app/immutable/chunks/ToastError.501d716e.js","_app/immutable/chunks/toastError.aad4e73c.js","_app/immutable/chunks/index.d6f5a4af.js","_app/immutable/chunks/Modal.cd4486e2.js","_app/immutable/chunks/CloseButton.35158b9c.js","_app/immutable/chunks/Popover.c16f30ba.js","_app/immutable/chunks/Popper.fb2b5a09.js","_app/immutable/chunks/LanguageSelect.36f9b4d7.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.b7ff1f7b.js","_app/immutable/chunks/navigation.ba413dd9.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.039cfffe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.2c2420f4.js","_app/immutable/chunks/cart.6c969b4e.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.4a49f038.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-e846fc4b.js.map
