import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from './ssr-4b2a575b.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { l as loadingState } from './loading-c8f33dc7.js';
import { R as RepositoryFactory } from './RepositoryFactory-7d37287f.js';
import { T as Tabs, a as TabItem, C as CreateProduct } from './CreateProduct-feb4de4e.js';
import './utils-5762d6f4.js';
import 'accounting';
import './index-f06f6a44.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './Icon-29f6d43e.js';
import './Fileupload-b277a6e9.js';
import 'tailwind-merge';
import './Input-a505f525.js';
import './Wrapper-8421d661.js';
import './dev-1873bb41.js';
import 'moment';

const css = {
  code: "@media screen and (max-width: 810px){}@media screen and (max-width: 500px){}@media screen and (max-width: 400px){}",
  map: null
};
const mode = "modify";
function convertImageJsonToArray(json) {
  if (json) {
    return JSON.parse(json);
  }
  return [];
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const productService = RepositoryFactory.get("productRepository");
  let product;
  let host = "http://103.142.26.42/";
  let products = {
    productName: null,
    description: null,
    price: null,
    originalPrice: null,
    stockQuantity: null,
    origin: null,
    notes: null,
    type: null,
    status: null,
    discount: null,
    slug: null,
    createdBy: 1,
    editedBy: 1,
    categoryId: null,
    images: "",
    expirationDate: null
  };
  let { data } = $$props;
  async function productDetail() {
    loadingState.set(true);
    product = await productService.show(data?.id);
    product = product.data.data;
    products = product;
    loadingState.set(false);
  }
  productDetail();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      activeClasses: "p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
      inactiveClasses: "p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      contentClass: "p-4 bg-gray-50 dark:bg-gray-800 bg-blue-500 rounded-b-lg"
    },
    {},
    {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: product?.productName }, {}, {
          default: () => {
            return `<div class="grid lg:grid-cols-2 grid-cols-1 gap-5"><div class="grid md:grid-cols-2 grid-cols-1 text-gray-500 dark:text-gray-300 text-lg"><div><p class="border-b p-2 m-4">Product Name : ${escape(product?.productName)}</p> <p class="border-b p-2 m-4">Type : ${escape(product?.type)}</p> <p class="border-b p-2 m-4">Product Location Status : ${escape(product?.status)}</p> <p class="border-b p-2 m-4">Product Category : ${escape(product?.category.categoryName)}</p> <p class="border-b p-2 m-4">Product Stock : ${escape(product?.stockQuantity)}</p> <p class="border-b p-2 m-4">The Origin : ${escape(product?.origin)}</p> <p class="border-b p-2 m-4">Product Description : ${escape(product?.description)}</p></div> <div><p class="border-b p-2 m-4">Original Price : ${escape(formatCurrency(product?.originalPrice))}</p> <p class="border-b p-2 m-4">Price Sales : ${escape(formatCurrency(product?.price))}</p> <p class="border-b p-2 m-4">Product Discount : ${escape(product?.discount)} %</p> ${product?.type != "pet" ? `<p class="border-b p-2 m-4">Product Expiration Date : ${escape(product?.expirationDate)}</p>` : ``} <p class="border-b p-2 m-4">Notes : ${escape(product?.notes)}</p> <p class="border-b p-2 m-4">Unique URL : ${escape(product?.slug)}</p> <p class="border-b p-2 m-4">Created At : ${escape(formatDate(product?.createdAt))}</p> <p class="border-b p-2 m-4">Updated At : ${escape(formatDate(product?.updatedAt))}</p></div></div> <div class="leading-8 flex flex-col items-center"><b class="block dark:text-gray-300" data-svelte-h="svelte-12qmy4g">Images Product</b> <div class="gap-4 md:columns-3 sm:columns-2 columns-1">${each(convertImageJsonToArray(product?.images), (path, i) => {
              return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="rounded-xl w-full h-auto mb-4 pi"${add_attribute("alt", product?.name, 0)}>`;
            })}</div></div></div> <div class="border-[1px] rounded-lg border-gray-700 dark:border-gray-300 mt-2">${validate_component(Tabs, "Tabs").$$render(
              $$result,
              {
                contentClass: "p-4 bg-gray-50 dark:bg-slate-900 rounded-b-lg",
                activeClasses: "p-2 text-primary-500 bg-gray-100 rounded-t-lg dark:bg-slate-900 dark:text-primary-500",
                inactiveClasses: "p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              },
              {},
              {
                default: () => {
                  return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Seo" }, {}, {
                    default: () => {
                      return `<div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"><div class="text-gray-500 dark:text-gray-400"><b class="block my-[10px]" data-svelte-h="svelte-1ce8qbf">Seo Information</b><br> ${product?.seo ? `<p class="border-b p-2 m-4">Canonical Url : ${escape(product?.seo?.canonicalUrl)}</p> <p class="border-b p-2 m-4">Keywords : ${escape(product?.seo?.keywords)}</p> <p class="border-b p-2 m-4">Meta Description : ${escape(product?.seo?.metaDescription)}</p> <p class="border-b p-2 m-4">Meta Title : ${escape(product?.seo?.metaTitle)}</p> <p class="border-b p-2 m-4">Open GraphTags : ${escape(product?.seo?.openGraphTags)}</p> <p class="border-b p-2 m-4">Robot MetaTags : ${escape(product?.seo?.robotMetaTags)}</p> <p class="border-b p-2 m-4">Sitemap Frequency : ${escape(product?.seo?.sitemapFrequency)}</p> <p class="border-b p-2 m-4">Structured Data : ${escape(product?.seo?.structuredData)}</p> <p class="border-b p-2 m-4">Created At : ${escape(formatDate(product?.seo?.createdAt))}</p>` : `<p data-svelte-h="svelte-pgy4vt">No Data</p>`}</div> <div><b class="block my-[10px] text-gray-500 dark:text-gray-300" data-svelte-h="svelte-3tptee">Preview</b><br>

                        developing....</div></div>`;
                    }
                  })} ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Posts" }, {}, {
                    default: () => {
                      return `<div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"><div class="text-gray-500 dark:text-gray-300"><b class="block my-[10px]" data-svelte-h="svelte-1aefd0p">Posts Information</b><br> ${product?.post ? `<p class="border-b p-2 m-4">Author : ${escape(product?.post?.author)}</p> <p class="border-b p-2 m-4">Category : ${escape(product?.post?.category)}</p> <p class="border-b p-2 m-4">published At : ${escape(formatDate(product?.post?.published_at))}</p>` : `<p data-svelte-h="svelte-pgy4vt">No Data</p>`}</div> <div><p class="py-[10px]" data-svelte-h="svelte-3xqno5">Images Posts</p> <div class="grid grid-cols-3 gap-1">${each(convertImageJsonToArray(product?.post?.images), (path, i) => {
                        return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="" alt="">`;
                      })}</div></div></div>  <div class="py-[20px] flex justify-center">${escape(product?.post?.content)}</div>`;
                    }
                  })}`;
                }
              }
            )}</div>`;
          }
        })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Edit " + product?.productName }, {}, {
          default: () => {
            return `${validate_component(CreateProduct, "CreateProduct").$$render($$result, { mode, products, title: "Edit Products" }, {}, {})}`;
          }
        })}`;
      }
    }
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-02866d9f.js.map
