import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from './ssr-bf7d1ced.js';
import './utils-9f8bdf1a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let product = data.data;
  let images = JSON.parse(product?.images);
  console.log(images);
  let imageSeo = "";
  if (images.length > 0) {
    imageSeo = host + images[0] ? host + images[0] : "";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-rfd8rq_START -->${$$result.title = `<title>${escape(product?.seo?.metaTitle ? product.productName : "")}</title>`, ""}<meta name="description"${add_attribute("content", product?.seo?.metaDescription, 0)}><meta name="keywords"${add_attribute("content", product?.seo?.keywords, 0)}><link rel="canonical"${add_attribute("href", product?.seo?.canonicalUrl, 0)}><meta property="og:title"${add_attribute("content", product?.seo?.openGraphTags, 0)}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + product?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute("content", product?.seo?.sitemapPriority, 0)}><meta name="sitemap_frequency"${add_attribute("content", product?.seo?.sitemapFrequency, 0)}><meta property="og:image"${add_attribute("content", imageSeo, 0)}><meta name="twitter:image"${add_attribute("content", imageSeo, 0)}><!-- HEAD_svelte-rfd8rq_END -->`, ""} <h1 class="text-3xl font-bold text-center">${escape(product.productName)}</h1> <div class="flex justify-center"><div class="sm:m-10 m-1 container"><div class="${"w-full " + escape(
    images.length < 3 ? "grid md:grid-cols-2 grid-cols-1" : "flex justify-center flex-col items-center",
    true
  )}"><div class="${"gap-4 " + escape(
    images.length <= 3 ? "columns-" + images.length + " h-[600px] w-fit px-4" : "lg:columns-4 md:columns-3 columns-2",
    true
  )}">${each(images, (path, i) => {
    return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="${"rounded-xl " + escape(
      images.length == 1 ? "h-full w-full object-contain" : images.length > 3 ? "mb-4 w-full" : "h-full w-full object-contain",
      true
    )}"${add_attribute("alt", product?.name, 0)}>`;
  })}</div> <div><ul><li>Product name: ${escape(product.productName)}</li> <li>Description : <!-- HTML_TAG_START -->${product.description}<!-- HTML_TAG_END --></li> <li>Note: ${escape(product.notes)}</li> <li>Origin: ${escape(product.origin)}</li></ul> <div class=""><b>${product.discount ? `<del>${escape(product.price)}</del>${escape(product.price / product.discount * 100)}` : `${escape(product.price)}`}</b></div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aea6b631.js.map
