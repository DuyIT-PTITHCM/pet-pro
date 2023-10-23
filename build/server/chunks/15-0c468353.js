import { B as BASE_API } from './Const-aff6847f.js';

const load = async ({ fetch, params }) => {
  const slug = params.slug;
  try {
    const response = await fetch(`${BASE_API}/front/service/${slug}`, {
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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-aa2df93b.js')).default;
const server_id = "src/routes/(app)/tin-tuc/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/15.d2d2f7ca.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/index.4ef71c6a.js","_app/immutable/chunks/HeaderPage.8e7b074b.js","_app/immutable/chunks/common.83329562.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.6f1e06b8.js","_app/immutable/chunks/SideMenuHeading.a4e27efc.js","_app/immutable/chunks/await_block.e9331cab.js","_app/immutable/chunks/SideRefercence.5e7609fb.js","_app/immutable/chunks/CardPlaceholder.fadd93ad.js","_app/immutable/chunks/Const.4ee2e7e1.js"];
const stylesheets = ["_app/immutable/assets/HeaderPage.c9383bc6.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-0c468353.js.map