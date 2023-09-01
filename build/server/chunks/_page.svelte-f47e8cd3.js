import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each } from './ssr-3f0a2cd3.js';
import { R as RepositoryFactory } from './RepositoryFactory-21209de9.js';
import { f as formatCurrency } from './accounting-f80bcef4.js';
import { l as loadingState } from './loading-52f589af.js';
import { F as Fileupload } from './Fileupload-d334f3b7.js';
import { I as Input } from './Input-92d522e1.js';
import './utils-88625f8a.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import 'accounting';
import './index3-0e91033a.js';
import 'tailwind-merge';
import './Wrapper-e0a5d677.js';
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
    $$rendered = `<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"><h1 class="text-[34px] py-[10px] uppercase text-center font-bold">${escape(title)}</h1> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-1ec8kr5">Product Name</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Cat Indo"${add_attribute("value", products.productName, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-1tx065q">Product Description</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Description for product"${add_attribute("value", products.description, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-1s7rmn1">Original Price</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="Input Original Price"${add_attribute("value", products.originalPrice, 0)}> <p class="text-[blue] text-xs italic">Original Price : ${escape(formatCurrency(products.originalPrice))}</p></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-178e67m">Price</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-last-name" type="number" placeholder="Input Price"${add_attribute("value", products.price, 0)}> <p class="text-[blue] text-xs italic">Price : ${escape(formatCurrency(products.price))}</p></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-19afkdp">Quantity In Stock</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="Input quantity in stock"${add_attribute("value", products.stockQuantity, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-1uw7zyu">The Origin</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Input The Origin"${add_attribute("value", products.origin, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-ybn0i1">% Discount</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" placeholder="Input % Discount"${add_attribute("value", products.discount, 0)}> <p class="text-[blue] text-xs italic" data-svelte-h="svelte-3zels8">Example : 10 = 10%</p></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-1f4m5sr">URL Product</label> <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-last-name" type="text" placeholder="con-cho-co"${add_attribute("value", products.slug, 0)}> <p class="text-[blue] text-xs italic" data-svelte-h="svelte-n4zx1w">Example : http://pet-pro/con-cho-co</p></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-full px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-password" data-svelte-h="svelte-vbc4wm">Note</label> <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here...">${escape(products.notes || "")}</textarea></div></div> <div class="-mx-3 md:flex mb-2"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-state" data-svelte-h="svelte-1fvdti">Status</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"><option value="featured" data-svelte-h="svelte-1d6tysq">Featured</option><option value="best_selling" data-svelte-h="svelte-q4dcin">Best Selling</option><option value="normal" data-svelte-h="svelte-vjxtkm">Normal</option></select></div></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-state" data-svelte-h="svelte-5nk4sg">Type</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state"><option value="pet" data-svelte-h="svelte-4gvq40">Pet</option><option value="accessory" data-svelte-h="svelte-z0732">Accessory</option><option value="medical_equipment" data-svelte-h="svelte-1v2ltc3">Medical Equipment</option></select></div></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-1w5otuq">Category Products</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">${each(categories, (item, index) => {
      return `<option${add_attribute("value", item.id, 0)}>${escape(item.categoryName)}</option>`;
    })}</select></div></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-zv1ooz">Expiration Date</label> <div class="relative">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "birthDate",
        type: "date",
        class: "block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded",
        value: products.expirationDate
      },
      {
        value: ($$value) => {
          products.expirationDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div> <div><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-1ww18fs">Images Products</label> ${validate_component(Fileupload, "Fileupload").$$render($$result, { class: "w-24 py-[10px] bg-white" }, {}, {})} <div class="grid grid-cols-4 gap-[10px]">${each(files, (path) => {
      return `<img class="object-contain w-full h-[400px] rounded-sm"${add_attribute("src", `http://103.142.26.42${path}`, 0)} alt="avatar">`;
    })}</div></div> <div class="flex justify-center items-center relative bottom-0"><div class="btn-signup w-fit"><button class="bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-1lncc0b">Submit</button></div></div></div>`;
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
//# sourceMappingURL=_page.svelte-f47e8cd3.js.map
