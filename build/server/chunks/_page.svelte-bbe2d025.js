import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-e41dcf02.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import './cart-5baadeca.js';
import 'js-cookie';
import { C as CarouselCustom } from './CarouselCustom-0870ec24.js';
import { h as is_promise, n as noop, c as compute_rest_props } from './utils-a4f7b281.js';
import { B as Button } from './Button-921a77e0.js';
import { twMerge } from 'tailwind-merge';
import { F as Frame } from './CloseButton-b88a28b7.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { C as CardPlaceholder } from './CardPlaceholder-bb34af7a.js';
import { H as HOST } from './Const-aff6847f.js';
import { M as Modal } from './Modal-4fc1f5ae.js';
import { H as Hr } from './Hr-64499b05.js';
import 'accounting';
import './cookieUtils-3c057440.js';
import './index-92a6d03f.js';
import 'siema';
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
const PostProductDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="md:grid md:grid-cols-12 gap-4 dark:text-slate-50"><div class="p-2 md:col-span-3 border rounded-lg"><div class=""><h3 class="uppercase">${escape(post?.title)}</h3> <p>Author: ${escape(post?.author)}</p> <p>Date: ${escape(post?.updatedAt)}</p></div> <div class="w-full h-9 bg-red-600 sticky top-[100px]"></div></div> <div id="postcontent" class="post-container overflow-hidden md:col-span-9"><!-- HTML_TAG_START -->${post?.content}<!-- HTML_TAG_END --></div> </div>`;
});
const css = {
  code: ".product-name.s-WM1lf3qkyE25{line-height:1.2}",
  map: null
};
async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
async function getProductImage(images) {
  images = await convertImageJsonToArray(images);
  return images;
}
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = null } = $$props;
  let host = HOST;
  let imageWidth = 0;
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
        return ` <div class="relative">${product.discount > 0 ? `<div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">${escape(product.discount)}% discount
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
              })}` : `<img${add_attribute("src", !res[0] ? "/images/logo.png" : `${host}/` + res[0], 0)} class="w-full h-full object-cover"${add_attribute("alt", product?.productName, 0)}>`}</div> <div class="px-3 pb-3"><a data-sveltekit-reload href="${"/san-pham/" + escape(product.slug, true)}" class="block min-h-[72px] pt-2"><h4 class="product-name mb-1 sm:text-base text-sm font-semibold line-clamp-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500 s-WM1lf3qkyE25">${escape(product?.productName)}</h4> <p class="sm:text-sm text-xs text-gray-900 dark:text-white line-clamp-1 hover:text-primary-600 dark:hover:text-primary-500">${escape(product.description)}</p></a> <div class="flex justify-between my-3">${product.discount > 0 ? `<del>${escape(formatCurrency(product?.originprice))}</del>` : `<del></del>`} <span class="text-md font-bold text-primary-600 dark:text-white">${escape(formatCurrency(product?.price))}</span></div> <div class="flex justify-between">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  outline: true,
                  class: "text-xl",
                  href: "/"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { icon: "solar:cart-3-bold" }, {}, {})}`;
                  }
                }
              )} ${validate_component(Button, "Button").$$render($$result, { outline: true, class: "text-xl" }, {}, {
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let product = data.data;
  let imagesModel = false;
  let images = JSON.parse(product?.images);
  let imageSeo = "";
  if (images.length > 0) {
    imageSeo = host + images[0] ? host + images[0] : "";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1l85s6z_START -->${$$result.title = `<title>${escape(product?.seo?.metaTitle ? product?.seo?.metaTitle : product.productName)}</title>`, ""}<meta name="description"${add_attribute(
      "content",
      product?.seo?.metaDescription ? product?.seo?.metaDescription : product.description,
      0
    )}><meta name="keywords"${add_attribute(
      "content",
      product?.seo?.keywords ? product?.seo?.keywords : product.productName,
      0
    )}><link rel="canonical"${add_attribute(
      "href",
      product?.seo?.canonicalUrl ? product?.seo?.canonicalUrl : host + product.slug,
      0
    )}><meta property="og:title"${add_attribute(
      "content",
      product?.seo?.metaTitle ? product?.seo?.metaTitle : product.productName,
      0
    )}><meta property="og:description"${add_attribute(
      "content",
      product?.seo?.metaDescription ? product?.seo?.metaDescription : product.description,
      0
    )}><meta property="og:image"${add_attribute(
      "content",
      product?.seo?.image ? host + product?.seo?.image : imageSeo,
      0
    )}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + product?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute(
      "content",
      product?.seo?.sitemapPriority ? product?.seo?.sitemapPriority : "",
      0
    )}><meta name="sitemap_frequency"${add_attribute(
      "content",
      product?.seo?.sitemapFrequency ? product?.seo?.sitemapFrequency : "always",
      0
    )}><meta property="twitter:title"${add_attribute(
      "content",
      product?.seo?.metaTitle ? product?.seo?.metaTitle : product.productName,
      0
    )}><meta property="twitter:description"${add_attribute(
      "content",
      product?.seo?.metaDescription ? product?.seo?.metaDescription : product.description,
      0
    )}><meta name="twitter:image"${add_attribute(
      "content",
      product?.seo?.image ? host + product?.seo?.image : imageSeo,
      0
    )}><!-- HEAD_svelte-1l85s6z_END -->`, ""} <div class="container m-auto"><h1 class="my-10 text-primary-600 lg:text-3xl md:text-2xl sm:text-xl text-lg dark:text-white flex justify-center items-center text-center"><div class="text-3xl p-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:paw-print-bold" }, {}, {})}</div>${escape(product.productName)} <div class="text-3xl p-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:paw-print-bold" }, {}, {})}</div></h1> <div class="flex justify-center dark:text-slate-100 overflow-hidden"><div class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4"><div class="${"rounded-xl overflow-hidden md:col-span-2 " + escape(
      images.length < 3 ? "columns-" + images.length + " w-full" : images.length == 3 ? "grid grid-cols-2 gap-4 " : "md:columns-3 columns-2 gap-4 ",
      true
    )}">${each(images, (path, i) => {
      return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="${"rounded-lg cursor-zoom-in " + escape(images.length == 1 && "max-h-[500px]", true) + " " + escape(
        images.length < 3 ? "w-full object-cover" : images.length == 3 ? "w-full" : "w-full object-contain mb-4",
        true
      ) + " " + escape(images.length == 3 && i == 2 ? "col-span-2" : "", true)}"${add_attribute("alt", product?.productName, 0)}>`;
    })}</div> <div class="rounded-lg p-4 border h-full flex flex-col justify-between"><div><h3 class="mb-4 text-xl font-bold">${escape(product.productName)}</h3> ${validate_component(Hr, "Hr").$$render($$result, { classHr: "my-2 w-64 h-1", icon: true }, {}, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "teenyicons:quote-solid",
            class: "w-6 h-6 text-gray-700 dark:text-gray-300"
          },
          {},
          {}
        )}`;
      }
    })}  <p class="mb-4"><!-- HTML_TAG_START -->${product.description}<!-- HTML_TAG_END --></p> ${validate_component(Hr, "Hr").$$render($$result, { classHr: "my-2 w-64 h-1", icon: true }, {}, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "emojione-v1:note-pad",
            class: "w-6 h-6 text-gray-700 dark:text-gray-300"
          },
          {},
          {}
        )}`;
      }
    })} <div class="mb-4 product-desc" id="note"><!-- HTML_TAG_START -->${product.notes}<!-- HTML_TAG_END --></div></div> <div>${validate_component(Hr, "Hr").$$render($$result, { classHr: "my-2 w-64 h-1", icon: true }, {}, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "solar:tag-price-linear",
            class: "w-6 h-6 text-gray-700 dark:text-gray-300"
          },
          {},
          {}
        )}`;
      }
    })} <div class="mb-4"><p class="text-right">${product.discount ? `<div class="flex justify-between"><div class=""><span class="px-4 py-2 animate-pulse rounded-full bg-red-600 text-white font-bold lg:text-base text-sm">-${escape(product.discount)}%</span> <del class="text-gray-800 dark:text-gray-200">${escape(formatCurrency(product.price))}</del></div> <b class="text-2xl text-primary-600">${escape(formatCurrency(product.price - product.price * product.discount / 100))}</b></div>` : `<b class="text-2xl text-primary-600 mt-4 mb-10">${escape(formatCurrency(product.price))}</b><br>`}</p></div> <div class="flex justify-between w-full mt-[20px]">${validate_component(Button, "Button").$$render($$result, { class: "px-4" }, {}, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fluent:cart-24-filled",
            class: "text-xl mr-1"
          },
          {},
          {}
        )}ADD TO CART`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { class: "px-4" }, {}, {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "icon-park-solid:buy",
            class: "text-xl mr-1"
          },
          {},
          {}
        )}SHOP NOW`;
      }
    })}</div></div></div></div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xl",
        class: "md:h-screen",
        title: (images.length == 1 ? "Image" : "Images") + " of " + product?.productName,
        autoclose: true,
        open: imagesModel
      },
      {
        open: ($$value) => {
          imagesModel = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `That&#39;s so cool!`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "purple" }, {}, {
            default: () => {
              return `I love it`;
            }
          })} `;
        },
        default: () => {
          return `${validate_component(CarouselCustom, "CarouselCustom").$$render(
            $$result,
            {
              perPage: 1,
              classList: "w-full max-h-screen"
            },
            {},
            {
              default: () => {
                return `${each(images, (path, i) => {
                  return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="rounded-xl w-full max-h-screen object-contain"${add_attribute("alt", product?.productName, 0)}>`;
                })}`;
              }
            }
          )}`;
        }
      }
    )} <div class="${escape("hidden", true) + " fixed top-0 left-0 w-full h-full"}"><img src="https://demoda.vn/wp-content/uploads/2022/02/hinh-anh-dong-tinh-yeu-trai-tim-cam-roi.gif" alt="oke"></div> ${product.post ? `${validate_component(PostProductDetail, "PostProductDetail").$$render($$result, { post: product.post }, {}, {})}` : ``} ${product.productReferences.length > 0 ? `<h4 class="text-center m-4 dark:text-white" data-svelte-h="svelte-1gv6gg2">Product References</h4> <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">${validate_component(Products, "Products").$$render($$result, { products: product.productReferences }, {}, {})}</div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bbe2d025.js.map
