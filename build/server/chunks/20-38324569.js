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
const component = async () => component_cache ??= (await import('./_page.svelte-0d7963c3.js')).default;
const universal_id = "src/routes/(dasboard)/admin/service/[id]/+page.ts";
const imports = ["_app/immutable/nodes/20.1f2851a6.js","_app/immutable/chunks/scheduler.17f854f6.js","_app/immutable/chunks/index.9074fff2.js","_app/immutable/chunks/meta.647f0049.js","_app/immutable/chunks/index.8692ab93.js","_app/immutable/chunks/loading.2fa600dc.js","_app/immutable/chunks/RepositoryFactory.b431bac8.js","_app/immutable/chunks/Const.9014b5a8.js","_app/immutable/chunks/cookieUtils.9487ed92.js","_app/immutable/chunks/axios.82afda87.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.9fd53eb3.js","_app/immutable/chunks/DeviceMockup.8853902d.js","_app/immutable/chunks/CreateSeo.fc2eb93a.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/toastError.75d8df4c.js","_app/immutable/chunks/Fileupload.e3431b68.js","_app/immutable/chunks/Input.de419b0f.js","_app/immutable/chunks/Wrapper.59e7f5d4.js","_app/immutable/chunks/CreateArticle.693151f0.js","_app/immutable/chunks/Editor.c986fd9a.js","_app/immutable/chunks/navigation.44f40659.js","_app/immutable/chunks/singletons.182e96b8.js"];
const stylesheets = ["_app/immutable/assets/17.e3b0c442.css","_app/immutable/assets/Indicator.be78b448.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=20-38324569.js.map
