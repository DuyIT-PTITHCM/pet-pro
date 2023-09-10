import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape, i as createEventDispatcher, g as getContext } from './ssr-14a856f3.js';
import { v as validate_store, s as subscribe, c as compute_rest_props, a as compute_slots, h as identity } from './utils-9f8bdf1a.js';
import { l as loadingState } from './loading-01041b6e.js';
import { R as RepositoryFactory } from './RepositoryFactory-7d37287f.js';
import { B as Button } from './Button-f66b6ff5.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-e4e9e84a.js';
import { C as Checkbox, R as Radio } from './Checkbox-5d9c25d5.js';
import { I as Input } from './Input-a84ee897.js';
import { P as Popper } from './Popper-cfeaaecf.js';
import { twMerge } from 'tailwind-merge';
import { M as Modal, C as CloseButton } from './Modal-5b52b558.js';
import { F as Frame } from './Frame-e48c1581.js';
import { E as Editor_1, T as Tabs, a as TabItem } from './Editor-ecf1a8e8.js';
import { t as title, d as description } from './meta-fbb8b016.js';
import './index-1c7c9ace.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './dev-1873bb41.js';
import './Wrapper-570c015a.js';
import '@floating-ui/dom';

function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const baseClass = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "large", "dismissable"]);
  let { color = "primary" } = $$props;
  let { large = false } = $$props;
  let { dismissable = false } = $$props;
  const colors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    none: ""
  };
  const borderedColors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",
    blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",
    green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",
    purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",
    none: ""
  };
  const hoverColors = {
    primary: "hover:bg-primary-200",
    blue: "hover:bg-blue-200",
    dark: "hover:bg-gray-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    indigo: "hover:bg-indigo-200",
    purple: "hover:bg-purple-200",
    pink: "hover:bg-pink-200",
    none: ""
  };
  let badgeClass;
  let open = true;
  const dispatch = createEventDispatcher();
  const close = (e) => {
    e.stopPropagation();
    open = false;
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  {
    {
      if (dismissable)
        $$restProps.transition = $$restProps.transition ?? fade;
    }
  }
  badgeClass = twMerge(
    baseClass,
    large ? "text-sm" : "text-xs",
    $$restProps.border ? `border ${borderedColors[color]}` : colors[color],
    $$restProps.href && hoverColors[color],
    $$restProps.rounded ? "rounded-full" : "rounded",
    $$props.class
  );
  {
    dispatch(open ? "open" : "close");
  }
  return `${open ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: badgeClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${dismissable ? `${slots["close-button"] ? slots["close-button"]({ close }) : ` ${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          color,
          size: large ? "sm" : "xs",
          name: "Remove badge",
          class: "ml-1.5 -mr-1.5"
        },
        {},
        {}
      )} `}` : ``}`;
    }
  })}` : ``} `;
});
const common = "mr-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked", "customSize"]);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let { customSize = "" } = $$props;
  let background = getContext("background");
  const colors = {
    primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
    secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6",
    custom: customSize
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    divClass = twMerge(
      common,
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "primary"],
      sizes[size],
      "relative",
      $$props.classDiv
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({}, { custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${add_attribute("class", divClass, 0)}></span> ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title: title2 = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render(
    $$result,
    Object.assign({}, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, {
      class: "dark:!border-gray-600 " + $$props.class
    }),
    {},
    {
      default: () => {
        return `${$$slots.title || title2 ? `<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : ` <h3 class="font-semibold text-gray-900 dark:text-white">${escape(title2)}</h3> `}</div>` : ``} <div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} `;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAction = false } = $$props;
  let { menu } = $$props;
  let { categories } = $$props;
  let deleteMenuName = "";
  let popupDeleteModal = false;
  let numCategory = 0;
  let newMenu = {
    name: null,
    url: null,
    parent_id: null,
    description: "",
    isShowDescription: 0
  };
  let types = [
    { name: "Product", value: "product" },
    { name: "Service", value: "service" },
    { name: "Blog", value: "blog" }
  ];
  if ($$props.isAction === void 0 && $$bindings.isAction && isAction !== void 0)
    $$bindings.isAction(isAction);
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="border-l-4 border-cyan-400 my-4"><div class="flex items-center"><hr class="w-2 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        defaultClass: "max-w-[300px]",
        value: menu.name
      },
      {
        value: ($$value) => {
          menu.name = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="w-2 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        defaultClass: "max-w-[300px]",
        value: menu.url
      },
      {
        value: ($$value) => {
          menu.url = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="w-2 h-[4px] bg-cyan-400"> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        outline: true,
        id: "submenu" + menu.id,
        class: "text-xl"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "material-symbols:description-rounded"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        class: "w-full text-sm font-light z-50",
        title: "Description of " + menu.name,
        translate: "yes",
        triggeredBy: "#submenu" + menu.id,
        trigger: "click"
      },
      {},
      {
        default: () => {
          return ` ${validate_component(Editor_1, "Editor").$$render(
            $$result,
            { text: menu.description },
            {
              text: ($$value) => {
                menu.description = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              class: "cursor-pointer mt-1",
              "aria-describedby": "helper-checkbox-text",
              checked: menu.isShowDescription
            },
            {
              checked: ($$value) => {
                menu.isShowDescription = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Show Description`;
              }
            }
          )}`;
        }
      }
    )} <hr class="w-2 h-[4px] bg-cyan-400"> <button id="${"type" + escape(menu.id, true)}" class="text-xl">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: menu.type == "product" ? "fluent-emoji:cat" : menu.type == "blog" ? "openmoji:hacker-cat" : "twemoji:guide-dog",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button> ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        class: "text-sm font-light ",
        title: "Description",
        translate: "yes",
        triggeredBy: "#type" + menu.id,
        trigger: "click"
      },
      {},
      {
        default: () => {
          return `<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">${each(types, (type) => {
            return `<li>${validate_component(Radio, "Radio").$$render(
              $$result,
              {
                class: "p-3",
                value: type.value,
                group: menu.type
              },
              {
                group: ($$value) => {
                  menu.type = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(type.name)}`;
                }
              }
            )}</li>`;
          })}</ul>`;
        }
      }
    )} <hr class="w-2 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "icon-park-solid:up-one",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button> <div class="${"flex items-center " + escape(!isAction && "hidden", true)}"><hr class="w-2 h-[4px] bg-cyan-400"> <button class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mingcute:add-fill",
        class: "  text-[20px]"
      },
      {},
      {}
    )}</button> <hr class="w-2 h-[4px] bg-cyan-400"> <button ${""}>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "bxs:edit",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button> <hr class="w-2 h-[4px] bg-cyan-400"> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "cursor-pointer p-2 dark:bg-gray-700 shadow-[inset_0_-2px_4px_rgba(0,0,0)] rounded-lg hover:opacity-80",
        checked: menu.active
      },
      {
        checked: ($$value) => {
          menu.active = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(menu.active ? "Active" : "InActive")}`;
        }
      }
    )}</div> <hr class="w-2 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "icon-park-solid:right-one",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] " + (numCategory == menu.id ? "text-yellow-400" : "text-gray-900 dark:text-white") + " dark:bg-gray-700 rounded-lg"
      },
      {},
      {}
    )}</button></div> <div class="${escape("hidden", true) + " my-2"}">${each(menu.subMenus, (subMenu, index) => {
      return `<div class="flex items-center my-2"><div class="flex items-center"><hr class="w-10 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
        $$result,
        {
          defaultClass: "max-w-[300px]",
          value: subMenu.name
        },
        {
          value: ($$value) => {
            subMenu.name = $$value;
            $$settled = false;
          }
        },
        {}
      )} <hr class="w-4 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
        $$result,
        {
          defaultClass: "max-w-[300px]",
          value: subMenu.url
        },
        {
          value: ($$value) => {
            subMenu.url = $$value;
            $$settled = false;
          }
        },
        {}
      )} <hr class="w-4 h-[4px] bg-cyan-400"> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          color: "dark",
          outline: true,
          id: "submenu" + subMenu.id,
          class: "text-xl"
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "material-symbols:description-rounded"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          class: "w-full text-sm font-light z-50",
          title: "Description",
          translate: "yes",
          triggeredBy: "#submenu" + subMenu.id,
          trigger: "click"
        },
        {},
        {
          default: () => {
            return ` ${validate_component(Editor_1, "Editor").$$render(
              $$result,
              { text: subMenu.description },
              {
                text: ($$value) => {
                  subMenu.description = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Checkbox, "Checkbox").$$render(
              $$result,
              {
                class: "cursor-pointer",
                "aria-describedby": "helper-checkbox-text",
                checked: subMenu.isShowDescription
              },
              {
                checked: ($$value) => {
                  subMenu.isShowDescription = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `Show Description`;
                }
              }
            )} `;
          }
        }
      )} <hr class="w-4 h-[4px] bg-cyan-400"> <button id="${"type" + escape(subMenu.id, true)}" class="text-xl">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: subMenu.type == "product" ? "fluent-emoji:cat" : subMenu.type == "blog" ? "openmoji:hacker-cat" : "twemoji:guide-dog",
          class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> ${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          class: "text-sm font-light z-50",
          title: "Description",
          translate: "yes",
          triggeredBy: "#type" + subMenu.id,
          trigger: "click"
        },
        {},
        {
          default: () => {
            return `<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">${each(types, (type) => {
              return `<li>${validate_component(Radio, "Radio").$$render(
                $$result,
                {
                  class: "p-3",
                  value: type.value,
                  group: subMenu.type
                },
                {
                  group: ($$value) => {
                    subMenu.type = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${escape(type.name)}`;
                  }
                }
              )}</li>`;
            })}</ul> `;
          }
        }
      )}</div> <div class="${"flex items-center " + escape(!isAction && "hidden", true)}"><hr class="w-2 h-[4px] bg-cyan-400"> <button ${""}>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "bxs:edit",
          class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> <hr class="w-2 h-[4px] bg-cyan-400"> ${validate_component(Toggle, "Toggle").$$render(
        $$result,
        {
          class: "cursor-pointer p-2 dark:bg-gray-700 shadow-[inset_0_-2px_4px_rgba(0,0,0)] rounded-lg hover:opacity-80",
          checked: subMenu.active
        },
        {
          checked: ($$value) => {
            subMenu.active = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `${escape(subMenu.active ? "Active" : "InActive")}`;
          }
        }
      )}</div> <hr class="w-2 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "icon-park-solid:right-one",
          class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] dark:bg-gray-700 " + (numCategory == subMenu.id ? "text-yellow-400" : "text-gray-900 dark:text-white") + " rounded-lg"
        },
        {},
        {}
      )}</button> </div>`;
    })}</div> <div class="${escape("hidden", true) + " my-2"}"><div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        defaultClass: "max-w-[300px]",
        placeholder: "Input name...",
        required: true,
        value: newMenu.name
      },
      {
        value: ($$value) => {
          newMenu.name = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="w-4 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        defaultClass: "max-w-[300px]",
        placeholder: "Input address...",
        required: true,
        value: newMenu.url
      },
      {
        value: ($$value) => {
          newMenu.url = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="w-4 h-[4px] bg-cyan-400"> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        outline: true,
        id: "addsubmenu",
        class: "text-xl"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "material-symbols:description-rounded"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        class: "w-full text-sm font-light ",
        title: "Description",
        translate: "yes",
        triggeredBy: "#addsubmenu",
        trigger: "click"
      },
      {},
      {
        default: () => {
          return ` ${validate_component(Editor_1, "Editor").$$render(
            $$result,
            { text: newMenu.description },
            {
              text: ($$value) => {
                newMenu.description = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              class: "cursor-pointer",
              "aria-describedby": "helper-checkbox-text",
              value: newMenu.isShowDescription
            },
            {
              value: ($$value) => {
                newMenu.isShowDescription = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Show Description`;
              }
            }
          )}`;
        }
      }
    )} <hr class="w-4 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ep:success-filled",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button></div></div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: popupDeleteModal
      },
      {
        open: ($$value) => {
          popupDeleteModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-center">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "fluent:delete-20-filled",
              class: "mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete ${validate_component(Badge, "Badge").$$render($$result, { color: "dark", class: "text-lg" }, {}, {
            default: () => {
              return `${escape(deleteMenuName)}`;
            }
          })} menu?</h3> ${validate_component(Button, "Button").$$render($$result, { color: "red", class: "mr-2" }, {}, {
            default: () => {
              return `Yes, I&#39;m sure`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  return `<div class="border-2 border-gray-300 shadow-[0_20px_20px_-8px_rgba(0,0,0,0.3)] dark:border-gray-800 dark:shadow rounded-xl overflow-hidden">${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      contentClass: "px-4 bg-gray-50 rounded-lg dark:bg-gray-800",
      style: "underline"
    },
    {},
    {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true }, {}, {
          title: () => {
            return `<div slot="title" class="flex items-center gap-2 rounded-lg">Categories of ${escape(categories.manuname)}</div>`;
          },
          default: () => {
            return `<div>${categories.cates.length > 0 ? `<div class="w-full h-full">${each(categories.cates, (category) => {
              return `<button class="flex justify-between items-center w-full bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-700 my-4 pl-4 cursor-pointer rounded-lg overflow-hidden"><p class="text-sm text-gray-900 dark:text-gray-200">${escape(category.categoryName)}</p> <div><button class="text-xl dark:text-white p-4 -mr-1 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:edit-20-filled" }, {}, {})}</button> <button class="text-xl dark:text-white p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:delete-28-filled" }, {}, {})} </button></div> </button>`;
            })} <button class="flex justify-between items-center w-full text-gray-900 dark:text-gray-200 bg-slate-200 dark:bg-slate-900 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700 my-4 pl-4 cursor-pointer rounded-lg overflow-hidden"><p class="text-sm" data-svelte-h="svelte-d2tsm2">Add new Category</p> <div class="text-xl p-4">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:add-12-filled" }, {}, {})}</div></button></div> ` : `<div class="flex p-4 dark:text-gray-200"><p data-svelte-h="svelte-10g6myd">This menu don&#39;t have any category</p> <div class="animate-bounce font-bold ml-1" data-svelte-h="svelte-e58445">. . .</div></div>`}</div>`;
          }
        })} ${validate_component(TabItem, "TabItem").$$render($$result, {}, {}, {
          title: () => {
            return `<div slot="title" class="flex items-center gap-2" data-svelte-h="svelte-1ak2q26">Dashboard</div>`;
          },
          default: () => {
            return `<p class="text-sm text-gray-500 dark:text-gray-400"><b data-svelte-h="svelte-jsxt2">Dashboard:</b>
            Lorem ipsum dolor sit amet,</p>`;
          }
        })}`;
      }
    }
  )}</div>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  const menuService = RepositoryFactory.get("menuRepository");
  let isAction = false;
  let categories;
  let menus;
  loadingState.set(true);
  let types = [
    { name: "Product", value: "product" },
    { name: "Service", value: "service" },
    { name: "Blog", value: "blog" }
  ];
  async function getMenus() {
    loadingState.set(true);
    const res = await menuService.get();
    menus = res.data.data;
    loadingState.set(false);
  }
  getMenus();
  let newMenu = {
    id: null,
    name: null,
    url: null,
    parent_id: null,
    description: "",
    isShowDescription: true,
    active: true,
    type: "product"
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold" data-svelte-h="svelte-18agr04">Menu management</h1></div></div> <div class="flex justify-center w-full h-full bg-neutral-50 dark:bg-slate-900 rounded-lg p-6"><div class="">${!menus && !$loadingState ? `<h1 data-svelte-h="svelte-i5gzyz">nodata</h1>` : `${!$loadingState ? `<div class="flex"><button class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg mr-2">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ic:outline-electric-bolt",
        class: " text-[28px]"
      },
      {},
      {}
    )}</button> <button class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mingcute:add-fill",
        class: " text-[28px]"
      },
      {},
      {}
    )}</button> <div${add_attribute("class", "hidden", 0)}><form class="flex items-center"><hr class="w-4 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        defaultClass: "max-w-[300px]",
        placeholder: "Input name...",
        value: newMenu.name
      },
      {
        value: ($$value) => {
          newMenu.name = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="w-4 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        defaultClass: "max-w-[300px]",
        placeholder: "Input address...",
        value: newMenu.url
      },
      {
        value: ($$value) => {
          newMenu.url = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="w-4 h-[4px] bg-cyan-700"> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "dark",
        outline: true,
        id: "addsubmenu",
        class: "text-xl"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "material-symbols:description-rounded"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        class: "w-full text-sm font-light ",
        title: "Description",
        translate: "yes",
        triggeredBy: "#addsubmenu",
        trigger: "click"
      },
      {},
      {
        default: () => {
          return ` ${validate_component(Editor_1, "Editor").$$render(
            $$result,
            { text: newMenu.description },
            {
              text: ($$value) => {
                newMenu.description = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              class: "cursor-pointer",
              "aria-describedby": "helper-checkbox-text",
              value: newMenu.isShowDescription
            },
            {
              value: ($$value) => {
                newMenu.isShowDescription = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Show Description`;
              }
            }
          )}`;
        }
      }
    )} <hr class="w-4 h-[4px] bg-cyan-700"> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "none",
        id: "menuaddtype",
        class: "text-xl p-0 m-0"
      },
      {},
      {
        default: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: newMenu.type == "product" ? "fluent-emoji:cat" : newMenu.type == "blog" ? "openmoji:hacker-cat" : "twemoji:guide-dog",
              class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
            },
            {},
            {}
          )}`;
        }
      }
    )} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        class: "text-sm font-light z-50",
        title: "Type",
        triggeredBy: "#menuaddtype",
        trigger: "click"
      },
      {},
      {
        default: () => {
          return `<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">${each(types, (type) => {
            return `<li>${validate_component(Radio, "Radio").$$render(
              $$result,
              {
                class: "p-3",
                value: type.value,
                group: newMenu.type
              },
              {
                group: ($$value) => {
                  newMenu.type = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(type.name)}`;
                }
              }
            )}</li>`;
          })}</ul>`;
        }
      }
    )} <hr class="w-4 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ep:success-filled",
        class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button></form></div></div> <div class="grid md:grid-cols-2 grid-cols-1 gap-4"><div>${each(menus, (menu) => {
      return `${validate_component(MenuItem, "MenuItem").$$render(
        $$result,
        { menu, isAction, categories },
        {
          categories: ($$value) => {
            categories = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> <div>${categories ? `${validate_component(Category, "Category").$$render($$result, { categories }, {}, {})}` : `<div class="w-full h-full dark:text-white rounded-lg flex flex-col justify-center items-center"><img class="rounded-lg w-[200px]" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExandoOHd6NXU3bDB4bTJwMTg3NXVoN205N3NmNzU4YXRudzF5ZDJ6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AW6eOaOemvDv1FBpZ6/giphy.gif" alt=""> <b data-svelte-h="svelte-omtyyb">Choose one menu to view categories of that menu</b></div>`}</div></div>` : ``}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_loadingState();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("Menu Management");
  description.set("description");
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c326e6d2.js.map
