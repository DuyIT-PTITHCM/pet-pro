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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1b715c9b.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/13.1bbb63d7.js","_app/immutable/chunks/scheduler.dd49014b.js","_app/immutable/chunks/index.cd74a8f5.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.05f6e77b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.32b2f881.js","_app/immutable/chunks/index.aa60b0fe.js","_app/immutable/chunks/Products.b2c3b402.js","_app/immutable/chunks/Button.49b347d3.js","_app/immutable/chunks/Frame.ca951f7d.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/Modal.261420cc.js","_app/immutable/chunks/Tabs.a8128794.js","_app/immutable/chunks/Hr.00cdf2b5.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-6be913f7.js.map
