import { c as create_ssr_component, v as validate_component, a as each, e as escape, b as add_attribute, d as spread, f as escape_attribute_value, h as escape_object, g as getContext, s as setContext } from './ssr-8f3207f5.js';
import { L as Loading, G as GradientButton } from './GradientButton-0078e055.js';
import { D as DarkMode } from './DarkMode-8d472c60.js';
import { v as validate_store, a as subscribe, c as compute_rest_props } from './utils-2dd7664d.js';
import { P as Popover, s as slide } from './Popover-450a092a.js';
import { A as Avatar } from './Avatar-e628edaa.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { M as Modal, T as ToolbarButton } from './Modal-a4ec3489.js';
import { F as Frame } from './Frame-f1b561b4.js';
import { twMerge } from 'tailwind-merge';
import { v as validate_dynamic_element, a as validate_void_dynamic_element, i as is_void } from './dev-1873bb41.js';
import { q as quintOut } from './index3-e6d78c98.js';
import { w as writable } from './index-3be464aa.js';
import { g as getCookie } from './cookieUtils-3c057440.js';
import { t as t2 } from './index2-5c5bda06.js';
import { p as page } from './stores-52a8f225.js';
import { B as Button } from './Button-27ef65c4.js';
import './loading-3ab47950.js';
import './Popper-40e8a233.js';
import '@floating-ui/dom';
import 'js-cookie';

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
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
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
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
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
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
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
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
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
const selectedLanguage = writable(getCookie("lang") ?? "en");
const css$1 = {
  code: "select.s-stFEWcntJTPy{outline:none;border:none;padding:0 24px;cursor:pointer;border-radius:100px}select.s-stFEWcntJTPy:hover{opacity:.9}",
  map: null
};
const LanguageSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedLanguage;
  validate_store(selectedLanguage, "selectedLanguage");
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => value);
  const languages = [{ id: "en", name: "English" }, { id: "vi", name: "Tiếng Việt" }];
  selectedLanguage.set(getCookie("lang"));
  $$result.css.add(css$1);
  $$unsubscribe_selectedLanguage();
  return `   <select class="dark:bg-slate-800 s-stFEWcntJTPy">${each(languages, (language) => {
    return `<option${add_attribute("value", language.id, 0)}>${escape(language.name)}</option>`;
  })}</select>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { menuProp = [] } = $$props;
  let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";
  let menu = [];
  menu = menu.concat(menuProp);
  let popupModal = false;
  if ($$props.menuProp === void 0 && $$bindings.menuProp && menuProp !== void 0)
    $$bindings.menuProp(menuProp);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="w-full relative h-auto"><div class="w-full fixed top-0 z-50">${validate_component(Navbar, "Navbar").$$render($$result, { class: "shadow-md" }, {}, {
      default: ({ hidden, toggle }) => {
        return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<img src="/images/logo.png" class="mr-3 h-7 sm:h-9 shadow rounded-full bg-gray-50 dark:bg-transparent" alt="PetOne Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-1e8c94l">PetOne</span>`;
          }
        })} <div class="flex items-center md:order-2"><a href="/login" title="Login" class="hidden md:block">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fluent-mdl2:signin",
            color: "black",
            width: "30",
            height: "30"
          },
          {},
          {}
        )}</a> <button class="relative p-4">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:cart", class: "scale-150" }, {}, {})} <span class="absolute top-0 right-0 rounded-xl h-[23px] w-[23px] bg-primary-600 text-white flex justify-center items-center p-2" data-svelte-h="svelte-w7calf">10</span></button> ${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})} ${validate_component(NavHamburger, "NavHamburger").$$render(
          $$result,
          {
            class1: "w-full md:flex md:w-auto md:order-1"
          },
          {},
          {}
        )}</div> ${validate_component(NavUl, "NavUl").$$render(
          $$result,
          {
            hidden,
            divClass: "w-full md:block md:w-auto",
            ulClass: "flex flex-col md:flex-row md:mt-0 md:text-sm md:font-medium bg-transparent"
          },
          {},
          {
            default: () => {
              return `${each(menu, (item, index) => {
                return `${validate_component(NavLi, "NavLi").$$render($$result, { nonActiveClass: "" }, {}, {
                  default: () => {
                    return `<div class="parent-menu relative w-full border-b-2 md:border-none"><div id="${"menu" + escape(item.id, true)}" class="flex items-center relative"><button class="${"cursor-pointer w-full px-5 py-3 z-10 flex-1 text-left " + escape(
                      $page.params.url == item.url ? "dark:text-white text-primary-600" : "",
                      true
                    )}">${escape($t(item.name))}</button> <div class="p-3 w-12 z-0 md:hidden"></div> ${item?.subMenus && item?.subMenus?.length > 0 ? `<div id="${"mobile" + escape(item.id, true)}" class="absolute text-xl p-3 md:hidden w-full">${validate_component(Icon, "Icon").$$render(
                      $$result,
                      {
                        icon: "mingcute:down-fill",
                        class: "float-right"
                      },
                      {},
                      {}
                    )} </div>` : ``}</div> ${item?.subMenus && item?.subMenus?.length > 0 ? `${validate_component(Popover, "Popover").$$render(
                      $$result,
                      {
                        class: "text-sm font-normal w-64 hidden md:block text-black",
                        transition: slide,
                        triggeredBy: "#menu" + item.id
                      },
                      {},
                      {
                        default: () => {
                          return `${each(item.subMenus, (sub) => {
                            return `<button class="${"block w-full p-4 " + escape(
                              $page.params.url == sub.url ? "dark:text-white text-primary-600 font-bold" : "hover:text-primary-700 dark:text-slate-400 dark:hover:text-white",
                              true
                            )}">${escape(sub.name)} </button>`;
                          })} `;
                        }
                      }
                    )} ${validate_component(Popover, "Popover").$$render(
                      $$result,
                      {
                        class: "text-sm w-full font-normal md:hidden z-50 mr-[100px]",
                        placement: "bottom",
                        triggeredBy: "#mobile" + item.id,
                        trigger: "click"
                      },
                      {},
                      {
                        default: () => {
                          return `${each(item.subMenus, (sub) => {
                            return `<button class="${"block w-full p-4 " + escape(
                              $page.params.url == sub.url ? "dark:text-white text-primary-600 font-bold" : "hover:text-primary-700 dark:text-slate-400 dark:hover:text-white",
                              true
                            )}">${escape(sub.name)} </button>`;
                          })} `;
                        }
                      }
                    )}` : ``}</div> `;
                  }
                })}`;
              })} ${validate_component(LanguageSelect, "LanguageSelect").$$render($$result, {}, {}, {})}`;
            }
          }
        )}`;
      }
    })}</div></div> <div class="w-full relative h-auto opacity-0"><div class="w-full">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-1e8c94l">PetOne</span>`;
          }
        })} ${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            id: "avatar-menu",
            src: "/images/avt.png"
          },
          {},
          {}
        )} ${validate_component(NavUl, "NavUl").$$render($$result, {}, {}, {
          default: () => {
            return `${each(menu, (item) => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, {}, {}, {
                default: () => {
                  return `hi`;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div></div>  ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: true,
        class: "z-50",
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
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-qpx22z">Are you sure you want to Sign Out?</h3> ${validate_component(GradientButton, "GradientButton").$$render($$result, { color: "red", class: "mr-2" }, {}, {
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
  $$unsubscribe_page();
  $$unsubscribe_t();
  return $$rendered;
});
const css = {
  code: ".footer-list.s-FHa4EdyUjGz3 a.s-FHa4EdyUjGz3{display:block;width:100%;padding:10px 30px;border-radius:10px;display:flex;align-items:center;text-transform:capitalize}.footer-list.s-FHa4EdyUjGz3 a.s-FHa4EdyUjGz3:hover{box-shadow:0 4px 4px rgba(255, 255, 255, 0.3) inset, 0 -4px 4px rgba(255, 255, 255, 0.3) inset;transition:box-shadow .6s;font-weight:600}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
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
    $$rendered = `<footer class="bg-fixed relative overflow-x-hidden" style="background-image: url('/images/homepage/bgne.jpg'); min-height: 400px;"><div class="absolute w-full h-full animate-marquee bg-fixed bg-contain" style="background-image: url('/images/homepage/bgne.jpg');"></div> <div class="absolute w-full h-full animate-marquee2 bg-fixed bg-contain" style="background-image: url('/images/homepage/bgne.jpg');"></div>  <div class="z-10 relative bg-black bg-opacity-40" style="background-image: url('https://media.tenor.com/oBgN468I5QcAAAAi/scared-run.gif'); background-position: center; background-repeat: repeat; background-size: contain; width: inherit; height: inherit;"><div class="flex items-center justify-center flex-col bg-opacity-30 bg-black relative w-full h-full"><div class="footer-info mb-20 mt-10 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:w-4/5 md:w-4/5 sm:mx-4 gap-4"><div class="bg-black bg-opacity-80 w-full rounded-lg p-5 xl:col-span-2 md:col-span-3 sm:col-span-1 grid grid-cols-1"><div class="flex items-center"><img src="/images/logo.png" alt="" class="2xl:w-32 xl:w-32 lg:w-28 md:w-28 sm:w-20 w-20"> <p class="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold text-white ml-3" data-svelte-h="svelte-f9dg48">PetOne™</p></div> <p class="text-justify text-white text-md col-span-2" data-svelte-h="svelte-104t3ro">We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work.</p> <p class="my-4 text-white text-md col-span-2" data-svelte-h="svelte-1kdxkhb">Address: No. 47, Thu Duc District, Ho Chi Minh City, Viet Nam</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
          return `<iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6182334436364!2d106.7104288413416!3d10.832829612542865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752862ecc20187%3A0x167a5cd7990e165d!2sCaf%C3%A9%20Tony%20Riverside!5e0!3m2!1svi!2s!4v1691516641496!5m2!1svi!2s" width="100" height="450" style="border:0;" allowfullscreen loading="lazy" title="maps" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
      }
    )}</div> <div class="bg-black bg-opacity-80 w-full rounded-lg sm:col-span-1"><ul class="text-white footer-list s-FHa4EdyUjGz3"><ol class="border-b-2 border-white border-opacity-30 rounded-lg py-2 px-6 uppercase text-xl font-semibold" data-svelte-h="svelte-8k6n91">service</ol> ${each(services, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="s-FHa4EdyUjGz3">${escape(item.name)}</a></li>`;
    })}</ul></div> <div class="bg-black bg-opacity-80 w-full rounded-lg"><ul class="text-white footer-list s-FHa4EdyUjGz3"><ol class="border-b-2 border-white border-opacity-30 rounded-lg py-2 px-6 uppercase text-xl font-semibold" data-svelte-h="svelte-2ueqxx">company</ol> ${each(legal, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="s-FHa4EdyUjGz3">${escape(item.name)}</a></li>`;
    })}</ul></div> <div class="bg-black bg-opacity-80 w-full rounded-lg"><ul class="text-white footer-list s-FHa4EdyUjGz3"><ol class="border-b-2 border-white border-opacity-30 rounded-lg py-2 px-6 uppercase text-xl font-semibold" data-svelte-h="svelte-u6pxlt">social</ol> ${each(social, (item) => {
      return `<li><a${add_attribute("href", item.url, 0)} class="s-FHa4EdyUjGz3">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          class: "footer-list-icon text-2xl",
          icon: item.image
        },
        {},
        {}
      )}<span class="ml-3">${escape(item.name)}</span></a></li>`;
    })}</ul></div></div> <div class="w-full absolute bottom-0 bg-black bg-opacity-50 mx-auto p-4 md:flex md:items-center md:justify-between"><span class="text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline" data-svelte-h="svelte-9lsmdy">PawCat™</a>. All Rights Reserved.</span></div></div></div> </footer>`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = ` ${data.menu.length > 0 ? `${validate_component(Header, "Header").$$render(
      $$result,
      { menuProp: data.menu },
      {
        menuProp: ($$value) => {
          data.menu = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b01e8423.js.map
