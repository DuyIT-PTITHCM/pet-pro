import { v as validate_store, a as subscribe, f as set_store_value } from './utils-22ec5563.js';
import { c as create_ssr_component, a as add_attribute, v as validate_component, b as each, e as escape } from './ssr-a6fe4ea2.js';
import { g as getCookie } from './cookieUtils-3c057440.js';
import { w as writable } from './index-eecbf3f9.js';
import './index2-e28c90c4.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import { P as Popover } from './Popover-68f1f46e.js';

const selectedLanguage = writable(getCookie("lang") ?? "en");
const LanguageSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedLanguage, $$unsubscribe_selectedLanguage;
  validate_store(selectedLanguage, "selectedLanguage");
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => $selectedLanguage = value);
  let { btnClass } = $$props;
  const languages = [
    {
      id: "en",
      name: "English",
      icon: "twemoji:flag-united-kingdom"
    },
    {
      id: "vi",
      name: "Tiếng Việt",
      icon: "twemoji:flag-vietnam"
    }
  ];
  let placement;
  let icon = languages[1].icon;
  selectedLanguage.set(getCookie("lang"));
  set_store_value(selectedLanguage, $selectedLanguage = "vi", $selectedLanguage);
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  $$unsubscribe_selectedLanguage();
  return `    <button id="languge" color="none"${add_attribute("class", btnClass, 0)}>${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}</button> ${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      triggeredBy: "#languge",
      placement,
      class: "transition-all",
      trigger: "click"
    },
    {},
    {
      default: () => {
        return `${each(languages, (language) => {
          return `<div class=""><input${add_attribute("id", language.id, 0)} class="hidden" type="radio" name="language"${add_attribute("value", language.id, 0)}> <label${add_attribute("for", language.id, 0)} class="${"flex items-center text-xl cursor-pointer p-2 transition-all hover:text-primary-600 " + escape(icon == language.icon ? "" : "opacity-50", true)}">${validate_component(Icon, "Icon").$$render($$result, { icon: language.icon }, {}, {})}<span class="ml-4 text-base">${escape(language.name)}</span></label> </div>`;
        })}`;
      }
    }
  )} `;
});

export { LanguageSelect as L };
//# sourceMappingURL=LanguageSelect-b5b08eed.js.map
