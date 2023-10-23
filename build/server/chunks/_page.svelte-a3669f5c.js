import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-a6fe4ea2.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import './cart-eef95c9c.js';
import 'js-cookie';
import { C as CarouselCustom } from './CarouselCustom-5ab97610.js';
import { f as formatDate } from './common-f14333dd.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import { S as SideMenuHeading } from './SideMenuHeading-ffc38334.js';
import { P as Products } from './Products-df628553.js';
import { B as Button } from './Button-e60b699b.js';
import { M as Modal } from './Modal-618d1437.js';
import { H as Hr } from './Hr-1ca6456a.js';
import './utils-22ec5563.js';
import 'accounting';
import './cookieUtils-3c057440.js';
import './index-eecbf3f9.js';
import 'siema';
import 'tailwind-merge';
import './CloseButton-5ce65cd1.js';
import './dev-1873bb41.js';
import './CardPlaceholder-368d9226.js';
import './Const-aff6847f.js';

const PostProductDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="md:grid md:grid-cols-12 gap-4 dark:text-slate-50 mt-[40px] px-3"><div class="p-2 md:col-span-3 border rounded-lg dark:border-gray-600"><div class="text-sm my-2"><h3 class="uppercase sm:text-lg text-base">${escape(post?.title)}</h3> <p class="flex items-centerpx-2 my-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-solid:user-pen",
      class: "mr-2 text-xl w-8"
    },
    {},
    {}
  )} ${escape(post?.author)}</p> <p class="flex items-centerpx-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "svg-spinners:clock",
      class: "mr-2 text-xl w-8"
    },
    {},
    {}
  )}${escape(formatDate(post?.updatedAt))}</p></div> <div class="w-full sticky top-[70px] dark:border-gray-600 px-2">${validate_component(SideMenuHeading, "SideMenuHeading").$$render($$result, {}, {}, {})}</div></div> <div id="postcontent" class="post-container overflow-hidden md:col-span-9 sm:mt-0 mt-4 sm:text-base text-sm"><!-- HTML_TAG_START -->${post?.content}<!-- HTML_TAG_END --></div> </div>`;
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
//# sourceMappingURL=_page.svelte-a3669f5c.js.map
