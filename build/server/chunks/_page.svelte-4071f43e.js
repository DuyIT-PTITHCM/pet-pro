import { c as create_ssr_component, v as validate_component, b as each, e as escape, i as createEventDispatcher, s as setContext, a as add_attribute, d as spread, g as escape_object, f as escape_attribute_value, h as getContext } from './ssr-1bb711e0.js';
import { C as CloseButton, A as Avatar, s as sineIn } from './Avatar-9049e27b.js';
import { B as Button, v as validate_dynamic_element, a as validate_void_dynamic_element, i as is_void } from './Button-292d63d1.js';
import { D as Drawer } from './Drawer-f41ab787.js';
import { I as Icon } from './Icon-ac1f5dfd.js';
import { v as validate_store, s as subscribe, c as compute_rest_props } from './utils-5d10fb30.js';
import { w as writable } from './index2-b7662a81.js';
import { C as Checkbox } from './Checkbox-01f54b15.js';
import { twMerge, twJoin } from 'tailwind-merge';
import { p as page } from './stores-bab03e3f.js';
import { t as title, d as description } from './meta-8db97ba1.js';

const PaginationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = void 0 } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { large = false } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  let defaultClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  defaultClass = twMerge(
    "flex items-center font-medium",
    large ? "h-10 px-4 text-base" : "h-8 px-3 text-sm",
    group ? "" : table ? "rounded" : "rounded-lg",
    // table || 'border border-gray-300 dark:border-gray-700 dark:bg-gray-800',
    table ? "" : "border",
    active ? activeClass : normalClass,
    $$props.class
  );
  return ` ${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${href ? "a" : "button"}${add_attribute("href", href, 0)}${add_attribute("class", defaultClass, 0)}${add_attribute("role", href ? "button" : void 0, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })(href ? "a" : "button")} `;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = [] } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { ulClass = "inline-flex -space-x-px items-center" } = $$props;
  let { table = false } = $$props;
  let { large = false } = $$props;
  createEventDispatcher();
  setContext("group", true);
  setContext("table", table);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0)
    $$bindings.table(table);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  return `<nav aria-label="Page navigation"><ul${add_attribute("class", twMerge(ulClass, table && "divide-x dark divide-gray-700 dark:divide-gray-700", $$props.class), 0)}><li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-l" : "rounded-l-lg"
    },
    {},
    {
      default: () => {
        return `${slots.prev ? slots.prev({}) : `Previous`}`;
      }
    }
  )}</li> ${each(pages, ({ name, href, active }) => {
    return `<li>${validate_component(PaginationItem, "PaginationItem").$$render(
      $$result,
      {
        large,
        active,
        activeClass,
        normalClass,
        href
      },
      {},
      {
        default: () => {
          return `${escape(name)}`;
        }
      }
    )} </li>`;
  })} <li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-r" : "rounded-r-lg"
    },
    {},
    {
      default: () => {
        return `${slots.next ? slots.next({}) : `Next`}`;
      }
    }
  )}</li></ul></nav> `;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "striped", "hoverable", "noborder", "shadow", "color", "customeColor"]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0)
    $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0)
    $$bindings.customeColor(customeColor);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  return `<div${add_attribute("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}><table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableBodyClass = void 0 } = $$props;
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0)
    $$bindings.tableBodyClass(tableBodyClass);
  return `<tbody${add_attribute("class", tableBodyClass, 0)}>${slots.default ? slots.default({}) : ``}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0)
    $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${$$props.onclick ? "button" : "td"}${spread(
        [
          escape_object($$restProps),
          {
            class: escape_attribute_value(tdClassfinal)
          },
          {
            role: escape_attribute_value($$props.onclick ? "button" : void 0)
          }
        ],
        {}
      )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })($$props.onclick ? "button" : "td")} `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0)
    $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0)
    $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding"]);
  let { padding = "px-6 py-3" } = $$props;
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  return `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th> `;
});
const CreateUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let createUserFrom = true;
  let transitionParamsRight = { x: 320, duration: 200, easing: sineIn };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Create New User`;
      }
    })} ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        placement: "right",
        width: "w-1/4",
        transitionType: "fly",
        transitionParams: transitionParamsRight,
        id: "createUserForm",
        hidden: createUserFrom
      },
      {
        hidden: ($$value) => {
          createUserFrom = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "mdi:create",
              class: "w-4 h-4 mr-2.5"
            },
            {},
            {}
          )}Create New User</h5> ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const UserFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render($$result, { class: "mr-2" }, {}, {
    default: () => {
      return `Filter`;
    }
  })}`;
});
const UserList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  let $sortItems, $$unsubscribe_sortItems;
  let $sortDirection, $$unsubscribe_sortDirection;
  let $sortKey, $$unsubscribe_sortKey;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { items } = $$props;
  const sortKey = writable("id");
  validate_store(sortKey, "sortKey");
  $$unsubscribe_sortKey = subscribe(sortKey, (value) => $sortKey = value);
  const sortDirection = writable(1);
  validate_store(sortDirection, "sortDirection");
  $$unsubscribe_sortDirection = subscribe(sortDirection, (value) => $sortDirection = value);
  const sortItems = writable(items.slice());
  validate_store(sortItems, "sortItems");
  $$unsubscribe_sortItems = subscribe(sortItems, (value) => $sortItems = value);
  let pages = [
    {
      name: 6,
      href: "/components/pagination?page=6"
    },
    {
      name: 7,
      href: "/components/pagination?page=7"
    },
    {
      name: 8,
      href: "/components/pagination?page=8"
    },
    {
      name: 9,
      href: "/components/pagination?page=9"
    },
    {
      name: 10,
      href: "/components/pagination?page=10"
    }
  ];
  let helper = { start: 1, end: 10, total: 100 };
  let isCheck = false;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  {
    {
      const key = $sortKey;
      const direction = $sortDirection;
      const sorted = [...$sortItems].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (aVal < bVal) {
          return -direction;
        } else if (aVal > bVal) {
          return direction;
        }
        return 0;
      });
      sortItems.set(sorted);
    }
  }
  activeUrl = $page.url.searchParams.get("page");
  {
    {
      pages.forEach((page2) => {
        let splitUrl = page2.href.split("?");
        let queryString = splitUrl.slice(1).join("?");
        const hrefParams = new URLSearchParams(queryString);
        let hrefValue = hrefParams.get("page");
        if (hrefValue === activeUrl) {
          page2.active = true;
        } else {
          page2.active = false;
        }
      });
      pages = pages;
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_sortItems();
  $$unsubscribe_sortDirection();
  $$unsubscribe_sortKey();
  return `${validate_component(Table, "Table").$$render(
    $$result,
    {
      hoverable: true,
      divClass: "rounded-xl overflow-hidden"
    },
    {},
    {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isCheck }, {}, {})}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `ID`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Avatar`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Name`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Email`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Phone`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
          default: () => {
            return `${each($sortItems, (item) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "w-3" }, {}, {
                    default: () => {
                      return `<div class="flex justify-center">${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isCheck, value: item.id }, {}, {})}</div>`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.id)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Avatar, "Avatar").$$render($$result, { src: item.avatar }, {}, {})}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.name)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.email)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.phone)}`;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    }
  )} <div class="list-pagination bg-slate-700 rounded-xl overflow-hidden p-4"><div class="flex items-center justify-between gap-2 font-semibold text-gray-900 dark:text-white"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape(helper.start)}</span>
          to
          <span class="font-semibold text-gray-900 dark:text-white">${escape(helper.end)}</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">${escape(helper.total)}</span>
          Entries</div> ${validate_component(Pagination, "Pagination").$$render($$result, { pages, icon: true }, {}, {
    next: () => {
      return `<span class="sr-only" data-svelte-h="svelte-xiiv6y">Next</span> ${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "icon-park-solid:right-one",
          class: "w-2.5 h-2.5"
        },
        {},
        {}
      )} `;
    },
    prev: () => {
      return `<span class="sr-only" data-svelte-h="svelte-z31jm6">Previous</span> ${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "icon-park-solid:left-one",
          class: "w-2.5 h-2.5"
        },
        {},
        {}
      )}`;
    }
  })}</div></div>`;
});
const css = {
  code: ".header-manager.s-9xv40nvVEEYP h1.s-9xv40nvVEEYP{font-size:28px;font-weight:bold}.userdata.s-9xv40nvVEEYP.s-9xv40nvVEEYP{width:100%}",
  map: null
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let users = [
    {
      id: 1,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Toyota",
      email: "ABC@example.com",
      phone: 20172017
    },
    {
      id: 2,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Ford",
      email: "CDE@example.com",
      phone: 20172017
    },
    {
      id: 3,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Volvo",
      email: "FGH@example.com",
      phone: 20172017
    },
    {
      id: 4,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Saab",
      email: "IJK@example.com",
      phone: 20172017
    },
    {
      id: 5,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Toyota",
      email: "ABC@example.com",
      phone: 20172017
    },
    {
      id: 6,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Ford",
      email: "CDE@example.com",
      phone: 20172017
    },
    {
      id: 7,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Volvo",
      email: "FGH@example.com",
      phone: 20172017
    },
    {
      id: 8,
      avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
      name: "Saab",
      email: "IJK@example.com",
      phone: 20172017
    }
  ];
  $$result.css.add(css);
  return `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl flex items-center justify-between s-9xv40nvVEEYP"><h1 class="dark:text-white s-9xv40nvVEEYP" data-svelte-h="svelte-18dcdsi">User management</h1> <div class="">${validate_component(UserFilter, "UserFilter").$$render($$result, {}, {}, {})} ${validate_component(CreateUser, "CreateUser").$$render($$result, {}, {}, {})}</div></div> <div class="userdata s-9xv40nvVEEYP">${validate_component(UserList, "UserList").$$render($$result, { items: users }, {}, {})} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("about page");
  description.set("description page");
  return `${validate_component(User, "User").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4071f43e.js.map
