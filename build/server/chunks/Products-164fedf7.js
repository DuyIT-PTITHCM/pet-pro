import { h as is_promise, n as noop, c as compute_rest_props } from './utils-6372ffc9.js';
import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute } from './ssr-0d75b2b1.js';
import { B as Button } from './Button-f3857e5c.js';
import { twMerge } from 'tailwind-merge';
import { F as Frame } from './CloseButton-884931ca.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import { C as CardPlaceholder } from './CardPlaceholder-fc1839f9.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { C as CarouselCustom } from './CarouselCustom-13da9e94.js';
import { H as HOST } from './Const-aff6847f.js';
import './cart-7b7bbf72.js';
import 'js-cookie';
import { c as convertImageJsonToArray } from './common-f14333dd.js';

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
const css = {
  code: ".product-name.s-WM1lf3qkyE25{line-height:1.2}",
  map: null
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = null } = $$props;
  let host = HOST;
  let imageWidth = 0;
  async function getProductImage(images) {
    images = await convertImageJsonToArray(images);
    return images;
  }
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  $$result.css.add(css);
  return `${products ? `${each(products, (product) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <div class="relative">${product.discount > 0 ? `<div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">-${escape(product.discount)}%
                </div>` : ``} ${validate_component(Card, "Card").$$render(
          $$result,
          {
            class: "min-w-full overflow-hidden",
            padding: "none"
          },
          {},
          {
            default: () => {
              return `<div class="w-full overflow-hidden" style="${"height: " + escape(imageWidth * 70 / 100, true) + "px;"}">${res.length > 1 ? `${validate_component(CarouselCustom, "CarouselCustom").$$render($$result, { perPage: 1, duration: 400 }, {}, {
                default: () => {
                  return `${each(res, (path, i) => {
                    return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="w-full h-full object-cover"${add_attribute("alt", product?.productName, 0)}>`;
                  })} `;
                }
              })}` : `<img${add_attribute("src", !res[0] ? "/images/logo.png" : `${host}/` + res[0], 0)} class="w-full h-full object-cover"${add_attribute("alt", product?.productName, 0)}>`}</div> <div class="px-3 pb-3"><a data-sveltekit-reload href="${"/san-pham/" + escape(product.slug, true)}" class="block min-h-[72px] pt-2"><h4 class="product-name mb-1 sm:text-base text-sm font-semibold line-clamp-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500 s-WM1lf3qkyE25">${escape(product?.productName)}</h4> <p class="sm:text-sm text-xs text-gray-900 dark:text-white line-clamp-1 hover:text-primary-600 dark:hover:text-primary-500">${escape(product.description)}</p></a> <div class="flex justify-between my-3">${product.discount > 0 ? `<del>${escape(formatCurrency(product?.originprice))}</del>` : `<del></del>`} <span class="text-md font-bold text-primary-600 dark:text-white">${escape(formatCurrency(product?.price))}</span></div> <div class="flex justify-between">${validate_component(Button, "Button").$$render($$result, { outline: true, class: "text-xl" }, {}, {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render($$result, { icon: "solar:cart-3-bold" }, {}, {})}`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { outline: true, class: "text-xl" }, {}, {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render($$result, { icon: "fa6-solid:cart-plus" }, {}, {})}`;
                }
              })} </div></div> `;
            }
          }
        )}</div> `;
      }(__value);
    }(getProductImage(product.images))}`;
  })}` : ``}`;
});

export { Products as P };
//# sourceMappingURL=Products-164fedf7.js.map
