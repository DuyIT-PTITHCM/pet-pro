import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, a as each } from './ssr-8f3207f5.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { C as CarouselCustom } from './CarouselCustom-9634d1f6.js';
import { P as Products } from './Products-adaa2f0e.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { B as Button } from './Button-27ef65c4.js';
import { M as Modal } from './Modal-a4ec3489.js';
import './utils-2dd7664d.js';
import 'accounting';
import 'siema';
import './index-3be464aa.js';
import 'tailwind-merge';
import './Frame-f1b561b4.js';
import './dev-1873bb41.js';
import './Const-3b06302f.js';

const PostProductDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="md:grid md:grid-cols-10 gap-4 dark:text-slate-50"><div class="p-5 md:col-span-2 border rounded-xl"><div class=""><h3 class="uppercase">${escape(post?.title)}</h3> <p>Author: ${escape(post?.author)}</p> <p>Date: ${escape(post?.updatedAt)}</p></div> <div class="w-full h-9 bg-red-600 sticky top-[100px]"></div></div> <div class="post-container overflow-hidden md:col-span-8"><!-- HTML_TAG_START -->${post?.content}<!-- HTML_TAG_END --></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let product = data.data;
  console.log(product);
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-7wwze_START -->${$$result.title = `<title>${escape(product?.seo?.metaTitle ? product?.seo?.metaTitle : product.productName)}</title>`, ""}<meta name="description"${add_attribute(
      "content",
      product?.seo?.metaDescription ? product?.seo?.metaDescription : product.productName,
      0
    )}><meta name="keywords"${add_attribute(
      "content",
      product?.seo?.keywords ? product?.seo?.keywords : product.productName,
      0
    )}><link rel="canonical"${add_attribute(
      "href",
      product?.seo?.canonicalUrl ? product?.seo?.canonicalUrl : host + product.slug,
      0
    )}><meta property="og:title"${add_attribute("content", product?.seo?.openGraphTags, 0)}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + product?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute(
      "content",
      product?.seo?.sitemapPriority ? product?.seo?.sitemapPriority : "",
      0
    )}><meta name="sitemap_frequency"${add_attribute(
      "content",
      product?.seo?.sitemapFrequency ? product?.seo?.sitemapFrequency : "always",
      0
    )}><meta property="og:image"${add_attribute("content", imageSeo, 0)}><meta name="twitter:image"${add_attribute("content", imageSeo, 0)}><!-- HEAD_svelte-7wwze_END -->`, ""} <h1 class="my-10 text-primary-600 dark:text-white flex justify-center items-center">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:paw-print-bold" }, {}, {})}${escape(product.productName)}${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:paw-print-bold" }, {}, {})}</h1> <div class="flex justify-center dark:text-slate-100 overflow-hidden"><div class="m-1 mb-10 container"><div class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4"><div class="${"rounded-xl overflow-hidden md:col-span-2 " + escape(
      images.length < 3 ? "columns-" + images.length + " w-full" : images.length == 3 ? "grid grid-cols-2 gap-4 " : "md:columns-3 columns-2 gap-4 ",
      true
    )}">${each(images, (path, i) => {
      return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="${"rounded-xl shadow-xl cursor-zoom-in " + escape(
        images.length < 3 ? "w-full object-cover" : images.length == 3 ? "w-full" : "w-full object-contain mb-4",
        true
      ) + " " + escape(images.length == 3 && i == 2 ? "col-span-2" : "", true)}"${add_attribute("alt", product?.productName, 0)}>`;
    })}</div> <div class="border rounded-xl shadow-xl w-full h-fit md:p-6 p-4"><div class=""><h2 class="mb-4 text-xl font-bold">Product name: ${escape(product.productName)}</h2> <p class="mb-4"><b data-svelte-h="svelte-1avyy26">Origin</b>: ${escape(product.origin)}</p> <p class="mb-4"><b data-svelte-h="svelte-m97jtc">Description:</b> <br> <!-- HTML_TAG_START -->${product.description}<!-- HTML_TAG_END --></p> <p class="mb-4"><b data-svelte-h="svelte-z6v413">Notes:</b> <br> <!-- HTML_TAG_START -->${product.notes}<!-- HTML_TAG_END --></p> <div class="mb-4"><p class="text-right">${product.discount ? `<div class=""><b class="text-2xl text-primary-600">${escape(formatCurrency(product.price))}</b><br><br> <span class="p-2 animate-pulse rounded-full bg-red-600 text-white font-bold">Discount ${escape(product.discount)}%</span> <del class="text-gray-800 dark:text-gray-200">${escape(formatCurrency(product.price))}</del></div>` : `<b class="text-2xl text-primary-600 mt-4 mb-10">${escape(formatCurrency(product.price))}</b><br>`}</p></div> <div class="flex justify-around w-full mt-[40px]">${validate_component(Button, "Button").$$render($$result, { class: "px-4" }, {}, {
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
    })}</div></div></div></div></div></div> ${validate_component(Modal, "Modal").$$render(
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
    )} <div class="${escape("hidden", true) + " absolute top-0 w-full h-full"}"><img src="https://demoda.vn/wp-content/uploads/2022/02/hinh-anh-dong-tinh-yeu-trai-tim-cam-roi.gif" alt="oke"></div>  <div class="flex justify-center w-full clear-both"><div class="container m-4">${product.post ? `${validate_component(PostProductDetail, "PostProductDetail").$$render($$result, { post: product.post }, {}, {})}` : ``} ${product.productReferences.length > 0 ? `<h4 class="text-center m-4 dark:text-white" data-svelte-h="svelte-1gv6gg2">Product References</h4> <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">${validate_component(Products, "Products").$$render($$result, { products: product.productReferences }, {}, {})}</div>` : ``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2d1c21e0.js.map
