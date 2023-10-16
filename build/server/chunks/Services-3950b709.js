import { h as is_promise, n as noop } from './utils-a4f7b281.js';
import { c as create_ssr_component, b as each, v as validate_component, e as escape, a as add_attribute } from './ssr-e41dcf02.js';
import { B as Button } from './Button-921a77e0.js';
import './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { C as CardPlaceholder } from './CardPlaceholder-bb34af7a.js';
import { H as HOST } from './Const-aff6847f.js';

const css = {
  code: ".service-box.s-OQm4IrrQMTE7 .service-box_overlay.s-OQm4IrrQMTE7.s-OQm4IrrQMTE7{clip-path:circle(0% at 50% 0%);margin:0;border-radius:0}.service-box.s-OQm4IrrQMTE7:hover .service-box_overlay.s-OQm4IrrQMTE7.s-OQm4IrrQMTE7{clip-path:circle(100% at 50% 100%);animation:clip-path 1s}@keyframes s-OQm4IrrQMTE7-hoverAnimate{from{clip-path:polygon(100% 0, 18% 25%, 20% 83%, 100% 100%, 0 100%, 0% 60%, 0 0)}to{clip-path:polygon(100% 0, 100% 100%, 25% 85%, 100% 100%, 0 100%, 0% 60%, 0 0)}}.service-box.s-OQm4IrrQMTE7:hover>div.s-OQm4IrrQMTE7>.service-desc.s-OQm4IrrQMTE7{display:block}",
  map: null
};
async function convertImageJsonToArray(json) {
  if (json) {
    return await JSON.parse(json);
  }
  return [];
}
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { services = null } = $$props;
  let host = HOST;
  let imageWidth = 0;
  if ($$props.services === void 0 && $$bindings.services && services !== void 0)
    $$bindings.services(services);
  $$result.css.add(css);
  return `${services ? `${each(services, (service, index) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "lg" }, {}, {})}</div> `;
      }
      return function(res) {
        return ` <div class="service-box rounded-lg overflow-hidden dark:text-white relative s-OQm4IrrQMTE7" style="${"min-height: " + escape(imageWidth * 60 / 100, true) + "px; max-height: 220px"}"><img${add_attribute("src", host + res[0], 0)}${add_attribute("alt", service.title, 0)} class="w-full h-full object-cover"> <div class="service-box_overlay absolute w-full h-full top-0 left-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 transition-all s-OQm4IrrQMTE7"></div> <div class="xl:p-4 p-2 absolute z-10 top-0 w-full h-full flex justify-center items-center flex-col dark:text-white s-OQm4IrrQMTE7"><h5 class="md:text-xl mb-4 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 p-2 px-4 rounded-full text-center line-clamp-2">${escape(service.title)}</h5> <div class="service-desc hidden s-OQm4IrrQMTE7"><p class="line-clamp-3 overflow-ellipsis text-justify relative mb-4">${escape(service.description)} </p></div> ${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: "/dich-vu/" + service.slug,
            color: "primary"
          },
          {},
          {
            default: () => {
              return `Xem thêm`;
            }
          }
        )} </div></div> `;
      }(__value);
    }(convertImageJsonToArray(service.imageUrl))}`;
  })}` : ``}`;
});

export { Services as S };
//# sourceMappingURL=Services-3950b709.js.map
