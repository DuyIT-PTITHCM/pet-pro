import { v as validate_store, s as subscribe, c as compute_rest_props } from './utils-5d10fb30.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each, d as spread, f as escape_attribute_value, g as escape_object, h as getContext, s as setContext } from './ssr-1bb711e0.js';
import { t as title, d as description } from './meta-8db97ba1.js';
import { A as Avatar, T as ToolbarButton, q as quintOut } from './Avatar-9049e27b.js';
import { G as GradientButton } from './GradientButton-fe15b9d5.js';
import { D as DarkMode } from './DarkMode-9d086b08.js';
import { D as Dropdown, a as DropdownHeader, b as DropdownItem, c as DropdownDivider, M as Modal, F as Frame } from './Modal-bbbaaca4.js';
import { twMerge } from 'tailwind-merge';
import { B as Button, v as validate_dynamic_element, a as validate_void_dynamic_element, i as is_void } from './Button-292d63d1.js';
import Cookies from 'js-cookie';
import { w as writable } from './index2-b7662a81.js';
import { t as t2 } from './index-8974d9fa.js';
import { I as Icon } from './Icon-ac1f5dfd.js';
import '@floating-ui/dom';
import './Wrapper-9b5de03f.js';

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: "nav" }, $$restProps, { class: twMerge(navClass, $$props.class) }), {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge(navDivClass, $$props.classNavDiv, fluid && "w-full" || "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
    }
  })} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "menuClass"]);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "active", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbar") ?? {};
  let liClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  liClass = twMerge(
    "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${href ? "a" : "div"}${spread(
        [
          {
            role: escape_attribute_value(href ? void 0 : "link")
          },
          { href: escape_attribute_value(href) },
          escape_object($$restProps),
          { class: escape_attribute_value(liClass) }
        ],
        {}
      )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "ulClass", "hidden", "slideParams", "activeClass", "nonActiveClass"]);
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbar", { activeClass, nonActiveClass });
  let _divClass;
  let _ulClass;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  return `${!hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
function getCookie(name) {
  return Cookies.get(name);
}
const selectedLanguage = writable(getCookie("lang") ?? "en");
const css$2 = {
  code: "select.s-stFEWcntJTPy{outline:none;border:none;padding:0 24px;cursor:pointer;border-radius:100px}select.s-stFEWcntJTPy:hover{opacity:.9}",
  map: null
};
const LanguageSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedLanguage;
  validate_store(selectedLanguage, "selectedLanguage");
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => value);
  const languages = [{ id: "en", name: "English" }, { id: "vi", name: "Tiếng Việt" }];
  selectedLanguage.set(getCookie("lang"));
  $$result.css.add(css$2);
  $$unsubscribe_selectedLanguage();
  return `   <select class="dark:bg-slate-800 s-stFEWcntJTPy">${each(languages, (language) => {
    return `<option${add_attribute("value", language.id, 0)}>${escape(language.name)}</option>`;
  })}</select>`;
});
const css$1 = {
  code: ".header.s-f_PBzT5OICzS{position:relative;width:100%}.navbar.s-f_PBzT5OICzS{position:fixed;width:100%;top:0;z-index:1000}.out-header.s-f_PBzT5OICzS{margin-bottom:70px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";
  const menu = [
    { name: "home", url: "/", active: false },
    {
      name: "about",
      url: "/about",
      active: false
    },
    {
      name: "blog",
      url: "/blog",
      active: false
    }
  ];
  let user = {
    id: "aabbcc",
    username: "Rosé BlackPink",
    email: "cheayoung@example.com",
    avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg"
  };
  let popupModal = false;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="header s-f_PBzT5OICzS"><div class="navbar s-f_PBzT5OICzS">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
      default: ({ hidden, toggle }) => {
        return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-17h157z">PetOne</span>`;
          }
        })} <div class="flex items-center md:order-2">${validate_component(GradientButton, "GradientButton").$$render($$result, { color: "pinkToOrange" }, {}, {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:cart", class: "scale-150" }, {}, {})}<span class="ml-3" data-svelte-h="svelte-12n8aoh">10</span>`;
          }
        })} ${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})} ${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            id: "avatar-menu",
            src: user.avatar
          },
          {},
          {}
        )} ${validate_component(NavHamburger, "NavHamburger").$$render(
          $$result,
          {
            class1: "w-full md:flex md:w-auto md:order-1"
          },
          {},
          {}
        )}</div> ${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            placement: "bottom",
            triggeredBy: "#avatar-menu"
          },
          {},
          {
            default: () => {
              return `${`${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
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
              })}`}`;
            }
          }
        )} ${validate_component(NavUl, "NavUl").$$render($$result, { hidden }, {}, {
          default: () => {
            return `${each(menu, (item) => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, { href: item.url, active: item.active }, {}, {
                default: () => {
                  return `${escape($t("header." + item.name))}`;
                }
              })}`;
            })} ${validate_component(LanguageSelect, "LanguageSelect").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    })}</div></div> <div class="out-header s-f_PBzT5OICzS"></div> ${validate_component(Modal, "Modal").$$render(
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
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const css = {
  code: ".home-footer.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{background-image:url(https://cdn2.vectorstock.com/i/1000x1000/74/91/pets-line-icons-on-black-background-vector-5917491.jpg);background-position:center;background-attachment:fixed;min-height:400px}.footer-background.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{background-color:rgba(0, 0, 0, 0.4);background-image:url(https://www.icegif.com/wp-content/uploads/2023/02/icegif-519.gif);background-position:center;background-repeat:no-repeat;background-size:cover;width:inherit;height:inherit}.footer-content.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{width:inherit;height:inherit;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:rgba(0, 0, 0, 0.3);position:relative}.footer-info.s-FHa4EdyUjGz3>div.s-FHa4EdyUjGz3{background-color:rgba(0, 0, 0, 0.8);width:100%;border-radius:10px}.footer-logo.s-FHa4EdyUjGz3 img.s-FHa4EdyUjGz3{width:140px;height:140px;border-radius:50%}.footer-nav.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{width:100%;position:absolute;bottom:0;background-color:rgba(0, 0, 0, 0.5)}.footer-logo-box.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{display:flex;align-items:center}.footer-info.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{margin-bottom:100px;margin-top:100px}.footer-name.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{font-size:34px;font-weight:bold;color:#fff;padding:30px}.footer-caption.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{text-align:justify}.footer-list.s-FHa4EdyUjGz3 ol.s-FHa4EdyUjGz3{border-bottom:1px solid rgba(255, 255, 255, 0.3);border-radius:10px}.footer-list.s-FHa4EdyUjGz3 a.s-FHa4EdyUjGz3{display:block;width:100%;padding:10px 30px;border-radius:10px;display:flex;align-items:center;text-transform:capitalize}.footer-list.s-FHa4EdyUjGz3 a.s-FHa4EdyUjGz3:hover{box-shadow:0 4px 4px rgba(255, 255, 255, 0.3) inset, 0 -4px 4px rgba(255, 255, 255, 0.3) inset;transition:box-shadow .6s;font-weight:600}.footer-map.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{width:100%}.footer-address.s-FHa4EdyUjGz3.s-FHa4EdyUjGz3{font-weight:600;margin:10px 0}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  const menu = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "blog", url: "/blog" }
  ];
  const social = [
    {
      name: "facebook",
      url: "/",
      image: "line-md:facebook"
    },
    {
      name: "youtube",
      url: "/",
      image: "ant-design:youtube-filled"
    },
    {
      name: "instagram",
      url: "/",
      image: "ri:instagram-fill"
    },
    {
      name: "tiktok",
      url: "/",
      image: "mingcute:tiktok-fill"
    }
  ];
  const services = [
    {
      id: 0,
      name: "Pet care",
      description: "Pet care includes all the tasks related to ensuring the safety and happiness of pets, such as feeding, brushing, walking, playing, and taking pets to the veterinarian.",
      image: "https://thuythithi.com/wp-content/uploads/2020/05/3-tieu-chi-danh-gia-chat-luong-dich-vu-cham-soc-thu-cung-tai-nha.jpg",
      url: "/"
    },
    {
      id: 1,
      name: "Pet boarding",
      description: "Pet boarding is the act of ensuring the safety and happiness of pets when their owners are not home, such as feeding, brushing, walking, and playing with pets.",
      image: "https://vcdn-kinhdoanh.vnecdn.net/2019/02/03/ks-cho-meo500-5587-1549156792.jpg",
      url: "/"
    },
    {
      id: 2,
      name: "Grooming",
      description: "Grooming is the act of caring for the appearance of pets, such as bathing, trimming hair, clipping nails, and cleaning ears.",
      image: "https://mypet.vn/wp-content/uploads/2020/09/spa-thu-cung-2.jpg",
      url: "/"
    },
    {
      id: 3,
      name: "Pet agency",
      description: "Pet agencies provide pet buying and selling services.",
      image: "https://zoipet.com/wp-content/uploads/2022/09/dich-vu-cham-soc-Copy.jpg",
      url: "/"
    },
    {
      id: 4,
      name: "Pet store",
      description: "Pet stores offer products and services for pets, such as food, toys, veterinary medicine, and pet care services.",
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      url: "/"
    },
    {
      id: 5,
      name: "Pet training school",
      description: "Pet training schools offer pet training courses that help pets to be more obedient and behave better.",
      image: "https://www.akc.org/wp-content/uploads/2021/01/031619_NOC_32099.jpg",
      url: "/"
    },
    {
      id: 6,
      name: "Pet news website",
      description: "Pet news websites provide news and information about pets, such as pet health, nutrition, care, and training.",
      image: "https://www.petswelcome.com/wp/wp-content/uploads/2019/08/31444417_s.jpg",
      url: "/"
    },
    {
      id: 7,
      name: "Pet community website",
      description: "Pet community websites are where pet owners can share information, experiences, and love for their pets.",
      image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/1/840744/Loat-Anh-Dang-Yeu-Cu.jpg",
      url: "/"
    }
  ];
  const legal = [
    { name: "Terms of Use", url: "/" },
    { name: "Privacy Policy", url: "/" },
    { name: "Licensing", url: "/" },
    { name: "Contact", url: "/" },
    { name: "career", url: "/" }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<footer class="home-footer w-ful s-FHa4EdyUjGz3"><div class="footer-background s-FHa4EdyUjGz3"><div class="footer-content s-FHa4EdyUjGz3"><div class="footer-info mb-20 mt-10 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:w-4/5 md:w-4/5 sm:mx-4 gap-4 s-FHa4EdyUjGz3"><div class="footer-logo p-5 xl:col-span-2 md:col-span-3 sm:col-span-1 grid grid-cols-1 s-FHa4EdyUjGz3"><div class="footer-logo-box s-FHa4EdyUjGz3"><img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="" class="footer-logo s-FHa4EdyUjGz3"> <p class="footer-name s-FHa4EdyUjGz3" data-svelte-h="svelte-n01r09">PetOne™</p></div> <p class="footer-caption text-white text-md col-span-2 s-FHa4EdyUjGz3" data-svelte-h="svelte-1audhk2">We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work.</p> <p class="footer-address text-white text-md col-span-2 s-FHa4EdyUjGz3" data-svelte-h="svelte-1m78q8m">Address: No. 47, Thu Duc District, Ho Chi Minh City, Viet Nam</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Show Map`;
      }
    })} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Our Address",
        autoclose: true,
        open: defaultModal
      },
      {
        open: ($$value) => {
          defaultModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Ok`;
            }
          })} `;
        },
        default: () => {
          return `<iframe class="footer-map s-FHa4EdyUjGz3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6182334436364!2d106.7104288413416!3d10.832829612542865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752862ecc20187%3A0x167a5cd7990e165d!2sCaf%C3%A9%20Tony%20Riverside!5e0!3m2!1svi!2s!4v1691516641496!5m2!1svi!2s" width="100" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
      }
    )}</div> <div class="footer-service sm:col-span-1 s-FHa4EdyUjGz3"><ul class="text-white footer-list s-FHa4EdyUjGz3"><ol class="py-2 px-6 uppercase text-xl font-semibold s-FHa4EdyUjGz3" data-svelte-h="svelte-j8mda4">service</ol> ${each(services, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="s-FHa4EdyUjGz3">${escape(item.name)}</a></li>`;
    })}</ul></div> <div class="footer-legal s-FHa4EdyUjGz3"><ul class="text-white footer-list s-FHa4EdyUjGz3"><ol class="py-2 px-6 uppercase text-xl font-semibold s-FHa4EdyUjGz3" data-svelte-h="svelte-3fkhvw">company</ol> ${each(legal, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="s-FHa4EdyUjGz3">${escape(item.name)}</a></li>`;
    })}</ul></div> <div class="footer-social s-FHa4EdyUjGz3"><ul class="text-white footer-list s-FHa4EdyUjGz3"><ol class="py-2 px-6 uppercase text-xl font-semibold s-FHa4EdyUjGz3" data-svelte-h="svelte-ngyi68">social</ol> ${each(social, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="s-FHa4EdyUjGz3">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "footer-list-icon text-2xl",
          icon: item.image
        },
        {},
        {}
      )}<span class="ml-3">${escape(item.name)}</span></a></li>`;
    })}</ul></div></div> <div class="footer-nav mx-auto p-4 md:flex md:items-center md:justify-between s-FHa4EdyUjGz3"><span class="text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline" data-svelte-h="svelte-9lsmdy">PawCat™</a>. All Rights Reserved.</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-whitesm:mt-0">${each(menu, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="text-white hover:underline md:mr-6 capitalize">${escape(item.name)}</a> </li>`;
    })}</ul></div></div></div> </footer>`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $title, $$unsubscribe_title;
  let $description, $$unsubscribe_description;
  validate_store(title, "title");
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  validate_store(description, "description");
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  $$unsubscribe_title();
  $$unsubscribe_description();
  return `${$$result.head += `<!-- HEAD_svelte-16u4lqv_START -->${$$result.title = `<title>${escape($title)}</title>`, ""}<meta name="description"${add_attribute("content", $description, 0)}><!-- HEAD_svelte-16u4lqv_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-895c1d70.js.map
