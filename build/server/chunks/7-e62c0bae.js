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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-aea6b631.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/7.8df7c02f.js","_app/immutable/chunks/scheduler.b4686469.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.07c1f1fe.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-e62c0bae.js.map
