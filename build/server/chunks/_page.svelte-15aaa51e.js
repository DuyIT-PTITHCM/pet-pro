import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each, g as getContext } from './ssr-a6fe4ea2.js';
import { v as validate_store, a as subscribe, c as compute_rest_props } from './utils-22ec5563.js';
import { l as loadingState } from './loading-9de519c5.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import { B as Button } from './Button-e60b699b.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import { C as Checkbox, R as Radio } from './Checkbox-c38bb7c2.js';
import { I as Input } from './Input-28e48a82.js';
import { P as Popover } from './Popover-68f1f46e.js';
import 'js-cookie';
import { B as Badge } from './Badge-6b884695.js';
import { twMerge } from 'tailwind-merge';
import { M as Modal } from './Modal-618d1437.js';
import { E as Editor_1 } from './Editor-63c08df2.js';
import { T as Tabs, a as TabItem, C as CreateSeo } from './CreateSeo-2001dbdc.js';
import { t as toastErr } from './toastError2-4d5b9c2d.js';
import { t as t2 } from './index2-e28c90c4.js';
import { N as Nodata } from './Nodata-34cdcf2a.js';
import { t as title, d as description } from './meta-707427e7.js';
import './index-eecbf3f9.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'axios';
import './dev-1873bb41.js';
import './Wrapper-3bde006e.js';
import './Popper-14b949b8.js';
import '@floating-ui/dom';
import './CloseButton-5ce65cd1.js';
import './index3-78aa8264.js';
import './index4-e6d78c98.js';
import './common-f14333dd.js';
import './Fileupload-d32ca100.js';
import './Textarea-22da094e.js';

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
const ListPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div role="status"${add_attribute("class", twMerge(divClass, $$props.class), 0)}><div class="flex justify-between items-center"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <div class="flex justify-between items-center pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div> <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAction = false } = $$props;
  let { menu } = $$props;
  let { categoriesMenu } = $$props;
  let { numCategory = 0 } = $$props;
  let { showMenuId = 0 } = $$props;
  let deleteMenuName = "";
  let popupDeleteModal = false;
  let newMenu = {
    id: null,
    name: null,
    url: null,
    parent_id: 0,
    description: "",
    isShowDescription: true,
    active: true,
    type: "product"
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
  if ($$props.categoriesMenu === void 0 && $$bindings.categoriesMenu && categoriesMenu !== void 0)
    $$bindings.categoriesMenu(categoriesMenu);
  if ($$props.numCategory === void 0 && $$bindings.numCategory && numCategory !== void 0)
    $$bindings.numCategory(numCategory);
  if ($$props.showMenuId === void 0 && $$bindings.showMenuId && showMenuId !== void 0)
    $$bindings.showMenuId(showMenuId);
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
        class: "md:w-2/4 w-full text-sm font-light z-50",
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
        title: "Type",
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
        icon: "icon-park-solid:down-one",
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
          return `Active`;
        }
      }
    )}</div> <hr class="w-2 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "icon-park-solid:right-one",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] " + (showMenuId == menu.id ? "text-yellow-400" : "text-gray-900 dark:text-white") + " dark:bg-gray-700 rounded-lg"
      },
      {},
      {}
    )}</button></div>  <div class="${escape("hidden", true) + " my-2"}">${each(menu.subMenus, (subMenu, index) => {
      return `<div class="flex items-center my-2"><div class="flex items-center"><hr class="w-8 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
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
          title: "Description of " + subMenu.name,
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
          title: "Type",
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
            return `Active`;
          }
        }
      )}</div> <hr class="w-2 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "icon-park-solid:right-one",
          class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] dark:bg-gray-700 " + (showMenuId == subMenu.id ? "text-yellow-400" : "text-gray-900 dark:text-white") + " rounded-lg"
        },
        {},
        {}
      )}</button> </div>`;
    })}</div>  <div class="${escape("hidden", true) + " my-2"}"><div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-400"> ${validate_component(Input, "Input").$$render(
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
        title: "Description of " + newMenu.name,
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
              checked: newMenu.isShowDescription
            },
            {
              checked: ($$value) => {
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
    )} <hr class="w-4 h-[4px] bg-cyan-400"> ${validate_component(Button, "Button").$$render(
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
    )} <hr class="w-2 h-[4px] bg-cyan-400"> <button>${validate_component(Icon, "Icon").$$render(
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
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  const categoryService = RepositoryFactory.get("categoryRepository");
  var isReload = false;
  let { menu } = $$props;
  let categories = [];
  let nameCategoryName;
  let seo = {
    id: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    canonicalUrl: null,
    robotMetaTags: null,
    openGraphTags: null,
    structuredData: null,
    sitemapPriority: null,
    sitemapFrequency: null,
    sitemapLastModified: null,
    reference: "menu",
    referenceId: menu.id
  };
  menu.seo = menu.seo ? menu.seo : seo;
  async function showCategories() {
    try {
      isReload = true;
      let queryParams = { menuId: menu.id, type: menu.type };
      const res = await categoryService.get(queryParams);
      categories = res.data.data;
      isReload = false;
    } catch (error) {
      const errors = error?.response?.data?.errors;
      var toasts = errors?.map((element) => {
        return { message: element.msg, type: "error" };
      });
      toastErr.set(toasts);
    }
  }
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    menu && showCategories();
    $$rendered = `<div class="w-full border-2 border-gray-300 shadow-[0_20px_20px_-8px_rgba(0,0,0,0.3)] dark:border-gray-800 dark:shadow rounded-xl overflow-hidden">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        contentClass: "bg-gray-50 rounded-lg dark:bg-gray-800 h-full",
        style: "underline"
      },
      {},
      {
        default: () => {
          return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true }, {}, {
            title: () => {
              return `<div slot="title" class="flex items-center gap-2 rounded-lg">${escape($t("common.categoryOf"))} ${escape(menu.name)}</div>`;
            },
            default: () => {
              return `<div class="dark:bg-gray-700 min-h-[150px] p-4">${isReload ? `${validate_component(ListPlaceholder, "ListPlaceholder").$$render($$result, {}, {}, {})}` : `${categories.length > 0 ? `<div class="w-full h-full">${each(categories, (category) => {
                return `<div class="flex justify-between items-center mb-4 w-full bg-slate-200 dark:bg-slate-900 pl-4 cursor-pointer rounded-lg overflow-hidden"><input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg"${add_attribute("value", category.categoryName, 0)}> <div><button class="text-xl dark:text-white p-4 -mr-1 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black rounded-lg">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:edit-20-filled" }, {}, {})}</button> <button class="text-xl dark:text-white p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black rounded-lg">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:delete-28-filled" }, {}, {})} </button></div> </div>`;
              })} <div class="flex justify-between items-center w-full text-gray-900 dark:text-gray-200 bg-slate-200 dark:bg-slate-900 my-4 pl-4 rounded-lg overflow-hidden"><input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg" placeholder="Input category name to add..."${add_attribute("value", nameCategoryName, 0)}> <button class="text-xl p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-500 rounded-lg">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:add-12-filled" }, {}, {})}</button></div></div>` : `<div class="p-4 dark:text-gray-200"><p>This menu don&#39;t have any category <span class="block animate-bounce font-bold ml-1" data-svelte-h="svelte-120phva">. . .</span></p> <div class="flex justify-between items-center w-full text-gray-900 dark:text-gray-200 bg-slate-200 dark:bg-slate-900 my-4 pl-4 rounded-lg overflow-hidden"><input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg" placeholder="Input category name to add..."${add_attribute("value", nameCategoryName, 0)}> <button class="text-xl p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-500 rounded-lg">${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent:add-12-filled" }, {}, {})}</button></div></div>`}`}</div>`;
            }
          })} ${validate_component(TabItem, "TabItem").$$render($$result, {}, {}, {
            title: () => {
              return `<div slot="title" class="flex items-center gap-2">${escape($t("common.seo"))}</div>`;
            },
            default: () => {
              return `${validate_component(CreateSeo, "CreateSeo").$$render(
                $$result,
                { seoData: menu },
                {
                  seoData: ($$value) => {
                    menu = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  const menuService = RepositoryFactory.get("menuRepository");
  let isAction = true;
  let menuDetail;
  let showMenuById = 0;
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
    return menus;
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
    $$rendered = `<div class="bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">${escape($t("common.menuManagement"))}</h1></div></div> <div class="grid xl:grid-cols-5 grid-cols-1 w-full h-full bg-neutral-50 dark:bg-slate-900 rounded-lg p-6">${!menus && !$loadingState ? `${validate_component(Nodata, "Nodata").$$render($$result, {}, {}, {})}` : `${!$loadingState ? `<div class="col-span-3 pl-4"><div class="flex"><button class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg mr-2">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ic:outline-electric-bolt",
        class: "text-yellow-300 text-[28px]"
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
          return `${validate_component(Editor_1, "Editor").$$render(
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
              checked: newMenu.isShowDescription
            },
            {
              checked: ($$value) => {
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
    )}</button></form></div></div> <div>${each(menus, (menu) => {
      return `${validate_component(MenuItem, "MenuItem").$$render(
        $$result,
        {
          menu,
          isAction,
          showMenuId: showMenuById,
          categoriesMenu: menuDetail,
          numCategory: showMenuById
        },
        {
          categoriesMenu: ($$value) => {
            menuDetail = $$value;
            $$settled = false;
          },
          numCategory: ($$value) => {
            showMenuById = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div></div> <div class="w-full col-span-2">${menuDetail ? `<div class="w-full h-full dark:text-white rounded-lg flex flex-col justify-center items-center">${validate_component(Category, "Category").$$render($$result, { menu: menuDetail }, {}, {})}</div>` : `<div class="w-full h-full dark:text-white rounded-lg flex flex-col justify-center items-center"><img class="rounded-lg w-[200px]" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExandoOHd6NXU3bDB4bTJwMTg3NXVoN205N3NmNzU4YXRudzF5ZDJ6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AW6eOaOemvDv1FBpZ6/giphy.gif" alt=""> <b>${escape($t("common.chooseMenu"))}</b></div>`}</div>` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_loadingState();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("Menu Management");
  description.set("description");
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-15aaa51e.js.map
