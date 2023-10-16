import { v as validate_store, a as subscribe } from './utils-a4f7b281.js';
import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from './ssr-e41dcf02.js';
import { g as getCookie } from './cookieUtils-3c057440.js';
import { w as writable } from './index-92a6d03f.js';
import './index2-be839c26.js';

const selectedLanguage = writable(getCookie("lang") ?? "en");
const css = {
  code: "select.s-stFEWcntJTPy{outline:none;border:none;padding:0 24px;cursor:pointer;border-radius:100px}select.s-stFEWcntJTPy:hover{opacity:.9}",
  map: null
};
const LanguageSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedLanguage;
  validate_store(selectedLanguage, "selectedLanguage");
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => value);
  const languages = [{ id: "en", name: "English" }, { id: "vi", name: "Tiếng Việt" }];
  selectedLanguage.set(getCookie("lang"));
  $$result.css.add(css);
  $$unsubscribe_selectedLanguage();
  return `   <select class="dark:bg-slate-800 s-stFEWcntJTPy">${each(languages, (language) => {
    return `<option${add_attribute("value", language.id, 0)}>${escape(language.name)}</option>`;
  })}</select>`;
});

export { LanguageSelect as L };
//# sourceMappingURL=LanguageSelect-428d3379.js.map
