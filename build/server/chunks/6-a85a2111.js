import { B as BASE_API } from './Const-2d750a93.js';

const load = async ({ fetch, params }) => {
  const url = params.url;
  try {
    const response = await fetch(`${BASE_API}/front/menu-detail/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
    return { ...data };
  } catch (error) {
    console.log(error);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4d99a53e.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/6.4c7d4e7a.js","_app/immutable/chunks/scheduler.aa61743c.js","_app/immutable/chunks/index.8779bb2d.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/Badge.47c4547f.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.ea3d09bf.js","_app/immutable/chunks/CloseButton.95ab74e8.js","_app/immutable/chunks/index.0afdc78d.js","_app/immutable/chunks/Button.b4fe983a.js","_app/immutable/chunks/Indicator.5d8b23f0.js","_app/immutable/chunks/Const.0f635b1d.js","_app/immutable/chunks/Icon.0610134f.js"];
const stylesheets = ["_app/immutable/assets/6.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-a85a2111.js.map
