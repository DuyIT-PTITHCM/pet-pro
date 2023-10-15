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

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-22fcae62.js')).default;
const server_id = "src/routes/(app)/tin-tuc/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/16.25d657ac.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/index.c6264268.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Blogs.45354544.js","_app/immutable/chunks/await_block.65442e8f.js","_app/immutable/chunks/Button.15a7e48e.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.fa008dc3.js","_app/immutable/chunks/CardPlaceholder.90d3a433.js","_app/immutable/chunks/Const.4ee2e7e1.js"];
const stylesheets = ["_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-ae860128.js.map
