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
const component = async () => component_cache ??= (await import('./_page.svelte-b13dba03.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/6.542e3d9c.js","_app/immutable/chunks/scheduler.958a5ebe.js","_app/immutable/chunks/index.7159b6c4.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/Badge.f82bc073.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.ea3d09bf.js","_app/immutable/chunks/CloseButton.e4f94aa3.js","_app/immutable/chunks/index.85a9bb98.js","_app/immutable/chunks/Button.e577b207.js","_app/immutable/chunks/Indicator.2ae550f8.js","_app/immutable/chunks/Const.0f635b1d.js","_app/immutable/chunks/Icon.b3b1d6d4.js"];
const stylesheets = ["_app/immutable/assets/6.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-9e8095af.js.map
