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
const component = async () => component_cache ??= (await import('./_layout.svelte-664f0233.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.9d3ef092.js","_app/immutable/chunks/scheduler.dd49014b.js","_app/immutable/chunks/index.cd74a8f5.js","_app/immutable/chunks/GradientButton.318259b2.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.32b2f881.js","_app/immutable/chunks/loading.4aaaa838.js","_app/immutable/chunks/index.aa60b0fe.js","_app/immutable/chunks/Button.49b347d3.js","_app/immutable/chunks/DarkMode.8072779f.js","_app/immutable/chunks/index.58597a7b.js","_app/immutable/chunks/Modal.261420cc.js","_app/immutable/chunks/Frame.ca951f7d.js","_app/immutable/chunks/Popover.ce541626.js","_app/immutable/chunks/Popper.7ea34411.js","_app/immutable/chunks/LanguageSelect.b9b010da.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.2b9f25f5.js","_app/immutable/chunks/navigation.049c6100.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.7bf9b32a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.43659d5e.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.f2d96cdf.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-4553425b.js.map
