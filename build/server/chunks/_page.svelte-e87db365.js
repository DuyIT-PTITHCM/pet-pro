import { c as create_ssr_component, e as escape, b as add_attribute, a as each, v as validate_component } from './ssr-8f3207f5.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { P as Products } from './Products-adaa2f0e.js';
import { H as HOST } from './Const-3b06302f.js';
import './utils-2dd7664d.js';
import './Button-27ef65c4.js';
import './dev-1873bb41.js';
import 'tailwind-merge';
import './Frame-f1b561b4.js';
import './accounting-d72f8257.js';
import 'accounting';
import './CarouselCustom-9634d1f6.js';
import 'siema';
import './index-3be464aa.js';

const css = {
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width .5s}.sidebar-menu.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:sticky;top:100px;left:0;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-pfagqq_START -->${$$result.title = `<title>${escape(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name)}</title>`, ""}<meta name="description"${add_attribute(
    "content",
    data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name,
    0
  )}><meta name="keywords"${add_attribute(
    "content",
    data?.data?.seo?.keywords ? data?.data?.seo?.keywords : data?.data.name,
    0
  )}><link rel="canonical"${add_attribute(
    "href",
    data?.data?.seo?.canonicalUrl ? data?.data?.seo?.canonicalUrl : HOST + data?.data.slug,
    0
  )}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + data?.data?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute(
    "content",
    data?.data?.seo?.sitemapPriority ? data?.data?.seo?.sitemapPriority : "",
    0
  )}><meta name="sitemap_frequency"${add_attribute(
    "content",
    data?.data?.seo?.sitemapFrequency ? data?.data?.seo?.sitemapFrequency : "always",
    0
  )}><meta property="og:title"${add_attribute(
    "content",
    data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name,
    0
  )}><meta property="og:description"${add_attribute(
    "content",
    data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name,
    0
  )}><meta property="og:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><meta property="twitter:title"${add_attribute(
    "content",
    data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name,
    0
  )}><meta property="twitter:description"${add_attribute(
    "content",
    data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name,
    0
  )}><meta property="twitter:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><!-- HEAD_svelte-pfagqq_END -->`, ""} <div class="flex relative gap-4 m-4 clear-both mb-10"><div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white md:block hidden s-_m32SN5m6RSJ"><div class="w-full rounded-lg border text-sm"><ul class="list-none">${data?.data.parent_id ? `<p class="text-center p-4" data-svelte-h="svelte-1vmwz62">Menus Referent</p> ${each(data?.data?.menuReferent, (menuReferent) => {
    return `${data?.data?.id != menuReferent ? `<li class="menu-item s-_m32SN5m6RSJ"><a class="${escape(
      menuReferent.url == data?.data.url ? "text-primary-600" : "",
      true
    ) + " block p-4 hover:text-primary-600 transition-all rounded-lg"}" href="${"/" + escape(menuReferent.url, true)}">${escape(menuReferent.name)}</a><hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"></li>` : ``}`;
  })}` : `<p class="text-center p-4" data-svelte-h="svelte-53f7kj">Menus</p> ${each(data?.data?.subMenus, (subMenu) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"/" + escape(subMenu.url, true)}">${escape(subMenu.name)}</a><hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"></li>`;
  })}`}</ul></div> <div class="w-full rounded-lg mt-4 border text-sm">${data?.data.parent_id ? `<p class="text-center p-4" data-svelte-h="svelte-12res13">categories</p> <ul class="list-none">${each(data?.data?.categories, (category) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"#" + escape(category.id, true)}">${escape(category.categoryName)}</a><hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"></li>`;
  })}</ul>` : `<p class="text-center p-4" data-svelte-h="svelte-12res13">categories</p> <ul class="list-none">${each(data?.data?.categories, (category) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"#" + escape(category.id, true)}">${escape(category.categoryName)}</a><hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"></li>`;
  })}</ul>`}</div></div> <div class="w-full min-h-screen"><div class="">${data?.data.parent_id ? `<div class="w-full"><h2 class="uppercase text-3xl font-bold flex justify-center items-center p-3">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}<span class="mx-4">${escape(data?.data.name)}</span>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}</h2> ${data?.data.isShowDescription == true ? `<p>${escape(data?.data.description)}</p>` : ``} <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "animate-bounce m-4",
      icon: "fluent-emoji-flat:kissing-cat"
    },
    {},
    {}
  )}<hr class="w-20 h-1 bg-slate-600 dark:bg-white"></div></div> <div class="grid grid-cols-1 gap-4">${each(data?.data?.categories, (category) => {
    return `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-xl font-bold flex items-center p-3">category ${escape(category.categoryName)}</h3> <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>`;
  })}</div>` : `${each(data?.data?.subMenus, (submenu) => {
    return `<div class="w-full dark:text-white mt-5"><h2 class="uppercase text-3xl font-bold flex justify-center items-center p-3">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "text-primary-600",
        icon: "fluent-emoji-high-contrast:paw-prints"
      },
      {},
      {}
    )}<span class="mx-4">${escape(submenu.name)}</span>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "text-primary-600",
        icon: "fluent-emoji-high-contrast:paw-prints"
      },
      {},
      {}
    )}</h2> ${submenu.isShowDescription == true ? `<p>${escape(submenu.description)}</p>` : ``} <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "animate-bounce m-4",
        icon: "fluent-emoji-flat:kissing-cat"
      },
      {},
      {}
    )}<hr class="w-20 h-1 bg-slate-600 dark:bg-white"></div></div> <div class="grid grid-cols-1 gap-4">${each(submenu?.categories, (category) => {
      return `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-xl font-bold flex items-center p-3">category ${escape(category.categoryName)}</h3> <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>`;
    })} </div>`;
  })}`}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e87db365.js.map
