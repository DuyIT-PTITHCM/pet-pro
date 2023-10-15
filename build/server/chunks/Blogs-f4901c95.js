import { h as is_promise, n as noop } from './utils-a4f7b281.js';
import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute } from './ssr-e41dcf02.js';
import './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { C as CardPlaceholder } from './CardPlaceholder-bb34af7a.js';
import { H as HOST } from './Const-aff6847f.js';

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
        return ` <a href="${"/tin-tuc/" + escape(blog.slug, true)}" class="${"flex overflow-hidden dark:text-white max-h-[140px] " + escape(
          isSmallBox ? "py-4 hover:text-primary-500" : "rounded-lg border hover:shadow-lg ",
          true
        )}"><div class="overflow-hidden" style="${"width: " + escape(serviceBoxWidth * 30 / 100, true) + "px;"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full h-full object-cover hover:scale-105 transition-all"></div> <div class="${escape(isSmallBox ? "p-1" : "md:p-4 p-3", true) + " flex-1"}"><div class="flex flex-col justify-between items-start"><h3 class="${escape(
          isSmallBox ? "text-base line-clamp-3 text-justify " : "md:text-lg text-base line-clamp-2",
          true
        ) + " font-semibold"}">${escape(blog.title)}</h3> <p class="${escape(isSmallBox && "hidden", true) + " md:text-base text-sm mt-1 line-clamp-2 text-justify relative overflow-hidden"}" id="${"blog" + escape(index, true)}"><span>${escape(blog.description)}</span> ${showReadMore[index] ? `<p class="absolute bg-white dark:bg-slate-800 z-20 bottom-0 right-0">...<span class="text-blue-500" data-svelte-h="svelte-w3kk2g">Xem thêm</span></p>` : ``} </p></div> </div></a> ${isSmallBox ? `<hr>` : ``} `;
      }(__value);
    }(getImage(blog.imageUrl))}`;
  })}` : ``}`;
});

export { Blogs as B };
//# sourceMappingURL=Blogs-f4901c95.js.map
