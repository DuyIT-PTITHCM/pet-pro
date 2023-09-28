import { l as loadTranslations } from './index2-ac8c0d8d.js';
import './index-cefc8762.js';
import './utils-4ce9e277.js';

const load = async ({ url, locals }) => {
  const { pathname } = url;
  const { locale } = locals;
  await loadTranslations(locale, pathname);
  return {
    locale,
    lang: locale
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-6e08e9dc.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.8cbc1b06.js","_app/immutable/chunks/scheduler.613da000.js","_app/immutable/chunks/index.bc9849b9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-90176761.js.map
