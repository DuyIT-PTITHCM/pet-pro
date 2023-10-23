import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from './ssr-0d75b2b1.js';
import { H as HeaderPage } from './HeaderPage-8537cafc.js';
import { S as SideMenuHeading } from './SideMenuHeading-9d2aa096.js';
import { S as SideRefercence } from './SideRefercence-9f3e2214.js';
import './utils-6372ffc9.js';
import './common-f14333dd.js';
import './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import 'tailwind-merge';
import './CardPlaceholder-fc1839f9.js';
import './Const-aff6847f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let service = data.data;
  let images = JSON.parse(service?.imageUrl);
  let imageSeo = "";
  if (images.length > 0) {
    imageSeo = host + images[0] ? host + images[0] : "";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1g37cw1_START -->${$$result.title = `<title>${escape(service?.seo?.metaTitle ? service?.seo?.metaTitle : service.title)}</title>`, ""}<meta name="description"${add_attribute(
    "content",
    service?.seo?.metaDescription ? service?.seo?.metaDescription : service.description,
    0
  )}><meta name="keywords"${add_attribute(
    "content",
    service?.seo?.keywords ? service?.seo?.keywords : service.productName,
    0
  )}><link rel="canonical"${add_attribute(
    "href",
    service?.seo?.canonicalUrl ? service?.seo?.canonicalUrl : host + service.slug,
    0
  )}><meta property="og:title"${add_attribute(
    "content",
    service?.seo?.metaTitle ? service?.seo?.metaTitle : service.productName,
    0
  )}><meta property="og:description"${add_attribute(
    "content",
    service?.seo?.metaDescription ? service?.seo?.metaDescription : service.description,
    0
  )}><meta property="og:image"${add_attribute(
    "content",
    service?.seo?.image ? host + service?.seo?.image : imageSeo,
    0
  )}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + service?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute(
    "content",
    service?.seo?.sitemapPriority ? service?.seo?.sitemapPriority : "",
    0
  )}><meta name="sitemap_frequency"${add_attribute(
    "content",
    service?.seo?.sitemapFrequency ? service?.seo?.sitemapFrequency : "always",
    0
  )}><meta property="twitter:title"${add_attribute(
    "content",
    service?.seo?.metaTitle ? service?.seo?.metaTitle : service.productName,
    0
  )}><meta property="twitter:description"${add_attribute(
    "content",
    service?.seo?.metaDescription ? service?.seo?.metaDescription : service.description,
    0
  )}><meta name="twitter:image"${add_attribute(
    "content",
    service?.seo?.image ? host + service?.seo?.image : imageSeo,
    0
  )}><!-- HEAD_svelte-1g37cw1_END -->`, ""}  ${validate_component(HeaderPage, "HeaderPage").$$render(
    $$result,
    {
      title: service.title,
      isShowTime: true,
      author: service?.author,
      date: service?.updatedAt,
      image: host + images[0],
      isBgOverlay: true
    },
    {},
    {}
  )} <div class="container m-auto p-4"><div class="grid grid-cols-12 gap-4 dark:text-slate-50"><div class="xl:col-span-9 md:col-span-12 col-span-full"><div class="my-4"><p class="text-justify">${escape(service.description)}</p></div> <div class="grid xl:grid-cols-9 grid-cols-12 gap-3"><div class="px-5 xl:col-span-3 md:col-span-4 col-span-full border dark:border-gray-600 rounded-lg"><div class="w-full sticky top-[70px]">${validate_component(SideMenuHeading, "SideMenuHeading").$$render($$result, {}, {}, {})}</div></div> <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">${images[0] ? `<img${add_attribute("src", host + images[0], 0)}${add_attribute("alt", service.title, 0)} class="w-full max-h-[500px] object-cover">` : ``} <div id="postcontent" class="sm:text-base text-sm"><!-- HTML_TAG_START -->${service?.content}<!-- HTML_TAG_END --></div></div></div></div> <div class="xl:col-span-3 col-span-full"><div class="rounded-lg border dark:border-gray-600 overflow-hidden"><p class="text-center p-4 font-bold border-b-4 dark:border-gray-600" data-svelte-h="svelte-1q9cwm8">Các dịch vụ khác</p> ${validate_component(SideRefercence, "SideRefercence").$$render(
    $$result,
    {
      isSmallBox: true,
      data: service.reference,
      originSlug: "dich-vu"
    },
    {},
    {}
  )}</div></div></div></div> <div class="mb-[80px]"></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-237e48b1.js.map
