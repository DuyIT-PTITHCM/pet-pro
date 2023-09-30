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
const component = async () => component_cache ??= (await import('./_page.svelte-7a099cfd.js')).default;
const universal_id = "src/routes/(dasboard)/admin/products/[id]/+page.ts";
const imports = ["_app/immutable/nodes/20.148caeb4.js","_app/immutable/chunks/scheduler.77cc2719.js","_app/immutable/chunks/index.817f31c9.js","_app/immutable/chunks/accounting.a66378d3.js","_app/immutable/chunks/_commonjsHelpers.de833af9.js","_app/immutable/chunks/loading.533478ce.js","_app/immutable/chunks/index.78e39730.js","_app/immutable/chunks/RepositoryFactory.6988031d.js","_app/immutable/chunks/Const.4ee2e7e1.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.83fc92f7.js","_app/immutable/chunks/Tabs.476ac91d.js","_app/immutable/chunks/CreateProduct.8743cd37.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/toastError.16628244.js","_app/immutable/chunks/Fileupload.861d719a.js","_app/immutable/chunks/Input.111a38c9.js","_app/immutable/chunks/CreateSeo.59455a40.js","_app/immutable/chunks/moment.fbc5633a.js","_app/immutable/chunks/Editor.64b0f011.js","_app/immutable/chunks/common.375e18e0.js"];
const stylesheets = ["_app/immutable/assets/20.e3b0c442.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=20-30f386b5.js.map
