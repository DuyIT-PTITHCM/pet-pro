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
const imports = ["_app/immutable/nodes/8.bd38b8ea.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/index.9d8dfa58.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f13b9a5c.js","_app/immutable/chunks/Button.3d93c54b.js","_app/immutable/chunks/Frame.a998ee6e.js","_app/immutable/chunks/CarouselCustom.eb73ba5a.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.27b064a4.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/8.ca9fdae8.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.6a4d809e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-330bdc5c.js.map
