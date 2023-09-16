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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d4713c60.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/9.8ad6758a.js","_app/immutable/chunks/scheduler.17f854f6.js","_app/immutable/chunks/index.9074fff2.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.9fd53eb3.js","_app/immutable/chunks/Button.f37396ce.js","_app/immutable/chunks/Frame.b07ab63a.js","_app/immutable/chunks/CarouselCustom.db083cce.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.8692ab93.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/9.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.6a4d809e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-056b98d1.js.map
