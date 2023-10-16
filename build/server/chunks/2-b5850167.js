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
const component = async () => component_cache ??= (await import('./_layout.svelte-c6b70e73.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
<<<<<<<< HEAD:build/server/chunks/2-c56be01c.js
const imports = ["_app/immutable/nodes/2.25ea7d88.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/index.c6264268.js","_app/immutable/chunks/GradientButton.f6abf431.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.fa008dc3.js","_app/immutable/chunks/loading.7b8fb688.js","_app/immutable/chunks/index.9d0d763a.js","_app/immutable/chunks/Button.15a7e48e.js","_app/immutable/chunks/ToastError.501d716e.js","_app/immutable/chunks/toastError.aad4e73c.js","_app/immutable/chunks/index.d6f5a4af.js","_app/immutable/chunks/Modal.b1aa33e9.js","_app/immutable/chunks/Frame.fe52c097.js","_app/immutable/chunks/CloseButton.4d512cac.js","_app/immutable/chunks/Popover.76ae6b36.js","_app/immutable/chunks/Popper.e849b2f3.js","_app/immutable/chunks/LanguageSelect.408ff747.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.55e30d00.js","_app/immutable/chunks/navigation.beee5d6b.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.039cfffe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.3c22da14.js","_app/immutable/chunks/cart.6c969b4e.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.4a49f038.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-c56be01c.js.map
========
const imports = ["_app/immutable/nodes/2.cbdb43a0.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/index.c6264268.js","_app/immutable/chunks/GradientButton.f6abf431.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.fa008dc3.js","_app/immutable/chunks/loading.7b8fb688.js","_app/immutable/chunks/index.9d0d763a.js","_app/immutable/chunks/Button.15a7e48e.js","_app/immutable/chunks/ToastError.ec79573b.js","_app/immutable/chunks/toastError.aad4e73c.js","_app/immutable/chunks/index.d6f5a4af.js","_app/immutable/chunks/Modal.b1aa33e9.js","_app/immutable/chunks/Frame.fe52c097.js","_app/immutable/chunks/CloseButton.4d512cac.js","_app/immutable/chunks/Popover.76ae6b36.js","_app/immutable/chunks/Popper.e849b2f3.js","_app/immutable/chunks/LanguageSelect.d551085e.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.74ef1fb6.js","_app/immutable/chunks/navigation.ac097ade.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.039cfffe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.483fbc82.js","_app/immutable/chunks/cart.6c969b4e.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/ToastError.b176216a.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-b5850167.js.map
>>>>>>>> 4e512380c25ccaaecb8d1c47daadca4149bee5a4:build/server/chunks/2-b5850167.js
