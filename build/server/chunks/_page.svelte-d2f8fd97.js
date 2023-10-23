import { c as create_ssr_component, e as escape, b as each } from './ssr-a6fe4ea2.js';
import 'jspdf-autotable';
import 'jspdf';
import './utils-22ec5563.js';

const css = {
  code: "h1.s-ztxcIfntkC3G{text-align:center}table.s-ztxcIfntkC3G{width:100%;border-collapse:collapse;margin-top:20px}table.s-ztxcIfntkC3G,th.s-ztxcIfntkC3G,td.s-ztxcIfntkC3G{border:1px solid #ccc}th.s-ztxcIfntkC3G,td.s-ztxcIfntkC3G{padding:8px;text-align:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date = (/* @__PURE__ */ new Date()).toLocaleDateString();
  let customerName = "John Doe";
  let items = [
    {
      id: 1,
      name: "Item 1",
      quantity: 2,
      price: 10.99
    },
    {
      id: 2,
      name: "Item 2",
      quantity: 1,
      price: 5.99
    },
    {
      id: 3,
      name: "Item 3",
      quantity: 3,
      price: 7.49
    }
  ];
  $$result.css.add(css);
  return `<div><h1 class="s-ztxcIfntkC3G" data-svelte-h="svelte-vad6gt">Bill</h1> <p>Date: ${escape(date)}</p> <p>Customer: ${escape(customerName)}</p> <table class="s-ztxcIfntkC3G"><thead><tr><th class="s-ztxcIfntkC3G" data-svelte-h="svelte-10q7b7t">Item</th> <th class="s-ztxcIfntkC3G" data-svelte-h="svelte-1t80j2j">Quantity</th> <th class="s-ztxcIfntkC3G" data-svelte-h="svelte-10p1pvt">Price</th> <th class="s-ztxcIfntkC3G" data-svelte-h="svelte-3jponc">Total</th></tr></thead> <tbody>${each(items, (item) => {
    return `<tr><td class="s-ztxcIfntkC3G">${escape(item.name)}</td> <td class="s-ztxcIfntkC3G">${escape(item.quantity)}</td> <td class="s-ztxcIfntkC3G">$${escape(item.price.toFixed(2))}</td> <td class="s-ztxcIfntkC3G">$${escape((item.quantity * item.price).toFixed(2))}</td> </tr>`;
  })}</tbody></table> <button data-svelte-h="svelte-13w3xec">Generate PDF</button> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d2f8fd97.js.map
