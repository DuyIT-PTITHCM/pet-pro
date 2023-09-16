import { c as create_ssr_component, e as escape, b as add_attribute, a as each } from './ssr-8f3207f5.js';
import './utils-2dd7664d.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let product = data.data;
  let images = JSON.parse(product?.images);
  let imageSeo = "";
  if (images.length > 0) {
    imageSeo = host + images[0] ? host + images[0] : "";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-7wwze_START -->${$$result.title = `<title>${escape(product?.seo?.metaTitle ? product?.seo?.metaTitle : product.productName)}</title>`, ""}<meta name="description"${add_attribute(
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
  )}><meta property="og:image"${add_attribute("content", imageSeo, 0)}><meta name="twitter:image"${add_attribute("content", imageSeo, 0)}><!-- HEAD_svelte-7wwze_END -->`, ""} <h1 class="text-3xl font-bold text-center">${escape(product.productName)}</h1> <div class="flex justify-center"><div class="sm:m-10 m-1 container"><div class="${"w-full " + escape(
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
//# sourceMappingURL=_page.svelte-8df0fc8d.js.map
