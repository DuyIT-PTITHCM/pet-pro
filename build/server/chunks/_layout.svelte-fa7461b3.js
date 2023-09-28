import { v as validate_store, a as subscribe } from './utils-4ce9e277.js';
import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, a as each } from './ssr-01008541.js';
import { D as DarkMode } from './DarkMode-af98fcd7.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-d22f5597.js';
import { s as sineIn } from './index3-e6d78c98.js';
import { M as Modal, C as CloseButton } from './Modal-5661e5f6.js';
import { A as Avatar, D as Dropdown, a as DropdownHeader, b as DropdownItem, c as DropdownDivider } from './DropdownItem-04e41d47.js';
import { G as GradientButton, L as Loading } from './GradientButton-db73e2b4.js';
import { D as Drawer } from './Drawer-a0fc9acd.js';
import { L as Label, C as Checkbox } from './Checkbox-628266b2.js';
import { H as Hr } from './Hr-cd932b2b.js';
import { t as title, d as description } from './meta-38f52af0.js';
import { T as ToastError } from './ToastError-436f45ca.js';
import 'tailwind-merge';
import './Frame-87d60430.js';
import './dev-1873bb41.js';
import './Popper-3a6d16d3.js';
import '@floating-ui/dom';
import './index-cefc8762.js';
import './Wrapper-97dcdf2f.js';
import './loading-7fd196aa.js';
import './Button-66d4178c.js';
import './toastError2-18bf9d96.js';

const css = {
  code: ".admin-header.s-OuSz8BWGIYnF{width:100%;height:60px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(190, 190, 190);z-index:1000}.admin-header-box.s-OuSz8BWGIYnF{height:100%;display:flex;align-items:center}.admin-sidebar.s-OuSz8BWGIYnF{max-width:300px;min-height:100vh;border-right:1px solid rgb(190, 190, 190);position:relative;top:0}.admin-sidebar__listitem.s-OuSz8BWGIYnF{list-style:none}.sidebar__listitem-sticky.s-OuSz8BWGIYnF{position:sticky;top:0}.sidebar__listitem-sticky-fixed.s-OuSz8BWGIYnF{position:sticky;top:60px}.admin-sidebar__item.s-OuSz8BWGIYnF{display:flex;align-items:center;text-transform:capitalize;padding:10px 20px;font-weight:600}.admin-sidebar__item.s-OuSz8BWGIYnF:hover{background-color:gray;color:white;border-radius:10px;transform:scale(.9);box-shadow:0 4px 4px rgb(0, 0, 0);transition:.4s ease}.admin-content-box.s-OuSz8BWGIYnF{background:linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2))\n}.fixheader.s-OuSz8BWGIYnF{position:fixed;top:0}.after-header.s-OuSz8BWGIYnF{height:60px;width:100%;background-color:transparent}.active.s-OuSz8BWGIYnF{box-shadow:2px 0px 1px rgb(255, 255, 255);background-color:rgb(255, 255, 255)}.admin-setbg.s-OuSz8BWGIYnF{width:100%;height:200px;border-radius:10px;background:linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2))\n}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let degString;
  let $title, $$unsubscribe_title;
  let $description, $$unsubscribe_description;
  validate_store(title, "title");
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  validate_store(description, "description");
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  let hidden6 = true;
  let transitionParamsRight = { x: 320, duration: 200, easing: sineIn };
  let colors = ["#fff989", "#89d9ff"];
  let deg = 45;
  let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";
  const menu = [
    {
      name: "home",
      url: "/customer",
      icon: "heroicons:chart-pie-solid",
      active: true
    }
  ];
  var isHide = true;
  var isFixedHeader = false;
  let user = {
    id: "aabbcc",
    username: "Rosé BlackPink",
    email: "cheayoung@example.com",
    avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg"
  };
  let popupModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    degString = `${deg}deg`;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-16u4lqv_START -->${$$result.title = `<title>${escape($title)}</title>`, ""}<meta name="description"${add_attribute("content", $description, 0)}><!-- HEAD_svelte-16u4lqv_END -->`, ""} <div class="${"admin-header " + escape("", true) + " bg-slate-100 dark:bg-slate-900 s-OuSz8BWGIYnF"}"><div class="admin-header-box admin-header__left s-OuSz8BWGIYnF"><div class="logo-dashboard flex px-4"><img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-17h157z">PetOne</span></div> <div class="${"hide-sidebar cursor-pointer " + escape(btnClass, true) + " s-OuSz8BWGIYnF"}"><input type="checkbox" class="hidden" name="hidesidebar" id="hidesidebar"${add_attribute("checked", isHide, 1)}> <label for="hidesidebar">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent:list-bar-16-filled",
        class: "text-2xl"
      },
      {},
      {}
    )}</label></div> ${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})}</div> <div class="admin-header-box admin-header__right s-OuSz8BWGIYnF"><div>${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        id: "avatar-menu",
        src: user.avatar,
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
              return `<span class="block text-sm">${escape(user.username)}</span> <span class="block truncate text-sm font-medium">${escape(user.email)}</span>`;
            }
          })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "/profile?userid=" + user.id }, {}, {
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
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-bxyf3v">Are you sure you want to Sign Out?</h3> ${validate_component(GradientButton, "GradientButton").$$render($$result, { color: "red", class: "mr-2" }, {}, {
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
          })} <div class="setting-background font-bold dark:text-white"><p data-svelte-h="svelte-1bphs83">Change your background</p> <div style="${"--deg: " + escape(degString, true) + "; --gradient-1:" + escape(colors[0], true) + "; --gradient-2:" + escape(colors[1], true) + ";"}" class="admin-setbg my-2 s-OuSz8BWGIYnF"></div> <label for="degrees">Degrees: ${escape(deg)}</label> <input name="degrees" type="range" min="0" max="360"${add_attribute("value", deg, 0)}> <div class="flex justify-around"><label for="color-1" data-svelte-h="svelte-1flvgo5">Color 1</label> <input name="color-1" type="color"${add_attribute("value", colors[0], 0)}> <label for="color-2" data-svelte-h="svelte-1e7n9or">Color 2</label> <input name="color-2" type="color"${add_attribute("value", colors[1], 0)}></div></div></div>`;
        }
      }
    )}</div></div></div> ${``}  <div class="admin-content flex"><div class="admin-sidebar bg-slate-100 dark:bg-slate-900 dark:text-slate-300 s-OuSz8BWGIYnF"><ul class="${"admin-sidebar__listitem " + escape(
      "sidebar__listitem-sticky",
      true
    ) + " s-OuSz8BWGIYnF"}">${`${each(menu, (item) => {
      return `<li class="2xl:block xl:block lg:block md:block sm:block hidden"><a class="${"admin-sidebar__item " + escape(item.active == true ? "active" : "", true) + " s-OuSz8BWGIYnF"}"${add_attribute("href", item.url, 0)}>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "text-3xl",
          icon: item.icon,
          color: item.active ? "red" : ""
        },
        {},
        {}
      )}</a> </li>`;
    })}`}</ul></div> <div class="admin-content-box grow overflow-hidden s-OuSz8BWGIYnF" style="${"--deg: " + escape(degString, true) + "; --gradient-1:" + escape(colors[0], true) + "; --gradient-2:" + escape(colors[1], true) + ";"}"><div class="2xl:m-4 xl:m-4 lg:m-4 md:m-4 sm:m-2">${slots.default ? slots.default({}) : ``}</div></div></div> ${validate_component(ToastError, "ToastError").$$render($$result, {}, {}, {})} ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_title();
  $$unsubscribe_description();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-fa7461b3.js.map
