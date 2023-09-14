import { c as create_ssr_component, a as add_attribute, v as validate_component } from './ssr-6197c9bb.js';
import './RepositoryFactory-e953311f.js';
import 'js-cookie';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-5ca2282a.js';
import { F as Fileupload } from './Fileupload-83b87f66.js';

function convertImageJsonToArray(json) {
  if (json) {
    return JSON.parse(json);
  }
  return [];
}
const CreateSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seoData } = $$props;
  let seo = seoData.seo;
  let file;
  file = seo.image;
  let images = convertImageJsonToArray(seoData.images);
  images ? images[0] : "";
  if ($$props.seoData === void 0 && $$bindings.seoData && seoData !== void 0)
    $$bindings.seoData(seoData);
  return `<div class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"><h1 class="text-[34px] py-[10px] uppercase text-center font-bold" data-svelte-h="svelte-pm1pk">seo edit</h1> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-58elpm">Meta Title</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Input Meta Description"${add_attribute("value", seo.metaTitle, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-17tjas6">Meta Description</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Meta Description "${add_attribute("value", seo.metaDescription, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-36069z">Keywords</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Input Meta keywords"${add_attribute("value", seo.keywords, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-gfbbjw">Canonical Url</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Innput Canonical Url "${add_attribute("value", seo.canonicalUrl, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-first-name" data-svelte-h="svelte-1bgqrnr">Robot MetaTags</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Input Meta Robot MetaTags"${add_attribute("value", seo.robotMetaTags, 0)}></div> <div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-10p5mek">Open GraphTags</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Innput Open GraphTags "${add_attribute("value", seo.openGraphTags, 0)}></div></div> <div class="-mx-3 md:flex mb-6"><div class="md:w-1/2 px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-last-name" data-svelte-h="svelte-fa596">Sitemap Frequency</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Innput Sitemap Frequency "${add_attribute("value", seo.sitemapFrequency, 0)}></div></div> <div><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip" data-svelte-h="svelte-1ynutco">Images</label> ${validate_component(Fileupload, "Fileupload").$$render($$result, { class: "w-24 py-[10px] bg-white" }, {}, {})} ${file ? `<div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]"><div class="relative"><img class="object-cover w-full h-[300px] rounded"${add_attribute("src", file, 0)} alt="avatar"> <div class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500">${validate_component(Icon, "Icon").$$render($$result, { icon: "iwwa:delete", width: "30" }, {}, {})}</div></div></div>` : ``}</div> <div class="flex justify-center items-center relative bottom-0"><div class="btn-signup w-fit"><button class="bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-4qjpvv">Submit</button></div></div></div>`;
});

export { CreateSeo as C };
//# sourceMappingURL=CreateSeo-90b0293c.js.map