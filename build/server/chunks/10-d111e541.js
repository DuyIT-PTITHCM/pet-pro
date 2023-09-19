import { B as BASE_API } from './Const-3b06302f.js';

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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2d1c21e0.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/10.9c16853f.js","_app/immutable/chunks/scheduler.a17acf7c.js","_app/immutable/chunks/index.8874627e.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/accounting.14438540.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/CarouselCustom.9e26459a.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.caff1904.js","_app/immutable/chunks/index.0eb19cf3.js","_app/immutable/chunks/Products.2b377d7a.js","_app/immutable/chunks/Button.8067aebc.js","_app/immutable/chunks/Frame.97acffa6.js","_app/immutable/chunks/Const.9014b5a8.js","_app/immutable/chunks/Modal.9aa03073.js","_app/immutable/chunks/Tabs.ae03dff6.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-d111e541.js.map
