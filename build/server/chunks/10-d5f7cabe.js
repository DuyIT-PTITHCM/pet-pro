const ssr = false;
const csr = true;

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  ssr: ssr
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2cca3fa4.js')).default;
const server_id = "src/routes/(dasboard)/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/10.bc096aa9.js","_app/immutable/chunks/scheduler.c3a7c5b6.js","_app/immutable/chunks/index.b8f63c33.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-d5f7cabe.js.map
