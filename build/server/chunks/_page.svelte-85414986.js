import { v as validate_store, a as subscribe } from './utils-a4f7b281.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-e41dcf02.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { P as Products } from './Products-41f3c1e2.js';
import { H as HOST } from './Const-aff6847f.js';
import { B as Blogs } from './Blogs-788f4d5e.js';
import { p as page } from './stores-7ed7e36a.js';
import { S as Services } from './Services-3950b709.js';
import './Button-921a77e0.js';
import './dev-1873bb41.js';
import 'tailwind-merge';
import './Frame-775bdd72.js';
import './CardPlaceholder-bb34af7a.js';
import './accounting-d72f8257.js';
import 'accounting';
import './CarouselCustom-0870ec24.js';
import 'siema';
import './index-92a6d03f.js';
import './cart-5baadeca.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';

const css = {
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:0.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width 0.5s}.sidebar-menu.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:sticky;top:100px;left:0;height:100%;border-radius:8px}.height-100vh.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  data.data.url == $page.params.url;
  var types = ["product", "blog", "service"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-cl2f5j_START -->${$$result.title = `<title>${escape(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name)}</title>`, ""}<meta name="description"${add_attribute(
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
  )}><meta property="twitter:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><!-- HEAD_svelte-cl2f5j_END -->`, ""}  <div class="flex relative clear-both mb-10 mx-4 gap-4 m-auto"><div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white lg:block hidden height-100vh border-r-4 s-_m32SN5m6RSJ"><div class="w-full rounded-lg text-sm"><ul class="list-none">${data?.data.parent_id ? `<p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}
                        Menus Referent
                        ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}</p> ${each(data?.data?.menuReferent, (menuReferent) => {
    return `${data?.data?.id != menuReferent ? `<li class="menu-item s-_m32SN5m6RSJ"><a class="${escape(
      menuReferent.url == data?.data.url ? "text-primary-600" : "",
      true
    ) + " block p-4 hover:text-primary-600 transition-all rounded-lg"}" href="${"/" + escape(menuReferent.url, true)}">${escape(menuReferent.name)}</a> <hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"> </li>` : ``}`;
  })}` : `<p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}
                        Menus
                        ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}</p> ${each(data?.data?.subMenus, (subMenu) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"/" + escape(subMenu.url, true)}">${escape(subMenu.name)}</a> <hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"> </li>`;
  })}`}</ul></div> <div class="w-full rounded-lg mt-4 text-sm">${data?.data.parent_id ? `<p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}
                        categories
                        ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}</p> <ul class="list-none">${each(data?.data?.categories, (category) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"#" + escape(category.id, true)}">${escape(category.categoryName)}</a> <hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"> </li>`;
  })}</ul>` : `<p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}
                    categories
                    ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-primary-600",
      icon: "fluent-emoji-high-contrast:paw-prints"
    },
    {},
    {}
  )}</p> <ul class="list-none">${each(data?.data?.categories, (category) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"#" + escape(category.id, true)}">${escape(category.categoryName)}</a> <hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"> </li>`;
  })}</ul>`}</div></div> <div class="w-full min-h-screen"><div class="">${data?.data && data?.data.parent_id ? `<div class="w-full"><h1 class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center dark:text-white">${validate_component(Icon, "Icon").$$render(
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
  )}</h1> <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white"> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "animate-bounce m-4",
      icon: "fluent-emoji-flat:kissing-cat"
    },
    {},
    {}
  )} <hr class="w-20 h-1 bg-slate-600 dark:bg-white"></div></div> <div class="grid grid-cols-1 gap-4">${data?.data?.categories.length ? `${each(data?.data?.categories, (category) => {
    return `${category.products.length || category.posts.length ? `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-lg font-bold flex items-center">${escape(category.categoryName)}</h3> ${category.type == types[0] ? `<div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>` : `${category.type == types[1] ? `<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Blogs, "Blogs").$$render($$result, { blogs: category.posts }, {}, {})} </div>` : `${category.type == types[2] ? `<div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">${validate_component(Services, "Services").$$render($$result, { services: category.posts }, {}, {})} </div>` : ``}`}`}` : ``}`;
  })}` : ``}</div>` : `${each(data?.data?.subMenus, (submenu) => {
    return `${submenu?.categories.length ? `<div class="w-full dark:text-white mt-8"><h3 class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center">${validate_component(Icon, "Icon").$$render(
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
    )}</h3> <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white"> ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "animate-bounce m-2",
        icon: "fluent-emoji-flat:kissing-cat"
      },
      {},
      {}
    )} <hr class="w-20 h-1 bg-slate-600 dark:bg-white"> </div></div> <div class="grid grid-cols-1 gap-4">${each(submenu?.categories, (category) => {
      return `${category.products.length || category.posts.length ? `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-lg font-bold flex items-center">${escape(category.categoryName)}</h3> ${category.type == types[0] ? `<div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>` : `${category.type == types[1] ? `<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Blogs, "Blogs").$$render($$result, { blogs: category.posts }, {}, {})} </div>` : `${category.type == types[2] ? `<div class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">${validate_component(Services, "Services").$$render($$result, { services: category.posts }, {}, {})} </div>` : ``}`}`}` : ``}`;
    })} </div>` : ``}`;
  })}`}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-85414986.js.map
