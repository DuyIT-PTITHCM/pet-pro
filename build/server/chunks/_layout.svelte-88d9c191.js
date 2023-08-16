import { v as validate_store, s as subscribe, c as compute_rest_props, a as compute_slots } from './utils-62dc91f3.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each, g as getContext, d as spread, f as escape_attribute_value, h as escape_object, i as createEventDispatcher, s as setContext } from './ssr-37951d87.js';
import { t as title, d as description } from './meta-839d49e3.js';
import Cookies from 'js-cookie';
import { w as writable } from './index2-a395b144.js';
import { t as t2 } from './index-b94ab52b.js';
import { I as Icon } from './Icon-0a52b4bb.js';
import { twMerge } from 'tailwind-merge';

const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function validate_dynamic_element(tag) {
  const is_string = typeof tag === "string";
  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}
function validate_void_dynamic_element(tag) {
  if (tag && is_void(tag)) {
    console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
  }
}
function getCookie(name) {
  return Cookies.get(name);
}
const selectedLanguage = writable(getCookie("lang") ?? "en");
const LanguageSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedLanguage;
  validate_store(selectedLanguage, "selectedLanguage");
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => value);
  const languages = [{ id: "en", name: "English" }, { id: "vi", name: "Tiếng Việt" }];
  selectedLanguage.set(getCookie("lang"));
  $$unsubscribe_selectedLanguage();
  return `   <select class="dark:bg-slate-800">${each(languages, (language) => {
    return `<option${add_attribute("value", language.id, 0)}>${escape(language.name)}</option>`;
  })}</select>`;
});
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ]);
  const null_transition = () => ({ duration: 0 });
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    validate_dynamic_element(tag$1);
    return tag$1 ? (() => {
      validate_void_dynamic_element(tag$1);
      return `<${tag}${spread(
        [
          escape_object($$restProps),
          { class: escape_attribute_value(divClass) },
          { role: escape_attribute_value(role) }
        ],
        {}
      )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}`;
    })() : "";
  })(tag)} `;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ml-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "size", "href", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus:ring-gray-200 dark:focus:ring-gray-700",
    blue: "focus:ring-blue-300 dark:focus:ring-blue-800",
    dark: "focus:ring-gray-300 dark:focus:ring-gray-700",
    green: "focus:ring-green-300 dark:focus:ring-green-800",
    light: "focus:ring-gray-200 dark:focus:ring-gray-700",
    primary: "focus:ring-primary-300 dark:focus:ring-primary-800",
    purple: "focus:ring-purple-300 dark:focus:ring-purple-900",
    red: "focus:ring-red-300 dark:focus:ring-red-900",
    yellow: "focus:ring-yellow-300 dark:focus:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "border-l-0 first:border-l",
    group ? pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${href ? "a" : "button"}${spread(
        [
          {
            type: escape_attribute_value(href ? void 0 : type)
          },
          { href: escape_attribute_value(href) },
          escape_object($$restProps),
          {
            class: escape_attribute_value(buttonClass)
          },
          {
            role: escape_attribute_value(href ? "button" : void 0)
          }
        ],
        {}
      )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })(href ? "a" : "button")} `;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `${$$result.head += `<!-- HEAD_svelte-19epqvd_START --><script data-svelte-h="svelte-1oo2ycg">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark'
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-19epqvd_END -->`, ""} <button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "permanent",
    "backdropClass",
    "defaultClass",
    "outsideclose"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title: title2 = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClass = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = twMerge(defaultClass, "w-full", $$props.class);
  return `${open ? ` <div${add_attribute("class", twMerge("fixed inset-0 z-40", backdropCls), 0)}></div>   <div${add_attribute("class", twMerge("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title2 ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title2)}</h3> `} ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}  <div${add_attribute("class", twMerge("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", $$props.bodyClass), 0)} role="document">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const css$1 = {
  code: '.darkmode.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{height:64px;width:64px;display:flex;justify-content:center;align-items:center}.out-header.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{margin-bottom:64px}.navbar.s-f_PBzT5OICzS input[type="checkbox"].s-f_PBzT5OICzS.s-f_PBzT5OICzS,.navbar.s-f_PBzT5OICzS .hamburger-lines.s-f_PBzT5OICzS.s-f_PBzT5OICzS{display:none}.container.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{max-width:1200px;width:90%;margin:auto}.navbar.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{box-shadow:0px 5px 10px 0px #aaa;position:fixed;width:100%;z-index:100;top:0}.navbar-container.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{display:flex;justify-content:space-between;height:64px;align-items:center}.menu-items.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{order:2;display:flex;align-items:center}.logo.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{order:1;font-size:2.3rem}.menu-items.s-f_PBzT5OICzS li.s-f_PBzT5OICzS.s-f_PBzT5OICzS{list-style:none;margin-left:1.5rem;font-size:1.3rem}.navbar.s-f_PBzT5OICzS a.s-f_PBzT5OICzS.s-f_PBzT5OICzS{text-decoration:none;font-weight:500;transition:color 0.3s ease-in-out}.navbar.s-f_PBzT5OICzS a.s-f_PBzT5OICzS.s-f_PBzT5OICzS:hover{color:#117964}@media(max-width: 768px){.navbar.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{opacity:0.95}.navbar-container.s-f_PBzT5OICzS input[type="checkbox"].s-f_PBzT5OICzS.s-f_PBzT5OICzS,.navbar-container.s-f_PBzT5OICzS .hamburger-lines.s-f_PBzT5OICzS.s-f_PBzT5OICzS{display:block}.navbar-container.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{display:block;position:relative;height:64px}.navbar-container.s-f_PBzT5OICzS input[type="checkbox"].s-f_PBzT5OICzS.s-f_PBzT5OICzS{position:absolute;display:block;height:32px;width:30px;top:20px;left:20px;z-index:5;opacity:0;cursor:pointer}.navbar-container.s-f_PBzT5OICzS .hamburger-lines.s-f_PBzT5OICzS.s-f_PBzT5OICzS{display:block;height:28px;width:35px;position:absolute;top:20px;left:20px;z-index:2;display:flex;flex-direction:column;justify-content:space-between}.navbar-container.s-f_PBzT5OICzS .hamburger-lines .line.s-f_PBzT5OICzS.s-f_PBzT5OICzS{display:block;height:4px;width:100%;border-radius:10px;background:#333}.navbar-container.s-f_PBzT5OICzS .hamburger-lines .line1.s-f_PBzT5OICzS.s-f_PBzT5OICzS{transform-origin:0% 0%;transition:transform 0.3s ease-in-out}.navbar-container.s-f_PBzT5OICzS .hamburger-lines .line2.s-f_PBzT5OICzS.s-f_PBzT5OICzS{transition:transform 0.2s ease-in-out}.navbar-container.s-f_PBzT5OICzS .hamburger-lines .line3.s-f_PBzT5OICzS.s-f_PBzT5OICzS{transform-origin:0% 100%;transition:transform 0.3s ease-in-out}.navbar.s-f_PBzT5OICzS .menu-items.s-f_PBzT5OICzS.s-f_PBzT5OICzS{padding-top:100px;height:100vh;max-width:300px;transform:translate(-150%);display:flex;flex-direction:column;margin-left:-40px;padding-left:40px;transition:transform 0.5s ease-in-out;box-shadow:5px 0px 10px 0px #aaa;overflow:scroll}.navbar.s-f_PBzT5OICzS .menu-items li.s-f_PBzT5OICzS.s-f_PBzT5OICzS{margin-bottom:1.8rem;font-size:1.1rem;font-weight:500}.logo.s-f_PBzT5OICzS.s-f_PBzT5OICzS.s-f_PBzT5OICzS{position:absolute;top:10px;right:15px;font-size:2.5rem}.navbar-container.s-f_PBzT5OICzS input[type="checkbox"].s-f_PBzT5OICzS:checked~.menu-items.s-f_PBzT5OICzS{transform:translateX(0)}.navbar-container.s-f_PBzT5OICzS input[type="checkbox"]:checked~.hamburger-lines .line1.s-f_PBzT5OICzS.s-f_PBzT5OICzS{transform:rotate(45deg)}.navbar-container.s-f_PBzT5OICzS input[type="checkbox"]:checked~.hamburger-lines .line2.s-f_PBzT5OICzS.s-f_PBzT5OICzS{transform:scaleY(0)}.navbar-container.s-f_PBzT5OICzS input[type="checkbox"]:checked~.hamburger-lines .line3.s-f_PBzT5OICzS.s-f_PBzT5OICzS{transform:rotate(-45deg)}}@media(max-width: 500px){.navbar-container.s-f_PBzT5OICzS input[type="checkbox"].s-f_PBzT5OICzS:checked~.logo.s-f_PBzT5OICzS{display:none}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2";
  const menu = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "blog", url: "/blog" }
  ];
  $$result.css.add(css$1);
  $$unsubscribe_t();
  return `<nav class="navbar bg-white text-gray dark:bg-gray-800 dark:text-white s-f_PBzT5OICzS"><div class="navbar-container container s-f_PBzT5OICzS"><input type="checkbox" name="" id="" class="s-f_PBzT5OICzS"> <div class="hamburger-lines s-f_PBzT5OICzS"><span class="line line1 s-f_PBzT5OICzS"></span> <span class="line line2 s-f_PBzT5OICzS"></span> <span class="line line3 s-f_PBzT5OICzS"></span></div> <ul class="menu-items bg-white dark:bg-gray-800 s-f_PBzT5OICzS">${each(menu, (item) => {
    return `<li class="s-f_PBzT5OICzS"><a${add_attribute("href", item.url, 0)} class="s-f_PBzT5OICzS">${escape($t("header." + item.name))}</a></li>`;
  })} <li class="s-f_PBzT5OICzS">${validate_component(LanguageSelect, "LanguageSelect").$$render($$result, {}, {}, {})}</li> <li class="s-f_PBzT5OICzS"><div class="darkmode s-f_PBzT5OICzS">${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})}</div></li></ul> <h1 class="logo s-f_PBzT5OICzS" data-svelte-h="svelte-1q84ck3">PET ONE</h1></div></nav> <div class="out-header s-f_PBzT5OICzS"></div>`;
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
//# sourceMappingURL=_layout.svelte-88d9c191.js.map
