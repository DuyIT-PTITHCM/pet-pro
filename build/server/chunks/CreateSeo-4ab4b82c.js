import { c as compute_rest_props, v as validate_store, a as subscribe } from './utils-a4f7b281.js';
import { c as create_ssr_component, g as getContext, a as add_attribute, d as spread, h as escape_object, f as escape_attribute_value, e as escape, s as setContext, v as validate_component } from './ssr-e41dcf02.js';
import { w as writable } from './index-92a6d03f.js';
import { twMerge } from 'tailwind-merge';
import './RepositoryFactory-c6b355ca.js';
import 'js-cookie';
import { c as convertImageJsonToArray } from './common-0496d5da.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { F as Fileupload } from './Fileupload-f6d15a88.js';
import { T as Textarea } from './Textarea-677f2e1b.js';
import { t as t2 } from './index2-be839c26.js';

const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", twMerge("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button> ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li> `;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = twMerge(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul> ${divider ? `${slots.divider ? slots.divider({}) : ` <div class="h-px bg-gray-200 dark:bg-gray-700"></div> `}` : ``} <div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div> `;
});
const CreateSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { seoData } = $$props;
  let { divClass = "grid sm:grid-cols-2 grid-cols-1" } = $$props;
  let seo = seoData.seo;
  let file;
  file = seo.image;
  let images = convertImageJsonToArray(seoData.images);
  images ? images[0] : "";
  if ($$props.seoData === void 0 && $$bindings.seoData && seoData !== void 0)
    $$bindings.seoData(seoData);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${escape(divClass, true) + " bg-white dark:bg-slate-800 dark:text-white shadow-md rounded h-full"}"><h1 class="text-[34px] py-[10px] uppercase text-center font-bold col-span-full">${escape($t("seo.seoEdit"))}</h1>  <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="metaTitle">${escape($t("seo.metaTitle"))}</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="metaTitle" type="text" placeholder="Input Meta Description"${add_attribute("value", seo.metaTitle, 0)}></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="metaDescription">${escape($t("seo.metaDescription"))}</label> ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        class: "appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4",
        id: "metaDescription",
        type: "text",
        placeholder: "Meta Description ",
        value: seo.metaDescription
      },
      {
        value: ($$value) => {
          seo.metaDescription = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="keywords">${escape($t("seo.keywords"))}</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="keywords" type="text" placeholder="Input Meta keywords"${add_attribute("value", seo.keywords, 0)}></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="canonicalUrl">${escape($t("seo.canonicalUrl"))}</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="canonicalUrl" type="text" placeholder="Innput Canonical Url "${add_attribute("value", seo.canonicalUrl, 0)}></div> <div class="px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="robotMetaTags">${escape($t("seo.robotMetatags"))}</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="robotMetaTags" type="text" placeholder="Input Meta Robot MetaTags"${add_attribute("value", seo.robotMetaTags, 0)}></div> <div class="px-3"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="sitemapFrequency">${escape($t("seo.sitemapFrequency"))}</label> <input class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="sitemapFrequency" type="text" placeholder="Innput Sitemap Frequency "${add_attribute("value", seo.sitemapFrequency, 0)}></div>  <div class="px-3 col-span-full"><label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]" for="grid-zip">${escape($t("common.images"))}</label> ${validate_component(Fileupload, "Fileupload").$$render($$result, { class: "w-24 py-[10px] bg-white" }, {}, {})} ${file ? `<div class="py-[20px]"><div class="relative"><img class="object-cover w-full h-[300px] rounded"${add_attribute("src", file, 0)} alt="avatar"> <button class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500">${validate_component(Icon, "Icon").$$render($$result, { icon: "iwwa:delete", width: "30" }, {}, {})}</button></div></div>` : ``}</div> <div class="col-span-full flex justify-center items-center relative mb-4"><div class="btn-signup w-fit"><button class="bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]" data-svelte-h="svelte-4qjpvv">Submit</button></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { CreateSeo as C, Tabs as T, TabItem as a };
//# sourceMappingURL=CreateSeo-4ab4b82c.js.map
