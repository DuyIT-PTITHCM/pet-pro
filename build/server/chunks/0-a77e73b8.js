import { l as loadTranslations } from './index2-5c5bda06.js';
import './index-3be464aa.js';
import './utils-2dd7664d.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-4e17cc9e.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.e940abfd.js","_app/immutable/chunks/scheduler.c3a7c5b6.js","_app/immutable/chunks/index.b8f63c33.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-a77e73b8.js.map