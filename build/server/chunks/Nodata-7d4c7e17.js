import { c as create_ssr_component, v as validate_component } from './ssr-0d75b2b1.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';

const Nodata = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[300px] flex justify-center items-center">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:null-off",
      color: "gray",
      width: "50",
      height: "50"
    },
    {},
    {}
  )}No Data</div>`;
});

export { Nodata as N };
//# sourceMappingURL=Nodata-7d4c7e17.js.map
