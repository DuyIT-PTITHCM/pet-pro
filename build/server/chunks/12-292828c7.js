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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f5cbae60.js')).default;
const server_id = "src/routes/(app)/dich-vu/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/12.0ab69b64.js","_app/immutable/chunks/scheduler.27637a5f.js","_app/immutable/chunks/index.30573ce1.js","_app/immutable/chunks/HeaderPage.9ede1a6d.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f6cfe440.js","_app/immutable/chunks/SideRefercence.cd1116d9.js","_app/immutable/chunks/await_block.8d853c36.js","_app/immutable/chunks/CardPlaceholder.0f4007c6.js","_app/immutable/chunks/Const.4ee2e7e1.js"];
const stylesheets = ["_app/immutable/assets/HeaderPage.c9383bc6.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-292828c7.js.map
