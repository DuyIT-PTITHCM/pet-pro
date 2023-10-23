import { v as validate_store, a as subscribe } from './utils-6372ffc9.js';
import { c as create_ssr_component, e as escape } from './ssr-0d75b2b1.js';
import { p as page } from './stores-7e21b6f8.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-4c57e4f0.js.map
