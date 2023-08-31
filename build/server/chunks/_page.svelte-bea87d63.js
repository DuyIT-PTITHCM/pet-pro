import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each } from './ssr-8dc8d8d7.js';
import { R as RepositoryFactory } from './RepositoryFactory-9fafbf3a.js';
import { l as loadingState } from './loading-83ba27d3.js';
import { F as Fileupload } from './Fileupload-3e3c4c71.js';
import { I as Input } from './Input-584a3dec.js';
import './utils-f848b3c2.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './index2-042bed90.js';
import 'tailwind-merge';
import './Wrapper-421d1d09.js';
import './dev-1873bb41.js';

const CreateProduct = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products } = $$props;
  let { title } = $$props;
  let { mode } = $$props;
  let categories = [], files = [];
  let queryParams = { type: "product" };
  const categoryService = RepositoryFactory.get("categoryRepository");
  async function getCategories() {
    loadingState.set(true);
    const res = await categoryService.get(queryParams);
    categories = res.data.data;
    loadingState.set(false);
  }
  getCategories();
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-screen"><h1 class="py-[10px] text-[34px]">${escape(title)}</h1> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name" data-svelte-h="svelte-690l2t">Product Name</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Cat Indo"${add_attribute("value", products.productName, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name" data-svelte-h="svelte-f7f1mi">Product Description</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Description for product"${add_attribute("value", products.description, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name" data-svelte-h="svelte-lpnyxd">Original Price</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="Input Original Price"${add_attribute("value", products.originalPrice, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name" data-svelte-h="svelte-18gdllq">Price</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="number" placeholder="Input Price"${add_attribute("value", products.price, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name" data-svelte-h="svelte-1ednzzm">Stock Quantity</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="Input Stock Quantity"${add_attribute("value", products.stockQuantity, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name" data-svelte-h="svelte-1ncetzz">Origin</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Input Origin"${add_attribute("value", products.origin, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name" data-svelte-h="svelte-dxvwek">Stock Discount</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="Input Stock Discount"${add_attribute("value", products.discount, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name" data-svelte-h="svelte-1044dxe">Slug</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Input Slug"${add_attribute("value", products.slug, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-full px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password" data-svelte-h="svelte-egyfdu">Note</label> <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here...">${escape(products.notes || "")}</textarea></div></div> <div class="-mx-3 md:flex mb-2"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state" data-svelte-h="svelte-123o4oy">Status</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"><option value="featured" data-svelte-h="svelte-1d6tysq">Featured</option><option value="best_selling" data-svelte-h="svelte-q4dcin">Best Selling</option><option value="normal" data-svelte-h="svelte-vjxtkm">Normal</option></select></div></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state" data-svelte-h="svelte-o6cna4">Type</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"><option value="pet" data-svelte-h="svelte-4gvq40">Pet</option><option value="accessory" data-svelte-h="svelte-z0732">Accessory</option><option value="medical_equipment" data-svelte-h="svelte-1v2ltc3">Medical Equipment</option></select></div></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip" data-svelte-h="svelte-1muu6jy">Category Products</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">${each(categories, (item, index) => {
      return `<option${add_attribute("value", item.id, 0)}>${escape(item.categoryName)}</option>`;
    })}</select></div></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip" data-svelte-h="svelte-1ltd6n">Expiration Date</label> <div class="relative">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "birthDate",
        type: "date",
        class: "block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded",
        max: new Date(Date.now()).toISOString().split("T")[0],
        value: products.expirationDate
      },
      {
        value: ($$value) => {
          products.expirationDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div> <div><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip" data-svelte-h="svelte-1bu5ihg">Images Products</label> ${validate_component(Fileupload, "Fileupload").$$render($$result, { class: "w-24 py-[10px] bg-white" }, {}, {})} <div class="grid grid-cols-4 gap-[10px]">${each(files, (path) => {
      return `<img class="object-contain w-full h-[400px] rounded-sm"${add_attribute("src", `http://103.142.26.42${path}`, 0)} alt="avatar">`;
    })}</div></div> <div class="flex justify-center items-center relative bottom-0"><div class="btn-signup w-fit"><button class="bg-black font-semibold text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-1e1yxvq">Submit</button></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mode = "create";
  let title = "Create Products";
  let products = {
    productName: null,
    description: null,
    price: null,
    originalPrice: null,
    stockQuantity: null,
    origin: null,
    notes: null,
    type: null,
    status: null,
    discount: null,
    slug: null,
    createdBy: 1,
    editedBy: 1,
    categoryId: null,
    images: "",
    expirationDate: null
  };
  return `${validate_component(CreateProduct, "CreateProduct").$$render($$result, { mode, products, title }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bea87d63.js.map
