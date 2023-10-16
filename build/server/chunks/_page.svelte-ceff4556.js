import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each } from './ssr-e41dcf02.js';
import { H as HeaderPage } from './HeaderPage-71f47110.js';
import { h as is_promise, n as noop } from './utils-a4f7b281.js';
import { B as Button } from './Button-921a77e0.js';
import './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { C as CardPlaceholder } from './CardPlaceholder-bb34af7a.js';
import { H as HOST } from './Const-aff6847f.js';
import './dev-1873bb41.js';
import 'tailwind-merge';

const css = {
  code: ".service-box.s-OQm4IrrQMTE7 .service-box_overlay.s-OQm4IrrQMTE7.s-OQm4IrrQMTE7{clip-path:circle(0% at 50% 0%);margin:0;border-radius:0}.service-box.s-OQm4IrrQMTE7:hover .service-box_overlay.s-OQm4IrrQMTE7.s-OQm4IrrQMTE7{clip-path:circle(100% at 50% 100%);animation:clip-path 1s}@keyframes s-OQm4IrrQMTE7-hoverAnimate{from{clip-path:polygon(100% 0, 18% 25%, 20% 83%, 100% 100%, 0 100%, 0% 60%, 0 0)}to{clip-path:polygon(100% 0, 100% 100%, 25% 85%, 100% 100%, 0 100%, 0% 60%, 0 0)}}.service-box.s-OQm4IrrQMTE7:hover>div.s-OQm4IrrQMTE7>.service-desc.s-OQm4IrrQMTE7{display:block}",
  map: null
};
async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { services = null } = $$props;
  let host = HOST;
  let imageWidth = 0;
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  $$result.css.add(css);
  return `${services ? `${each(services, (service, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <div class="service-box rounded-lg overflow-hidden dark:text-white relative s-OQm4IrrQMTE7" style="${"min-height: " + escape(imageWidth * 60 / 100, true) + "px; max-height: 220px"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", service.title, 0)} class="w-full h-full object-cover"> <div class="service-box_overlay absolute w-full h-full top-0 left-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 transition-all s-OQm4IrrQMTE7"></div> <div class="xl:p-4 p-2 absolute z-10 top-0 w-full h-full flex justify-center items-center flex-col dark:text-white s-OQm4IrrQMTE7"><h5 class="md:text-xl mb-4 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 p-2 px-4 rounded-full text-center line-clamp-2">${escape(service.title)}</h5> <div class="service-desc hidden s-OQm4IrrQMTE7"><p class="line-clamp-3 overflow-ellipsis text-justify relative mb-4">${escape(service.description)} </p></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: "/dich-vu/" + service.slug,
            color: "primary"
          },
          {},
          {
            default: () => {
              return `Xem thêm`;
            }
          }
        )} </div></div> `;
      }(__value);
    }(convertImageJsonToArray(service.imageUrl))}`;
  })}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let host = "http://103.142.26.42";
  let blog = data.data;
  console.log(blog);
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
  )} <div class="container m-auto p-4"><div class="grid grid-cols-12 gap-4 dark:text-slate-50"><div class="xl:col-span-9 md:col-span-12 col-span-full"><div class="grid xl:grid-cols-9 grid-cols-12 gap-3"><div class="p-5 xl:col-span-3 md:col-span-4 col-span-full border rounded-lg"><div class="w-full h-9 bg-red-600 sticky top-[100px]"></div></div> <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">${images[0] ? `<img${add_attribute("src", host + images[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full max-h-[500px] object-cover">` : ``} <!-- HTML_TAG_START -->${blog?.content}<!-- HTML_TAG_END --></div></div></div> <div class="xl:col-span-3 col-span-full"><div class="rounded-lg border"><p class="text-center p-4 font-bold border-b-4" data-svelte-h="svelte-dspgir">Các dịch vụ khác</p> <div class="">${validate_component(Services, "Services").$$render($$result, { services: blog.reference }, {}, {})}</div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ceff4556.js.map
