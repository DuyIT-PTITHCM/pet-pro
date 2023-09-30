import { B as BASE_API } from './Const-aff6847f.js';

const load = async ({ fetch, params }) => {
  const slug = params.slug;
  try {
    const response = await fetch(`${BASE_API}/front/product/${slug}`, {
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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-dd4d3abc.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/12.6f97f182.js","_app/immutable/chunks/scheduler.77cc2719.js","_app/immutable/chunks/index.817f31c9.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.1d5e68c3.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.83fc92f7.js","_app/immutable/chunks/index.78e39730.js","_app/immutable/chunks/Products.981b0cee.js","_app/immutable/chunks/Button.6ead5fa1.js","_app/immutable/chunks/Frame.777127f7.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/Modal.f9b0662f.js","_app/immutable/chunks/Tabs.476ac91d.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-1165a9b5.js.map
