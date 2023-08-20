import { v as validate_store, s as subscribe } from './utils-5d10fb30.js';
import { c as create_ssr_component, e as escape } from './ssr-1bb711e0.js';
import { p as page } from './stores-bab03e3f.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-d95a2700.js.map
