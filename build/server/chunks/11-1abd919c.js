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
const component = async () => component_cache ??= (await import('./_page.svelte-e2c74076.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.3f1904f1.js","_app/immutable/chunks/scheduler.1757bee3.js","_app/immutable/chunks/index.caaf1ae9.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1d93db1a.js","_app/immutable/chunks/Products.956ef2f7.js","_app/immutable/chunks/Button.1ffc646c.js","_app/immutable/chunks/Frame.7f646d6f.js","_app/immutable/chunks/CarouselCustom.c16f14af.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/index.8c678ffd.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/stores.df5b39ae.js","_app/immutable/chunks/singletons.c8c990c9.js","_app/immutable/chunks/meta.b7f01ce2.js"];
const stylesheets = ["_app/immutable/assets/11.065a3dea.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.c4897d6c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-1abd919c.js.map
