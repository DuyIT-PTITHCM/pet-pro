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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d0f0bcd4.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/12.54a70609.js","_app/immutable/chunks/scheduler.613da000.js","_app/immutable/chunks/index.bc9849b9.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/meta.5f556b39.js","_app/immutable/chunks/index.4276579a.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.ae76ef17.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.36677b55.js","_app/immutable/chunks/Products.09f19e01.js","_app/immutable/chunks/Button.c6fccbb1.js","_app/immutable/chunks/Frame.4d082458.js","_app/immutable/chunks/Const.9014b5a8.js","_app/immutable/chunks/Modal.8854cff7.js","_app/immutable/chunks/Tabs.f3c5b36d.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-d87760aa.js.map
