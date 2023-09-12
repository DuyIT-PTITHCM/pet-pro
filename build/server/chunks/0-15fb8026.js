import { l as loadTranslations } from './index2-ea715c5b.js';
import './index-6d3e2f99.js';
import './utils-779d328f.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-f534079a.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.2e3480f0.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/index.9d8dfa58.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-15fb8026.js.map
