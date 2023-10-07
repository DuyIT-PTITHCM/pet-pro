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
const component = async () => component_cache ??= (await import('./_page.svelte-0adc84a3.js')).default;
const server_id = "src/routes/(app)/gio-hang/+page.server.ts";
const imports = ["_app/immutable/nodes/12.4f5334fc.js","_app/immutable/chunks/scheduler.dd49014b.js","_app/immutable/chunks/index.cd74a8f5.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.32b2f881.js","_app/immutable/chunks/Checkbox.bdeeaf4f.js","_app/immutable/chunks/Input.765ef77c.js","_app/immutable/chunks/Wrapper.2ca84823.js","_app/immutable/chunks/TableHeadCell.a0a565d0.js"];
const stylesheets = ["_app/immutable/assets/12.9a3f5599.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-b303dc69.js.map
