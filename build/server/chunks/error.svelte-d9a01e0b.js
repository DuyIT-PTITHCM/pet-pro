import { v as validate_store, a as subscribe } from './utils-a4f7b281.js';
import { c as create_ssr_component, e as escape } from './ssr-e41dcf02.js';
import { p as page } from './stores-7ed7e36a.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-d9a01e0b.js.map
