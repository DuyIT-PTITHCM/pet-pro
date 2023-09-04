import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape } from './ssr-4b2a575b.js';
import { v as validate_store, s as subscribe } from './utils-5762d6f4.js';
import { l as loadingState } from './loading-c8f33dc7.js';
import { R as RepositoryFactory } from './RepositoryFactory-7d37287f.js';
import { I as Input } from './Input-a505f525.js';
import { I as Icon } from './Icon-29f6d43e.js';
import { B as Badge } from './Badge-0297cd4c.js';
import { B as Button } from './Button-e75644f9.js';
import { M as Modal } from './Modal-d13a63f8.js';
import { t as title, d as description } from './meta-cb2f3202.js';
import './index-f06f6a44.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './Wrapper-8421d661.js';
import './dev-1873bb41.js';
import 'tailwind-merge';
import './CloseButton-59718afd.js';

const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAction = false } = $$props;
  let { menu = {
    id: 0,
    name: "",
    url: null,
    parent_id: null,
    subMenus: [{ id: 0, name: "", url: null }]
  } } = $$props;
  let deleteMenuName = "";
  let popupDeleteModal = false;
  let newMenu = { name: null, url: null, parent_id: null };
  if ($$props.isAction === void 0 && $$bindings.isAction && isAction !== void 0)
    $$bindings.isAction(isAction);
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="border-l-4 border-cyan-400 my-4"><div class="flex items-center"><div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1"><div class="flex items-center"><hr class="w-2 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
    )}</div> <div class="flex items-center"><hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "icon-park-solid:up-one",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button> <div class="${"flex items-center " + escape(!isAction && "hidden", true)}"><hr class="w-2 h-[4px] bg-cyan-700"> <button class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "mingcute:add-fill",
        class: "  text-[20px]"
      },
      {},
      {}
    )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "bxs:edit",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent:delete-28-filled",
        class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button></div></div></div></div> <div class="${escape("hidden", true) + " my-2"}">${each(menu.subMenus, (subMenu, index) => {
      return `<div class="flex items-center my-2"><div class="flex items-center"><hr class="w-8 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
      )}</div> <div class="${"flex items-center " + escape(!isAction && "hidden", true)}"><hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "bxs:edit",
          class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )}</button> <hr class="w-2 h-[4px] bg-cyan-700"> <button>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "fluent:delete-28-filled",
          class: "hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
        },
        {},
        {}
      )} </button></div> </div>`;
    })}</div> <div class="${escape("hidden", true) + " my-2"}"><div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-700"> ${validate_component(Input, "Input").$$render(
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
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loadingState, $$unsubscribe_loadingState;
  validate_store(loadingState, "loadingState");
  $$unsubscribe_loadingState = subscribe(loadingState, (value) => $loadingState = value);
  const menuService = RepositoryFactory.get("menuRepository");
  let isAction = false;
  let menus = [
    {
      id: 0,
      name: "",
      url: null,
      parent_id: null,
      subMenus: [{ id: 0, name: "", url: null }]
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
    $$rendered = `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold" data-svelte-h="svelte-18agr04">Menu management</h1></div></div> <div><div class="bg-neutral-50 dark:bg-slate-900 rounded-lg p-6">${!menus && !$loadingState ? `<h1 data-svelte-h="svelte-i5gzyz">nodata</h1>` : `${!$loadingState ? `<div class="flex"><button class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg mr-2">${validate_component(Icon, "Icon").$$render(
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
        class: "hover:opacity-80 text-[40px] p-2.5 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg"
      },
      {},
      {}
    )}</button></form></div></div> ${each(menus, (menu) => {
      return `${validate_component(MenuItem, "MenuItem").$$render($$result, { menu, isAction }, {}, {})}`;
    })}` : ``}`}</div></div>`;
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
//# sourceMappingURL=_page.svelte-f62f62ed.js.map
