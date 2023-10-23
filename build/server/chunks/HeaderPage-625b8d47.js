import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-a6fe4ea2.js';
import { f as formatDate } from './common-f14333dd.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';

const css = {
  code: ".bg-title.s-IBKE_V4z7tHm{background:rgb(180,58,124);background:linear-gradient( 190deg, rgba(180,58,124,0.8) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(252,176,69,0.6) 100%);background:-webkit-linear-gradient(190deg, rgba(180,58,124,0.6) 0%, rgba(255, 106, 106, 0.2) 50%, rgba(255, 154, 14, 0.4) 100%)}",
  map: null
};
const HeaderPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "/images/common/cat-bg.jpg" } = $$props;
  let { title = "PET ONE" } = $$props;
  let { description = "WE LOVE YOUR PETS AS IF THEY WERE OURS" } = $$props;
  let { isShowTime = true } = $$props;
  let { isBgOverlay = false } = $$props;
  let { author = "Pet One" } = $$props;
  let { isDescription = false } = $$props;
  let { date = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.isShowTime === void 0 && $$bindings.isShowTime && isShowTime !== void 0)
    $$bindings.isShowTime(isShowTime);
  if ($$props.isBgOverlay === void 0 && $$bindings.isBgOverlay && isBgOverlay !== void 0)
    $$bindings.isBgOverlay(isBgOverlay);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.isDescription === void 0 && $$bindings.isDescription && isDescription !== void 0)
    $$bindings.isDescription(isDescription);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css);
  return `<div class="w-full h-[360px] bg-fixed bg-no-repeat bg-cover bg-center" style="${"background-image: url(" + escape(image, true) + ");"}"><div class="${escape(isBgOverlay && "bg-title", true) + " w-full h-full s-IBKE_V4z7tHm"}"><div class="container m-auto h-full w-full"><div class="flex justify-center items-center flex-col w-full h-full text-white">${isDescription ? `<h1 class="uppercase 2xl:text-[48px] lg:text-[38px] text-[28px] text-center m-4">${escape(title)}</h1> <p class="font-bold text-white md:text-xl text-lg text-center m-4"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>` : `<h1 class="uppercase lg:text-[38px] text-[28px] text-center m-4">${escape(title)}</h1>`} ${isShowTime ? `<div class="font-bold flex"><p class="flex items-center border-x px-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-solid:user-pen",
      class: "mr-2 text-xl w-8"
    },
    {},
    {}
  )} ${escape(author)}</p> <p class="flex items-center border-x px-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "svg-spinners:clock",
      class: "mr-2 text-xl w-8"
    },
    {},
    {}
  )}${escape(formatDate(date))}</p></div>` : ``}</div></div></div> </div>`;
});

export { HeaderPage as H };
//# sourceMappingURL=HeaderPage-625b8d47.js.map
