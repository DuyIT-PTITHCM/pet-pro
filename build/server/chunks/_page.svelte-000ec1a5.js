import { v as validate_store, a as subscribe, h as is_promise, n as noop } from './utils-a4f7b281.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-e41dcf02.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { P as Products } from './Products-95ac428f.js';
import { H as HOST } from './Const-aff6847f.js';
import { B as Blogs } from './Blogs-f4901c95.js';
import { p as page } from './stores-7ed7e36a.js';
import { B as Button } from './Button-921a77e0.js';
import { C as CardPlaceholder } from './CardPlaceholder-bb34af7a.js';
import 'tailwind-merge';
import './Frame-775bdd72.js';
import './dev-1873bb41.js';
import './accounting-d72f8257.js';
import 'accounting';
import './CarouselCustom-0870ec24.js';
import 'siema';
import './index-92a6d03f.js';
import './cart-5baadeca.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';

const css$1 = {
  code: ".service-box.s-OQm4IrrQMTE7 .service-box_overlay.s-OQm4IrrQMTE7.s-OQm4IrrQMTE7{clip-path:circle(0% at 50% 0%);margin:0;border-radius:0}.service-box.s-OQm4IrrQMTE7:hover .service-box_overlay.s-OQm4IrrQMTE7.s-OQm4IrrQMTE7{clip-path:circle(100% at 50% 100%);animation:clip-path 1s}@keyframes s-OQm4IrrQMTE7-hoverAnimate{from{clip-path:polygon(100% 0, 18% 25%, 20% 83%, 100% 100%, 0 100%, 0% 60%, 0 0)}to{clip-path:polygon(100% 0, 100% 100%, 25% 85%, 100% 100%, 0 100%, 0% 60%, 0 0)}}.service-box.s-OQm4IrrQMTE7:hover>div.s-OQm4IrrQMTE7>.service-desc.s-OQm4IrrQMTE7{display:block}",
  map: null
};
async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { services = null } = $$props;
  let host = HOST;
  let imageWidth = 0;
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  $$result.css.add(css$1);
  return `${services ? `${each(services, (service, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <div class="service-box rounded-lg overflow-hidden dark:text-white relative s-OQm4IrrQMTE7" style="${"min-height: " + escape(imageWidth * 60 / 100, true) + "px; max-height: 220px"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", service.title, 0)} class="w-full h-full object-cover"> <div class="service-box_overlay absolute w-full h-full top-0 left-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 transition-all s-OQm4IrrQMTE7"></div> <div class="xl:p-4 p-2 absolute z-10 top-0 w-full h-full flex justify-center items-center flex-col dark:text-white s-OQm4IrrQMTE7"><h5 class="md:text-xl mb-4 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 p-2 px-4 rounded-full text-center line-clamp-2">${escape(service.title)}</h5> <div class="service-desc hidden s-OQm4IrrQMTE7"><p class="line-clamp-3 overflow-ellipsis text-justify relative mb-4">${escape(service.description)} </p></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: "/dich-vu/" + service.slug,
            color: "primary"
          },
          {},
          {
            default: () => {
              return `Xem thêm`;
            }
          }
        )} </div></div> `;
      }(__value);
    }(convertImageJsonToArray(service.imageUrl))}`;
  })}` : ``}`;
});
const css = {
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:0.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width 0.5s}.sidebar-menu.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:sticky;top:100px;left:0;height:100%;border-radius:8px}.height-100vh.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{height:100vh}",
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
  )}><meta property="twitter:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><!-- HEAD_svelte-cl2f5j_END -->`, ""} <div class="flex relative clear-both mb-10 mx-4 gap-4 m-auto"><div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white lg:block hidden height-100vh border-r-4 s-_m32SN5m6RSJ"><div class="w-full rounded-lg text-sm"><ul class="list-none">${data?.data.parent_id ? `<p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
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
  })}</ul>`}</div></div> <div class="w-full min-h-screen"><div class="">${data?.data && data?.data.parent_id ? `<div class="w-full">${data?.data.isShowDescription == true && isShowDescription == true && data?.data.description ? `<div class="flex items-center justify-center bg-no-repeat bg-cover bg-center h-[200px] w-full my-4 rounded-2xl" style="background-image: url(https://c4.wallpaperflare.com/wallpaper/276/711/743/silhouette-of-hills-above-water-wallpaper-preview.jpg)"><p class="font-bold text-white md:text-xl text-lg text-center m-4"><!-- HTML_TAG_START -->${data?.data.description}<!-- HTML_TAG_END --></p></div>` : ``} <h1 class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center dark:text-white">${validate_component(Icon, "Icon").$$render(
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
  })}` : ``}</div>` : `${data?.data.isShowDescription == true && isShowDescription == true && data?.data.description ? `<div class="flex items-center justify-center bg-no-repeat bg-cover bg-center h-[200px] w-full my-4 rounded-2xl" style="background-image: url(https://c4.wallpaperflare.com/wallpaper/276/711/743/silhouette-of-hills-above-water-wallpaper-preview.jpg)"><p class="font-bold text-white md:text-xl text-lg text-center m-4"><!-- HTML_TAG_START -->${data?.data.description}<!-- HTML_TAG_END --></p></div>` : ``} ${each(data?.data?.subMenus, (submenu) => {
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
//# sourceMappingURL=_page.svelte-000ec1a5.js.map
