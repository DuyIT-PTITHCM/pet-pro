import { c as compute_rest_props, a as compute_slots } from './utils-c444a4b3.js';
import { c as create_ssr_component, g as getContext, v as validate_component, e as escape, d as spread, h as escape_object, f as escape_attribute_value, a as add_attribute, b as each } from './ssr-31a8ce1b.js';
import { W as Wrapper } from './Wrapper-222fb707.js';
import { twMerge } from 'tailwind-merge';
import { I as Icon } from './Icon-d5159527.js';

function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const Helper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["helperClass", "color"]);
  let { helperClass = "text-xs font-normal text-gray-500 dark:text-gray-300" } = $$props;
  let { color = "gray" } = $$props;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.helperClass === void 0 && $$bindings.helperClass && helperClass !== void 0)
    $$bindings.helperClass(helperClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<p${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(helperClass, colorClasses[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p> `;
});
const css = {
  code: ".toast-container.s-8qAUd7lXYtIE{z-index:1000;position:fixed;top:100px;right:1rem;display:flex;flex-direction:column-reverse;align-items:flex-end}.toast.s-8qAUd7lXYtIE{color:white;padding:1rem;border-radius:0.25rem;display:flex;align-items:center;gap:1rem;margin-bottom:0.5rem;animation:s-8qAUd7lXYtIE-slide-in 0.5s linear forwards}.success.s-8qAUd7lXYtIE{background:#a8ff78;background:-webkit-linear-gradient(to right, #78ffc2, #a8ff78);background:linear-gradient(to right, #00ffb3, #a8ff78)}.error.s-8qAUd7lXYtIE{background:#ee0979;background:-webkit-linear-gradient(to right, #ee0979, #ff6a00);background:linear-gradient(to right, #ee0979, #ff6a00)}.info.s-8qAUd7lXYtIE{background:#fff878;background:-webkit-linear-gradient(to right, #0077ff, #fff478);background:linear-gradient(to right, #00ffff, #166bff)}.warning.s-8qAUd7lXYtIE{background:#fff878;background:-webkit-linear-gradient(to right, #78ffd6, #fff478);background:linear-gradient(to right, #ffe678, #ffea00)}@keyframes s-8qAUd7lXYtIE-slide-in{from{transform:translateX(100%)}to{transform:translateX(0%)}}@keyframes s-8qAUd7lXYtIE-moving{0%{box-shadow:0 0 10px #01ffb3;rotate:0deg}100%{box-shadow:0 0 10px #ff0101;rotate:360deg}}",
  map: null
};
const ToastCustom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toasts = [];
  let toastId = 0;
  function hideToast(toast) {
    toast.visible = false;
    setTimeout(
      () => {
        toasts = toasts.filter((t) => t !== toast);
      },
      300
    );
  }
  let messageType = "";
  function showToast(message, type) {
    if (type == 0) {
      messageType = "success";
    } else if (type == 1) {
      messageType = "error";
    } else if (type == 2) {
      messageType = "info";
    } else if (type == 3) {
      messageType = "warning";
    }
    const toast = {
      id: toastId++,
      message,
      type,
      visible: true
    };
    toasts = [...toasts, toast];
    setTimeout(
      () => {
        hideToast(toast);
      },
      5e3
    );
  }
  if ($$props.showToast === void 0 && $$bindings.showToast && showToast !== void 0)
    $$bindings.showToast(showToast);
  $$result.css.add(css);
  return `<div class="toast-container s-8qAUd7lXYtIE">${each(toasts, (toast) => {
    return `${toast.visible ? `<div class="${"toast " + escape(messageType, true) + " s-8qAUd7lXYtIE"}"><p class="flex items-center">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        class: "text-3xl",
        icon: toast.type === 0 ? "fluent-emoji:cat-face" : "fluent-emoji-flat:crying-cat"
      },
      {},
      {}
    )} ${escape(toast.message)}</p> <button>${validate_component(Icon, "Icon").$$render($$result, { icon: "foundation:x" }, {}, {})}</button> </div>` : ``}`;
  })} </div>`;
});

export { Helper as H, Input as I, ToastCustom as T };
//# sourceMappingURL=ToastCustom-a077be88.js.map
