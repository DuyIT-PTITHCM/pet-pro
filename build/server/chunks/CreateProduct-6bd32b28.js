import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, a as each } from './ssr-8f3207f5.js';
import { R as RepositoryFactory } from './RepositoryFactory-9eb26519.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { l as loadingState } from './loading-3ab47950.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { F as Fileupload } from './Fileupload-ac4371a6.js';
import { I as Input } from './Input-c07b967b.js';
import { b as Textarea, T as Tabs, a as TabItem, C as CreateSeo } from './CreateSeo-421db383.js';
import moment from 'moment';
import 'js-cookie';
import { E as Editor_1 } from './Editor-4d94269c.js';

const CreatePost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postData } = $$props;
  let post = postData.post;
  if ($$props.postData === void 0 && $$bindings.postData && postData !== void 0)
    $$bindings.postData(postData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded flex flex-col p-4 h-full"><h1 class="text-[34px] py-[10px] uppercase text-center font-bold" data-svelte-h="svelte-2nzyp">Post edit</h1> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-16p9crt">Title</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Input Meta Description"${add_attribute("value", post.title, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-8nbljo">Author</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Meta Description "${add_attribute("value", post.author, 0)}></div></div> <div>${validate_component(Editor_1, "Editor").$$render(
      $$result,
      { text: post.content },
      {
        text: ($$value) => {
          post.content = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex justify-center items-center p-4"><div class="btn-signup w-fit"><button class="bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-4qjpvv">Submit</button></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const CreateProduct = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products } = $$props;
  let { title } = $$props;
  let { mode } = $$props;
  let categories = [], files = [];
  let queryParams = { type: "product" };
  let seo = {
    id: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    canonicalUrl: null,
    robotMetaTags: null,
    openGraphTags: null,
    structuredData: null,
    sitemapPriority: null,
    sitemapFrequency: null,
    sitemapLastModified: null,
    referenceId: mode == "modify" ? products.id : null,
    reference: "product"
  };
  let post = {
    id: null,
    title: "",
    content: "",
    author: "Admin Duy Dep Trai",
    referenceId: mode == "modify" ? products.id : null,
    reference: "product"
  };
  const categoryService = RepositoryFactory.get("categoryRepository");
  if (mode == "modify") {
    files = JSON.parse(products.images);
    products.expirationDate = moment(new Date(products.expirationDate)).format("yyyy-MM-DD");
    products.seo = products.seo ? products.seo : seo;
    products.post = products.post ? products.post : post;
  }
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
    $$rendered = `<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-white dark:bg-slate-800 dark:text-white shadow-md rounded p-4 h-full"><h1 class="text-[34px] py-[10px] uppercase text-center font-bold col-span-full">${escape(title)}</h1>  <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-1ec8kr5">Product Name</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Cat Indo"${add_attribute("value", products.productName, 0)}></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-1tx065q">Product Description</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Description for product"${add_attribute("value", products.description, 0)}></div>  <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-1s7rmn1">Original Price</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" min="10000" placeholder="Input Original Price"${add_attribute("value", products.originalPrice, 0)}> <p class="text-[blue] dark:text-white text-xs italic">Original Price : ${escape(formatCurrency(products.originalPrice))}</p></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-178e67m">Price</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-last-name" type="number" min="10000" placeholder="Input Price"${add_attribute("value", products.price, 0)}> <p class="text-[blue] dark:text-white text-xs italic">Price : ${escape(formatCurrency(products.price))}</p></div>  <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-19afkdp">Quantity In Stock</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" min="10000" placeholder="Input quantity in stock"${add_attribute("value", products.stockQuantity, 0)}></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-1uw7zyu">The Origin</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Input The Origin"${add_attribute("value", products.origin, 0)}></div>  <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-ybn0i1">% Discount</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="number" min="10000" placeholder="Input % Discount"${add_attribute("value", products.discount, 0)}> <p class="text-[blue] dark:text-white text-xs italic" data-svelte-h="svelte-pk97vf">Example : 10 = 10%</p></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-1f4m5sr">URL Product</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-last-name" type="text" placeholder="con-cho-co"${add_attribute("value", products.slug, 0)}> <p class="text-[blue] dark:text-white text-xs italic" data-svelte-h="svelte-1dtf1af">Example : http://pet-pro/con-cho-co</p></div>  <div class="md:w-full px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-password" data-svelte-h="svelte-vbc4wm">Note</label> ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        class: "bg-white border-gray-500",
        placeholder: "Write your thoughts here...",
        value: products.notes
      },
      {
        value: ($$value) => {
          products.notes = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-state" data-svelte-h="svelte-1fvdti">Status</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700" id="grid-state"><option value="featured" data-svelte-h="svelte-1d6tysq">Featured</option><option value="best_selling" data-svelte-h="svelte-q4dcin">Best Selling</option><option value="normal" data-svelte-h="svelte-vjxtkm">Normal</option></select></div></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-state" data-svelte-h="svelte-5nk4sg">Type</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700" id="grid-state"><option value="pet" data-svelte-h="svelte-4gvq40">Pet</option><option value="accessory" data-svelte-h="svelte-z0732">Accessory</option><option value="medical_equipment" data-svelte-h="svelte-1v2ltc3">Medical Equipment</option></select></div></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-1w5otuq">Category Products</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700" id="grid-state">${each(categories, (item, index) => {
      return `<option${add_attribute("value", item.id, 0)}>${escape(item.categoryName)}</option>`;
    })}</select></div></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-zv1ooz">Expiration Date</label> <div class="relative">${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "date",
        class: "block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700",
        min: new Date(Date.now()).toISOString().split("T")[0],
        value: products.expirationDate
      },
      {
        value: ($$value) => {
          products.expirationDate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>  <div class="col-span-full p-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-1ww18fs">Images Products</label> ${validate_component(Fileupload, "Fileupload").$$render($$result, { class: "w-24 py-[10px] bg-white" }, {}, {})} <div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]">${each(files, (path) => {
      return `<div class="relative"><img class="object-cover w-full h-[300px] rounded"${add_attribute("src", `http://103.142.26.42${path}`, 0)} alt="avatar"> <button class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500">${validate_component(Icon, "Icon").$$render($$result, { icon: "iwwa:delete", width: "30" }, {}, {})}</button> </div>`;
    })}</div></div> <div class="col-span-full flex justify-center"><div class="btn-signup w-fit"><button class="bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-1lncc0b">Submit</button></div></div> ${mode == "modify" ? `<div class="col-span-full">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        style: "none",
        contentClass: "bg-gray-50 dark:bg-slate-900 rounded-b-lg",
        activeClasses: "p-2 text-primary-500 bg-gray-100 rounded-t-lg dark:bg-slate-900 dark:text-primary-500",
        inactiveClasses: "p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
      },
      {},
      {
        default: () => {
          return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Seo" }, {}, {
            default: () => {
              return `${validate_component(CreateSeo, "CreateSeo").$$render(
                $$result,
                {
                  divClass: "grid md:grid-cols-3 grid-cols-2",
                  seoData: products
                },
                {
                  seoData: ($$value) => {
                    products = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Posts" }, {}, {
            default: () => {
              return `<div class="grid grid-cols-1 gap-5">${validate_component(CreatePost, "CreatePost").$$render(
                $$result,
                { postData: products },
                {
                  postData: ($$value) => {
                    products = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>`;
            }
          })}`;
        }
      }
    )}</div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { CreateProduct as C };
//# sourceMappingURL=CreateProduct-6bd32b28.js.map
