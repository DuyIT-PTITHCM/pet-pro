import { v as validate_store, s as subscribe, c as compute_rest_props, a as compute_slots } from './utils-c444a4b3.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each, d as spread, h as escape_object, f as escape_attribute_value } from './ssr-9152e219.js';
import { D as DarkMode } from './DarkMode-4eaf84cd.js';
import { I as Icon } from './Icon-7dc24f4d.js';
import { s as sineIn, M as Modal, C as CloseButton } from './Modal-677f8334.js';
import { A as Avatar, D as Dropdown, a as DropdownHeader, b as DropdownItem, c as DropdownDivider } from './DropdownItem-85a31d56.js';
import { G as GradientButton } from './GradientButton-dd77bf22.js';
import { D as Drawer } from './Drawer-cfbb6595.js';
import { L as Label, C as Checkbox } from './Checkbox-48a9b29a.js';
import { twMerge } from 'tailwind-merge';
import { t as title, d as description } from './meta-38b3a52a.js';
import './Wrapper-2cae54fd.js';
import '@floating-ui/dom';
import './index2-a5cb6928.js';

const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "divClass", "hrClass", "iconDivClass", "textSpanClass", "innerDivClass"]);
  let $$slots = compute_slots(slots);
  let { icon = false } = $$props;
  let { divClass = "inline-flex justify-center items-center w-full" } = $$props;
  let { hrClass = "w-full h-px bg-gray-200 rounded border-0 dark:bg-gray-700" } = $$props;
  let { iconDivClass = "absolute left-1/2 px-4 bg-white -translate-x-1/2 " } = $$props;
  let { textSpanClass = "absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white " } = $$props;
  let { innerDivClass = "dark:bg-gray-900" } = $$props;
  let horizontalCls = twMerge(hrClass, $$props.classHr);
  let divCls = twMerge(divClass, $$slots && "relative", $$props.classDiv);
  let innerDivCls = twMerge(innerDivClass, icon ? iconDivClass : textSpanClass, $$props.classInnerDiv);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.hrClass === void 0 && $$bindings.hrClass && hrClass !== void 0)
    $$bindings.hrClass(hrClass);
  if ($$props.iconDivClass === void 0 && $$bindings.iconDivClass && iconDivClass !== void 0)
    $$bindings.iconDivClass(iconDivClass);
  if ($$props.textSpanClass === void 0 && $$bindings.textSpanClass && textSpanClass !== void 0)
    $$bindings.textSpanClass(textSpanClass);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0)
    $$bindings.innerDivClass(innerDivClass);
  return `${$$slots ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divCls) }], {})}><hr${add_attribute("class", horizontalCls, 0)}> <div${add_attribute("class", innerDivCls, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<hr${add_attribute("class", horizontalCls, 0)}>`} `;
});
const css = {
  code: ".admin-header.s-i2ZroYsgAmjD{width:100%;height:60px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgb(190, 190, 190);z-index:1000}.admin-header-box.s-i2ZroYsgAmjD{height:100%;display:flex;align-items:center}.admin-sidebar.s-i2ZroYsgAmjD{max-width:300px;min-height:100vh;border-right:1px solid rgb(190, 190, 190);position:relative;top:0}.admin-sidebar__listitem.s-i2ZroYsgAmjD{list-style:none}.sidebar__listitem-sticky.s-i2ZroYsgAmjD{position:sticky;top:0}.sidebar__listitem-sticky-fixed.s-i2ZroYsgAmjD{position:sticky;top:60px}.admin-sidebar__item.s-i2ZroYsgAmjD{display:flex;align-items:center;text-transform:capitalize;padding:10px 20px;font-weight:600}.admin-sidebar__item.s-i2ZroYsgAmjD:hover{background-color:gray;color:white;border-radius:10px;transform:scale(.9);box-shadow:0 4px 4px rgb(0, 0, 0);transition:.4s ease}.admin-content-box.s-i2ZroYsgAmjD{width:100%;background:linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2))\n}.fixheader.s-i2ZroYsgAmjD{position:fixed;top:0}.after-header.s-i2ZroYsgAmjD{height:60px;width:100%;background-color:transparent}.active.s-i2ZroYsgAmjD{box-shadow:2px 0px 1px rgb(255, 255, 255);background-color:rgb(255, 255, 255)}.admin-setbg.s-i2ZroYsgAmjD{width:100%;height:200px;border-radius:10px;background:linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2))\n}",
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
      url: "/admin",
      icon: "heroicons:chart-pie-solid",
      active: false
    },
    {
      name: "user managerment",
      url: "/admin/user-managerment",
      icon: "teenyicons:user-solid",
      active: false
    },
    {
      name: "blog",
      url: "#",
      icon: "icon-park-solid:hi",
      active: false
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-16u4lqv_START -->${$$result.title = `<title>${escape($title)}</title>`, ""}<meta name="description"${add_attribute("content", $description, 0)}><!-- HEAD_svelte-16u4lqv_END -->`, ""} <div class="${"admin-header " + escape("", true) + " bg-slate-100 dark:bg-slate-900 s-i2ZroYsgAmjD"}"><div class="admin-header-box admin-header__left s-i2ZroYsgAmjD"><div class="logo-dashboard flex px-4"><img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-17h157z">PetOne</span></div> <div class="${"hide-sidebar cursor-pointer " + escape(btnClass, true) + " s-i2ZroYsgAmjD"}"><input type="checkbox" class="hidden" name="hidesidebar" id="hidesidebar"${add_attribute("checked", isHide, 1)}> <label for="hidesidebar">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent:list-bar-16-filled",
        class: "text-2xl"
      },
      {},
      {}
    )}</label></div> ${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})}</div> <div class="admin-header-box admin-header__right s-i2ZroYsgAmjD"><div>${validate_component(Avatar, "Avatar").$$render(
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
          })} <div class="setting-background font-bold dark:text-white"><p data-svelte-h="svelte-1bphs83">Change your background</p> <div style="${"--deg: " + escape(degString, true) + "; --gradient-1:" + escape(colors[0], true) + "; --gradient-2:" + escape(colors[1], true) + ";"}" class="admin-setbg my-2 s-i2ZroYsgAmjD"></div> <label for="degrees">Degrees: ${escape(deg)}</label> <input name="degrees" type="range" min="0" max="360"${add_attribute("value", deg, 0)}> <div class="flex justify-around"><label for="color-1" data-svelte-h="svelte-1flvgo5">Color 1</label> <input name="color-1" type="color"${add_attribute("value", colors[0], 0)}> <label for="color-2" data-svelte-h="svelte-1e7n9or">Color 2</label> <input name="color-2" type="color"${add_attribute("value", colors[1], 0)}></div></div></div>`;
        }
      }
    )}</div></div></div> ${``}  <div class="admin-content flex"><div class="admin-sidebar bg-slate-100 dark:bg-slate-900 dark:text-slate-300 s-i2ZroYsgAmjD"><ul class="${"admin-sidebar__listitem " + escape(
      "sidebar__listitem-sticky",
      true
    ) + " s-i2ZroYsgAmjD"}">${`${each(menu, (item) => {
      return `<li class="2xl:block xl:block lg:block md:block sm:block hidden"><a class="${"admin-sidebar__item " + escape(item.active == true ? "active" : "", true) + " s-i2ZroYsgAmjD"}"${add_attribute("href", item.url, 0)}>${validate_component(Icon, "Icon").$$render($$result, { class: "text-3xl", icon: item.icon }, {}, {})}</a> </li>`;
    })}`}</ul></div> <div class="admin-content-box flex-auto s-i2ZroYsgAmjD" style="${"--deg: " + escape(degString, true) + "; --gradient-1:" + escape(colors[0], true) + "; --gradient-2:" + escape(colors[1], true) + ";"}"><div class="m-4">${slots.default ? slots.default({}) : ``}</div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_title();
  $$unsubscribe_description();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-4481acb1.js.map
