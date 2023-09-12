import { c as create_ssr_component, a as add_attribute, b as each, e as escape, v as validate_component } from './ssr-6197c9bb.js';
import { R as RepositoryFactory } from './RepositoryFactory-5f61db19.js';
import { l as loadingState } from './loading-561efc4f.js';
import { E as Editor_1 } from './Editor-da3639b3.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-5ca2282a.js';
import { F as Fileupload } from './Fileupload-83b87f66.js';

const CreateArticle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  let { queryParams } = $$props;
  article.reference = queryParams.type;
  let categories = [], files = [];
  const categoryService = RepositoryFactory.get("categoryRepository");
  async function getCategories() {
    loadingState.set(true);
    const res = await categoryService.get(queryParams);
    categories = res.data.data;
    loadingState.set(false);
  }
  async function init() {
    await getCategories();
  }
  init();
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.queryParams === void 0 && $$bindings.queryParams && queryParams !== void 0)
    $$bindings.queryParams(queryParams);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"><h1 class="text-[34px] py-[10px] uppercase text-center font-bold" data-svelte-h="svelte-7vcccx">Article</h1> <div class="-mx-3 md:flex mb-2"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-16p9crt">Title</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Input Meta Description"${add_attribute("value", article.title, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-cl2d7i">Author</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Meta Description "${add_attribute("value", article.author, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-11nj402">Category</label> <div class="relative"><select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700" id="grid-state">${each(categories, (item, index) => {
      return `<option${add_attribute("value", item.id, 0)}>${escape(item.categoryName)}</option>`;
    })}</select></div></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-full px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-password" data-svelte-h="svelte-gfp3vs">Description</label> <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here...">${escape(article.description || "")}</textarea></div></div> <div><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-dw1ms2">content</label> ${validate_component(Editor_1, "Editor").$$render(
      $$result,
      { text: article.content },
      {
        text: ($$value) => {
          article.content = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-1ynutco">Images</label> ${validate_component(Fileupload, "Fileupload").$$render($$result, { class: "w-24 py-[10px] bg-white" }, {}, {})} <div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]">${each(files, (path) => {
      return `<div class="relative"><img class="object-cover w-full h-[300px] rounded"${add_attribute("src", `http://103.142.26.42${path}`, 0)} alt="avatar"> <div class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500">${validate_component(Icon, "Icon").$$render($$result, { icon: "iwwa:delete", width: "30" }, {}, {})}</div> </div>`;
    })}</div></div> <div class="flex justify-center items-center relative bottom-0"><div class="btn-signup w-fit"><button class="bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-4qjpvv">Submit</button></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { CreateArticle as C };
//# sourceMappingURL=CreateArticle-d3c7ed77.js.map
