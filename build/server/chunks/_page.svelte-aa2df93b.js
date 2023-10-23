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
  let blog = data.data;
  let images = JSON.parse(blog?.imageUrl);
  let imageSeo = "";
  if (images.length > 0) {
    imageSeo = host + images[0] ? host + images[0] : "";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-wfgjzq_START -->${$$result.title = `<title>${escape(blog?.seo?.metaTitle ? blog?.seo?.metaTitle : blog.title)}</title>`, ""}<meta name="description"${add_attribute(
    "content",
    blog?.seo?.metaDescription ? blog?.seo?.metaDescription : blog.description,
    0
  )}><meta name="keywords"${add_attribute(
    "content",
    blog?.seo?.keywords ? blog?.seo?.keywords : blog.productName,
    0
  )}><link rel="canonical"${add_attribute(
    "href",
    blog?.seo?.canonicalUrl ? blog?.seo?.canonicalUrl : host + blog.slug,
    0
  )}><meta property="og:title"${add_attribute(
    "content",
    blog?.seo?.metaTitle ? blog?.seo?.metaTitle : blog.productName,
    0
  )}><meta property="og:description"${add_attribute(
    "content",
    blog?.seo?.metaDescription ? blog?.seo?.metaDescription : blog.description,
    0
  )}><meta property="og:image"${add_attribute("content", blog?.seo?.image ? host + blog?.seo?.image : imageSeo, 0)}><!-- HTML_TAG_START -->${'<script type="application/ld+json">' + blog?.seo?.structuredData + "<\/script>"}<!-- HTML_TAG_END --><meta name="sitemap_priority"${add_attribute(
    "content",
    blog?.seo?.sitemapPriority ? blog?.seo?.sitemapPriority : "",
    0
  )}><meta name="sitemap_frequency"${add_attribute(
    "content",
    blog?.seo?.sitemapFrequency ? blog?.seo?.sitemapFrequency : "always",
    0
  )}><meta property="twitter:title"${add_attribute(
    "content",
    blog?.seo?.metaTitle ? blog?.seo?.metaTitle : blog.productName,
    0
  )}><meta property="twitter:description"${add_attribute(
    "content",
    blog?.seo?.metaDescription ? blog?.seo?.metaDescription : blog.description,
    0
  )}><meta name="twitter:image"${add_attribute("content", blog?.seo?.image ? host + blog?.seo?.image : imageSeo, 0)}><!-- HEAD_svelte-wfgjzq_END -->`, ""}  ${validate_component(HeaderPage, "HeaderPage").$$render(
    $$result,
    {
      title: blog.title,
      isShowTime: true,
      author: blog?.author,
      date: blog?.updatedAt,
      image: host + images[0],
      isBgOverlay: true
    },
    {},
    {}
  )} <div class="container m-auto p-4"><div class="grid grid-cols-12 gap-4 dark:text-slate-50"><div class="xl:col-span-9 md:col-span-12 col-span-full"><div class="my-4"><p class="text-justify">${escape(blog.description)}</p></div> <div class="grid xl:grid-cols-9 grid-cols-12 gap-3"><div class="px-5 xl:col-span-3 md:col-span-4 col-span-full border dark:border-gray-600 rounded-lg"><div class="w-full sticky top-[70px]">${validate_component(SideMenuHeading, "SideMenuHeading").$$render($$result, {}, {}, {})}</div></div> <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">${images[0] ? `<img${add_attribute("src", host + images[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full max-h-[500px] object-cover">` : ``} <div id="postcontent" class="sm:text-base text-sm"><!-- HTML_TAG_START -->${blog?.content}<!-- HTML_TAG_END --></div></div></div></div> <div class="xl:col-span-3 col-span-full"><div class="overflow-hidden rounded-lg xl:border"><p class="text-center p-4 font-bold border-b-4" data-svelte-h="svelte-1r30jd7">Bài viết liên quan</p> ${validate_component(SideRefercence, "SideRefercence").$$render(
    $$result,
    {
      originSlug: "tin-tuc",
      data: blog.reference,
      isSmallBox: true
    },
    {},
    {}
  )}</div></div></div></div> <div class="mb-[80px]"></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aa2df93b.js.map
