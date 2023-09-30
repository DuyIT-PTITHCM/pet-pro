import { B as BASE_API } from './Const-aff6847f.js';

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
    return { ...data };
  } catch (error) {
    console.log(error);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-766fb797.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.50e4cb8e.js","_app/immutable/chunks/scheduler.846bd575.js","_app/immutable/chunks/index.476cb9bd.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.b20ed39c.js","_app/immutable/chunks/Products.b03818d9.js","_app/immutable/chunks/Button.e5765ce7.js","_app/immutable/chunks/Frame.f5029491.js","_app/immutable/chunks/CarouselCustom.5448899b.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/index.940a98c5.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/Const.4ee2e7e1.js"];
const stylesheets = ["_app/immutable/assets/11.065a3dea.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.c4897d6c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-8d9373ad.js.map
