import { B as BASE_API } from './Const-3b06302f.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-b24c5da7.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/6.9d8b6494.js","_app/immutable/chunks/scheduler.b4686469.js","_app/immutable/chunks/index.07c1f1fe.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f378d887.js","_app/immutable/chunks/Button.a77eabb7.js","_app/immutable/chunks/Frame.ab1c870d.js","_app/immutable/chunks/CarouselCustom.90273e21.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.274e9e63.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/6.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.6a4d809e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-41249c40.js.map
