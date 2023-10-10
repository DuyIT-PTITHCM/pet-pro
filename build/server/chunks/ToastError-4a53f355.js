import { d as compute_rest_props, v as validate_store, a as subscribe } from './utils-ea986cb1.js';
import { c as create_ssr_component, d as spread, h as escape_object, f as escape_attribute_value, a as add_attribute, b as each, e as escape, v as validate_component } from './ssr-ca1a55ab.js';
import { twMerge } from 'tailwind-merge';
import { t as toastErr } from './toastError2-7b7d76cc.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-b4bd0601.js';

const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const css = {
  code: ".toast.s-_lWlOL6y_316{animation:s-_lWlOL6y_316-slide-in 0.4s linear forwards}.success.s-_lWlOL6y_316{background:#a8ff78;background:-webkit-linear-gradient(\n            to right,\n            #00ff8c,\n            #00ff0d\n        );background:linear-gradient(\n            to right,\n            #00ffb3,\n            #02f52a\n        )}.error.s-_lWlOL6y_316{background:#ee0979;background:-webkit-linear-gradient(\n            to right,\n            #ee0979,\n            #ff6a00\n        );background:linear-gradient(\n            to right,\n            #ee0979,\n            #ff6a00\n        )}.info.s-_lWlOL6y_316{background:#fff878;background:-webkit-linear-gradient(\n            to right,\n            #0077ff,\n            #fff478\n        );background:linear-gradient(\n            to right,\n            #00ffff,\n            #166bff\n        )}.warning.s-_lWlOL6y_316{background:#fff878;background:-webkit-linear-gradient(\n            to right,\n            #78ffd6,\n            #fff478\n        );background:linear-gradient(\n            to right,\n            #ffe678,\n            #ffea00\n        )}@keyframes s-_lWlOL6y_316-slide-in{from{transform:translateX(100%)}to{transform:translateX(0%)}}@keyframes s-_lWlOL6y_316-moving{0%{box-shadow:0 0 10px #01ffb3;rotate:0deg}100%{box-shadow:0 0 10px #ff0101;rotate:360deg}}",
  map: null
};
const ToastError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toastErr, $$unsubscribe_toastErr;
  validate_store(toastErr, "toastErr");
  $$unsubscribe_toastErr = subscribe(toastErr, (value) => $toastErr = value);
  let toasts = $toastErr;
  $$result.css.add(css);
  $$unsubscribe_toastErr();
  return `<div class="z-50 fixed top-20 right-4 flex flex-col-reverse items-end">${each(toasts, (toast, index) => {
    return `<div class="${"toast text-white p-2 rounded-md flex items-center gap-4 mb-2 " + escape(toast.type, true) + " s-_lWlOL6y_316"}"><p class="flex items-center 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-xs text-xs">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "text-3xl",
        icon: toast.type === "success" ? "fluent-emoji:cat-face" : "fluent-emoji-flat:crying-cat"
      },
      {},
      {}
    )} ${escape(toast.message)}</p> <button>${validate_component(Icon, "Icon").$$render($$result, { icon: "foundation:x" }, {}, {})}</button> </div>`;
  })} </div>`;
});

export { DarkMode as D, ToastError as T };
//# sourceMappingURL=ToastError-4a53f355.js.map
