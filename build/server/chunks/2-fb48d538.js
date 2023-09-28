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
const component = async () => component_cache ??= (await import('./_layout.svelte-7bd39d46.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.d69036b8.js","_app/immutable/chunks/scheduler.613da000.js","_app/immutable/chunks/index.bc9849b9.js","_app/immutable/chunks/GradientButton.1c718ff2.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.36677b55.js","_app/immutable/chunks/loading.8f0ddab5.js","_app/immutable/chunks/index.4276579a.js","_app/immutable/chunks/Button.c6fccbb1.js","_app/immutable/chunks/DarkMode.8b730a8c.js","_app/immutable/chunks/index.6920fc43.js","_app/immutable/chunks/DropdownItem.c266a19f.js","_app/immutable/chunks/Popper.046f51df.js","_app/immutable/chunks/Frame.4d082458.js","_app/immutable/chunks/Wrapper.1f0270d5.js","_app/immutable/chunks/Modal.8854cff7.js","_app/immutable/chunks/Popover.8e2a568f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.c942c6b7.js","_app/immutable/chunks/navigation.b7b3dba1.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.94d35313.js","_app/immutable/chunks/preload-helper.a4192956.js"];
const stylesheets = ["_app/immutable/assets/2.5453771d.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.ed3eed94.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-fb48d538.js.map
