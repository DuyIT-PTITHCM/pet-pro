import { v as validate_store, a as subscribe } from './utils-22ec5563.js';
import { c as create_ssr_component, e as escape } from './ssr-a6fe4ea2.js';
import { p as page } from './stores-a1362188.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-3bef8497.js.map
