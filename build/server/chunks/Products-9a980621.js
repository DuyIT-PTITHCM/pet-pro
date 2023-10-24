import { v as validate_store, a as subscribe, j as null_to_empty, h as is_promise, n as noop, c as compute_rest_props } from './utils-6372ffc9.js';
import { c as create_ssr_component, i as createEventDispatcher, e as escape, a as add_attribute, b as each, v as validate_component } from './ssr-0d75b2b1.js';
import { B as Button } from './Button-f3857e5c.js';
import { twMerge } from 'tailwind-merge';
import { F as Frame } from './Frame-e5b3f30c.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import { C as CardPlaceholder } from './CardPlaceholder-fc1839f9.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import 'siema';
import { r as readable } from './index-62c253a0.js';
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
const breakpoints = [
  { size: 0, columns: 1 },
  { size: 640, columns: 2 },
  { size: 768, columns: 2 },
  { size: 1024, columns: 3 },
  { size: 1280, columns: 4 },
  { size: 1536, columns: 4 }
];
const getColumns = () => {
  var a = 0;
  for (const breakpoint of breakpoints) {
    if (globalThis.innerWidth > breakpoint.size) {
      a = breakpoint.columns;
    }
  }
  return a;
};
let currentColumnCount = getColumns();
const time = readable(currentColumnCount, function start(set) {
  return function stop() {
  };
});
const css$1 = {
  code: ".carousel.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{position:relative;width:100%;justify-content:center;align-items:center}button.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{position:absolute;width:40px;height:40px;top:50%;z-index:50;margin-top:-20px;border:none;background-color:transparent}button.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH:focus{outline:none}.left.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{left:2vw}.right.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{right:2vw}ul.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{list-style-type:none;position:absolute;display:flex;justify-content:center;width:100%;margin-top:-30px;padding:0}ul.s-cEskgNKlG_ZH li.s-cEskgNKlG_ZH{margin:6px;border-radius:100%;background-color:rgba(255, 255, 255, 0.5);height:8px;width:8px}ul.s-cEskgNKlG_ZH li.s-cEskgNKlG_ZH:hover{background-color:rgba(255, 255, 255, 0.85)}ul.s-cEskgNKlG_ZH li.active.s-cEskgNKlG_ZH{background-color:rgba(255, 255, 255, 1)}",
  map: null
};
const CarouselCustom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pips;
  let currentPerPage;
  let totalDots;
  let $$unsubscribe_time;
  validate_store(time, "time");
  $$unsubscribe_time = subscribe(time, (value) => value);
  let { perPage = 3 } = $$props;
  let { loop = true } = $$props;
  let { autoplay = 0 } = $$props;
  let { duration = 200 } = $$props;
  let { easing = "ease-out" } = $$props;
  let { startIndex = 0 } = $$props;
  let { draggable = true } = $$props;
  let { multipleDrag = true } = $$props;
  let { dots = true } = $$props;
  let { controls = true } = $$props;
  let { threshold = 20 } = $$props;
  let { rtl = false } = $$props;
  let { classList = "" } = $$props;
  let { multiple = 0 } = $$props;
  let currentIndex = startIndex;
  let siema;
  let controller;
  let timer;
  createEventDispatcher();
  function isDotActive(currentIndex2, dotIndex) {
    if (currentIndex2 < 0)
      currentIndex2 = pips.length + currentIndex2;
    return currentIndex2 >= dotIndex * currentPerPage && currentIndex2 < dotIndex * currentPerPage + currentPerPage;
  }
  function left() {
    controller.prev();
  }
  function right() {
    controller.next();
  }
  function go(index) {
    controller.goTo(index);
  }
  function pause() {
    clearInterval(timer);
  }
  function resume() {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  }
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0)
    $$bindings.perPage(perPage);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.startIndex === void 0 && $$bindings.startIndex && startIndex !== void 0)
    $$bindings.startIndex(startIndex);
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
    $$bindings.draggable(draggable);
  if ($$props.multipleDrag === void 0 && $$bindings.multipleDrag && multipleDrag !== void 0)
    $$bindings.multipleDrag(multipleDrag);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0)
    $$bindings.dots(dots);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0)
    $$bindings.rtl(rtl);
  if ($$props.classList === void 0 && $$bindings.classList && classList !== void 0)
    $$bindings.classList(classList);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.isDotActive === void 0 && $$bindings.isDotActive && isDotActive !== void 0)
    $$bindings.isDotActive(isDotActive);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.resume === void 0 && $$bindings.resume && resume !== void 0)
    $$bindings.resume(resume);
  $$result.css.add(css$1);
  pips = [];
  currentPerPage = perPage;
  totalDots = [];
  $$unsubscribe_time();
  return `<div class="carousel s-cEskgNKlG_ZH"><div class="${"slides " + escape(classList, true) + " s-cEskgNKlG_ZH"}"${add_attribute("this", siema, 0)}>${slots.default ? slots.default({}) : ``}</div> ${controls ? `<button class="left s-cEskgNKlG_ZH" aria-label="left">${slots["left-control"] ? slots["left-control"]({}) : ``}</button> <button class="right s-cEskgNKlG_ZH" aria-label="right">${slots["right-control"] ? slots["right-control"]({}) : ``}</button>` : ``} ${dots ? `<ul class="s-cEskgNKlG_ZH">${each({ length: totalDots }, (_, i) => {
    return `<li class="${escape(null_to_empty(isDotActive(currentIndex, i) ? "active" : ""), true) + " s-cEskgNKlG_ZH"}"></li>`;
  })}</ul>` : ``} </div>`;
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
        return ` <div class="relative">${product.discount > 0 ? `<div class="absolute top-0 left-0 bg-yellow-300 text-white px-1 py-1 rounded-tr-md transform z-10 font-semibold rounded-md">-${escape(product.discount)}%
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
              })}` : `<img${add_attribute("src", !res[0] ? "/images/logo.png" : `${host}/` + res[0], 0)} class="w-full h-full object-cover"${add_attribute("alt", product?.productName, 0)}>`}</div> <div class="px-3 pb-3"><a data-sveltekit-reload href="${"/san-pham/" + escape(product.slug, true)}" class="block text-black min-h-[72px] pt-2 dark:text-white hover:text-amber-500 "><h4 class="product-name mb-1 sm:text-base text-sm font-semibold line-clamp-2 s-WM1lf3qkyE25">${escape(product?.productName)}</h4> <p class="sm:text-sm text-xs line-clamp-1">${escape(product.description)}</p></a> <div class="flex justify-between my-3">${product.discount > 0 ? `<del>${escape(formatCurrency(product?.originprice))}</del>` : `<del></del>`} <span class="text-md font-semibold text-amber-500">${escape(formatCurrency(product?.price))}</span></div> <div class="flex justify-between">${validate_component(Button, "Button").$$render($$result, { color: "light", class: "text-xl" }, {}, {
                default: () => {
                  return `${validate_component(Icon, "Icon").$$render($$result, { icon: "solar:cart-3-bold" }, {}, {})}`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { color: "light", class: "text-xl" }, {}, {
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

export { CarouselCustom as C, Products as P };
//# sourceMappingURL=Products-9a980621.js.map
