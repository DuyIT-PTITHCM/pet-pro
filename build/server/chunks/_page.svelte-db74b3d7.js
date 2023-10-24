import { v as validate_store, a as subscribe, h as is_promise, n as noop } from './utils-6372ffc9.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-0d75b2b1.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import { P as Products } from './Products-164fedf7.js';
import { H as HOST } from './Const-aff6847f.js';
import { twMerge } from 'tailwind-merge';
import { p as page } from './stores-7e21b6f8.js';
import { B as Button } from './Button-f3857e5c.js';
import { C as CardPlaceholder } from './CardPlaceholder-fc1839f9.js';
import { H as HeaderPage } from './HeaderPage-8537cafc.js';
import { s as sineIn } from './index4-e6d78c98.js';
import { C as CloseButton } from './CloseButton-884931ca.js';
import { D as Drawer } from './Drawer-4b350a16.js';
import './accounting-d72f8257.js';
import 'accounting';
import './CarouselCustom-13da9e94.js';
import 'siema';
import './index-62c253a0.js';
import './cart-7b7bbf72.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import './common-f14333dd.js';
import './dev-1873bb41.js';

const ImagePlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center" } = $$props;
  let { imgHeight = "48" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.imgHeight === void 0 && $$bindings.imgHeight && imgHeight !== void 0)
    $$bindings.imgHeight(imgHeight);
  return `<div role="status"${add_attribute("class", twMerge(divClass, $$props.class), 0)}><div class="${"flex justify-center items-center w-full h-" + escape(imgHeight, true) + " bg-gray-300 rounded sm:w-96 dark:bg-gray-700"}"><svg width="48" height="48" class="text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div class="w-full"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
async function convertImageJsonToArray$1(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogs = null } = $$props;
  let { isSmallBox = false } = $$props;
  let host = HOST;
  let serviceBoxWidth = 0;
  let blogImages;
  let showReadMore = Array(1).fill(false);
  async function getImage(images) {
    blogImages = await convertImageJsonToArray$1(images);
    return blogImages;
  }
  if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0)
    $$bindings.blogs(blogs);
  if ($$props.isSmallBox === void 0 && $$bindings.isSmallBox && isSmallBox !== void 0)
    $$bindings.isSmallBox(isSmallBox);
  return `${blogs ? `${each(blogs, (blog, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(ImagePlaceholder, "ImagePlaceholder").$$render($$result, {}, {}, {})}</div> `;
      }
      return function(res) {
        return ` <a data-sveltekit-reload href="${"/tin-tuc/" + escape(blog.slug, true)}" class="${"flex overflow-hidden dark:text-white max-h-[140px] " + escape(
          isSmallBox ? "py-4 hover:text-primary-500" : "rounded-lg border hover:shadow-lg ",
          true
        )}"><div class="overflow-hidden" style="${"width: " + escape(serviceBoxWidth * 30 / 100, true) + "px;"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full h-full object-cover hover:scale-105 transition-all"></div> <div class="${escape(isSmallBox ? "p-1" : "md:p-4 p-3", true) + " flex-1"}"><div class="flex flex-col justify-between items-start"><h3 class="${escape(
          isSmallBox ? "text-base line-clamp-3 text-justify " : "md:text-lg text-base line-clamp-2",
          true
        ) + " font-semibold"}">${escape(blog.title)}</h3> <p class="${escape(isSmallBox && "xl:hidden", true) + " md:text-base text-sm mt-1 line-clamp-2 text-justify relative overflow-hidden"}" id="${"blog" + escape(index, true)}"><span>${escape(blog.description)}</span> ${showReadMore[index] ? `<p class="absolute bg-white dark:bg-slate-800 z-20 bottom-0 right-0">...<span class="text-blue-500" data-svelte-h="svelte-w3kk2g">Xem thêm</span></p>` : ``} </p></div> </div></a> ${isSmallBox ? `<hr>` : ``} `;
      }(__value);
    }(getImage(blog.imageUrl))}`;
  })}` : ``}`;
});
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
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:0.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width 0.5s}@keyframes s-_m32SN5m6RSJ-moveX{0%{margin-left:0px}50%{margin-left:4px}100%{margin-left:0px}}.show-menu-icon.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:absolute;animation:s-_m32SN5m6RSJ-moveX 1s infinite}",
  map: null
};
function headingColor(title) {
  const len = title.length;
  const mid = Math.floor(len / 2);
  const firstPart = title.slice(0, mid);
  const secondPart = title.slice(mid);
  return firstPart + '<span class="text-yellow-400">' + secondPart + "</span>";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let isShowMenu = true;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let isShowDescription = data.data.url == $page.params.url;
  var types = ["product", "blog", "service"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-5rmvg0_START -->${$$result.title = `<title>${escape(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name)}</title>`, ""}<meta name="description"${add_attribute(
      "content",
      data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.description,
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
    )}><meta property="twitter:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><!-- HEAD_svelte-5rmvg0_END -->`, ""} ${data?.data.isShowDescription == true && isShowDescription == true && data?.data.description ? `${validate_component(HeaderPage, "HeaderPage").$$render(
      $$result,
      {
        title: data?.data.name,
        description: data?.data.description,
        isDescription: true,
        isShowTime: false,
        isBgOverlay: true
      },
      {},
      {}
    )}` : ``} <button class="${"fixed top-1/2 left-0 text-2xl dark:bg-white dark:text-black rounded-r-3xl p-2 ml-[-10px] z-[1000] bg-primary-600 text-white " + escape(!isShowMenu && "hidden", true) + " s-_m32SN5m6RSJ"}"><div class="show-menu-icon s-_m32SN5m6RSJ">${validate_component(Icon, "Icon").$$render($$result, { icon: "icon-park-outline:right" }, {}, {})}</div> <div class="opacity-0">${validate_component(Icon, "Icon").$$render($$result, { icon: "icon-park-outline:right" }, {}, {})}</div></button> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        transitionType: "fly",
        transitionParams,
        id: "sidebar1",
        hidden: isShowMenu
      },
      {
        hidden: ($$value) => {
          isShowMenu = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-4 font-semibold text-gray-500 dark:text-gray-400 text-lg">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "material-symbols:menu",
              class: "scale-125"
            },
            {},
            {}
          )}<span class="ml-2" data-svelte-h="svelte-1wem6w6">Menu</span></h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div> <div class="dark:text-white"><div class="text-sm"><ul class="list-none">${data?.data.parent_id ? `<p class="uppercase text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg ">${validate_component(Icon, "Icon").$$render(
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
          })}`}</ul></div> <div class="w-full rounded-lg mt-4 text-sm"><p class="uppercase text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">${validate_component(Icon, "Icon").$$render(
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
          })}</ul></div></div>`;
        }
      }
    )} <div class="container relative m-auto"><div class="w-full min-h-screen"><div class="">${data?.data && data?.data.parent_id ? `<div class="w-full mt-[40px]"><h1 class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center dark:text-white">${validate_component(Icon, "Icon").$$render(
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
      return `${category.products.length || category.posts.length ? `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-lg font-bold flex items-center mt-[20px]">${escape(category.categoryName)}</h3> ${category.type == types[0] ? `<div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>` : `${category.type == types[1] ? `<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Blogs, "Blogs").$$render($$result, { blogs: category.posts }, {}, {})} </div>` : `${category.type == types[2] ? `<div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">${validate_component(Services, "Services").$$render($$result, { services: category.posts }, {}, {})} </div>` : ``}`}`}` : ``}`;
    })}` : ``}</div>` : `${each(data?.data?.subMenus, (submenu) => {
      return `${submenu?.categories.length ? `<div class="w-full dark:text-white mt-[40px]"><h3 class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "text-primary-600",
          icon: "fluent-emoji-high-contrast:paw-prints"
        },
        {},
        {}
      )}<span class="mx-4"><!-- HTML_TAG_START -->${headingColor(submenu.name)}<!-- HTML_TAG_END --></span>${validate_component(Icon, "Icon").$$render(
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
      )} <hr class="w-20 h-1 bg-slate-600 dark:bg-white"> </div></div> <div class="grid grid-cols-1 gap-4 ">${each(submenu?.categories, (category) => {
        return `${category.products.length || category.posts.length ? `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-lg font-bold flex items-center mt-[20px]">${escape(category.categoryName)}</h3> ${category.type == types[0] ? `<div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">${validate_component(Products, "Products").$$render($$result, { products: category.products }, {}, {})} </div>` : `${category.type == types[1] ? `<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">${validate_component(Blogs, "Blogs").$$render($$result, { blogs: category.posts }, {}, {})} </div>` : `${category.type == types[2] ? `<div class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">${validate_component(Services, "Services").$$render($$result, { services: category.posts }, {}, {})} </div>` : ``}`}`}` : ``}`;
      })} </div>` : ``}`;
    })}`}</div></div></div> <div class="mb-[80px]"></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-db74b3d7.js.map
