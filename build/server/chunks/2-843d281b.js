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
const component = async () => component_cache ??= (await import('./_layout.svelte-2bd5e215.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.cab060e3.js","_app/immutable/chunks/scheduler.a17acf7c.js","_app/immutable/chunks/index.8874627e.js","_app/immutable/chunks/GradientButton.22bf4448.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.caff1904.js","_app/immutable/chunks/loading.1f962269.js","_app/immutable/chunks/index.0eb19cf3.js","_app/immutable/chunks/Button.8067aebc.js","_app/immutable/chunks/DarkMode.630d34fd.js","_app/immutable/chunks/index.dd7b23c5.js","_app/immutable/chunks/Avatar.03022f79.js","_app/immutable/chunks/Modal.9aa03073.js","_app/immutable/chunks/Frame.97acffa6.js","_app/immutable/chunks/Popover.fdaa0a39.js","_app/immutable/chunks/Popper.fd021f8b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.7c99e60e.js","_app/immutable/chunks/navigation.92a9bd68.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.5f08ec41.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.3063ec3a.js"];
const stylesheets = ["_app/immutable/assets/2.5453771d.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/DarkMode.ba35437b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-843d281b.js.map
