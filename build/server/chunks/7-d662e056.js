import { B as BASE_API } from './Const-2d750a93.js';

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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-963ff84f.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/7.82cfa6f2.js","_app/immutable/chunks/scheduler.b1a2afd7.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.9f1cadd2.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-d662e056.js.map
