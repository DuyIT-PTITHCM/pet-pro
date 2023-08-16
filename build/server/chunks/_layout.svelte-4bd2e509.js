import { c as create_ssr_component, v as validate_component, d as spread, f as escape_attribute_value, h as escape_object, e as escape, a as add_attribute, j as add_classes, i as createEventDispatcher, m as missing_component, k as add_styles } from './ssr-37951d87.js';
import { c as compute_rest_props, v as validate_store, s as subscribe, b as set_store_value, a as compute_slots } from './utils-62dc91f3.js';
import { w as writable } from './index2-a395b144.js';

const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
});
const ChevronDown$1 = ChevronDown;
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`;
});
const Close$1 = Close;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"></path></svg>`;
});
const Menu$1 = Menu;
const shouldRenderHamburgerMenu = writable(false);
const isSideNavCollapsed = writable(false);
const isSideNavRail = writable(false);
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"]);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu$1 } = $$props;
  let { iconClose = Close$1 } = $$props;
  let { ref = null } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread(
    [
      { type: "button" },
      { title: escape_attribute_value(ariaLabel) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--header__action bx--header__menu-trigger bx--header__menu-toggle"
    }
  )}${add_attribute("this", ref, 0)}>${validate_component((isOpen ? iconClose : iconMenu) || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}</button>`;
});
const HamburgerMenu$1 = HamburgerMenu;
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  let $$slots = compute_slots(slots);
  let $shouldRenderHamburgerMenu, $$unsubscribe_shouldRenderHamburgerMenu;
  validate_store(shouldRenderHamburgerMenu, "shouldRenderHamburgerMenu");
  $$unsubscribe_shouldRenderHamburgerMenu = subscribe(shouldRenderHamburgerMenu, (value) => $shouldRenderHamburgerMenu = value);
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu$1 } = $$props;
  let { iconClose = Close$1 } = $$props;
  let winWidth = void 0;
  if ($$props.expandedByDefault === void 0 && $$bindings.expandedByDefault && expandedByDefault !== void 0)
    $$bindings.expandedByDefault(expandedByDefault);
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  if ($$props.uiShellAriaLabel === void 0 && $$bindings.uiShellAriaLabel && uiShellAriaLabel !== void 0)
    $$bindings.uiShellAriaLabel(uiShellAriaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.persistentHamburgerMenu === void 0 && $$bindings.persistentHamburgerMenu && persistentHamburgerMenu !== void 0)
    $$bindings.persistentHamburgerMenu(persistentHamburgerMenu);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
    ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName);
    $$rendered = ` <header${add_attribute("aria-label", ariaLabel, 0)}${add_classes("bx--header".trim())}>${slots["skip-to-content"] ? slots["skip-to-content"]({}) : ``} ${$shouldRenderHamburgerMenu && winWidth < expansionBreakpoint || persistentHamburgerMenu ? `${validate_component(HamburgerMenu$1, "HamburgerMenu").$$render(
      $$result,
      {
        iconClose,
        iconMenu,
        isOpen: isSideNavOpen
      },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], { classes: "bx--header__name" })}${add_attribute("this", ref, 0)}>${company || $$slots.company ? `<span${add_classes("bx--header__name--prefix".trim())}>${slots.company ? slots.company({}) : `${escape(company)} `}</span>` : ``} ${slots.platform ? slots.platform({}) : `${escape(platformName)}`}</a> ${slots.default ? slots.default({}) : ``}</header>`;
  } while (!$$settled);
  $$unsubscribe_shouldRenderHamburgerMenu();
  return $$rendered;
});
const Header$1 = Header;
const Switcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path></svg>`;
});
const Switcher$1 = Switcher;
const css$2 = {
  code: ".action-text.s-vvyJ3qRS6z3W.s-vvyJ3qRS6z3W{display:inline-flex;align-items:center;width:auto;padding:0 1rem 2px 1rem;font-size:0.875rem;line-height:1.28572;letter-spacing:0.16px;color:#f4f4f4}.action-text.s-vvyJ3qRS6z3W>span.s-vvyJ3qRS6z3W{margin-left:0.75rem}",
  map: null
};
const HeaderAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "isOpen",
    "icon",
    "closeIcon",
    "text",
    "ref",
    "transition",
    "preventCloseOnClickOutside"
  ]);
  let { isOpen = false } = $$props;
  let { icon = Switcher$1 } = $$props;
  let { closeIcon = Close$1 } = $$props;
  let { text = void 0 } = $$props;
  let { ref = null } = $$props;
  let { transition = { duration: 200 } } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  createEventDispatcher();
  let refPanel = null;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.closeIcon === void 0 && $$bindings.closeIcon && closeIcon !== void 0)
    $$bindings.closeIcon(closeIcon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.preventCloseOnClickOutside === void 0 && $$bindings.preventCloseOnClickOutside && preventCloseOnClickOutside !== void 0)
    $$bindings.preventCloseOnClickOutside(preventCloseOnClickOutside);
  $$result.css.add(css$2);
  return ` <button${spread([{ type: "button" }, escape_object($$restProps)], {
    classes: "bx--header__action " + (isOpen ? "bx--header__action--active" : "") + " " + (text ? "action-text" : "") + " s-vvyJ3qRS6z3W"
  })}${add_attribute("this", ref, 0)}>${isOpen ? `${slots.closeIcon ? slots.closeIcon({}) : ` ${validate_component(closeIcon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})} `}` : `${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})} `}`} ${slots.text ? slots.text({}) : ` ${text ? `<span class="s-vvyJ3qRS6z3W">${escape(text)}</span>` : ``} `}</button> ${isOpen ? `<div${add_classes("bx--header-panel bx--header-panel--expanded".trim())}${add_attribute("this", refPanel, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const HeaderAction$1 = HeaderAction;
const css$1 = {
  code: "li.s-Yx0wYeQxWXeW{margin:2rem 1rem 0;color:#525252}span.s-Yx0wYeQxWXeW{font-size:0.75rem;line-height:1.3;letter-spacing:0.02rem;color:#c6c6c6}",
  map: null
};
const HeaderPanelDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  $$result.css.add(css$1);
  return `${$$slots.default ? `<li class="s-Yx0wYeQxWXeW"><span class="s-Yx0wYeQxWXeW">${slots.default ? slots.default({}) : ``}</span></li>` : ``} <hr${add_classes("bx--switcher__item--divider".trim())}>`;
});
const HeaderPanelDivider$1 = HeaderPanelDivider;
const HeaderPanelLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "ref"]);
  let { href = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--switcher__item".trim())}><a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--switcher__item-link"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const HeaderPanelLink$1 = HeaderPanelLink;
const HeaderPanelLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--switcher__item".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const HeaderPanelLinks$1 = HeaderPanelLinks;
const HeaderUtilities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--header__global".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const HeaderUtilities$1 = HeaderUtilities;
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fixed", "rail", "ariaLabel", "isOpen", "expansionBreakpoint"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  validate_store(isSideNavRail, "isSideNavRail");
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  validate_store(isSideNavCollapsed, "isSideNavCollapsed");
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { fixed = false } = $$props;
  let { rail = false } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  const dispatch = createEventDispatcher();
  let winWidth = void 0;
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.rail === void 0 && $$bindings.rail && rail !== void 0)
    $$bindings.rail(rail);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  {
    dispatch(isOpen ? "open" : "close");
  }
  set_store_value(isSideNavCollapsed, $isSideNavCollapsed = !isOpen, $isSideNavCollapsed);
  set_store_value(isSideNavRail, $isSideNavRail = rail, $isSideNavRail);
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return ` ${!fixed ? `  <div${add_classes(("bx--side-nav__overlay " + (isOpen ? "bx--side-nav__overlay-active" : "")).trim())}${add_styles({ "z-index": isOpen ? 6e3 : void 0 })}></div>` : ``} <nav${spread(
    [
      {
        "aria-hidden": escape_attribute_value(!isOpen)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__navigation bx--side-nav bx--side-nav--ux " + ((rail && winWidth >= expansionBreakpoint ? false : isOpen) ? "bx--side-nav--expanded" : "") + " " + (!isOpen && !rail ? "bx--side-nav--collapsed" : "") + " " + (rail ? "bx--side-nav--rail" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</nav>`;
});
const SideNav$1 = SideNav;
const SideNavItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--side-nav__items".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SideNavItems$1 = SideNavItems;
const SideNavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "icon", "ref"]);
  let $$slots = compute_slots(slots);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__item".trim())}><a${spread(
    [
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__link " + (isSelected ? "bx--side-nav__link--current" : "")
    }
  )}${add_attribute("this", ref, 0)}>${$$slots.icon || icon ? `<div${add_classes("bx--side-nav__icon bx--side-nav__icon--small".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span${add_classes("bx--side-nav__link-text".trim())}>${slots.default ? slots.default({}) : ` ${escape(text)} `}</span></a></li>`;
});
const SideNavLink$1 = SideNavLink;
const SideNavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["expanded", "text", "icon", "ref"]);
  let $$slots = compute_slots(slots);
  let { expanded = false } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes(("bx--side-nav__item " + (icon ? "bx--side-nav__item--icon" : "")).trim())}><button${spread(
    [
      { type: "button" },
      {
        "aria-expanded": escape_attribute_value(expanded)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__submenu"
    }
  )}${add_attribute("this", ref, 0)}>${$$slots.icon || icon ? `<div${add_classes("bx--side-nav__icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``} <span${add_classes("bx--side-nav__submenu-title".trim())}>${escape(text)}</span> <div${add_classes("bx--side-nav__icon bx--side-nav__icon--small bx--side-nav__submenu-chevron".trim())}>${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, {}, {}, {})}</div></button>  <ul role="menu"${add_classes("bx--side-nav__menu".trim())}${add_styles({
    "max-height": expanded ? "none" : void 0
  })}>${slots.default ? slots.default({}) : ``}</ul></li>`;
});
const SideNavMenu$1 = SideNavMenu;
const SideNavMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "ref"]);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__menu-item".trim())}><a${spread(
    [
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      { href: escape_attribute_value(href) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__link"
    }
  )}${add_attribute("this", ref, 0)}><span${add_classes("bx--side-nav__link-text".trim())}>${slots.default ? slots.default({}) : `${escape(text)}`}</span></a></li>`;
});
const SideNavMenuItem$1 = SideNavMenuItem;
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let unsetLeftMargin;
  let $$restProps = compute_rest_props($$props, ["id"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  validate_store(isSideNavRail, "isSideNavRail");
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  validate_store(isSideNavCollapsed, "isSideNavCollapsed");
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { id = "main-content" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  unsetLeftMargin = $isSideNavCollapsed && !$isSideNavRail;
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return `<main${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], {
    classes: "bx--content",
    styles: {
      "margin-left": unsetLeftMargin ? 0 : void 0
    }
  })}>${slots.default ? slots.default({}) : ``}</main>`;
});
const Content$1 = Content;
const SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "tabindex"]);
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skip-to-content"
    }
  )}>${slots.default ? slots.default({}) : `Skip to main content`}</a>`;
});
const SkipToContent$1 = SkipToContent;
const HeaderGlobalAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive", "icon", "ref"]);
  let { isActive = false } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread([{ type: "button" }, escape_object($$restProps)], {
    classes: "bx--header__action " + (isActive ? "bx--header__action--active" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})} `}</button>`;
});
const HeaderGlobalAction$1 = HeaderGlobalAction;
const SettingsAdjust = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"></path></svg>`;
});
const UserAvatarFilledAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm7.9925,22.9258A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path></svg>`;
});
const HumidityAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26 12a3.8978 3.8978 0 01-4-3.777 3.9017 3.9017 0 01.6533-2.0639L25.17 2.4141a1.0381 1.0381 0 011.6592 0L29.3154 6.11A3.9693 3.9693 0 0130 8.223 3.8978 3.8978 0 0126 12zm0-7.2368L24.3438 7.2257A1.89 1.89 0 0024 8.223a2.0139 2.0139 0 004 0 1.98 1.98 0 00-.375-1.0466zM23.5 30H8.5A6.4962 6.4962 0 017.2 17.1381a8.9938 8.9938 0 0117.6006 0A6.4964 6.4964 0 0123.5 30zM16 12a7 7 0 00-6.9414 6.1452l-.0991.8122-.8155.064A4.4962 4.4962 0 008.5 28h15a4.4962 4.4962 0 00.3564-8.9786l-.8154-.064-.0986-.8122A7.0022 7.0022 0 0016 12z"></path></svg>`;
});
const Fade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M8.24 25.14L7 26.67a13.79 13.79 0 004.18 2.44l.69-1.87A12 12 0 018.24 25.14zM4.19 18l-2 .41A14.09 14.09 0 003.86 23L5.59 22A12.44 12.44 0 014.19 18zM11.82 4.76l-.69-1.87A13.79 13.79 0 007 5.33L8.24 6.86A12 12 0 0111.82 4.76zM5.59 10L3.86 9a14.37 14.37 0 00-1.64 4.59l2 .34A12.05 12.05 0 015.59 10zM16 2V4a12 12 0 010 24v2A14 14 0 0016 2z"></path></svg>`;
});
const Hearing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M18,30V28A10.0114,10.0114,0,0,0,28,18h2A12.0134,12.0134,0,0,1,18,30Z"></path><path d="M18,26V24a6.0066,6.0066,0,0,0,6-6h2A8.0092,8.0092,0,0,1,18,26Z"></path><path d="M18 22V20a2.0023 2.0023 0 002-2h2A4.0042 4.0042 0 0118 22zM10 2a9.01 9.01 0 00-9 9H3a7 7 0 0114 0 7.09 7.09 0 01-3.501 6.1348L13 17.4229v3.0732a2.9354 2.9354 0 01-.9009 2.1514 4.1824 4.1824 0 01-4.6318 1.03A4.0918 4.0918 0 015 20H3a6.1156 6.1156 0 003.6694 5.5117 5.7822 5.7822 0 002.3145.4863A6.5854 6.5854 0 0013.4624 24.11 4.94 4.94 0 0015 20.4961V18.5537A9.1077 9.1077 0 0019 11 9.01 9.01 0 0010 2z"></path><path d="M9.28,8.0825A3.0061,3.0061,0,0,1,13,11h2a4.9786,4.9786,0,0,0-1.8843-3.9111A5.0414,5.0414,0,0,0,8.835,6.1323,4.95,4.95,0,0,0,5.1323,9.835,5.0318,5.0318,0,0,0,7.436,15.2935,3.0777,3.0777,0,0,1,9,17.9229V20h2V17.9229a5.0608,5.0608,0,0,0-2.5371-4.3458A3.0016,3.0016,0,0,1,9.28,8.0825Z"></path></svg>`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"></path></svg>`;
});
const css = {
  code: ".conntainer-admin.s-i2ZroYsgAmjD{margin:0 20px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSideNavOpen = false;
  let isOpen1 = false;
  let isOpen2 = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header$1, "Header").$$render(
      $$result,
      {
        company: "Admin",
        platformName: "Dashboard",
        persistentHamburgerMenu: true,
        isSideNavOpen
      },
      {
        isSideNavOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        "skip-to-content": () => {
          return `${validate_component(SkipToContent$1, "SkipToContent").$$render($$result, {}, {}, {})} `;
        },
        default: () => {
          return `${validate_component(HeaderUtilities$1, "HeaderUtilities").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(HeaderGlobalAction$1, "HeaderGlobalAction").$$render(
                $$result,
                {
                  "aria-label": "Settings",
                  icon: SettingsAdjust
                },
                {},
                {}
              )} ${validate_component(HeaderAction$1, "HeaderAction").$$render(
                $$result,
                {
                  icon: UserAvatarFilledAlt,
                  closeIcon: UserAvatarFilledAlt,
                  isOpen: isOpen1
                },
                {
                  isOpen: ($$value) => {
                    isOpen1 = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(HeaderPanelLinks$1, "HeaderPanelLinks").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher subject 1`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 1`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 2`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 3`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 4`;
                          }
                        })} ${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher subject 2`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 1`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 2`;
                          }
                        })} ${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher subject 3`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 1`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )} ${validate_component(HeaderAction$1, "HeaderAction").$$render(
                $$result,
                { isOpen: isOpen2 },
                {
                  isOpen: ($$value) => {
                    isOpen2 = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(HeaderPanelLinks$1, "HeaderPanelLinks").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher subject 1`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 1`;
                          }
                        })} ${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher subject 2`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 1`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 2`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 3`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 4`;
                          }
                        })} ${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 5`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )} <div class="side_nav">${validate_component(SideNav$1, "SideNav").$$render(
      $$result,
      {
        style: "background: whitesmoke;",
        fixed: true,
        expansionBreakpoint: 1584,
        class: "custom-side-nav",
        isOpen: isSideNavOpen
      },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SideNavItems$1, "SideNavItems").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SideNavLink$1, "SideNavLink").$$render($$result, { icon: Fade, text: "Link 1" }, {}, {})} ${validate_component(SideNavLink$1, "SideNavLink").$$render($$result, { icon: Home, text: "Link 2" }, {}, {})} ${validate_component(SideNavLink$1, "SideNavLink").$$render($$result, { icon: HumidityAlt, text: "Link 3" }, {}, {})} ${validate_component(SideNavMenu$1, "SideNavMenu").$$render($$result, { icon: Hearing, text: "Menu" }, {}, {
                default: () => {
                  return `${validate_component(SideNavMenuItem$1, "SideNavMenuItem").$$render($$result, { href: "/", text: "Link 1" }, {}, {})} ${validate_component(SideNavMenuItem$1, "SideNavMenuItem").$$render($$result, { href: "/", text: "Link 2" }, {}, {})} ${validate_component(SideNavMenuItem$1, "SideNavMenuItem").$$render($$result, { href: "/", text: "Link 3" }, {}, {})}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div> ${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="conntainer-admin s-i2ZroYsgAmjD">${slots.default ? slots.default({}) : ``}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-4bd2e509.js.map
