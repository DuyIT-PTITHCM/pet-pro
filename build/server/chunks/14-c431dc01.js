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

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d70c5f3e.js')).default;
const server_id = "src/routes/(app)/san-pham/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/14.a0be35bd.js","_app/immutable/chunks/scheduler.55b91a48.js","_app/immutable/chunks/index.7e3b7554.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/cartAction.78d906fc.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cart.c0b90bce.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/index.da60e115.js","_app/immutable/chunks/toastError.0df01849.js","_app/immutable/chunks/CarouselCustom.4f5cecee.js","_app/immutable/chunks/Products.a6ff41fd.js","_app/immutable/chunks/await_block.ae6c5cfd.js","_app/immutable/chunks/Button.2f670aeb.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.1776aff9.js","_app/immutable/chunks/Frame.f89a1a9d.js","_app/immutable/chunks/CardPlaceholder.59aad9ca.js","_app/immutable/chunks/Modal.6a70786f.js","_app/immutable/chunks/CloseButton.11b5e26d.js","_app/immutable/chunks/Hr.b146ea1e.js"];
const stylesheets = ["_app/immutable/assets/CarouselCustom.c4897d6c.css","_app/immutable/assets/Products.43e52c3c.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-c431dc01.js.map
