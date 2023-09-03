import { c as create_ssr_component, e as escape } from './ssr-4b2a575b.js';
import './utils-5762d6f4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>hello cac ban ${escape(data?.data.name)}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bbdb25ee.js.map
