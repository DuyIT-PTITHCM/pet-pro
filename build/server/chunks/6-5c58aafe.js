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
const component = async () => component_cache ??= (await import('./_page.svelte-86df5289.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/6.379d4b86.js","_app/immutable/chunks/scheduler.b1a2afd7.js","_app/immutable/chunks/index.9f1cadd2.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.ee486a56.js","_app/immutable/chunks/Button.4ae3939c.js","_app/immutable/chunks/Frame.61de88f1.js","_app/immutable/chunks/CarouselCustom.ea0946b2.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.c773b3be.js","_app/immutable/chunks/accounting.14438540.js"];
const stylesheets = ["_app/immutable/assets/6.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.6a4d809e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-5c58aafe.js.map
