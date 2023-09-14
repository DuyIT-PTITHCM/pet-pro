import { v as validate_store, a as subscribe } from './utils-2dd7664d.js';
import { c as create_ssr_component, b as each, e as escape, v as validate_component } from './ssr-3e906495.js';
import { t as toastErr } from './toastError2-3194e7be.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-4cae1de8.js';

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

export { ToastError as T };
//# sourceMappingURL=ToastError-316b4586.js.map
