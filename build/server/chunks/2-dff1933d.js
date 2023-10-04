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
const component = async () => component_cache ??= (await import('./_layout.svelte-2795f81a.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.b3a62b4c.js","_app/immutable/chunks/scheduler.1757bee3.js","_app/immutable/chunks/index.caaf1ae9.js","_app/immutable/chunks/GradientButton.7bfc9c4b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1d93db1a.js","_app/immutable/chunks/loading.a000b317.js","_app/immutable/chunks/index.8c678ffd.js","_app/immutable/chunks/Button.1ffc646c.js","_app/immutable/chunks/DarkMode.038d8fdf.js","_app/immutable/chunks/index.acd558c0.js","_app/immutable/chunks/Modal.a0675d32.js","_app/immutable/chunks/Frame.7f646d6f.js","_app/immutable/chunks/Popover.b87b518c.js","_app/immutable/chunks/Popper.25f4a08b.js","_app/immutable/chunks/LanguageSelect.4cd06407.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.c8c990c9.js","_app/immutable/chunks/navigation.2eae3b77.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.feb2bc77.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.df5b39ae.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.e7894408.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-dff1933d.js.map
