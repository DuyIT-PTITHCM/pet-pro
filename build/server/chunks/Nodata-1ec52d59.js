import { c as create_ssr_component, v as validate_component } from './ssr-e41dcf02.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';

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
//# sourceMappingURL=Nodata-1ec52d59.js.map