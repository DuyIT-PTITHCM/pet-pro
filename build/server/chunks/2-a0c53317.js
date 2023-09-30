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
const component = async () => component_cache ??= (await import('./_layout.svelte-e5e16cce.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.34625c59.js","_app/immutable/chunks/scheduler.77cc2719.js","_app/immutable/chunks/index.817f31c9.js","_app/immutable/chunks/GradientButton.ddb354b6.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.83fc92f7.js","_app/immutable/chunks/loading.533478ce.js","_app/immutable/chunks/index.78e39730.js","_app/immutable/chunks/Button.6ead5fa1.js","_app/immutable/chunks/DarkMode.89ccaad0.js","_app/immutable/chunks/index.ac5fa6b1.js","_app/immutable/chunks/Avatar.76ccdd0e.js","_app/immutable/chunks/Modal.f9b0662f.js","_app/immutable/chunks/Frame.777127f7.js","_app/immutable/chunks/Popover.3396ed8f.js","_app/immutable/chunks/Popper.6aa7050e.js","_app/immutable/chunks/LanguageSelect.54ee43b5.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.1fecc47a.js","_app/immutable/chunks/navigation.31208d45.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.91fefe91.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.f4af28f1.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.a3d27e29.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-a0c53317.js.map
