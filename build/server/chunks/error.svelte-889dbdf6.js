import { v as validate_store, a as subscribe } from './utils-ea986cb1.js';
import { c as create_ssr_component, e as escape } from './ssr-ca1a55ab.js';
import { p as page } from './stores-d5d1c62c.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-889dbdf6.js.map
