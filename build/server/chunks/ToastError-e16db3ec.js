import { v as validate_store, s as subscribe } from './utils-5762d6f4.js';
import { c as create_ssr_component, b as each, e as escape, v as validate_component } from './ssr-4b2a575b.js';
import { w as writable } from './index-f06f6a44.js';
import { I as Icon } from './Icon-29f6d43e.js';

const initialData = [];
const toastErr = writable(initialData);
const css = {
  code: ".toast.s-_lWlOL6y_316{animation:s-_lWlOL6y_316-slide-in 0.4s linear forwards}.success.s-_lWlOL6y_316{background:#a8ff78;background:-webkit-linear-gradient(\r\n            to right,\r\n            #00ff8c,\r\n            #00ff0d\r\n        );background:linear-gradient(\r\n            to right,\r\n            #00ffb3,\r\n            #02f52a\r\n        )}.error.s-_lWlOL6y_316{background:#ee0979;background:-webkit-linear-gradient(\r\n            to right,\r\n            #ee0979,\r\n            #ff6a00\r\n        );background:linear-gradient(\r\n            to right,\r\n            #ee0979,\r\n            #ff6a00\r\n        )}.info.s-_lWlOL6y_316{background:#fff878;background:-webkit-linear-gradient(\r\n            to right,\r\n            #0077ff,\r\n            #fff478\r\n        );background:linear-gradient(\r\n            to right,\r\n            #00ffff,\r\n            #166bff\r\n        )}.warning.s-_lWlOL6y_316{background:#fff878;background:-webkit-linear-gradient(\r\n            to right,\r\n            #78ffd6,\r\n            #fff478\r\n        );background:linear-gradient(\r\n            to right,\r\n            #ffe678,\r\n            #ffea00\r\n        )}@keyframes s-_lWlOL6y_316-slide-in{from{transform:translateX(100%)}to{transform:translateX(0%)}}@keyframes s-_lWlOL6y_316-moving{0%{box-shadow:0 0 10px #01ffb3;rotate:0deg}100%{box-shadow:0 0 10px #ff0101;rotate:360deg}}",
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
//# sourceMappingURL=ToastError-e16db3ec.js.map
