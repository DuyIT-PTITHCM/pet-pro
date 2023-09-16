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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9cd786c5.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.eb987ec0.js","_app/immutable/chunks/scheduler.c3a7c5b6.js","_app/immutable/chunks/index.b8f63c33.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.44558637.js","_app/immutable/chunks/Button.49ab4b1b.js","_app/immutable/chunks/Frame.5fe0b867.js","_app/immutable/chunks/CarouselCustom.9c900eae.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.14e22bab.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/8.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.6a4d809e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-c27ec112.js.map
