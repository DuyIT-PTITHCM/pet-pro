import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape, j as createEventDispatcher } from './ssr-3f0a2cd3.js';
import { v as validate_store, s as subscribe, c as compute_rest_props, f as identity } from './utils-88625f8a.js';
import { l as loadingState } from './loading-52f589af.js';
import { R as RepositoryFactory } from './RepositoryFactory-21209de9.js';
import { twMerge } from 'tailwind-merge';
import { M as Modal, F as Frame, C as CloseButton } from './Modal-d3528ee3.js';
import { B as Button } from './Button-145b188c.js';
import { I as Input } from './Input-92d522e1.js';
import { I as Icon } from './Icon-5f0853e1.js';
import { t as title, d as description } from './meta-b6471feb.js';
import './index3-0e91033a.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './dev-1873bb41.js';
import './Wrapper-e0a5d677.js';

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
    dispatch("dismiss");
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
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  let popupModal = false;
  const menuService = RepositoryFactory.get("menuRepository");
  let isAddSubMenu = 0;
  let isShowMenu = 0;
  let deleteMenuName = null;
  let menus = [
    {
      id: null,
      name: null,
      url: null,
      parent_id: null,
      subMenus: [{ id: null, name: null, url: null }]
    }
  ];
  loadingState.set(true);
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
    parent_id: null
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold" data-svelte-h="svelte-1v7egpg">menu management</h1></div></div> <div><div class="bg-slate-600 rounded-lg p-6">${!menus && !$loadingState ? `<h1 data-svelte-h="svelte-i5gzyz">nodata</h1>` : `${!$loadingState ? `<div class="flex"><button class="hover:opacity-80 p-3 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mingcute:add-fill",
        class: " text-[20px]"
      },
      {},
      {}
    )}</button> <div${add_attribute("class", "hidden", 0)}><form class="flex items-center"><hr class="w-4 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
    )} <hr class="w-4 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
    )} <hr class="w-4 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ep:success-filled",
        class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button></form></div></div> ${each(menus, (menu) => {
      return `<div class="border-l-4 border-cyan-400 my-1"><div class="flex items-center"><div class="flex items-center"><hr class="w-2 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
      )} <hr class="w-2 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
      )} <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: isShowMenu != menu.id ? "icon-park-solid:down-one" : "icon-park-solid:up-one",
          class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "mingcute:add-fill",
          class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "bxs:edit",
          class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "fluent:delete-28-filled",
          class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> </div></div> <div class="${escape(isShowMenu == menu.id ? "" : "hidden", true) + " my-2"}">${each(menu.subMenus, (subMenu, index) => {
        return `<div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
        )} <hr class="w-8 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
        )} <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "bxs:edit",
            class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
          },
          {},
          {}
        )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fluent:delete-28-filled",
            class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
          },
          {},
          {}
        )}</button> </div>`;
      })}</div> <div class="${escape(isAddSubMenu == menu.id ? "" : "hidden", true) + " my-2"}"><form class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
      )} <hr class="w-8 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
      )} <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "ep:success-filled",
          class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> </form></div> </div>`;
    })}` : ``}`}</div></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        open: popupModal
      },
      {
        open: ($$value) => {
          popupModal = $$value;
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
  $$unsubscribe_loadingState();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("Menu Management");
  description.set("description");
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a852e838.js.map
