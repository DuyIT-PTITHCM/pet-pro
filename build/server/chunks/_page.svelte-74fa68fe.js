import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute, m as missing_component, d as spread, f as escape_attribute_value, h as escape_object } from './ssr-4b2a575b.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { B as Badge } from './Badge-0297cd4c.js';
import { B as Button } from './Button-e75644f9.js';
import { c as compute_rest_props, a as compute_slots } from './utils-5762d6f4.js';
import { twMerge } from 'tailwind-merge';
import { F as Frame } from './CloseButton-59718afd.js';
import { S as Slide, I as Indicator, C as Caption, T as Thumbnail } from './Indicator-a81e0048.js';
import { B as BASE_API } from './Const-2d750a93.js';
import { I as Icon } from './Icon-29f6d43e.js';
import 'accounting';
import './dev-1873bb41.js';

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
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let $$slots = compute_slots(slots);
  let { id = "default-carousel" } = $$props;
  let { showIndicators = true } = $$props;
  let { showCaptions = true } = $$props;
  let { showThumbs = true } = $$props;
  let { images } = $$props;
  let { slideControls = true } = $$props;
  let { loop = false } = $$props;
  let { duration = 2e3 } = $$props;
  let { thumbClass = "opacity-40" } = $$props;
  let { divClass = "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" } = $$props;
  let divCls = twMerge(divClass, $$props.classDiv);
  let { indicatorDivClass = "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2" } = $$props;
  let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
  let { captionClass = "h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center" } = $$props;
  let captionCls = twMerge(captionClass, $$props.classCaption);
  let { indicatorClass = "w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" } = $$props;
  let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
  let { slideClass = "" } = $$props;
  let imageShowingIndex = 0;
  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      imageShowingIndex = 0;
    } else {
      imageShowingIndex += 1;
    }
  };
  if (loop) {
    setInterval(
      () => {
        nextSlide();
      },
      duration
    );
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.showIndicators === void 0 && $$bindings.showIndicators && showIndicators !== void 0)
    $$bindings.showIndicators(showIndicators);
  if ($$props.showCaptions === void 0 && $$bindings.showCaptions && showCaptions !== void 0)
    $$bindings.showCaptions(showCaptions);
  if ($$props.showThumbs === void 0 && $$bindings.showThumbs && showThumbs !== void 0)
    $$bindings.showThumbs(showThumbs);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.slideControls === void 0 && $$bindings.slideControls && slideControls !== void 0)
    $$bindings.slideControls(slideControls);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.indicatorDivClass === void 0 && $$bindings.indicatorDivClass && indicatorDivClass !== void 0)
    $$bindings.indicatorDivClass(indicatorDivClass);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  image = images[imageShowingIndex];
  return `<div${add_attribute("id", id, 0)} class="relative"><div${add_attribute("class", divCls, 0)}>${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: image.imgurl,
      altTag: image.name,
      attr: image.attribution,
      slideClass
    },
    {},
    {}
  )}</div> ${showIndicators ? ` <div${add_attribute("class", indicatorDivCls, 0)}>${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        name,
        selected: imageShowingIndex === id2,
        indicatorClass: indicatorCls
      },
      {},
      {}
    )}`;
  })}</div>` : ``} ${slideControls ? ` <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${$$slots.previous ? `${slots.previous ? slots.previous({}) : ``}` : `<svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="hidden" data-svelte-h="svelte-15eom22">Previous</span></span></button> <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${$$slots.next ? `${slots.next ? slots.next({}) : ``}` : `<svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`} <span class="hidden" data-svelte-h="svelte-1cuepzi">Next</span></span></button>` : ``}</div> ${showCaptions ? `${validate_component(Caption, "Caption").$$render(
    $$result,
    {
      caption: images[imageShowingIndex].name,
      captionClass: captionCls
    },
    {},
    {}
  )}` : ``} ${showThumbs ? `<div class="flex flex-row justify-center bg-gray-100">${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        thumbClass,
        thumbImg: imgurl,
        altTag: name,
        titleLink: attribution,
        id: id2,
        selected: imageShowingIndex === id2
      },
      {},
      {}
    )}`;
  })}</div>` : ``} `;
});
let n = Date.now();
function generateId() {
  return (++n).toString(36);
}
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fillPercent", "fillColor", "strokeColor", "size", "ariaLabel", "id", "role"]);
  let { fillPercent = 100 } = $$props;
  let { fillColor = "#F5CA14" } = $$props;
  let { strokeColor = "#F5CA14" } = $$props;
  let { size = 24 } = $$props;
  let { ariaLabel = "star" } = $$props;
  let { id = generateId() } = $$props;
  let { role = "img" } = $$props;
  if ($$props.fillPercent === void 0 && $$bindings.fillPercent && fillPercent !== void 0)
    $$bindings.fillPercent(fillPercent);
  if ($$props.fillColor === void 0 && $$bindings.fillColor && fillColor !== void 0)
    $$bindings.fillColor(fillColor);
  if ($$props.strokeColor === void 0 && $$bindings.strokeColor && strokeColor !== void 0)
    $$bindings.strokeColor(strokeColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "100 100 120 120" },
      { role: escape_attribute_value(role) }
    ],
    {}
  )}><defs><linearGradient${add_attribute("id", id, 0)}>${fillPercent !== 100 ? `<stop offset="0%"${add_attribute("stop-color", fillColor, 0)}></stop> <stop offset="${escape(fillPercent, true) + "%"}"${add_attribute("stop-color", fillColor, 0)}></stop> <stop offset="${escape(fillPercent, true) + "%"}" stop-color="transparent"></stop> <stop offset="100%" stop-color="transparent"></stop>` : `<stop offset="0%"${add_attribute("stop-color", fillColor, 0)}></stop> <stop offset="100%"${add_attribute("stop-color", fillColor, 0)}></stop>`}</linearGradient></defs><g fill="${"url(#" + escape(id, true) + ")"}"${add_attribute("stroke", strokeColor, 0)} stroke-width="2"><polygon points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
    203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
    153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
    141.489, 197.361, 165.000, 185.000"></polygon></g></svg> `;
});
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { divClass = "flex items-center" } = $$props;
  let { size = 24 } = $$props;
  let { total = 5 } = $$props;
  let { rating = 4 } = $$props;
  let { partialId = "partialStar" + generateId() } = $$props;
  let { icon = Star } = $$props;
  let { count = false } = $$props;
  const fullStarId = generateId();
  const grayStarId = generateId();
  let fullStars = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars = total - (fullStars + Math.ceil(rateDiffence));
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.partialId === void 0 && $$bindings.partialId && partialId !== void 0)
    $$bindings.partialId(partialId);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${count ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { fillPercent: 100, size }, {}, {})} <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">${escape(rating)}</p> ${slots.default ? slots.default({}) : ``}` : `${each(Array(fullStars), (star) => {
    return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size, fillPercent: 100, id: fullStarId }, {}, {})}`;
  })} ${percentRating ? `${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      size,
      fillPercent: percentRating,
      id: partialId
    },
    {},
    {}
  )}` : ``} ${each(Array(grayStars), (star) => {
    return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size, fillPercent: 0, id: grayStarId }, {}, {})}`;
  })} ${$$slots.text ? `${slots.text ? slots.text({}) : ``}` : ``}`}</div> `;
});
const css = {
  code: ".line-hover.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{width:0;opacity:.2}.menu-item.s-_m32SN5m6RSJ:hover .line-hover.s-_m32SN5m6RSJ{width:100%;transition:width .5s}.sidebar-menu.s-_m32SN5m6RSJ.s-_m32SN5m6RSJ{position:sticky;top:100px;left:0;height:100%}",
  map: null
};
function convertImageJsonToArray(json) {
  if (json) {
    return JSON.parse(json);
  }
  return [];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  function getProductImage(images) {
    const productList = images.map((path, index) => ({
      id: index + 1,
      imgurl: !path ? "/images/logo.png" : `${host}` + path
    }));
    return productList;
  }
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
    return `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-xl font-bold flex items-center p-3">category ${escape(category.categoryName)}</h3> <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">${each(category.products, (product) => {
      return `<div class="relative">${product.discount > 0 ? `<div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">${escape(product.discount)}% discount
                                        </div>` : ``} ${validate_component(Card, "Card").$$render($$result, { class: "min-w-full", padding: "none" }, {}, {
        default: () => {
          return `${validate_component(Carousel, "Carousel").$$render(
            $$result,
            {
              class: "w-full",
              images: getProductImage(convertImageJsonToArray(product?.images)),
              slideClass: "w-full",
              imgClass: "w-full",
              showCaptions: false,
              showThumbs: false
            },
            {},
            {}
          )} <div class="px-5 pb-5"><a${add_attribute("href", BASE_API + "/products/" + product.id, 0)}><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4">${escape(product?.productName)}</h5> <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px]">${escape(product.description)}</p></a> ${validate_component(Rating, "Rating").$$render(
            $$result,
            {
              rating: 4,
              size: 24,
              class: "mt-2.5 mb-5"
            },
            {},
            {
              text: () => {
                return `${validate_component(Badge, "Badge").$$render($$result, { slot: "text", class: "ml-3" }, {}, {
                  default: () => {
                    return `4`;
                  }
                })}`;
              }
            }
          )} <div class="flex justify-between items-center"><span class="text-xl font-bold text-gray-900 dark:text-white">${escape(formatCurrency(product?.price))}</span> <div class="flex">${validate_component(Button, "Button").$$render($$result, { class: "mr-1", href: "/" }, {}, {
            default: () => {
              return `Buy now`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `Add cart`;
            }
          })}</div> </div></div> `;
        }
      })} </div>`;
    })} </div>`;
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
      return `<h3${add_attribute("id", category.id, 0)} class="dark:text-white uppercase text-xl font-bold flex items-center p-3">category ${escape(category.categoryName)}</h3> <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">${each(category.products, (product) => {
        return `<div class="relative">${product.discount > 0 ? `<div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">${escape(product.discount)}% discount
                                        </div>` : ``} ${validate_component(Card, "Card").$$render($$result, { class: "min-w-full", padding: "none" }, {}, {
          default: () => {
            return `${validate_component(Carousel, "Carousel").$$render(
              $$result,
              {
                class: "w-full",
                images: getProductImage(convertImageJsonToArray(product?.images)),
                slideClass: "w-full",
                imgClass: "w-full",
                showCaptions: false,
                showThumbs: false
              },
              {},
              {}
            )} <div class="px-5 pb-5"><a${add_attribute("href", BASE_API + "/products/" + product.id, 0)}><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4">${escape(product?.productName)}</h5> <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px]">${escape(product.description)}</p></a> ${validate_component(Rating, "Rating").$$render(
              $$result,
              {
                rating: 4,
                size: 24,
                class: "mt-2.5 mb-5"
              },
              {},
              {}
            )} <div class="flex justify-between items-center"><span class="text-xl font-bold text-gray-900 dark:text-white">${escape(formatCurrency(product?.price))}</span> <div class="flex">${validate_component(Button, "Button").$$render($$result, { class: "mr-1", href: "/" }, {}, {
              default: () => {
                return `Buy now`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Add cart`;
              }
            })}</div> </div></div> `;
          }
        })} </div>`;
      })} </div>`;
    })} </div>`;
  })}`}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-74fa68fe.js.map
