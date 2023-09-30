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
const component = async () => component_cache ??= (await import('./_layout.svelte-f3ccb4e8.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.77999af9.js","_app/immutable/chunks/scheduler.846bd575.js","_app/immutable/chunks/index.476cb9bd.js","_app/immutable/chunks/GradientButton.5c9f7a65.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.b20ed39c.js","_app/immutable/chunks/loading.ad30fed1.js","_app/immutable/chunks/index.940a98c5.js","_app/immutable/chunks/Button.e5765ce7.js","_app/immutable/chunks/DarkMode.36d3e2e9.js","_app/immutable/chunks/index.b3791e31.js","_app/immutable/chunks/Avatar.86480e10.js","_app/immutable/chunks/Modal.2f836259.js","_app/immutable/chunks/Frame.f5029491.js","_app/immutable/chunks/Popover.5959e6ab.js","_app/immutable/chunks/Popper.3a342c13.js","_app/immutable/chunks/LanguageSelect.6aba496b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.9d3d438e.js","_app/immutable/chunks/navigation.992264a4.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.75695b3d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.f9b8dafc.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.8bbd6a7b.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-28496980.js.map
