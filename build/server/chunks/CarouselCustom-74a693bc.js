import { v as validate_store, a as subscribe, f as null_to_empty } from './utils-2dd7664d.js';
import { c as create_ssr_component, i as createEventDispatcher, e as escape, a as add_attribute, b as each } from './ssr-3e906495.js';
import 'siema';
import { r as readable } from './index-3be464aa.js';

const breakpoints = [
  { size: 0, columns: 1 },
  { size: 640, columns: 2 },
  { size: 768, columns: 2 },
  { size: 1024, columns: 3 },
  { size: 1280, columns: 4 },
  { size: 1536, columns: 4 }
];
const getColumns = () => {
  var a = 0;
  for (const breakpoint of breakpoints) {
    if (globalThis.innerWidth > breakpoint.size) {
      a = breakpoint.columns;
    }
  }
  return a;
};
let currentColumnCount = getColumns();
const time = readable(currentColumnCount, function start(set) {
  return function stop() {
  };
});
const css = {
  code: ".carousel.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{position:relative;width:100%;justify-content:center;align-items:center}.slides.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{height:400px !important}button.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{position:absolute;width:40px;height:40px;top:50%;z-index:50;margin-top:-20px;border:none;background-color:transparent}button.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH:focus{outline:none}.left.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{left:2vw}.right.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{right:2vw}ul.s-cEskgNKlG_ZH.s-cEskgNKlG_ZH{list-style-type:none;position:absolute;display:flex;justify-content:center;width:100%;margin-top:-30px;padding:0}ul.s-cEskgNKlG_ZH li.s-cEskgNKlG_ZH{margin:6px;border-radius:100%;background-color:rgba(255, 255, 255, 0.5);height:8px;width:8px}ul.s-cEskgNKlG_ZH li.s-cEskgNKlG_ZH:hover{background-color:rgba(255, 255, 255, 0.85)}ul.s-cEskgNKlG_ZH li.active.s-cEskgNKlG_ZH{background-color:rgba(255, 255, 255, 1)}",
  map: null
};
const CarouselCustom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pips;
  let currentPerPage;
  let totalDots;
  let $$unsubscribe_time;
  validate_store(time, "time");
  $$unsubscribe_time = subscribe(time, (value) => value);
  let { perPage = 3 } = $$props;
  let { loop = true } = $$props;
  let { autoplay = 0 } = $$props;
  let { duration = 200 } = $$props;
  let { easing = "ease-out" } = $$props;
  let { startIndex = 0 } = $$props;
  let { draggable = true } = $$props;
  let { multipleDrag = true } = $$props;
  let { dots = true } = $$props;
  let { controls = true } = $$props;
  let { threshold = 20 } = $$props;
  let { rtl = false } = $$props;
  let { classList = "" } = $$props;
  let { multiple = 0 } = $$props;
  let currentIndex = startIndex;
  let siema;
  let controller;
  let timer;
  createEventDispatcher();
  function isDotActive(currentIndex2, dotIndex) {
    if (currentIndex2 < 0)
      currentIndex2 = pips.length + currentIndex2;
    return currentIndex2 >= dotIndex * currentPerPage && currentIndex2 < dotIndex * currentPerPage + currentPerPage;
  }
  function left() {
    controller.prev();
  }
  function right() {
    controller.next();
  }
  function go(index) {
    controller.goTo(index);
  }
  function pause() {
    clearInterval(timer);
  }
  function resume() {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  }
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage !== void 0)
    $$bindings.perPage(perPage);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.startIndex === void 0 && $$bindings.startIndex && startIndex !== void 0)
    $$bindings.startIndex(startIndex);
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
    $$bindings.draggable(draggable);
  if ($$props.multipleDrag === void 0 && $$bindings.multipleDrag && multipleDrag !== void 0)
    $$bindings.multipleDrag(multipleDrag);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0)
    $$bindings.dots(dots);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0)
    $$bindings.rtl(rtl);
  if ($$props.classList === void 0 && $$bindings.classList && classList !== void 0)
    $$bindings.classList(classList);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.isDotActive === void 0 && $$bindings.isDotActive && isDotActive !== void 0)
    $$bindings.isDotActive(isDotActive);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.resume === void 0 && $$bindings.resume && resume !== void 0)
    $$bindings.resume(resume);
  $$result.css.add(css);
  pips = [];
  currentPerPage = perPage;
  totalDots = [];
  $$unsubscribe_time();
  return `<div class="carousel s-cEskgNKlG_ZH"><div class="${"slides " + escape(classList, true) + " s-cEskgNKlG_ZH"}"${add_attribute("this", siema, 0)}>${slots.default ? slots.default({}) : ``}</div> ${controls ? `<button class="left s-cEskgNKlG_ZH" aria-label="left">${slots["left-control"] ? slots["left-control"]({}) : ``}</button> <button class="right s-cEskgNKlG_ZH" aria-label="right">${slots["right-control"] ? slots["right-control"]({}) : ``}</button>` : ``} ${dots ? `<ul class="s-cEskgNKlG_ZH">${each({ length: totalDots }, (_, i) => {
    return `<li class="${escape(null_to_empty(isDotActive(currentIndex, i) ? "active" : ""), true) + " s-cEskgNKlG_ZH"}"></li>`;
  })}</ul>` : ``} </div>`;
});

export { CarouselCustom as C, time as t };
//# sourceMappingURL=CarouselCustom-74a693bc.js.map
