import { l as loadTranslations } from './index2-82740a48.js';
import './index-f06f6a44.js';
import './utils-5762d6f4.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-05d6b6dd.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.2d44fbc3.js","_app/immutable/chunks/scheduler.aa61743c.js","_app/immutable/chunks/index.8779bb2d.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-e8df7f7e.js.map