const load = ({ params }) => {
  return {
    id: params?.id
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-279db74f.js')).default;
const universal_id = "src/routes/(dasboard)/admin/products/[id]/+page.ts";
const imports = ["_app/immutable/nodes/20.aa003b40.js","_app/immutable/chunks/scheduler.a17acf7c.js","_app/immutable/chunks/index.8874627e.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/loading.1f962269.js","_app/immutable/chunks/index.0eb19cf3.js","_app/immutable/chunks/RepositoryFactory.d316e1f7.js","_app/immutable/chunks/Const.9014b5a8.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.caff1904.js","_app/immutable/chunks/DeviceMockup.97a1f34d.js","_app/immutable/chunks/Tabs.ae03dff6.js","_app/immutable/chunks/CreateProduct.c76e7418.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/toastError.c8fd0228.js","_app/immutable/chunks/Fileupload.62016604.js","_app/immutable/chunks/Input.51977b27.js","_app/immutable/chunks/CreateSeo.e5c3a0f9.js","_app/immutable/chunks/moment.fbc5633a.js","_app/immutable/chunks/Editor.b0e41cb3.js"];
const stylesheets = ["_app/immutable/assets/20.e3b0c442.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=20-a7b20578.js.map
