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
const component = async () => component_cache ??= (await import('./_layout.svelte-9c8797a8.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.7a5fe852.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/index.9d8dfa58.js","_app/immutable/chunks/GradientButton.900798e5.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f13b9a5c.js","_app/immutable/chunks/loading.aad9f80f.js","_app/immutable/chunks/index.27b064a4.js","_app/immutable/chunks/Button.3d93c54b.js","_app/immutable/chunks/DarkMode.8086eae6.js","_app/immutable/chunks/meta.f8bcb751.js","_app/immutable/chunks/DropdownItem.f19a4f4c.js","_app/immutable/chunks/Popper.7668f6f9.js","_app/immutable/chunks/Frame.a998ee6e.js","_app/immutable/chunks/Wrapper.a42c53c1.js","_app/immutable/chunks/Modal.6c12a84c.js","_app/immutable/chunks/index.d92455a2.js","_app/immutable/chunks/Popover.09aa2f8f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.2a617282.js","_app/immutable/chunks/navigation.b3f9a525.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.717c16a7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/2.5453771d.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.3b6e099c.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-8d71482f.js.map
