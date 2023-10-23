import { h as is_promise, n as noop } from './utils-6372ffc9.js';
import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute } from './ssr-0d75b2b1.js';
import './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import { C as CardPlaceholder } from './CardPlaceholder-fc1839f9.js';
import { H as HOST } from './Const-aff6847f.js';

async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const SideRefercence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = null } = $$props;
  let { isSmallBox = false } = $$props;
  let { originSlug = "" } = $$props;
  let host = HOST;
  let serviceBoxWidth = 0;
  let blogImages;
  let showReadMore = Array(1).fill(false);
  async function getImage(images) {
    blogImages = await convertImageJsonToArray(images);
    return blogImages;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.isSmallBox === void 0 && $$bindings.isSmallBox && isSmallBox !== void 0)
    $$bindings.isSmallBox(isSmallBox);
  if ($$props.originSlug === void 0 && $$bindings.originSlug && originSlug !== void 0)
    $$bindings.originSlug(originSlug);
  return `${data ? `${each(data, (blog, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <a data-sveltekit-reload href="${"/" + escape(originSlug, true) + "/" + escape(blog.slug, true)}" class="${"flex overflow-hidden dark:text-white max-h-[140px] " + escape(
          isSmallBox ? " hover:text-primary-500 hover:shadow-lg dark:shadow-md" : "rounded-lg border hover:shadow-lg ",
          true
        )}"><div class="overflow-hidden" style="${"width: " + escape(serviceBoxWidth * 30 / 100, true) + "px;"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", blog.title, 0)} class="w-full object-cover hover:scale-105 transition-all h-[80px]"></div> <div class="${escape(isSmallBox ? "p-1" : "md:p-4 p-3", true) + " flex-1"}"><div class="flex items-center h-full"><div class="hover:text-primary-600"><h3 class="${escape(
          isSmallBox ? "text-sm line-clamp-2 text-justify " : "md:text-lg text-base line-clamp-2",
          true
        ) + " font-semibold"}">${escape(blog.title)}</h3> <p class="${escape(
          isSmallBox ? "text-sm text-slate-700 dark:text-slate-300" : "md:text-base text-sm",
          true
        ) + " mt-1 line-clamp-1 text-justify relative overflow-hidden"}" id="${"blog" + escape(index, true)}"><span>${escape(blog.description)}</span> ${showReadMore[index] ? `<p class="absolute bg-white dark:bg-slate-800 z-20 bottom-0 right-0">...<span class="text-blue-500" data-svelte-h="svelte-w3kk2g">Xem thêm</span></p>` : ``}</p> </div></div> </div></a> ${isSmallBox ? `<hr class="dark:hidden">` : ``} `;
      }(__value);
    }(getImage(blog.imageUrl))}`;
  })}` : ``}`;
});

export { SideRefercence as S };
//# sourceMappingURL=SideRefercence-9f3e2214.js.map
