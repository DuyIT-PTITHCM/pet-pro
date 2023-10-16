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
const component = async () => component_cache ??= (await import('./_page.svelte-c31ef9f4.js')).default;
const server_id = "src/routes/(app)/tin-tuc/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/15.ec4321b6.js","_app/immutable/chunks/scheduler.55b91a48.js","_app/immutable/chunks/index.7e3b7554.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Blogs.d4f6e268.js","_app/immutable/chunks/await_block.ae6c5cfd.js","_app/immutable/chunks/Button.2f670aeb.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1776aff9.js","_app/immutable/chunks/CardPlaceholder.59aad9ca.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/HeaderPage.31152418.js"];
const stylesheets = ["_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/HeaderPage.42128702.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-38814079.js.map
