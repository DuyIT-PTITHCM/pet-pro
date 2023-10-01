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
const component = async () => component_cache ??= (await import('./_layout.svelte-efda5a81.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.9ded211b.js","_app/immutable/chunks/scheduler.ea79b75b.js","_app/immutable/chunks/index.b685e006.js","_app/immutable/chunks/GradientButton.a0b08204.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.db577a10.js","_app/immutable/chunks/loading.bcf1142a.js","_app/immutable/chunks/index.54cf2601.js","_app/immutable/chunks/Button.31b5f03d.js","_app/immutable/chunks/DarkMode.3f28d60c.js","_app/immutable/chunks/index.b1dcb639.js","_app/immutable/chunks/Avatar.e477a688.js","_app/immutable/chunks/Modal.eab9ab38.js","_app/immutable/chunks/Frame.c34f2326.js","_app/immutable/chunks/Popover.50c778b9.js","_app/immutable/chunks/Popper.9a29f712.js","_app/immutable/chunks/LanguageSelect.db75cd01.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.bf53a97a.js","_app/immutable/chunks/navigation.937c407d.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.ded48af0.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.c05fd5f5.js"];
const stylesheets = ["_app/immutable/assets/2.0a1b041c.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.ed368b2f.css","_app/immutable/assets/LanguageSelect.2c2d1bfe.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-4772b22e.js.map
