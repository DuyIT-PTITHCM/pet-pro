import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-e41dcf02.js';
import { h as is_promise, n as noop } from './utils-a4f7b281.js';
import './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { C as CardPlaceholder } from './CardPlaceholder-bb34af7a.js';
import { H as HOST } from './Const-aff6847f.js';
import { H as HeaderPage } from './HeaderPage-71f47110.js';
import 'tailwind-merge';

async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogs = null } = $$props;
  let { isSmallBox = false } = $$props;
  let host = HOST;
  let serviceBoxWidth = 0;
  let blogImages;
  let showReadMore = Array(1).fill(false);
  async function getImage(images) {
    blogImages = await convertImageJsonToArray(images);
    return blogImages;
  }
  if ($$props.blogs === void 0 && $$bindings.blogs && blogs !== void 0)
    $$bindings.blogs(blogs);
  if ($$props.isSmallBox === void 0 && $$bindings.isSmallBox && isSmallBox !== void 0)
    $$bindings.isSmallBox(isSmallBox);
  return `${blogs ? `${each(blogs, (blog, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <a data-sveltekit-reload href="${"/tin-tuc/" + escape(blog.slug, true)}" class="${"flex overflow-hidden dark:text-white max-h-[140px] " + escape(
          isSmallBox ? "py-4 hover:text-primary-500" : "rounded-lg border hover:shadow-lg ",
          true
        )}"><div class="overflow-hidden" style="${"width: " + escape(serviceBoxWidth * 30 / 100, true) + "px;"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full h-full object-cover hover:scale-105 transition-all"></div> <div class="${escape(isSmallBox ? "p-1" : "md:p-4 p-3", true) + " flex-1"}"><div class="flex flex-col justify-between items-start"><h3 class="${escape(
          isSmallBox ? "text-base line-clamp-3 text-justify " : "md:text-lg text-base line-clamp-2",
          true
        ) + " font-semibold"}">${escape(blog.title)}</h3> <p class="${escape(isSmallBox && "xl:hidden", true) + " md:text-base text-sm mt-1 line-clamp-2 text-justify relative overflow-hidden"}" id="${"blog" + escape(index, true)}"><span>${escape(blog.description)}</span> ${showReadMore[index] ? `<p class="absolute bg-white dark:bg-slate-800 z-20 bottom-0 right-0">...<span class="text-blue-500" data-svelte-h="svelte-w3kk2g">Xem thêm</span></p>` : ``} </p></div> </div></a> ${isSmallBox ? `<hr>` : ``} `;
      }(__value);
    }(getImage(blog.imageUrl))}`;
  })}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
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
  )} <div class="container m-auto p-4"><div class="grid grid-cols-12 gap-4 dark:text-slate-50"><div class="xl:col-span-9 md:col-span-12 col-span-full"><div class="my-4"><p class="text-justify">${escape(blog.description)}</p></div> <div class="grid xl:grid-cols-9 grid-cols-12 gap-3"><div class="p-5 xl:col-span-3 md:col-span-4 col-span-full border rounded-lg"><div class="w-full h-9 bg-red-600 sticky top-[100px]"></div></div> <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">${images[0] ? `<img${add_attribute("src", host + images[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full max-h-[500px] object-cover">` : ``} <!-- HTML_TAG_START -->${blog?.content}<!-- HTML_TAG_END --></div></div></div> <div class="xl:col-span-3 col-span-full"><div class="rounded-lg xl:border"><p class="text-center p-4 font-bold border-b-4" data-svelte-h="svelte-1r30jd7">Bài viết liên quan</p> <div class="">${validate_component(Blogs, "Blogs").$$render($$result, { blogs: blog.reference, isSmallBox: true }, {}, {})}</div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8299398f.js.map
