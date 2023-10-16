import { B as BASE_API } from './Const-aff6847f.js';

const load = async ({ fetch, params }) => {
  const url = params.url;
  try {
    const response = await fetch(`${BASE_API}/front/menu-detail/${url}`, {
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

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-707eaded.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.d5c1e329.js","_app/immutable/chunks/scheduler.55b91a48.js","_app/immutable/chunks/index.7e3b7554.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1776aff9.js","_app/immutable/chunks/Products.a6ff41fd.js","_app/immutable/chunks/await_block.ae6c5cfd.js","_app/immutable/chunks/Button.2f670aeb.js","_app/immutable/chunks/Frame.f89a1a9d.js","_app/immutable/chunks/CardPlaceholder.59aad9ca.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/CarouselCustom.4f5cecee.js","_app/immutable/chunks/index.da60e115.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cartAction.78d906fc.js","_app/immutable/chunks/cart.c0b90bce.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/toastError.0df01849.js","_app/immutable/chunks/Blogs.d4f6e268.js","_app/immutable/chunks/stores.3fcbaf98.js","_app/immutable/chunks/singletons.bbc2a345.js","_app/immutable/chunks/meta.4f2df1be.js","_app/immutable/chunks/Services.b61de7d6.js","_app/immutable/chunks/HeaderPage.31152418.js"];
const stylesheets = ["_app/immutable/assets/11.56e3a418.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/Products.43e52c3c.css","_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Services.28274980.css","_app/immutable/assets/HeaderPage.42128702.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-c24caa6f.js.map
