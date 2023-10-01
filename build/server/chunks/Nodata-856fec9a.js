import { c as create_ssr_component, v as validate_component } from './ssr-8f3207f5.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';

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
//# sourceMappingURL=Nodata-856fec9a.js.map
