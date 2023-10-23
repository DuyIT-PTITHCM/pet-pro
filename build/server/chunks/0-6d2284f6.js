import { l as loadTranslations } from './index2-e28c90c4.js';
import './index-eecbf3f9.js';
import './utils-22ec5563.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-2457e640.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.9c3a2366.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/index.4ef71c6a.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-6d2284f6.js.map
