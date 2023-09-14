import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from './ssr-3e906495.js';
import { v as validate_store, a as subscribe, d as compute_slots, f as null_to_empty } from './utils-2dd7664d.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-4cae1de8.js';
import { twMerge } from 'tailwind-merge';
import { t as t2 } from './index2-5c5bda06.js';
import { C as CarouselCustom, t as time } from './CarouselCustom-74a693bc.js';
import 'siema';
import './index-3be464aa.js';

const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { altTag = "" } = $$props;
  let { attr = "" } = $$props;
  let { slideClass = "" } = $$props;
  let { imgClass = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.altTag === void 0 && $$bindings.altTag && altTag !== void 0)
    $$bindings.altTag(altTag);
  if ($$props.attr === void 0 && $$bindings.attr && attr !== void 0)
    $$bindings.attr(attr);
  if ($$props.slideClass === void 0 && $$bindings.slideClass && slideClass !== void 0)
    $$bindings.slideClass(slideClass);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  return `<div${add_attribute("class", slideClass, 0)}><img${add_attribute("src", image, 0)}${add_attribute("alt", altTag, 0)}${add_attribute("title", attr, 0)}${add_attribute("class", imgClass, 0)}></div> `;
});
const css$6 = {
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
  let { thumbBtnClass = "" } = $$props;
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
  if ($$props.thumbBtnClass === void 0 && $$bindings.thumbBtnClass && thumbBtnClass !== void 0)
    $$bindings.thumbBtnClass(thumbBtnClass);
  $$result.css.add(css$6);
  return ` <button aria-label="Click to view image" class="${escape(null_to_empty(thumbBtnClass), true) + " s-XxAh2yQadYx1"}"><img class="${[
    escape(null_to_empty(thumbClass), true) + " s-XxAh2yQadYx1",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("id", id.toString(), 0)}${add_attribute("src", thumbImg, 0)}${add_attribute("alt", altTag, 0)} title="${"Image from " + escape(titleLink, true)}" width="${escape(thumbWidth, true) + "%"}"></button>  `;
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
const css$5 = {
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
  $$result.css.add(css$5);
  return `<button type="button" class="${[
    escape(null_to_empty(indicatorClass), true) + " s-waH1VCzH8MZR",
    selected ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-label", name, 0)}></button>  `;
});
const CarouselTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = "default-transition-carousel" } = $$props;
  let { showIndicators = true } = $$props;
  let { showCaptions = true } = $$props;
  let { showThumbs = true } = $$props;
  let { images } = $$props;
  let { slideControls = true } = $$props;
  let { transitionType = "fade" } = $$props;
  let { transitionParams = {} } = $$props;
  let { loop = false } = $$props;
  let { duration = 2e3 } = $$props;
  let { divClass = "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" } = $$props;
  let divCls = twMerge(divClass, $$props.classDiv);
  let { indicatorDivClass = "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2" } = $$props;
  let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
  let { captionClass = "h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center" } = $$props;
  let captionCls = twMerge(captionClass, $$props.classCaption);
  let { indicatorClass = "w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60" } = $$props;
  let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
  let { slideClass = "" } = $$props;
  let slideCls = twMerge(slideClass, $$props.classSlide);
  let { transitionDivClass = "h-full w-full" } = $$props;
  let transitionDivCls = twMerge(transitionDivClass, $$props.classTransitionDiv);
  let { imgFit = "cover" } = $$props;
  let { imgClass = `object-${imgFit} ${imgFit === "cover" && "w-full"} h-full` } = $$props;
  let imgCls = twMerge(imgClass, $$props.classImg);
  let { thumbClass = "opacity-40" } = $$props;
  let thumbCls = twMerge(thumbClass, $$props.classThumb);
  let { thumbDivClass = "flex flex-row justify-center bg-gray-100 w-full" } = $$props;
  let thumbDivCls = twMerge(thumbDivClass, $$props.classThumbDiv);
  let { thumbBtnClass = "" } = $$props;
  let thumbBtnCls = twMerge(thumbBtnClass, $$props.classBtnThumb);
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
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
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
  if ($$props.transitionDivClass === void 0 && $$bindings.transitionDivClass && transitionDivClass !== void 0)
    $$bindings.transitionDivClass(transitionDivClass);
  if ($$props.imgFit === void 0 && $$bindings.imgFit && imgFit !== void 0)
    $$bindings.imgFit(imgFit);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.thumbClass === void 0 && $$bindings.thumbClass && thumbClass !== void 0)
    $$bindings.thumbClass(thumbClass);
  if ($$props.thumbDivClass === void 0 && $$bindings.thumbDivClass && thumbDivClass !== void 0)
    $$bindings.thumbDivClass(thumbDivClass);
  if ($$props.thumbBtnClass === void 0 && $$bindings.thumbBtnClass && thumbBtnClass !== void 0)
    $$bindings.thumbBtnClass(thumbBtnClass);
  return `<div${add_attribute("id", id, 0)} class="relative"><div${add_attribute("class", divCls, 0)}>${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${imageShowingIndex === id2 ? `<div${add_attribute("class", transitionDivCls, 0)}>${validate_component(Slide, "Slide").$$render(
      $$result,
      {
        image: imgurl,
        altTag: name,
        attr: attribution,
        slideClass: slideCls,
        imgClass: imgCls
      },
      {},
      {}
    )} </div>` : ``}`;
  })}</div> ${showIndicators ? ` <div${add_attribute("class", indicatorDivCls, 0)}>${each(images, ({ id: id2, imgurl, name, attribution }) => {
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
  )}` : ``} ${showThumbs ? `<div${add_attribute("class", thumbDivCls, 0)}>${each(images, ({ id: id2, imgurl, name, attribution }) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        thumbClass: thumbCls,
        thumbBtnClass: thumbBtnCls,
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
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  const images = [
    {
      id: 0,
      name: "Cosmic timetraveler",
      imgurl: "/images/home-panner/1.jpg",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    {
      id: 1,
      name: "Cristina Gottardi",
      imgurl: "/images/home-panner/2.jpg",
      attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com"
    },
    {
      id: 2,
      name: "Johannes Plenio",
      imgurl: "/images/home-panner/3.jpg",
      attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com"
    },
    {
      id: 3,
      name: "Jonatan Pie",
      imgurl: "/images/home-panner/4.jpg",
      attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com"
    },
    {
      id: 4,
      name: "Mark Harpur",
      imgurl: "/images/home-panner/5.jpg",
      attribution: "mark-harpur-K2s_YE031CA-unsplash"
    },
    {
      id: 5,
      name: "Pietro De Grandi",
      imgurl: "/images/home-panner/6.jpg",
      attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash"
    }
  ];
  $$unsubscribe_t();
  return `<div class="w-full min-h-screen home-banner overflow-hidden relative">${validate_component(CarouselTransition, "CarouselTransition").$$render(
    $$result,
    {
      images,
      divClass: "slide w-full overflow-hidden relative",
      loop: true,
      transitionType: "slide",
      transitionParams: { duration: 2e3 },
      showIndicators: false,
      showCaptions: false,
      showThumbs: false,
      slideControls: false,
      duration: 1e4
    },
    {},
    {}
  )} <div class="absolute w-full h-full top-0 flex flex-col items-center justify-center bg-opacity-5 dark:bg-opacity-40 bg-black"><div class="text-center 2xl:w-2/4 xl:w-2/4 md:w-3/4 sm:w-4/5 w-full mx-5"><h1 class="2xl:text-8xl xl:text-8xl md:text-7xl sm:text-5xl text-6xl font-bold text-white drop-shadow-lg shadow-black mb-10 brightness-200 uppercase" data-svelte-h="svelte-1gtf2f0">pet one</h1> <p class="2xl:text-3xl xl:text-3xl md:text-3xl sm:text-3xl text-xl uppercase font-bold text-white drop-shadow-lg shadow-black brightness-200 text-center m-6 tracking-wide">${escape($t("homepage.slogan"))}</p> <p class="2xl:text-lg xl:text-lg md:text-lg sm:text-base text-sm text-white drop-shadow-lg shadow-black brightness-200 text-center mx-4">${escape($t("homepage.description"))}</p></div></div> </div>`;
});
const css$4 = {
  code: ".home-content.s-JhldzLS1wePR{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:50px;position:relative}.content-heading.s-JhldzLS1wePR{font-size:34px;margin-bottom:20px;font-weight:600}.clientsay-box-content.s-JhldzLS1wePR{background-image:url(/images/homepage/lientsaybg.jpg);background-position:center;background-repeat:no-repeat;background-size:cover}.clientsay-client.s-JhldzLS1wePR{text-align:center}.client-avatar.s-JhldzLS1wePR{width:140px;height:140px;object-fit:cover;border-radius:50%;box-shadow:0 4px 10px black}.client-message.s-JhldzLS1wePR{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden;text-shadow:0 0 10px black}",
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
  return ` <div class="home-content clientsay-box-content bg-fixed w-full min-h-screen relative s-JhldzLS1wePR"><div class="absolute w-full h-full bg-white dark:bg-black z-10 bg-opacity-10 dark:bg-opacity-40"></div>  <h1 class="content-heading clientsay-heading text-white z-10 s-JhldzLS1wePR" data-svelte-h="svelte-yo5s5">What our clients say about us</h1> <div class="content-clientsa w-full z-10">${validate_component(CarouselCustom, "CarouselCustom").$$render($$result, { autoplay: 1e4, controls, perPage: 1 }, {}, {
    "right-control": () => {
      return `<span slot="right-control" data-svelte-h="svelte-17ro3dv">Right</span>`;
    },
    "left-control": () => {
      return `<span slot="left-control" data-svelte-h="svelte-134365z">Left</span>`;
    },
    default: () => {
      return `${each(clientsays, (clent, index) => {
        return `<div class="clientsay-client md:w-2/4 sm:w-full mx-auto s-JhldzLS1wePR"><img class="client-avatar mx-auto s-JhldzLS1wePR"${add_attribute("src", clent.avatar, 0)}${add_attribute("alt", clent.name, 0)}> <p class="mb-2 text-2xl font-bold tracking-tight text-white">${escape(clent.name)}</p> <p class="mb-2 text-md font-bold tracking-tight text-white">${escape(clent.address)}</p> <p class="client-message mb-10 font-normal text-gray-100 2xl:text-xl xl:text-xl md:text-xl sm:text-lg text-lg s-JhldzLS1wePR">${escape(clent.message)}</p> </div>`;
      })}`;
    }
  })}</div> </div>`;
});
const css$3 = {
  code: ".benefit-image-1.s-bZk3apZuEcA5{animation:s-bZk3apZuEcA5-moving_1 ease 6s infinite;border-radius:50%}.benefit-image-2.s-bZk3apZuEcA5{animation:s-bZk3apZuEcA5-moving_2 ease 6s infinite;border-radius:50%;position:absolute}@keyframes s-bZk3apZuEcA5-moving_1{0%{transform:rotateY(0deg);z-index:1}50%{transform:rotateY(180deg);z-index:0}100%{transform:rotateY(0deg);z-index:1}}@keyframes s-bZk3apZuEcA5-moving_2{0%{transform:rotateY(0deg);z-index:0}50%{transform:rotateY(180deg);z-index:1}100%{transform:rotateY(0deg);z-index:0}}",
  map: null
};
const Benefit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$result.css.add(css$3);
  $$unsubscribe_t();
  return `<div class="relative w-full min-h-screen"><div class="absolute w-full h-full top-0 z-10 text-center"><div class="flex justify-center items-center flex-col h-full text-black dark:text-white "><h2 class="2xl:text-6xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold shadow-black mb-10 brightness-200 uppercase">${escape($t("homepage.benefit"))}</h2> <div class="2xl:w-2/4 xl:w-2/4 md:w-4/5 sm:w-9/12 w-full 2xl:text-xl xl:text-xl md:text-xl sm:text-lg text-lg"><p class="w-full">${escape($t("homepage.benefitDesc1"))} <br><br> ${escape($t("homepage.benefitDesc2"))}</p></div></div></div> <div class="w-full h-screen flex items-center justify-center relative drop-shadow-xl"><img src="/images/homepage/benefit.jpg" alt="benefit" class="benefit-image-1 animate-pulse h-3/4 s-bZk3apZuEcA5"> <img src="/images/homepage/benefit2.jpg" alt="benefit" class="benefit-image-2 animate-pulse h-3/4 s-bZk3apZuEcA5"> <div class="absolute w-full h-full bg-white dark:bg-black z-10 bg-opacity-30 dark:bg-opacity-40"></div></div> </div>`;
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
  code: '.content-bg.s-1ggxOssRl97_{background-image:url("/images/homepage/ourteam.jpg")}.docter-note.s-1ggxOssRl97_{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}',
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
  return ` <div class="content-bg bg-black-50 bg-image-center bg-no-repeat bg-cover bg-fixed w-full min-h-screen flex flex-col justify-center items-center p-12 relative s-1ggxOssRl97_"><h1 class="text-3xl font-bold mt-20 text-white" data-svelte-h="svelte-1kl2qd1">Our team</h1> <p class="text-white m-3" data-svelte-h="svelte-pn7mkv">We are committed to ensuring that your pet is cared for with the utmost care and safety.</p> <div><div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4">${each(teammates, (docter) => {
    return `<div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><a href="/"><img class="h-64 w-full object-fit-cover rounded-t-lg"${add_attribute("src", docter.image, 0)}${add_attribute("alt", docter.name, 0)}></a> <div class="p-5"><a href="/"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(docter.name)}</h5></a> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${escape(docter.slogan)}</p> <p class="docter-note mb-3 font-normal text-gray-700 dark:text-gray-400 s-1ggxOssRl97_">${escape(docter.note)}</p> <div style="height: 50px;"></div></div> <div class="w-full bottom-5 absolute flex justify-center items-center">${validate_component(Button, "Button").$$render(
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
  code: ".text-note.s-fSMKkQU_OXK-.s-fSMKkQU_OXK-{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.ourservice-service.s-fSMKkQU_OXK-:hover .service-desc.s-fSMKkQU_OXK-{height:70px;transition:height .4s}.ourservice-service.s-fSMKkQU_OXK-:hover img.s-fSMKkQU_OXK-{filter:blur(8px);transition:filter ease .4s}",
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
  return `<div class="flex flex-col justify-center items-center p-10 relative w-full min-h-screen"><h1 class="text-3xl mb-5 font-semibold dark:text-white" data-svelte-h="svelte-113kl75">Our Services</h1> <p class="mb-4 dark:text-white" data-svelte-h="svelte-1701gnf">Pets bring us joy and happiness, and we have a responsibility to take good care of them.</p> <div class="ourservice xl:w-4/5 md:w-11/12 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">${each(services, (service) => {
    return `<div class="ourservice-service h-72 rounded-lg overflow-hidden text-center flex items-center justify-center flex-col relative s-fSMKkQU_OXK-"><img class="w-full h-72 object-cover s-fSMKkQU_OXK-"${add_attribute("src", service.image, 0)} alt=""> <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white"><h3 class="text-2xl drop-shadow-lg shadow-black brightness-200 font-extrabold px-4 py-2 bg-opacity-50 dark:bg-opacity-40 text-white rounded-full">${escape(service.name)}</h3> <p class="service-desc my-2 mx-4 h-0 text-note drop-shadow-lg shadow-black brightness-200 s-fSMKkQU_OXK-">${escape(service.description)}</p> ${validate_component(Button, "Button").$$render(
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
//# sourceMappingURL=_page.svelte-0846d0a9.js.map
