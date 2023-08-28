import { v as validate_store, s as subscribe } from './utils-f848b3c2.js';
import { c as create_ssr_component, v as validate_component } from './ssr-8dc8d8d7.js';
import { I as Icon } from './Icon-c5f05f08.js';
import { l as loadingState } from './loading2-83ba27d3.js';

const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  $$unsubscribe_loadingState();
  return `${$loadingState ? `<div class="fixed w-full h-screen top-0 z-50 bg-gray-800 opacity-80"><div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-orange-500"><div class="absolute z-10 -ml-2 h-16 w-16 animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin relative" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 16 16"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>${validate_component(Icon, "Icon").$$render($$result, { icon: "noto:cat-face", class: "m-5" }, {}, {})}</svg></div> <div class="ml-5 shadow-xl"><div class="absolute top-4 h-20 w-2 bg-white animate-bounce border-l-2 border-gray-200" style="rotate: -90deg"></div> <div class="absolute top-6 h-20 w-2 bg-white animate-bounce border-r-2 border-gray-200" style="rotate: 90deg"></div></div></div></div>` : ``}`;
});

export { Loading as L };
//# sourceMappingURL=Loading-375e32c7.js.map
