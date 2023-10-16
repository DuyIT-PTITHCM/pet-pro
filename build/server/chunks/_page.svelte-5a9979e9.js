import { c as create_ssr_component, e as escape, a as add_attribute } from './ssr-e41dcf02.js';
import './utils-a4f7b281.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-cl2f5j_START -->${$$result.title = `<title>${escape(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name)}</title>`, ""}<meta name="description"${add_attribute(
    "content",
    data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name,
    0
  )}><meta name="keywords"${add_attribute(
    "content",
    data?.data?.seo?.keywords ? data?.data?.seo?.keywords : data?.data.name,
    0
  )}><link rel="canonical"${add_attribute(
    "href",
    data?.data?.seo?.canonicalUrl ? data?.data?.seo?.canonicalUrl : HOST + data?.data.slug,
    0
  )}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + data?.data?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute(
    "content",
    data?.data?.seo?.sitemapPriority ? data?.data?.seo?.sitemapPriority : "",
    0
  )}><meta name="sitemap_frequency"${add_attribute(
    "content",
    data?.data?.seo?.sitemapFrequency ? data?.data?.seo?.sitemapFrequency : "always",
    0
  )}><meta property="og:title"${add_attribute(
    "content",
    data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name,
    0
  )}><meta property="og:description"${add_attribute(
    "content",
    data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name,
    0
  )}><meta property="og:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><meta property="twitter:title"${add_attribute(
    "content",
    data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle : data?.data.name,
    0
  )}><meta property="twitter:description"${add_attribute(
    "content",
    data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name,
    0
  )}><meta property="twitter:image"${add_attribute("content", HOST + data?.data?.seo?.image, 0)}><!-- HEAD_svelte-cl2f5j_END -->`, ""}   <h1 data-svelte-h="svelte-5jr9ub">oke </h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5a9979e9.js.map
