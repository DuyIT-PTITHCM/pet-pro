import { c as create_ssr_component, e as escape, a as add_attribute } from './ssr-4b2a575b.js';
import './utils-5762d6f4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let product = data.data;
  let images = JSON.parse(product?.images);
  console.log(product.images);
  let imageSeo = "";
  if (images.length > 0) {
    imageSeo = host + images[0] ? host + images[0] : "";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-jt5r9x_START -->${$$result.title = `<title>${escape(product?.seo.metaTitle)}</title>`, ""}<meta name="description"${add_attribute("content", product?.seo.metaDescription, 0)}><meta name="keywords"${add_attribute("content", product?.seo.keywords, 0)}><link rel="canonical"${add_attribute("href", product?.seo.canonicalUrl, 0)}><meta property="og:title"${add_attribute("content", product?.seo.openGraphTags, 0)}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + product?.seo.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute("content", product?.seo.sitemapPriority, 0)}><meta name="sitemap_frequency"${add_attribute("content", product?.seo.sitemapFrequency, 0)}><meta property="og:image"${add_attribute("content", imageSeo, 0)}><meta name="twitter:image"${add_attribute("content", imageSeo, 0)}><!-- HEAD_svelte-jt5r9x_END -->`, ""} <h1 data-svelte-h="svelte-clxm56">hello cac ban</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-394bb4eb.js.map
