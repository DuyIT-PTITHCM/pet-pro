import { B as BASE_API } from './Const-3b06302f.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-14e6e00c.js')).default;
const server_id = "src/routes/(app)/[url]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.8e966a91.js","_app/immutable/chunks/scheduler.613da000.js","_app/immutable/chunks/index.bc9849b9.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.36677b55.js","_app/immutable/chunks/Products.09f19e01.js","_app/immutable/chunks/Button.c6fccbb1.js","_app/immutable/chunks/Frame.4d082458.js","_app/immutable/chunks/CarouselCustom.ae76ef17.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/index.4276579a.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/Const.9014b5a8.js"];
const stylesheets = ["_app/immutable/assets/11.065a3dea.css","_app/immutable/assets/Indicator.be78b448.css","_app/immutable/assets/CarouselCustom.c4897d6c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-54968df6.js.map
