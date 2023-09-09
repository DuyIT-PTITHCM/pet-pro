import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute } from './ssr-4b2a575b.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-29f6d43e.js';
import { B as Button } from './Button-a8eddc8d.js';
import { c as compute_rest_props } from './utils-5762d6f4.js';
import { twMerge } from 'tailwind-merge';
import { F as Frame } from './Frame-e6a6c173.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { C as CarouselCustom } from './CarouselCustom-a135b1ce.js';
import './dev-1873bb41.js';
import 'accounting';
import 'siema';
import './index-f06f6a44.js';

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerPadding;
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-6 md:p-8",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPadding,
    $$props.class
  );
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-r-lg" : "md:rounded-l-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
function convertImageJsonToArray(json) {
  if (json) {
    return JSON.parse(json);
  }
  return [];
}
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products } = $$props;
  let host = "http://103.142.26.42";
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${each(products, (product) => {
    return `<div class="relative">${product.discount > 0 ? `<div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">${escape(product.discount)}% discount
        </div>` : ``} ${validate_component(Card, "Card").$$render($$result, { class: "min-w-full", padding: "none" }, {}, {
      default: () => {
        return ` ${validate_component(CarouselCustom, "CarouselCustom").$$render(
          $$result,
          {
            perPage: 1,
            autoplay: 4e3,
            duration: 400
          },
          {},
          {
            default: () => {
              return `${each(convertImageJsonToArray(product?.images), (path, i) => {
                return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="rounded-xl w-full mb-4 h-[400px] object-cover"${add_attribute("alt", product?.name, 0)}>`;
              })} `;
            }
          }
        )} <div class="px-5 pb-5"><a href="${"/san-pham/" + escape(product.slug, true)}"><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4">${escape(product?.productName)}</h5> <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px]">${escape(product.description)}</p></a> <div class="flex justify-between items-center"><span class="text-xl font-bold text-gray-900 dark:text-white">${escape(formatCurrency(product?.price))}</span></div> <div class="flex float-right">${validate_component(Button, "Button").$$render($$result, { class: "mr-1 text-2xl", href: "/" }, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { icon: "solar:cart-3-bold" }, {}, {})}`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { class: "text-2xl", href: "/" }, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { icon: "fa6-solid:cart-plus" }, {}, {})}`;
          }
        })} </div></div> `;
      }
    })} </div>`;
  })}`;
});
const css = {
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width .5s}.sidebar-menu.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:sticky;top:100px;left:0;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="flex relative gap-4 m-4 clear-both mb-10"><div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white md:block hidden s-_m32SN5m6RSJ"><div class="w-full rounded-lg border"><ul class="list-none">${data?.data.parent_id ? `<p class="text-center p-4" data-svelte-h="svelte-1vmwz62">Menus Referent</p> ${each(data?.data?.menuReferent, (menuReferent) => {
    return `${data?.data?.id != menuReferent ? `<li class="menu-item s-_m32SN5m6RSJ"><a class="${escape(
      menuReferent.url == data?.data.url ? "text-primary-600" : "",
      true
    ) + " block p-4 hover:text-primary-600 transition-all rounded-lg"}" href="${"/" + escape(menuReferent.url, true)}">${escape(menuReferent.name)}</a><hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"></li>` : ``}`;
  })}` : `<p class="text-center p-4" data-svelte-h="svelte-53f7kj">Menus</p> ${each(data?.data?.subMenus, (subMenu) => {
    return `<li class="menu-item s-_m32SN5m6RSJ"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="${"/" + escape(subMenu.url, true)}">${escape(subMenu.name)}</a><hr class="line-hover h-[4px] bg-black transition-all s-_m32SN5m6RSJ"></li>`;
  })}`}</ul></div> <div class="w-full rounded-lg mt-4 border">${data?.data.parent_id ? `<p class="text-center p-4" data-svelte-h="svelte-12res13">categories</p> <ul class="list-none">${each(data?.data?.categories, (category) => {
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
//# sourceMappingURL=_page.svelte-86df5289.js.map
