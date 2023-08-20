import { c as create_ssr_component, v as validate_component, b as each, a as add_attribute, e as escape, i as createEventDispatcher } from './ssr-1bb711e0.js';
import { v as validate_store, s as subscribe, a as compute_slots, e as null_to_empty } from './utils-5d10fb30.js';
import { twMerge } from 'tailwind-merge';
import 'siema';
import { r as readable } from './index2-b7662a81.js';
import { I as Icon } from './Icon-ac1f5dfd.js';

const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { altTag = "" } = $$props;
  let { attr = "" } = $$props;
  let { slideClass = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.attr === void 0 && $$bindings.attr && attr !== void 0)
    $$bindings.attr(attr);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  return `<div${add_attribute("class", slideClass, 0)}><img${add_attribute("src", image, 0)}${add_attribute("alt", altTag, 0)}${add_attribute("title", attr, 0)}></div> `;
});
const css$8 = {
  code: ".active.s-XxAh2yQadYx1{opacity:1}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumbImg = "" } = $$props;
  let { altTag = "" } = $$props;
  let { titleLink = "" } = $$props;
  let { id } = $$props;
  let { thumbWidth = 100 } = $$props;
  let { selected = false } = $$props;
  let { thumbClass = "" } = $$props;
  if ($$props.thumbImg === void 0 && $$bindings.thumbImg && thumbImg !== void 0)
    $$bindings.thumbImg(thumbImg);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.titleLink === void 0 && $$bindings.titleLink && titleLink !== void 0)
    $$bindings.titleLink(titleLink);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.thumbWidth === void 0 && $$bindings.thumbWidth && thumbWidth !== void 0)
    $$bindings.thumbWidth(thumbWidth);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  $$result.css.add(css$8);
  return ` <button aria-label="Click to view image"><img class="${[
    escape(null_to_empty(thumbClass), true) + " s-XxAh2yQadYx1",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("id", id.toString(), 0)}${add_attribute("src", thumbImg, 0)}${add_attribute("alt", altTag, 0)} title="${"Image from " + escape(titleLink, true)}" width="${escape(thumbWidth, true) + "%"}"></button> `;
});
const Caption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caption = "" } = $$props;
  let { captionClass = "" } = $$props;
  let { pClass = "text-gray-900 dark:text-white" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.pClass === void 0 && $$bindings.pClass && pClass !== void 0)
    $$bindings.pClass(pClass);
  return `<div${add_attribute("class", captionClass, 0)}><p id="caption"${add_attribute("class", pClass, 0)}>${escape(caption)}</p></div> `;
});
const css$7 = {
  code: ".active.s-waH1VCzH8MZR{opacity:1}",
  map: null
};
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = false } = $$props;
  let { indicatorClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  $$result.css.add(css$7);
  return `<button type="button" class="${[
    escape(null_to_empty(indicatorClass), true) + " s-waH1VCzH8MZR",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-label", name, 0)}></button> `;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let $$slots = compute_slots(slots);
  let { id = "default-carousel" } = $$props;
  let { showIndicators = true } = $$props;
  let { showCaptions = true } = $$props;
  let { showThumbs = true } = $$props;
  let { images } = $$props;
  let { slideControls = true } = $$props;
  let { loop = false } = $$props;
  let { duration = 2e3 } = $$props;
  let { thumbClass = "opacity-40" } = $$props;
  let { divClass = "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" } = $$props;
  let divCls = twMerge(divClass, $$props.classDiv);
  let { indicatorDivClass = "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2" } = $$props;
  let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
  let { captionClass = "h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center" } = $$props;
  let captionCls = twMerge(captionClass, $$props.classCaption);
  let { indicatorClass = "w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" } = $$props;
  let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
  let { slideClass = "" } = $$props;
  let imageShowingIndex = 0;
  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      imageShowingIndex = 0;
    } else {
      imageShowingIndex += 1;
    }
  };
  if (loop) {
    setInterval(
      () => {
        nextSlide();
      },
      duration
    );
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.showIndicators === void 0 && $$bindings.showIndicators && showIndicators !== void 0)
    $$bindings.showIndicators(showIndicators);
  if ($$props.showCaptions === void 0 && $$bindings.showCaptions && showCaptions !== void 0)
    $$bindings.showCaptions(showCaptions);
  if ($$props.showThumbs === void 0 && $$bindings.showThumbs && showThumbs !== void 0)
    $$bindings.showThumbs(showThumbs);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.slideControls === void 0 && $$bindings.slideControls && slideControls !== void 0)
    $$bindings.slideControls(slideControls);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.indicatorDivClass === void 0 && $$bindings.indicatorDivClass && indicatorDivClass !== void 0)
    $$bindings.indicatorDivClass(indicatorDivClass);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  if ($$props.indicatorClass === void 0 && $$bindings.indicatorClass && indicatorClass !== void 0)
    $$bindings.indicatorClass(indicatorClass);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  image = images[imageShowingIndex];
  return `<div${add_attribute("id", id, 0)} class="relative"><div${add_attribute("class", divCls, 0)}>${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: image.imgurl,
      altTag: image.name,
      attr: image.attribution,
      slideClass
    },
    {},
    {}
  )}</div> ${showIndicators ? ` <div${add_attribute("class", indicatorDivCls, 0)}>${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        name,
        selected: imageShowingIndex === id2,
        indicatorClass: indicatorCls
      },
      {},
      {}
    )}`;
  })}</div>` : ``} ${slideControls ? ` <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${$$slots.previous ? `${slots.previous ? slots.previous({}) : ``}` : `<svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="hidden" data-svelte-h="svelte-15eom22">Previous</span></span></button> <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${$$slots.next ? `${slots.next ? slots.next({}) : ``}` : `<svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`} <span class="hidden" data-svelte-h="svelte-1cuepzi">Next</span></span></button>` : ``}</div> ${showCaptions ? `${validate_component(Caption, "Caption").$$render(
    $$result,
    {
      caption: images[imageShowingIndex].name,
      captionClass: captionCls
    },
    {},
    {}
  )}` : ``} ${showThumbs ? `<div class="flex flex-row justify-center bg-gray-100">${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        thumbClass,
        thumbImg: imgurl,
        altTag: name,
        titleLink: attribution,
        id: id2,
        selected: imageShowingIndex === id2
      },
      {},
      {}
    )}`;
  })}</div>` : ``} `;
});
const css$6 = {
  code: ".home-panner.s-kEHxoJNBKMiF.s-kEHxoJNBKMiF{position:relative}.home-panner_caption.s-kEHxoJNBKMiF.s-kEHxoJNBKMiF{position:absolute;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.caption-left.s-kEHxoJNBKMiF.s-kEHxoJNBKMiF{line-height:1.6;padding:8px}.caption-left.s-kEHxoJNBKMiF h1.s-kEHxoJNBKMiF{text-shadow:0 0 20px white;font-size:34px}.caption-left.s-kEHxoJNBKMiF p.s-kEHxoJNBKMiF{text-align:justify;text-shadow:0 0 20px white}",
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      id: 0,
      name: "Cosmic timetraveler 1",
      imgurl: "https://www.clarksonvillagevet.com/wp-content/uploads/sites/277/2022/05/25-1024x373.png",
      description: "image1",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      classname: "ka"
    },
    {
      id: 1,
      name: "Cosmic timetraveler 2",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      imgurl: "https://www.bluestarvet.com/wp-content/uploads/2018/11/pet-exam.jpg",
      description: "image2"
    },
    {
      id: 2,
      name: "Cosmic timetraveler 2",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      imgurl: "https://www.lemonade.com/content-hub/pet/wp-content/uploads/2022/10/cattvfeatured.jpg",
      description: "image2"
    },
    {
      id: 3,
      name: "Cosmic timetraveler 2",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      imgurl: "https://www.beanbags.com.au/wp-content/uploads/2019/01/banner-canine-pet-beds-desktop.jpg",
      description: "image2"
    }
  ];
  let showThumbs = false;
  let showCaptions = false;
  let showIndicators = false;
  let slideControls = false;
  let slideClass = "div-image";
  let divClass = "overflow-hidden relative home-slide";
  $$result.css.add(css$6);
  return `<div class="w-full home-panner s-kEHxoJNBKMiF">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      divClass,
      images,
      showThumbs,
      showCaptions,
      loop: true,
      showIndicators,
      slideClass,
      slideControls,
      duration: "5000"
    },
    {},
    {}
  )} <div class="home-panner_caption dark:bg-black/[.5] s-kEHxoJNBKMiF"><div class="caption-left xl:w-2/4 md:w-4/5 sm:w-full text-white s-kEHxoJNBKMiF"><h1 class="s-kEHxoJNBKMiF" data-svelte-h="svelte-eyczka">We love your pets as if they were ours</h1> <br> <p class="s-kEHxoJNBKMiF">We love and care for your pet as its own. Our staff always put the
        welfare and health of pets and the satisfaction and peace of mind of our
        customers as our top goals.
        <br> <br>
        With experience and passion, we are committed to providing the best care
        for your pet. Let us accompany you in the care and upbringing of your lovely
        companion. Here, we understand the importance of the special relationship
        between you and your pet.</p></div></div> </div>`;
});
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
const css$5 = {
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
  $$result.css.add(css$5);
  pips = [];
  currentPerPage = perPage;
  totalDots = [];
  $$unsubscribe_time();
  return `<div class="carousel s-cEskgNKlG_ZH"><div class="${"slides " + escape(classList, true) + " s-cEskgNKlG_ZH"}"${add_attribute("this", siema, 0)}>${slots.default ? slots.default({}) : ``}</div> ${controls ? `<button class="left s-cEskgNKlG_ZH" aria-label="left">${slots["left-control"] ? slots["left-control"]({}) : ``}</button> <button class="right s-cEskgNKlG_ZH" aria-label="right">${slots["right-control"] ? slots["right-control"]({}) : ``}</button>` : ``} ${dots ? `<ul class="s-cEskgNKlG_ZH">${each({ length: totalDots }, (_, i) => {
    return `<li class="${escape(null_to_empty(isDotActive(currentIndex, i) ? "active" : ""), true) + " s-cEskgNKlG_ZH"}"></li>`;
  })}</ul>` : ``} </div>`;
});
const css$4 = {
  code: ".home-content.s-JhldzLS1wePR{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;position:relative}.content-heading.s-JhldzLS1wePR{font-size:34px;margin-bottom:20px;font-weight:600}.clientsay-box-content.s-JhldzLS1wePR{background-image:url(https://punkee.com.au/wp-content/uploads/2017/02/lifebuzz-ef3ee93d2d233dc5db54b07536026165-original.gif);background-position:center;background-repeat:no-repeat;background-size:cover}.clientsay-client.s-JhldzLS1wePR{text-align:center}.client-avatar.s-JhldzLS1wePR{width:140px;height:140px;object-fit:cover;border-radius:50%;box-shadow:0 4px 10px black}.client-message.s-JhldzLS1wePR{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden;text-shadow:0 0 10px black}",
  map: null
};
const ClientSay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const clientsays = [
    {
      id: 0,
      name: "Rosé",
      address: "BlackPink",
      avatar: "https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/13/tieu-su-ca-si-rose-blackpink-12-167628252304049682913.jpg",
      message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our workWe make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our workWe make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our workWe make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    },
    {
      id: 1,
      name: "Lisa",
      address: "BlackPink",
      avatar: "https://image.baogialai.com.vn/w800/dataimages/202110/original/images3084255_1gt.jpg",
      message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    },
    {
      id: 2,
      name: "Jennie",
      address: "BlackPink",
      avatar: "https://tieusu.com/wp-content/uploads/2023/06/Jennie-blackpink-1.jpg",
      message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    },
    {
      id: 3,
      name: "Jisoo",
      address: "BlackPink",
      avatar: "https://vcdn1-ngoisao.vnecdn.net/2023/08/04/3-1691137255.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=7ovbnryib6yV5ny1j7q-wA",
      message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    }
  ];
  let controls = false;
  $$result.css.add(css$4);
  return ` <div class="home-content clientsay-box-content bg-fixed w-full s-JhldzLS1wePR"> <h1 class="content-heading clientsay-heading text-white s-JhldzLS1wePR" data-svelte-h="svelte-1w26z5f">What our clients say about us</h1> <div class="content-clientsay w-full">${validate_component(CarouselCustom, "CarouselCustom").$$render(
    $$result,
    {
      autoplay: "10000",
      controls,
      perPage: "1"
    },
    {},
    {
      "right-control": () => {
        return `<span slot="right-control" data-svelte-h="svelte-17ro3dv">Right</span>`;
      },
      "left-control": () => {
        return `<span slot="left-control" data-svelte-h="svelte-134365z">Left</span>`;
      },
      default: () => {
        return `${each(clientsays, (clent, index) => {
          return `<div class="clientsay-client md:w-2/4 sm:w-full mx-auto s-JhldzLS1wePR"><img class="client-avatar mx-auto s-JhldzLS1wePR"${add_attribute("src", clent.avatar, 0)}${add_attribute("alt", clent.name, 0)}> <p class="mb-2 text-2xl font-bold tracking-tight text-white">${escape(clent.name)}</p> <p class="mb-2 text-md font-bold tracking-tight text-white">${escape(clent.address)}</p> <p class="client-message mb-10 font-normal text-gray-100 s-JhldzLS1wePR">${escape(clent.message)}</p> </div>`;
        })}`;
      }
    }
  )}</div> </div>`;
});
const css$3 = {
  code: ".home-content.s-bZk3apZuEcA5.s-bZk3apZuEcA5{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;position:relative}.content-heading.s-bZk3apZuEcA5.s-bZk3apZuEcA5{font-size:34px;margin-bottom:20px;font-weight:600}.benefit.s-bZk3apZuEcA5.s-bZk3apZuEcA5{padding:10px}.benefit.s-bZk3apZuEcA5 img.s-bZk3apZuEcA5{border-radius:8px}.benefit-content.s-bZk3apZuEcA5.s-bZk3apZuEcA5{line-height:1.8}.benefit-content.s-bZk3apZuEcA5 h3.s-bZk3apZuEcA5{font-size:24px;margin-bottom:10px}.benefit-content.s-bZk3apZuEcA5 p.s-bZk3apZuEcA5{text-align:justify}.benefit-image.s-bZk3apZuEcA5>div.s-bZk3apZuEcA5{display:flex}.benefit-image-left.s-bZk3apZuEcA5 img.s-bZk3apZuEcA5{height:416px;width:100%;object-fit:cover}.benefit-image-right.s-bZk3apZuEcA5.s-bZk3apZuEcA5{width:100%}.benefit-image-right.s-bZk3apZuEcA5 img.s-bZk3apZuEcA5{width:100%;height:200px;object-fit:cover}",
  map: null
};
const Benefit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return ` <div class="home-content w-full s-bZk3apZuEcA5"><h1 class="content-heading dark:text-white s-bZk3apZuEcA5" data-svelte-h="svelte-hy42zh">What do you get from us?</h1> <div class="content-benefit xl:w-4/5 md:w-11/12 grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3"><div class="benefit benefit-content s-bZk3apZuEcA5"><h3 class="s-bZk3apZuEcA5" data-svelte-h="svelte-1hd2z2p">We love and care for your pet as its own.</h3> <p class="xl:text-base md:text-sm s-bZk3apZuEcA5">We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work.
                <br><br>
                With a team of passionate and experienced staff, we are committed to ensuring that your pet is cared for with the utmost care and safety. We understand the importance of a loving companion, and as such, we always consider each individual case to best meet each furry baby&#39;s needs.
                <br><br>
                On site, you can have complete peace of mind and peace of mind when leaving your pet with us. With a comfortable and comfortable environment, we guarantee your pet will have a pleasant and peaceful experience while staying here.
                <br><br>
                Let us share our love and passion for your pet, and together create memorable and happy memories for your family. We hope that you will feel secure and satisfied when choosing our service. Come join us today and share the love with your pet!</p></div> <div class="benefit benefit-image s-bZk3apZuEcA5"><div class="grid grid-rows-2 grid-cols-2 gap-4 s-bZk3apZuEcA5"><div class="benefit-image-left mx-4 s-bZk3apZuEcA5"><div><img class=" s-bZk3apZuEcA5" src="https://img.freepik.com/free-photo/veterinarian-check-ing-puppy-s-health_23-2148728395.jpg" alt="" loading="lazy"></div></div> <div class="benefit-image-right grid grid-rows-2 grid-cols-2 gap-4 s-bZk3apZuEcA5"><div class=""><img src="https://img.freepik.com/free-photo/close-up-doctor-checking-cat_23-2149304262.jpg" alt="" loading="lazy" class="s-bZk3apZuEcA5"></div> <div><img class=" s-bZk3apZuEcA5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Rkcmymt9-a-tYG5M9gFE8l4Qofv2WvV2ew&usqp=CAU" alt="" loading="lazy"></div> <div class=""><img src="https://images.squarespace-cdn.com/content/v1/553edb97e4b0edb77339769b/1494344184158-4PJNQ49LHKB35NI2BI1Q/image-asset.jpeg" alt="" loading="lazy" class="s-bZk3apZuEcA5"></div> <div><img class=" s-bZk3apZuEcA5" src="https://img.freepik.com/premium-photo/vet-doctor-examining-dog-cat-animal-clinic_488220-17516.jpg" alt="" loading="lazy"></div></div></div></div></div> </div>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "/" } = $$props;
  let { classList = "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" } = $$props;
  let { content = "Click" } = $$props;
  let { space = "ml-2" } = $$props;
  let { icon = "" } = $$props;
  let { styleList = "" } = $$props;
  let { classOrther = "" } = $$props;
  let btnClass = classList + " " + classOrther;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.classList === void 0 && $$bindings.classList && classList !== void 0)
    $$bindings.classList(classList);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.styleList === void 0 && $$bindings.styleList && styleList !== void 0)
    $$bindings.styleList(styleList);
  if ($$props.classOrther === void 0 && $$bindings.classOrther && classOrther !== void 0)
    $$bindings.classOrther(classOrther);
  return `<a${add_attribute("href", url, 0)}${add_attribute("class", btnClass, 0)}${add_attribute("style", styleList, 0)}>${escape(content)}<span${add_attribute("class", space, 0)}></span>${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}</a>`;
});
const css$2 = {
  code: ".home-content.s-1ggxOssRl97_{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;position:relative}.content-heading.s-1ggxOssRl97_{font-size:34px;margin-bottom:20px;font-weight:600}.content-subheading.s-1ggxOssRl97_{color:#fff;margin:10px}.content-bg.s-1ggxOssRl97_{background-color:rgba(0, 0, 0, 0.6);background-image:url(https://www.purina.co.uk/sites/default/files/2020-12/Introducing%20Your%20New%20Cat%20to%20Your%20Other%20PetsHERO.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed}.docter-item.s-1ggxOssRl97_{position:relative}.docter-image.s-1ggxOssRl97_{height:250px;width:100%;object-fit:cover}.docter-btn.s-1ggxOssRl97_{position:absolute;bottom:0;width:100%;bottom:20px;display:flex;align-items:center;justify-content:center}.docter-note.s-1ggxOssRl97_{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}",
  map: null
};
const OurTeam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const teammates = [
    {
      id: 1,
      name: "John Doe",
      slogan: "Your Pet Care Expert",
      image: "https://daihocthuyhanoi.edu.vn/assets/uploads/news/images/B%C3%A1c-s%C4%A9-th%C3%BA-y-tr%E1%BA%BB-tu%E1%BB%95i-%C4%91ang-nu%C3%B4i-ch%C3%B3-maltese-t%E1%BA%A1i-v%C4%83n-ph%C3%B2ng-b%C3%A1c-s%C4%A9.jpg",
      note: "e and care is the motto we always adhere to in every aspect of our work."
    },
    {
      id: 2,
      name: "Jane Smith",
      slogan: "Passionate about Animal Welfare",
      image: "https://cce.com.vn/wp-content/uploads/2021/12/bacsi2-e1638341531111-1280x720.png",
      note: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work. We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    },
    {
      id: 3,
      name: "Michael Johnson",
      slogan: "Dedicated to Happy Pets",
      image: "https://jobsgo.vn/blog/wp-content/uploads/2020/02/tieu-chuan-tot-nghiep-cao-dang-thu-y.jpg",
      note: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    }
  ];
  $$result.css.add(css$2);
  return ` <div class="home-content content-bg w-full s-1ggxOssRl97_"><h1 class="content-heading text-white s-1ggxOssRl97_" data-svelte-h="svelte-gxbguf">Our team</h1> <p class="content-subheading s-1ggxOssRl97_" data-svelte-h="svelte-du66tn">We are committed to ensuring that your pet is cared for with the utmost care and safety.</p> <div class="ourteam-content"><div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4">${each(teammates, (docter) => {
    return `<div class="docter-item max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 s-1ggxOssRl97_"><a href="/"><img class="docter-image rounded-t-lg s-1ggxOssRl97_"${add_attribute("src", docter.image, 0)}${add_attribute("alt", docter.name, 0)}></a> <div class="p-5"><a href="/"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(docter.name)}</h5></a> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${escape(docter.slogan)}</p> <p class="docter-note mb-3 font-normal text-gray-700 dark:text-gray-400 s-1ggxOssRl97_">${escape(docter.note)}</p> <div style="height: 50px;"></div></div> <div class="docter-btn s-1ggxOssRl97_">${validate_component(Button, "Button").$$render(
      $$result,
      {
        content: "Read more",
        icon: "icon-park-solid:right-two"
      },
      {},
      {}
    )}</div> </div>`;
  })}</div></div> </div>`;
});
const css$1 = {
  code: ".home-content.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;position:relative}.content-heading.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{font-size:34px;margin-bottom:20px;font-weight:600}.text-note.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.ourservice-service.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{height:300px;border-radius:10px;overflow:hidden;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}.ourservice-service.s-fSMKkQU_OXK-:hover .service-control.s-fSMKkQU_OXK-{background-color:rgba(0, 0, 0, 0.3);transition:background-color 1s}.ourservice-service.s-fSMKkQU_OXK-:hover img.s-fSMKkQU_OXK-{filter:blur(4px);transition:filter 1s}.service-name.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{font-size:26px}.service-image.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{width:100%;height:300px;object-fit:cover}.service-control.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{position:absolute;color:rgb(255, 255, 255);background-color:rgba(0, 0, 0, 0.2);width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.service-desc.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{margin:10px 20px}",
  map: null
};
const OurService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      id: 0,
      name: "Pet care",
      description: "Pet care includes all the tasks related to ensuring the safety and happiness of pets, such as feeding, brushing, walking, playing, and taking pets to the veterinarian.",
      image: "https://thuythithi.com/wp-content/uploads/2020/05/3-tieu-chi-danh-gia-chat-luong-dich-vu-cham-soc-thu-cung-tai-nha.jpg"
    },
    {
      id: 1,
      name: "Pet boarding",
      description: "Pet boarding is the act of ensuring the safety and happiness of pets when their owners are not home, such as feeding, brushing, walking, and playing with pets.",
      image: "https://vcdn-kinhdoanh.vnecdn.net/2019/02/03/ks-cho-meo500-5587-1549156792.jpg"
    },
    {
      id: 2,
      name: "Grooming",
      description: "Grooming is the act of caring for the appearance of pets, such as bathing, trimming hair, clipping nails, and cleaning ears.",
      image: "https://mypet.vn/wp-content/uploads/2020/09/spa-thu-cung-2.jpg"
    },
    {
      id: 3,
      name: "Pet agency",
      description: "Pet agencies provide pet buying and selling services.",
      image: "https://zoipet.com/wp-content/uploads/2022/09/dich-vu-cham-soc-Copy.jpg"
    },
    {
      id: 4,
      name: "Pet store",
      description: "Pet stores offer products and services for pets, such as food, toys, veterinary medicine, and pet care services.",
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg"
    },
    {
      id: 5,
      name: "Pet training school",
      description: "Pet training schools offer pet training courses that help pets to be more obedient and behave better.",
      image: "https://www.akc.org/wp-content/uploads/2021/01/031619_NOC_32099.jpg"
    },
    {
      id: 6,
      name: "Pet news website",
      description: "Pet news websites provide news and information about pets, such as pet health, nutrition, care, and training.",
      image: "https://www.petswelcome.com/wp/wp-content/uploads/2019/08/31444417_s.jpg"
    },
    {
      id: 7,
      name: "Pet community website",
      description: "Pet community websites are where pet owners can share information, experiences, and love for their pets.",
      image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/1/840744/Loat-Anh-Dang-Yeu-Cu.jpg"
    }
  ];
  $$result.css.add(css$1);
  return `<div class="home-content w-full s-fSMKkQU_OXK-"><h1 class="content-heading dark:text-white s-fSMKkQU_OXK-" data-svelte-h="svelte-1m0k6h6">Our Services</h1> <p class="mb-4 dark:text-white" data-svelte-h="svelte-1701gnf">Pets bring us joy and happiness, and we have a responsibility to take good care of them.</p> <div class="ourservice xl:w-4/5 md:w-11/12 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">${each(services, (service) => {
    return `<div class="ourservice-service s-fSMKkQU_OXK-"><img class="service-image s-fSMKkQU_OXK-"${add_attribute("src", service.image, 0)} alt=""> <div class="service-control s-fSMKkQU_OXK-"><h3 class="service-name s-fSMKkQU_OXK-">${escape(service.name)}</h3> <p class="service-desc text-note s-fSMKkQU_OXK-">${escape(service.description)}</p> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        content: "Read more",
        icon: "icon-park-solid:right-two"
      },
      {},
      {}
    )}</div> </div>`;
  })}</div> </div>`;
});
const css = {
  code: ".home-content.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;position:relative}.content-heading.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{font-size:34px;margin-bottom:20px;font-weight:600;text-transform:capitalize}.best-product.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{width:100%;padding:20px 10px;line-height:1.2}.best-product.s-VlHOb57Hf-g_ .s-VlHOb57Hf-g_{margin:4px}.best-product.s-VlHOb57Hf-g_ img.s-VlHOb57Hf-g_{width:100%;height:250px;object-fit:cover}.best-product.s-VlHOb57Hf-g_ h3.s-VlHOb57Hf-g_{text-align:center;margin:10px;font-size:18px;font-weight:700}.product-message.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{font-size:14px;text-align:justify;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.rank-price.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{display:flex;align-items:center;justify-content:space-around}.rank.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{display:flex;align-items:center;justify-content:center}.rank.s-VlHOb57Hf-g_ .s-VlHOb57Hf-g_{margin:0 10px}.addccart.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{width:100%;display:flex;align-items:center;justify-content:center}.price.s-VlHOb57Hf-g_.s-VlHOb57Hf-g_{font-size:20px}",
  map: null
};
const BestSeller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_time;
  validate_store(time, "time");
  $$unsubscribe_time = subscribe(time, (value) => value);
  const favoriteproducts = [
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 4,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 5,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 5,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 4,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 4,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 4,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 5,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    },
    {
      id: 0,
      name: "Cat Cat Food Kitten & Pregnant Cat 1.2kg",
      price: 123e3,
      star: 4,
      image: "https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg",
      description: "<strong>Thức ăn hạt cho mèo Kit Cat Kitten &amp; Pregnant Cat 1,2kg</strong> là sản phẩm dạng khô có chứa các thành phần đặc biệt, được sản xuất và đóng gói tại Singapore, phù hợp cho đối tượng mèo con, mèo mẹ đang mang thai hoặc cho con bú."
    }
  ];
  $$result.css.add(css);
  $$unsubscribe_time();
  return `<div class="home-content w-full s-VlHOb57Hf-g_"><h1 class="content-heading dark:text-white s-VlHOb57Hf-g_" data-svelte-h="svelte-1w9xj2e">favorite products</h1> <div class="selling-content"><div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4"> ${each(favoriteproducts, (product, index) => {
    return `<div class="best-product bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 s-VlHOb57Hf-g_"><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)} class="s-VlHOb57Hf-g_"> <h3 class="s-VlHOb57Hf-g_">${escape(product.name)}</h3> <p class="product-message s-VlHOb57Hf-g_"><!-- HTML_TAG_START -->${product.description}<!-- HTML_TAG_END --></p> <div class="rank-price s-VlHOb57Hf-g_"><div class="rank s-VlHOb57Hf-g_">${each(Array(product.star), (_, i) => {
      return `<div class="star s-VlHOb57Hf-g_" data-svelte-h="svelte-1ywacup">⭐</div>`;
    })}</div> <div class="price s-VlHOb57Hf-g_"><p class="s-VlHOb57Hf-g_">${escape(product.price)} $</p> </div></div> <div class="addccart s-VlHOb57Hf-g_">${validate_component(Button, "Button").$$render(
      $$result,
      {
        content: "Add to cart",
        classOrther: "",
        url: "/",
        icon: "mdi:cart"
      },
      {},
      {}
    )}</div> </div>`;
  })} </div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})} ${validate_component(Benefit, "Benefit").$$render($$result, {}, {}, {})} ${validate_component(OurTeam, "OurTeam").$$render($$result, {}, {}, {})} ${validate_component(OurService, "OurService").$$render($$result, {}, {}, {})} ${validate_component(ClientSay, "ClientSay").$$render($$result, {}, {}, {})} ${validate_component(BestSeller, "BestSeller").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-030a22af.js.map
