import { l as loadTranslations } from './index2-72fa12bc.js';
import './index-1c7c9ace.js';
import './utils-9f8bdf1a.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-fa667444.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.b253b0a0.js","_app/immutable/chunks/scheduler.b4686469.js","_app/immutable/chunks/index.07c1f1fe.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-dbefd8fc.js.map
