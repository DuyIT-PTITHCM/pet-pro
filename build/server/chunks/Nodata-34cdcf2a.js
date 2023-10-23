import { c as create_ssr_component, v as validate_component } from './ssr-a6fe4ea2.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';

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
//# sourceMappingURL=Nodata-34cdcf2a.js.map
