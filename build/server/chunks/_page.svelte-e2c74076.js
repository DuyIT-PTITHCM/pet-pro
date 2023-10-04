import { v as validate_store, a as subscribe, h as is_promise, n as noop } from './utils-2dd7664d.js';
import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, a as each } from './ssr-8f3207f5.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { P as Products, C as CardPlaceholder } from './Products-eabc845f.js';
import { H as HOST } from './Const-aff6847f.js';
import { p as page } from './stores-52a8f225.js';
import './Button-27ef65c4.js';
import './dev-1873bb41.js';
import 'tailwind-merge';
import './Frame-f1b561b4.js';
import './accounting-d72f8257.js';
import 'accounting';
import './CarouselCustom-9634d1f6.js';
import 'siema';
import './index-3be464aa.js';

async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogs = null } = $$props;
  let host = HOST;
  let blogImages;
  let showReadMore = Array(1).fill(false);
  async function getImage(images) {
    blogImages = await convertImageJsonToArray(images);
    return blogImages;
  }
  if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0)
    $$bindings.blogs(blogs);
  return `${blogs ? `${each(blogs, (blog, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <div class="flex rounded-lg overflow-hidden border hover:opacity-80 hover:shadow-lg dark:text-white"><img${add_attribute("src", host + blogImages[0], 0)}${add_attribute("alt", blog.title, 0)} class="h-[200px] w-[300px] object-cover hover:scale-105 transition-all"> <div class="p-4"><h5>${escape(blog.title)}</h5> <p class="absolute line-clamp-5 overflow-ellipsis" id="${"blog" + escape(index, true)}"><span>${escape(blog.description)}</span> ${showReadMore[index] ? `<a href="/" class="absolute bg-white z-20 bottom-0">...<span class="text-blue-500" data-svelte-h="svelte-4wzc64">Xem thêm</span></a>` : ``}</p> </div></div> `;
      }();
    }(getImage(blog.imageUrl))}`;
  })}` : ``}`;
});
const css = {
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:0.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width 0.5s}.sidebar-menu.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:sticky;top:100px;left:0;height:100%}.height-100vh.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let isShowDescription = data.data.url == $page.params.url;
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
  )}><meta property="twitter:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><!-- HEAD_svelte-cl2f5j_END -->`, ""} <div class="flex relative gap-4 m-4 clear-both mb-10"><div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white md:block hidden height-100vh border-r border-gray-400 s-_m32SN5m6RSJ"><div class="w-full rounded-lg text-sm"><ul class="list-none">${data?.data.parent_id ? `<p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
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
  })}</ul>`}</div></div> <div class="w-full min-h-screen"><div class="">${data?.data.parent_id ? `<div class="w-full"><h1 class="uppercase text-3xl font-bold flex justify-center items-center p-3">${validate_component(Icon, "Icon").$$render(
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
  )}</h1> ${data?.data.isShowDescription == true && isShowDescription == true && data?.data.description ? `<h2 class="text-center text-2xl"><!-- HTML_TAG_START -->${data?.data.description}<!-- HTML_TAG_END --></h2>` : ``} <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white"> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "animate-bounce m-4",
      icon: "fluent-emoji-flat:kissing-cat"
    },
    {},
    {}
  )} <hr class="w-20 h-1 bg-slate-600 dark:bg-white"></div></div> <div class="grid grid-cols-1 gap-4">${each(data?.data?.categories, (category) => {
    return `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-xl font-bold flex items-center p-3">${escape(category.categoryName)}</h3> <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>`;
  })}</div>` : `${data?.data.isShowDescription == true && isShowDescription == true && data?.data.description ? `<h1 class="text-center text-3xl my-10"><!-- HTML_TAG_START -->${data?.data.description}<!-- HTML_TAG_END --></h1>` : ``} ${each(data?.data?.subMenus, (submenu) => {
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
    )}</h2> <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white"> ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "animate-bounce m-4",
        icon: "fluent-emoji-flat:kissing-cat"
      },
      {},
      {}
    )} <hr class="w-20 h-1 bg-slate-600 dark:bg-white"> </div></div> <div class="grid grid-cols-1 gap-4">${each(submenu?.categories, (category) => {
      return `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-xl font-bold flex items-center p-3">${escape(category.categoryName)}</h3> ${category.type == types[0] ? `<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>` : `${category.type == types[1] ? `<div class="grid md:grid-cols-2 grid-cols-1 gap-4">${validate_component(Blogs, "Blogs").$$render($$result, { blogs: category.posts }, {}, {})} </div>` : `${category.type == types[2] ? `<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" data-svelte-h="svelte-59fcwe">service
                                </div>` : ``}`}`}`;
    })} </div>`;
  })}`}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e2c74076.js.map
