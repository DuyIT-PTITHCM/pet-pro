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
const component = async () => component_cache ??= (await import('./_page.svelte-f58c7b01.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/12.22a31937.js","_app/immutable/chunks/scheduler.1757bee3.js","_app/immutable/chunks/index.caaf1ae9.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.c16f14af.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1d93db1a.js","_app/immutable/chunks/index.8c678ffd.js","_app/immutable/chunks/Products.956ef2f7.js","_app/immutable/chunks/Button.1ffc646c.js","_app/immutable/chunks/Frame.7f646d6f.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/Modal.a0675d32.js","_app/immutable/chunks/Tabs.c6ef3358.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-cbceb6bc.js.map
