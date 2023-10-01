import { v as validate_store, a as subscribe } from './utils-2dd7664d.js';
import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, a as each } from './ssr-8f3207f5.js';
import { D as DarkMode } from './DarkMode-8d472c60.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { p as page } from './stores-52a8f225.js';
import { s as sineIn } from './index3-e6d78c98.js';
import { M as Modal, C as CloseButton } from './Modal-a4ec3489.js';
import { A as Avatar } from './Avatar-e628edaa.js';
import { G as GradientButton, L as Loading } from './GradientButton-0078e055.js';
import { D as Drawer } from './Drawer-cd86f807.js';
import { D as Dropdown, a as DropdownHeader, b as DropdownItem, c as DropdownDivider, H as Hr } from './Hr-5ff42a87.js';
import { L as Label, C as Checkbox } from './Checkbox-7a46d6c3.js';
import { t as title, d as description } from './meta-de7dd7b3.js';
import { T as ToastError } from './ToastError-161201c1.js';
import { w as writable } from './index-3be464aa.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import { L as LanguageSelect } from './LanguageSelect-28a6a6c5.js';
import 'tailwind-merge';
import './Frame-f1b561b4.js';
import './dev-1873bb41.js';
import './loading-3ab47950.js';
import './Button-27ef65c4.js';
import './Popper-40e8a233.js';
import '@floating-ui/dom';
import './Wrapper-ae21bffe.js';
import './toastError2-3194e7be.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './index2-7fa367f4.js';

const me = writable({
  id: Number,
  avatar: String,
  name: String,
  phone: String,
  email: String,
  role: String
});
const css = {
  code: ".admin-header.s-i2ZroYsgAmjD{width:100%;height:60px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(190, 190, 190);z-index:1000}.admin-header-box.s-i2ZroYsgAmjD{height:100%;display:flex;align-items:center}.admin-sidebar.s-i2ZroYsgAmjD{max-width:300px;min-height:100vh;border-right:1px solid rgb(190, 190, 190);position:relative;top:0}.admin-sidebar__listitem.s-i2ZroYsgAmjD{list-style:none}.sidebar__listitem-sticky.s-i2ZroYsgAmjD{position:sticky;top:0}.sidebar__listitem-sticky-fixed.s-i2ZroYsgAmjD{position:sticky;top:60px}.admin-sidebar__item.s-i2ZroYsgAmjD{display:flex;align-items:center;text-transform:capitalize;padding:10px 20px;font-weight:600}.admin-sidebar__item.s-i2ZroYsgAmjD:hover{background-color:gray;color:white;border-radius:10px;transform:scale(0.9);box-shadow:0 4px 4px rgb(0, 0, 0);transition:0.4s ease}.admin-content-box.s-i2ZroYsgAmjD{background:rgb(219 220 222 / 75%)}.fixheader.s-i2ZroYsgAmjD{position:fixed;top:0}.after-header.s-i2ZroYsgAmjD{height:60px;width:100%;background-color:transparent}.admin-setbg.s-i2ZroYsgAmjD{width:100%;height:200px;border-radius:10px;background:linear-gradient(\n      var(--deg),\n      var(--gradient-1),\n      var(--gradient-2)\n    )}.active-admin.s-i2ZroYsgAmjD{background-color:gray;color:white;border-radius:10px;transform:scale(0.9);box-shadow:0 4px 4px rgb(0, 0, 0);transition:0.4s ease}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let degString;
  let $title, $$unsubscribe_title;
  let $description, $$unsubscribe_description;
  let $me, $$unsubscribe_me;
  let $page, $$unsubscribe_page;
  validate_store(title, "title");
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  validate_store(description, "description");
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  validate_store(me, "me");
  $$unsubscribe_me = subscribe(me, (value) => $me = value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let hidden6 = true;
  let transitionParamsRight = { x: 320, duration: 200, easing: sineIn };
  let colors = ["#0f0f0f;", "#0f0f0f;"];
  let deg = 45;
  let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";
  const menu = [
    {
      name: "home",
      url: "/admin",
      icon: "heroicons:chart-pie-solid",
      active: false
    },
    {
      name: "user managerment",
      url: "/admin/user-management",
      icon: "teenyicons:user-solid",
      active: false
    },
    {
      name: "menu managerment",
      url: "/admin/menu-management",
      icon: "eva:menu-2-outline",
      active: false
    },
    {
      name: "blog",
      url: "/admin/blog",
      icon: "fa-brands:blogger",
      active: false
    },
    {
      name: "service",
      url: "/admin/service",
      icon: "ri:service-fill",
      active: false
    },
    {
      name: "products",
      url: "/admin/products",
      icon: "ri:product-hunt-line",
      active: false
    }
  ];
  var isHide = true;
  var isFixedHeader = false;
  const userService = RepositoryFactory.get("userRepository");
  let popupModal = false;
  async function init() {
    const userData = await userService.info();
    me.set(userData?.data.data);
  }
  init();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    degString = `${deg}deg`;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-13e7ixj_START -->${$$result.title = `<title>${escape($title)}</title>`, ""}<meta name="description"${add_attribute("content", $description, 0)}><!-- HEAD_svelte-13e7ixj_END -->`, ""} <div class="${"admin-header " + escape("", true) + " bg-slate-100 dark:bg-slate-900 s-i2ZroYsgAmjD"}"><div class="admin-header-box admin-header__left s-i2ZroYsgAmjD"><div class="logo-dashboard flex px-4"><img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-1edd1dh">PetOne</span></div> <div class="${"hide-sidebar cursor-pointer " + escape(btnClass, true) + " s-i2ZroYsgAmjD"}"><input type="checkbox" class="hidden" name="hidesidebar" id="hidesidebar"${add_attribute("checked", isHide, 1)}> <label for="hidesidebar">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent:list-bar-16-filled",
        class: "text-2xl"
      },
      {},
      {}
    )}</label></div> ${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})}</div> <div class="admin-header-box admin-header__right s-i2ZroYsgAmjD"><div class="flex items-center mr-3">${validate_component(LanguageSelect, "LanguageSelect").$$render($$result, {}, {}, {})}</div> <div>${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        id: "avatar-menu",
        src: $me?.avatar,
        class: "mr-4 cursor-pointer"
      },
      {},
      {}
    )} ${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        placement: "bottom",
        triggeredBy: "#avatar-menu"
      },
      {},
      {
        default: () => {
          return `${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
            default: () => {
              return `<span class="block text-sm">${escape($me?.name)}</span> <span class="block truncate text-sm font-medium">${escape($me?.email)}</span>`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/profile?userid=" + $me?.id }, {}, {
            default: () => {
              return `Profile`;
            }
          })} ${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
            default: () => {
              return `Sign out`;
            }
          })}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
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
              icon: "line-md:alert",
              class: "mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-h597bf">Are you sure you want to Sign Out?</h3> ${validate_component(GradientButton, "GradientButton").$$render($$result, { color: "red", class: "mr-2" }, {}, {
            default: () => {
              return `Yes, I&#39;m sure`;
            }
          })} ${validate_component(GradientButton, "GradientButton").$$render($$result, { color: "teal" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div>`;
        }
      }
    )}</div> <div><button class="p-2 m-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ant-design:setting-filled",
        class: "text-2xl"
      },
      {},
      {}
    )}</button> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "right",
        transitionType: "fly",
        transitionParams: transitionParamsRight,
        id: "sidebar6",
        hidden: hidden6
      },
      {
        hidden: ($$value) => {
          hidden6 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "ant-design:setting-filled",
              class: "w-4 h-4 mr-2.5"
            },
            {},
            {}
          )}Setting</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div> <div class="admin-setting"><div class="setting-fixed_header mb-4">${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "mt-4 flex items-center font-bold dark:text-white"
            },
            {},
            {
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "mr-2", checked: isFixedHeader }, {}, {})} Fixed your header`;
              }
            }
          )}</div> ${validate_component(Hr, "Hr").$$render($$result, { classHr: "my-8 w-64 h-1", icon: true }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: "icon-park-outline:setting-one",
                  class: "w-4 h-4 text-gray-700 dark:text-gray-300"
                },
                {},
                {}
              )}`;
            }
          })} <div class="setting-background font-bold dark:text-white"><p data-svelte-h="svelte-1bphs83">Change your background</p> <div style="${"--deg: " + escape(degString, true) + "; --gradient-1:" + escape(colors[0], true) + "; --gradient-2:" + escape(colors[1], true) + ";"}" class="admin-setbg my-2 s-i2ZroYsgAmjD"></div> <label for="degrees">Degrees: ${escape(deg)}</label> <input name="degrees" type="range" min="0" max="360"${add_attribute("value", deg, 0)}> <div class="flex justify-around"><label for="color-1" data-svelte-h="svelte-1flvgo5">Color 1</label> <input name="color-1" type="color"${add_attribute("value", colors[0], 0)}> <label for="color-2" data-svelte-h="svelte-1e7n9or">Color 2</label> <input name="color-2" type="color"${add_attribute("value", colors[1], 0)}></div></div></div>`;
        }
      }
    )}</div></div></div> ${``}  <div class="admin-content flex"><div class="admin-sidebar bg-slate-100 dark:bg-slate-900 dark:text-slate-300 s-i2ZroYsgAmjD"><ul class="${"admin-sidebar__listitem " + escape(
      "sidebar__listitem-sticky",
      true
    ) + " s-i2ZroYsgAmjD"}">${`${each(menu, (item) => {
      return `<li class="2xl:block xl:block lg:block md:block sm:block hidden"><a class="${"admin-sidebar__item " + escape(
        $page.url.href.includes(item.url) && item.url != "/admin" || $page.url.pathname == item.url ? "active-admin" : "",
        true
      ) + " s-i2ZroYsgAmjD"}" href="">${validate_component(Icon, "Icon").$$render($$result, { class: "text-3xl", icon: item.icon }, {}, {})}</a> </li>`;
    })}`}</ul></div> <div class="bg-gray-200 bg-opacity-75 dark:bg-[#0d0e1e] grow overflow-hidden" style="${"--deg: " + escape(degString, true) + "; --gradient-1:" + escape(colors[0], true) + "; --gradient-2:" + escape(colors[1], true) + ";"}"><div class="2xl:m-4 xl:m-4 lg:m-4 md:m-4 sm:m-2">${slots.default ? slots.default({}) : ``}</div></div></div> ${validate_component(ToastError, "ToastError").$$render($$result, {}, {}, {})} ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_title();
  $$unsubscribe_description();
  $$unsubscribe_me();
  $$unsubscribe_page();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-3c343c87.js.map
