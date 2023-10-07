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
const component = async () => component_cache ??= (await import('./_page.svelte-38b05c7d.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.9235e711.js","_app/immutable/chunks/scheduler.dd49014b.js","_app/immutable/chunks/index.cd74a8f5.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.32b2f881.js","_app/immutable/chunks/Products.b2c3b402.js","_app/immutable/chunks/Button.49b347d3.js","_app/immutable/chunks/Frame.ca951f7d.js","_app/immutable/chunks/CarouselCustom.05f6e77b.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/index.aa60b0fe.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/stores.43659d5e.js","_app/immutable/chunks/singletons.2b9f25f5.js","_app/immutable/chunks/meta.a6624f35.js"];
const stylesheets = ["_app/immutable/assets/11.7a5b7904.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.c4897d6c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-dc98df13.js.map
