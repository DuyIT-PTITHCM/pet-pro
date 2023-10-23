import { j as is_promise, n as noop } from './utils-22ec5563.js';
import { c as create_ssr_component, v as validate_component, b as each, e as escape, a as add_attribute } from './ssr-a6fe4ea2.js';
import { g as getHeading } from './common-f14333dd.js';
import './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import { twMerge } from 'tailwind-merge';

const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outDivclass;
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    xxl: "max-w-2xl"
  };
  let { divClass = "animate-pulse" } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  outDivclass = twMerge(sizes[size], divClass, $$props.class);
  return `<div role="status"${add_attribute("class", outDivclass, 0)}><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const SideMenuHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menus = [{ id: "", value: "" }];
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(Skeleton, "Skeleton").$$render($$result, { size: "sm", class: "my-8" }, {}, {})} `;
    }
    return function(res) {
      return ` <ul class="list-none leading-7 sm:text-base text-sm overflow-y-auto"><li class="uppercase text-base font-semibold border-b-2 dark:border-gray-600 mb-2 text-center p-3" data-svelte-h="svelte-1jbfhih">contents</li> ${each(menus, (item) => {
        return `<li><a href="${"#" + escape(item.id, true)}" class="line-clamp-1 text-blue-600 dark:text-blue-500 hover:text-primary-600 dark:hover:text-primary-500">${escape(item.value)}</a> </li>`;
      })}</ul> `;
    }();
  }(getHeading(menus))}`;
});

export { SideMenuHeading as S };
//# sourceMappingURL=SideMenuHeading-ffc38334.js.map
