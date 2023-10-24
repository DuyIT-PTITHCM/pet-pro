import { h as is_promise, n as noop } from './utils-6372ffc9.js';
import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute } from './ssr-0d75b2b1.js';
import './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import { twMerge } from 'tailwind-merge';
import { H as HOST } from './Const-aff6847f.js';

const ImagePlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center" } = $$props;
  let { imgHeight = "48" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.imgHeight === void 0 && $$bindings.imgHeight && imgHeight !== void 0)
    $$bindings.imgHeight(imgHeight);
  return `<div role="status"${add_attribute("class", twMerge(divClass, $$props.class), 0)}><div class="${"flex justify-center items-center w-full h-" + escape(imgHeight, true) + " bg-gray-300 rounded sm:w-96 dark:bg-gray-700"}"><svg width="48" height="48" class="text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div class="w-full"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-9/12"></div></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
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
        return ` <div class="w-full">${validate_component(ImagePlaceholder, "ImagePlaceholder").$$render($$result, {}, {}, {})}</div> `;
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

export { Blogs as B };
//# sourceMappingURL=Blogs-deb112cc.js.map
