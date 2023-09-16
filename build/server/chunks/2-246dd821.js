import { B as BASE_API } from './Const-3b06302f.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-a8eaa6c5.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.5a65d307.js","_app/immutable/chunks/scheduler.17f854f6.js","_app/immutable/chunks/index.9074fff2.js","_app/immutable/chunks/GradientButton.19679de2.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.9fd53eb3.js","_app/immutable/chunks/loading.2fa600dc.js","_app/immutable/chunks/index.8692ab93.js","_app/immutable/chunks/Button.f37396ce.js","_app/immutable/chunks/DarkMode.f778bceb.js","_app/immutable/chunks/index.899e0b71.js","_app/immutable/chunks/DropdownItem.19276964.js","_app/immutable/chunks/Popper.670db405.js","_app/immutable/chunks/Frame.b07ab63a.js","_app/immutable/chunks/Wrapper.59e7f5d4.js","_app/immutable/chunks/Modal.9c8a88ce.js","_app/immutable/chunks/Popover.fe9b22e1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.bf97f445.js","_app/immutable/chunks/navigation.1a5bf573.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.4f31a40d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/2.5453771d.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.30db23d2.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-246dd821.js.map
