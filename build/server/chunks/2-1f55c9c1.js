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
const imports = ["_app/immutable/nodes/2.95662bf4.js","_app/immutable/chunks/scheduler.c3a7c5b6.js","_app/immutable/chunks/index.b8f63c33.js","_app/immutable/chunks/GradientButton.523d4562.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.44558637.js","_app/immutable/chunks/loading.29efc1b5.js","_app/immutable/chunks/index.14e22bab.js","_app/immutable/chunks/Button.49ab4b1b.js","_app/immutable/chunks/DarkMode.745d2fc8.js","_app/immutable/chunks/index.eef21d17.js","_app/immutable/chunks/DropdownItem.132abc21.js","_app/immutable/chunks/Popper.baf9a7e6.js","_app/immutable/chunks/Frame.5fe0b867.js","_app/immutable/chunks/Wrapper.550d5649.js","_app/immutable/chunks/Modal.3db16402.js","_app/immutable/chunks/Popover.7495c983.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.15682583.js","_app/immutable/chunks/navigation.cd26fe25.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.52f48e73.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/2.5453771d.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.30db23d2.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-1f55c9c1.js.map
