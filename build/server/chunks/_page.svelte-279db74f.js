import { c as create_ssr_component, v as validate_component, e as escape, a as each, b as add_attribute } from './ssr-8f3207f5.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { l as loadingState } from './loading-3ab47950.js';
import { R as RepositoryFactory } from './RepositoryFactory-27484a07.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { twMerge } from 'tailwind-merge';
import { T as Tabs, a as TabItem } from './CreateSeo-cc8f9de3.js';
import { C as CreateProduct } from './CreateProduct-cf479779.js';
import './utils-2dd7664d.js';
import 'accounting';
import './index-3be464aa.js';
import './Const-3b06302f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './Fileupload-ac4371a6.js';
import './Input-c07b967b.js';
import './Wrapper-ae21bffe.js';
import './dev-1873bb41.js';
import 'moment';
import './Editor-3153c256.js';
import './toastError2-3194e7be.js';

const DefaultMockup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { defaultTop } = $$props;
  let { defaultLeftTop } = $$props;
  let { defaultLeftBot } = $$props;
  let { defaultRight } = $$props;
  if ($$props.defaultTop === void 0 && $$bindings.defaultTop && defaultTop !== void 0)
    $$bindings.defaultTop(defaultTop);
  if ($$props.defaultLeftTop === void 0 && $$bindings.defaultLeftTop && defaultLeftTop !== void 0)
    $$bindings.defaultLeftTop(defaultLeftTop);
  if ($$props.defaultLeftBot === void 0 && $$bindings.defaultLeftBot && defaultLeftBot !== void 0)
    $$bindings.defaultLeftBot(defaultLeftBot);
  if ($$props.defaultRight === void 0 && $$bindings.defaultRight && defaultRight !== void 0)
    $$bindings.defaultRight(defaultRight);
  return `<div${add_attribute("class", defaultTop, 0)}></div> <div${add_attribute("class", defaultLeftTop, 0)}></div> <div${add_attribute("class", defaultLeftBot, 0)}></div> <div${add_attribute("class", defaultRight, 0)}></div> `;
});
const Ios = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { iosTop } = $$props;
  let { iosLeftTop } = $$props;
  let { iosLeftBot } = $$props;
  let { iosRight } = $$props;
  if ($$props.iosTop === void 0 && $$bindings.iosTop && iosTop !== void 0)
    $$bindings.iosTop(iosTop);
  if ($$props.iosLeftTop === void 0 && $$bindings.iosLeftTop && iosLeftTop !== void 0)
    $$bindings.iosLeftTop(iosLeftTop);
  if ($$props.iosLeftBot === void 0 && $$bindings.iosLeftBot && iosLeftBot !== void 0)
    $$bindings.iosLeftBot(iosLeftBot);
  if ($$props.iosRight === void 0 && $$bindings.iosRight && iosRight !== void 0)
    $$bindings.iosRight(iosRight);
  return `<div${add_attribute("class", iosTop, 0)}></div> <div${add_attribute("class", iosLeftTop, 0)}></div> <div${add_attribute("class", iosLeftBot, 0)}></div> <div${add_attribute("class", iosRight, 0)}></div> `;
});
const Android = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { androidTop } = $$props;
  let { androidLeftTop } = $$props;
  let { androidLeftMid } = $$props;
  let { androidLeftBot } = $$props;
  let { androidRight } = $$props;
  if ($$props.androidTop === void 0 && $$bindings.androidTop && androidTop !== void 0)
    $$bindings.androidTop(androidTop);
  if ($$props.androidLeftTop === void 0 && $$bindings.androidLeftTop && androidLeftTop !== void 0)
    $$bindings.androidLeftTop(androidLeftTop);
  if ($$props.androidLeftMid === void 0 && $$bindings.androidLeftMid && androidLeftMid !== void 0)
    $$bindings.androidLeftMid(androidLeftMid);
  if ($$props.androidLeftBot === void 0 && $$bindings.androidLeftBot && androidLeftBot !== void 0)
    $$bindings.androidLeftBot(androidLeftBot);
  if ($$props.androidRight === void 0 && $$bindings.androidRight && androidRight !== void 0)
    $$bindings.androidRight(androidRight);
  return `<div${add_attribute("class", androidTop, 0)}></div> <div${add_attribute("class", androidLeftTop, 0)}></div> <div${add_attribute("class", androidLeftMid, 0)}></div> <div${add_attribute("class", androidLeftBot, 0)}></div> <div${add_attribute("class", androidRight, 0)}></div> `;
});
const Tablet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tabletLeftTop } = $$props;
  let { tabletLeftMid } = $$props;
  let { tabletLeftBot } = $$props;
  let { tabletRight } = $$props;
  if ($$props.tabletLeftTop === void 0 && $$bindings.tabletLeftTop && tabletLeftTop !== void 0)
    $$bindings.tabletLeftTop(tabletLeftTop);
  if ($$props.tabletLeftMid === void 0 && $$bindings.tabletLeftMid && tabletLeftMid !== void 0)
    $$bindings.tabletLeftMid(tabletLeftMid);
  if ($$props.tabletLeftBot === void 0 && $$bindings.tabletLeftBot && tabletLeftBot !== void 0)
    $$bindings.tabletLeftBot(tabletLeftBot);
  if ($$props.tabletRight === void 0 && $$bindings.tabletRight && tabletRight !== void 0)
    $$bindings.tabletRight(tabletRight);
  return `<div${add_attribute("class", tabletLeftTop, 0)}></div> <div${add_attribute("class", tabletLeftMid, 0)}></div> <div${add_attribute("class", tabletLeftBot, 0)}></div> <div${add_attribute("class", tabletRight, 0)}></div> `;
});
const Smartwatch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { smartRightTop } = $$props;
  let { smartRightBot } = $$props;
  if ($$props.smartRightTop === void 0 && $$bindings.smartRightTop && smartRightTop !== void 0)
    $$bindings.smartRightTop(smartRightTop);
  if ($$props.smartRightBot === void 0 && $$bindings.smartRightBot && smartRightBot !== void 0)
    $$bindings.smartRightBot(smartRightBot);
  return `<div${add_attribute("class", smartRightTop, 0)}></div> <div${add_attribute("class", smartRightBot, 0)}></div> `;
});
const DeviceMockup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { device = "default" } = $$props;
  let { androidDiv = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl" } = $$props;
  let { androidSlot = "rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800" } = $$props;
  let { androidTop = "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" } = $$props;
  let { androidLeftTop = "h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" } = $$props;
  let { androidLeftMid = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { androidLeftBot = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { androidRight = "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  let { defaultDiv = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]" } = $$props;
  let { defaultSlot = "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800" } = $$props;
  let { defaultTop = "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" } = $$props;
  let { defaultLeftTop = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { defaultLeftBot = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { defaultRight = "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  let { desktopInner = "rounded-xl overflow-hidden h-[140px] md:h-[262px]" } = $$props;
  let { desktopBot = "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]" } = $$props;
  let { desktopBotUnder = "relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]" } = $$props;
  let { destopDiv = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]" } = $$props;
  let { desktopSlot = "rounded-xl overflow-hidden h-[140px] md:h-[262px]" } = $$props;
  let { iosDiv = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl" } = $$props;
  let { iosSlot = "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800" } = $$props;
  let { iosTop = "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" } = $$props;
  let { iosLeftTop = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { iosLeftBot = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { iosRight = "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  let { laptopDiv = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]" } = $$props;
  let { laptopSlot = "rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800" } = $$props;
  let { laptopInner = "rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800" } = $$props;
  let { laptopBot = "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]" } = $$props;
  let { laptopBotCen = "absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800" } = $$props;
  let { smartwatchDiv = "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]" } = $$props;
  let { smartwatchSlot = "rounded-[2rem] overflow-hidden h-[193px] w-[188px]" } = $$props;
  let { smartRightTop = "h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg" } = $$props;
  let { smartRightBot = "h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg" } = $$props;
  let { smartTop = "relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]" } = $$props;
  let { smartBot = "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]" } = $$props;
  let { smartwatchInner = "rounded-[2rem] overflow-hidden h-[193px] w-[188px]" } = $$props;
  let { tabletDiv = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]" } = $$props;
  let { tabletSlot = "rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800" } = $$props;
  let { tabletLeftTop = "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" } = $$props;
  let { tabletLeftMid = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { tabletLeftBot = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { tabletRight = "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  let androidDivCls = twMerge(androidDiv, $$props.classAndroidDiv);
  let androidSlotCls = twMerge(androidSlot, $$props.classAndroidSlot);
  let androidTopCls = twMerge(androidTop, $$props.classAndroidTop);
  let androidLeftTopCls = twMerge(androidLeftTop, $$props.classAndroidLeftTop);
  let androidLeftMidCls = twMerge(androidLeftMid, $$props.classAndroidLeftMid);
  let androidLeftBotCls = twMerge(androidLeftBot, $$props.classAndroidLeftBot);
  let androidRightCls = twMerge(androidRight, $$props.classAndroidRight);
  let defaultDivCls = twMerge(defaultDiv, $$props.classDefaultDiv);
  let defaultSlotCls = twMerge(defaultSlot, $$props.classDefaultSlot);
  let defaultTopCls = twMerge(defaultTop, $$props.classDefaultTop);
  let defaultLeftTopCls = twMerge(defaultLeftTop, $$props.classDefaultLeftTop);
  let defaultLeftBotCls = twMerge(defaultLeftBot, $$props.classDefaultLeftBot);
  let defaultRightCls = twMerge(defaultRight, $$props.classDefaultRight);
  let desktopInnerCls = twMerge(desktopInner, $$props.classDesktopInner);
  let desktopBotCls = twMerge(desktopBot, $$props.classDesktopBot);
  let desktopBotUnderCls = twMerge(desktopBotUnder, $$props.classDesktopBotUnder);
  let destopDivCls = twMerge(destopDiv, $$props.classDestopDiv);
  let desktopSlotCls = twMerge(desktopSlot, $$props.classDesktopSlot);
  let iosDivCls = twMerge(iosDiv, $$props.classIosDiv);
  let iosSlotCls = twMerge(iosSlot, $$props.classIosSlot);
  let iosTopCls = twMerge(iosTop, $$props.classIosTop);
  let iosLeftTopCls = twMerge(iosLeftTop, $$props.classIosLeftTop);
  let iosLeftBotCls = twMerge(iosLeftBot, $$props.classIosLeftBot);
  let iosRightCls = twMerge(iosRight, $$props.classIosRight);
  let laptopDivCls = twMerge(laptopDiv, $$props.classLaptopDiv);
  let laptopSlotCls = twMerge(laptopSlot, $$props.classLaptopSlot);
  let laptopInnerCls = twMerge(laptopInner, $$props.classLaptopInner);
  let laptopBotCls = twMerge(laptopBot, $$props.classLaptopBot);
  let laptopBotCenCls = twMerge(laptopBotCen, $$props.classLaptopBotCen);
  let smartwatchDivCls = twMerge(smartwatchDiv, $$props.classSmartwatchDiv);
  let smartwatchSlotCls = twMerge(smartwatchSlot, $$props.classSmartwatchSlot);
  let smartRightTopCls = twMerge(smartRightTop, $$props.classSmartRightTop);
  let smartRightBotCls = twMerge(smartRightBot, $$props.classSmartRightBot);
  let smartTopCls = twMerge(smartTop, $$props.classSmartTop);
  let smartBotCls = twMerge(smartBot, $$props.classSmartBot);
  let smartwatchInnerCls = twMerge(smartwatchInner, $$props.classSmartwatchInner);
  let tabletDivCls = twMerge(tabletDiv, $$props.classTabletDiv);
  let tabletSlotCls = twMerge(tabletSlot, $$props.classTabletSlot);
  let tabletLeftTopCls = twMerge(tabletLeftTop, $$props.classTabletLeftTop);
  let tabletLeftMidCls = twMerge(tabletLeftMid, $$props.classTabletLeftMid);
  let tabletLeftBotCls = twMerge(tabletLeftBot, $$props.classTabletLeftBot);
  let tabletRightCls = twMerge(tabletRight, $$props.classTabletRight);
  const divClasses = {
    default: defaultDivCls,
    ios: iosDivCls,
    android: androidDivCls,
    tablet: tabletDivCls,
    laptop: laptopDivCls,
    desktop: destopDivCls,
    smartwatch: smartwatchDivCls
  };
  const slotClasses = {
    default: defaultSlotCls,
    ios: iosSlotCls,
    android: androidSlotCls,
    tablet: tabletSlotCls,
    laptop: laptopSlotCls,
    desktop: desktopSlotCls,
    smartwatch: smartwatchSlotCls
  };
  if ($$props.device === void 0 && $$bindings.device && device !== void 0)
    $$bindings.device(device);
  if ($$props.androidDiv === void 0 && $$bindings.androidDiv && androidDiv !== void 0)
    $$bindings.androidDiv(androidDiv);
  if ($$props.androidSlot === void 0 && $$bindings.androidSlot && androidSlot !== void 0)
    $$bindings.androidSlot(androidSlot);
  if ($$props.androidTop === void 0 && $$bindings.androidTop && androidTop !== void 0)
    $$bindings.androidTop(androidTop);
  if ($$props.androidLeftTop === void 0 && $$bindings.androidLeftTop && androidLeftTop !== void 0)
    $$bindings.androidLeftTop(androidLeftTop);
  if ($$props.androidLeftMid === void 0 && $$bindings.androidLeftMid && androidLeftMid !== void 0)
    $$bindings.androidLeftMid(androidLeftMid);
  if ($$props.androidLeftBot === void 0 && $$bindings.androidLeftBot && androidLeftBot !== void 0)
    $$bindings.androidLeftBot(androidLeftBot);
  if ($$props.androidRight === void 0 && $$bindings.androidRight && androidRight !== void 0)
    $$bindings.androidRight(androidRight);
  if ($$props.defaultDiv === void 0 && $$bindings.defaultDiv && defaultDiv !== void 0)
    $$bindings.defaultDiv(defaultDiv);
  if ($$props.defaultSlot === void 0 && $$bindings.defaultSlot && defaultSlot !== void 0)
    $$bindings.defaultSlot(defaultSlot);
  if ($$props.defaultTop === void 0 && $$bindings.defaultTop && defaultTop !== void 0)
    $$bindings.defaultTop(defaultTop);
  if ($$props.defaultLeftTop === void 0 && $$bindings.defaultLeftTop && defaultLeftTop !== void 0)
    $$bindings.defaultLeftTop(defaultLeftTop);
  if ($$props.defaultLeftBot === void 0 && $$bindings.defaultLeftBot && defaultLeftBot !== void 0)
    $$bindings.defaultLeftBot(defaultLeftBot);
  if ($$props.defaultRight === void 0 && $$bindings.defaultRight && defaultRight !== void 0)
    $$bindings.defaultRight(defaultRight);
  if ($$props.desktopInner === void 0 && $$bindings.desktopInner && desktopInner !== void 0)
    $$bindings.desktopInner(desktopInner);
  if ($$props.desktopBot === void 0 && $$bindings.desktopBot && desktopBot !== void 0)
    $$bindings.desktopBot(desktopBot);
  if ($$props.desktopBotUnder === void 0 && $$bindings.desktopBotUnder && desktopBotUnder !== void 0)
    $$bindings.desktopBotUnder(desktopBotUnder);
  if ($$props.destopDiv === void 0 && $$bindings.destopDiv && destopDiv !== void 0)
    $$bindings.destopDiv(destopDiv);
  if ($$props.desktopSlot === void 0 && $$bindings.desktopSlot && desktopSlot !== void 0)
    $$bindings.desktopSlot(desktopSlot);
  if ($$props.iosDiv === void 0 && $$bindings.iosDiv && iosDiv !== void 0)
    $$bindings.iosDiv(iosDiv);
  if ($$props.iosSlot === void 0 && $$bindings.iosSlot && iosSlot !== void 0)
    $$bindings.iosSlot(iosSlot);
  if ($$props.iosTop === void 0 && $$bindings.iosTop && iosTop !== void 0)
    $$bindings.iosTop(iosTop);
  if ($$props.iosLeftTop === void 0 && $$bindings.iosLeftTop && iosLeftTop !== void 0)
    $$bindings.iosLeftTop(iosLeftTop);
  if ($$props.iosLeftBot === void 0 && $$bindings.iosLeftBot && iosLeftBot !== void 0)
    $$bindings.iosLeftBot(iosLeftBot);
  if ($$props.iosRight === void 0 && $$bindings.iosRight && iosRight !== void 0)
    $$bindings.iosRight(iosRight);
  if ($$props.laptopDiv === void 0 && $$bindings.laptopDiv && laptopDiv !== void 0)
    $$bindings.laptopDiv(laptopDiv);
  if ($$props.laptopSlot === void 0 && $$bindings.laptopSlot && laptopSlot !== void 0)
    $$bindings.laptopSlot(laptopSlot);
  if ($$props.laptopInner === void 0 && $$bindings.laptopInner && laptopInner !== void 0)
    $$bindings.laptopInner(laptopInner);
  if ($$props.laptopBot === void 0 && $$bindings.laptopBot && laptopBot !== void 0)
    $$bindings.laptopBot(laptopBot);
  if ($$props.laptopBotCen === void 0 && $$bindings.laptopBotCen && laptopBotCen !== void 0)
    $$bindings.laptopBotCen(laptopBotCen);
  if ($$props.smartwatchDiv === void 0 && $$bindings.smartwatchDiv && smartwatchDiv !== void 0)
    $$bindings.smartwatchDiv(smartwatchDiv);
  if ($$props.smartwatchSlot === void 0 && $$bindings.smartwatchSlot && smartwatchSlot !== void 0)
    $$bindings.smartwatchSlot(smartwatchSlot);
  if ($$props.smartRightTop === void 0 && $$bindings.smartRightTop && smartRightTop !== void 0)
    $$bindings.smartRightTop(smartRightTop);
  if ($$props.smartRightBot === void 0 && $$bindings.smartRightBot && smartRightBot !== void 0)
    $$bindings.smartRightBot(smartRightBot);
  if ($$props.smartTop === void 0 && $$bindings.smartTop && smartTop !== void 0)
    $$bindings.smartTop(smartTop);
  if ($$props.smartBot === void 0 && $$bindings.smartBot && smartBot !== void 0)
    $$bindings.smartBot(smartBot);
  if ($$props.smartwatchInner === void 0 && $$bindings.smartwatchInner && smartwatchInner !== void 0)
    $$bindings.smartwatchInner(smartwatchInner);
  if ($$props.tabletDiv === void 0 && $$bindings.tabletDiv && tabletDiv !== void 0)
    $$bindings.tabletDiv(tabletDiv);
  if ($$props.tabletSlot === void 0 && $$bindings.tabletSlot && tabletSlot !== void 0)
    $$bindings.tabletSlot(tabletSlot);
  if ($$props.tabletLeftTop === void 0 && $$bindings.tabletLeftTop && tabletLeftTop !== void 0)
    $$bindings.tabletLeftTop(tabletLeftTop);
  if ($$props.tabletLeftMid === void 0 && $$bindings.tabletLeftMid && tabletLeftMid !== void 0)
    $$bindings.tabletLeftMid(tabletLeftMid);
  if ($$props.tabletLeftBot === void 0 && $$bindings.tabletLeftBot && tabletLeftBot !== void 0)
    $$bindings.tabletLeftBot(tabletLeftBot);
  if ($$props.tabletRight === void 0 && $$bindings.tabletRight && tabletRight !== void 0)
    $$bindings.tabletRight(tabletRight);
  return `<div${add_attribute("class", twMerge(divClasses[device], $$props.class), 0)}>${device === "default" ? `${validate_component(DefaultMockup, "DefaultMockup").$$render(
    $$result,
    {
      defaultTop: defaultTopCls,
      defaultLeftTop: defaultLeftTopCls,
      defaultLeftBot: defaultLeftBotCls,
      defaultRight: defaultRightCls
    },
    {},
    {}
  )}` : `${device === "ios" ? `${validate_component(Ios, "Ios").$$render(
    $$result,
    {
      iosTop: iosTopCls,
      iosLeftTop: iosLeftTopCls,
      iosLeftBot: iosLeftBotCls,
      iosRight: iosRightCls
    },
    {},
    {}
  )}` : `${device === "android" ? `${validate_component(Android, "Android").$$render(
    $$result,
    {
      androidTop: androidTopCls,
      androidLeftTop: androidLeftTopCls,
      androidLeftMid: androidLeftMidCls,
      androidLeftBot: androidLeftBotCls,
      androidRight: androidRightCls
    },
    {},
    {}
  )}` : `${device === "tablet" ? `${validate_component(Tablet, "Tablet").$$render(
    $$result,
    {
      tabletLeftTop: tabletLeftTopCls,
      tabletLeftMid: tabletLeftMidCls,
      tabletLeftBot: tabletLeftBotCls,
      tabletRight: tabletRightCls
    },
    {},
    {}
  )}` : ``}`}`}`} ${device === "laptop" ? `<div${add_attribute("class", laptopInnerCls, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${device === "desktop" ? `<div${add_attribute("class", desktopInnerCls, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${device === "smartwatch" ? `` : `<div${add_attribute("class", slotClasses[device], 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`}</div> ${device === "laptop" ? `<div${add_attribute("class", laptopBotCls, 0)}><div${add_attribute("class", laptopBotCenCls, 0)}></div></div>` : `${device === "desktop" ? `<div${add_attribute("class", desktopBotCls, 0)}></div> <div${add_attribute("class", desktopBotUnderCls, 0)}></div>` : `${device === "smartwatch" ? `<div${add_attribute("class", smartTopCls, 0)}>${validate_component(Smartwatch, "Smartwatch").$$render(
    $$result,
    {
      smartRightTop: smartRightTopCls,
      smartRightBot: smartRightBotCls
    },
    {},
    {}
  )} <div${add_attribute("class", smartwatchInnerCls, 0)}>${slots.default ? slots.default({}) : ``}</div></div> <div${add_attribute("class", smartBotCls, 0)}></div>` : ``}`}`} `;
});
const css = {
  code: "@media screen and (max-width: 810px){}@media screen and (max-width: 500px){}@media screen and (max-width: 400px){}",
  map: null
};
const mode = "modify";
function convertImageJsonToArray(json) {
  if (json) {
    return JSON.parse(json);
  }
  return [];
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const productService = RepositoryFactory.get("productRepository");
  let product;
  let host = "http://103.142.26.42/";
  let products = {
    productName: null,
    description: null,
    price: null,
    originalPrice: null,
    stockQuantity: null,
    origin: null,
    notes: null,
    type: null,
    status: null,
    discount: null,
    slug: null,
    createdBy: 1,
    editedBy: 1,
    categoryId: null,
    images: "",
    expirationDate: null
  };
  let { data } = $$props;
  async function productDetail() {
    loadingState.set(true);
    product = await productService.show(data?.id);
    product = product.data.data;
    products = product;
    loadingState.set(false);
  }
  productDetail();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      style: "underline",
      activeClasses: "p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
      inactiveClasses: "p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      contentClass: "rounded-b-lg"
    },
    {},
    {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: product?.productName }, {}, {
          default: () => {
            return `<div class="grid lg:grid-cols-2 grid-cols-1 gap-5 bg-white dark:bg-gray-800 rounded-b-lg"><div class="grid md:grid-cols-2 grid-cols-1 dark:text-gray-300"><div><p class="border-b p-2 m-4"><b data-svelte-h="svelte-1gpdxlc">Product Name:</b> ${escape(product?.productName)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1470cxy">Type:</b> ${escape(product?.type)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-lnw8mm">Product Location Status:</b> ${escape(product?.status)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-elre01">Product Category:</b> ${escape(product?.category.categoryName)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1fw8tzz">Product Stock:</b> ${escape(product?.stockQuantity)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1t1b3r">The Origin:</b> ${escape(product?.origin)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1xs1b0v">Product Description:</b> ${escape(product?.description)}</p></div> <div><p class="border-b p-2 m-4"><b data-svelte-h="svelte-1254c3w">Original Price:</b> ${escape(formatCurrency(product?.originalPrice))}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1xpctcz">Price Sales:</b> ${escape(formatCurrency(product?.price))}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-54iv2s">Product Discount:</b> ${escape(product?.discount)} %</p> ${product?.type != "pet" ? `<p class="border-b p-2 m-4"><b data-svelte-h="svelte-1mn2ot2">Product Expiration Date:</b> ${escape(formatDate(product?.expirationDate))}</p>` : ``} <p class="border-b p-2 m-4"><b data-svelte-h="svelte-z6v413">Notes:</b> <!-- HTML_TAG_START -->${product?.notes}<!-- HTML_TAG_END --></p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-2ctw74">Unique URL:</b> ${escape(product?.slug)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-tv0vl">Created At:</b> ${escape(formatDate(product?.createdAt))}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-at24m">Updated At:</b> ${escape(formatDate(product?.updatedAt))}</p></div></div> <div class="leading-8 flex flex-col items-center"><b class="block dark:text-gray-300" data-svelte-h="svelte-12qmy4g">Images Product</b> <div class="gap-4 md:columns-3 sm:columns-2 columns-1">${each(convertImageJsonToArray(product?.images), (path, i) => {
              return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="rounded-xl w-full h-auto mb-4 pi"${add_attribute("alt", product?.name, 0)}>`;
            })}</div></div></div> <div class="mt-2 bg-white dark:bg-gray-800 rounded-lg">${validate_component(Tabs, "Tabs").$$render(
              $$result,
              {
                style: "underline",
                activeClasses: "p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
                inactiveClasses: "p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
                contentClass: ""
              },
              {},
              {
                default: () => {
                  return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Seo Information" }, {}, {
                    default: () => {
                      return `${product?.seo ? `<div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"><div class="text-gray-500 dark:text-gray-400"><p class="border-b p-2 m-4"><b data-svelte-h="svelte-fsz06j">Meta Title : </b>${escape(product?.seo?.metaTitle)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1g3d6it">Meta Description</b> <br> ${escape(product?.seo?.metaDescription)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1fnfixp">Canonical Url :</b> ${escape(product?.seo?.canonicalUrl)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1r1un8y">Keywords :</b> ${escape(product?.seo?.keywords)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-1vse3nm">Robot MetaTags :</b> ${escape(product?.seo?.robotMetaTags)}</p> <p class="border-b p-2 m-4"><b data-svelte-h="svelte-62ixyn">Sitemap Frequency : </b>${escape(product?.seo?.sitemapFrequency)}</p></div> <div>${validate_component(DeviceMockup, "DeviceMockup").$$render($$result, { device: "ios" }, {}, {
                        default: () => {
                          return `<div class="flex flex-col items-center justify-center w-full h-full p-4 text-gray-200 bg-no-repeat bg-fixed bg-cover bg-center" style="background: url(https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1-768x512.jpg);"><div class="w-full flex items-center mb-2"><img src="https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg" alt="" class="mr-2 w-10 h-10 rounded-full object-cover"> <p class="rounded-lg p-2 bg-slate-600 text-sm" data-svelte-h="svelte-1a7xocu">Hey!</p></div> <div class="w-full flex items-center mb-2"><img src="https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg" alt="" class="mr-2 w-10 h-10 rounded-full object-cover"> <p class="rounded-lg p-2 bg-slate-600 text-sm flex-1">This is ${escape(product?.productName)}</p></div> <div class="w-full flex mb-2"><img src="https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg" alt="" class="mr-2 w-10 h-10 rounded-full object-cover"> <div class="w-full rounded-lg bg-slate-600 flex-1"><p class="text-sm text-center p-1">${escape(product?.seo?.canonicalUrl)}</p> <img${add_attribute("src", host + product?.seo?.image, 0)}${add_attribute("alt", product?.seo?.metaTitle, 0)}> <p class="text-sm p-2">${escape(product?.seo?.metaTitle)}</p></div></div> <div class="w-full flex items-center justify-end mb-2"><p class="rounded-lg p-2 bg-slate-600 text-sm flex items-center">Oh! It very nice ${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent-emoji-flat:red-heart" }, {}, {})} ${validate_component(Icon, "Icon").$$render($$result, { icon: "fluent-emoji-flat:red-heart" }, {}, {})}</p> <img src="https://kenh14cdn.com/2020/2/23/005ghwu5ly1g5zg5rv1udj33aj4xme84-15824491538811346801649.jpg" alt="" class="ml-2 w-10 h-10 rounded-full object-cover"></div> <div class="w-full flex items-center justify-end mb-2"><p class="rounded-lg p-2 bg-slate-600 text-sm flex items-center">Thank you ${validate_component(Icon, "Icon").$$render(
                            $$result,
                            {
                              icon: "fluent-emoji-flat:heart-with-ribbon"
                            },
                            {},
                            {}
                          )}</p> <img src="https://kenh14cdn.com/2020/2/23/005ghwu5ly1g5zg5rv1udj33aj4xme84-15824491538811346801649.jpg" alt="" class="ml-2 w-10 h-10 rounded-full object-cover"></div></div>`;
                        }
                      })}</div></div>` : `<div class="h-[300px] flex justify-center items-center">${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          icon: "mdi:null-off",
                          color: "gray",
                          width: "50",
                          height: "50"
                        },
                        {},
                        {}
                      )}No Data</div>`}`;
                    }
                  })} ${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Product Post Detail" }, {}, {
                    default: () => {
                      return `${product?.post ? `<div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"><div class="text-gray-500 dark:text-gray-300"><b class="block my-[10px]" data-svelte-h="svelte-n16zq5">Posts Information</b><br> <p class="border-b p-2 m-4">Author : ${escape(product?.post?.author)}</p> <p class="border-b p-2 m-4">Category : ${escape(product?.post?.category)}</p> <p class="border-b p-2 m-4">published At : ${escape(formatDate(product?.post?.published_at))}</p></div> <div><p class="py-[10px]" data-svelte-h="svelte-3xqno5">Images Posts</p> <div class="grid grid-cols-3 gap-1">${each(convertImageJsonToArray(product?.post?.images), (path, i) => {
                        return `<img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="" alt="">`;
                      })}</div></div></div>  <div class="py-[20px] justify-center"><h3 data-svelte-h="svelte-1x74cpg">Content Posts</h3> <br> <div class="dark:text-gray-100"><!-- HTML_TAG_START -->${product?.post?.content}<!-- HTML_TAG_END --></div></div>` : `<div class="h-[300px] flex justify-center items-center">${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          icon: "mdi:null-off",
                          color: "gray",
                          width: "50",
                          height: "50"
                        },
                        {},
                        {}
                      )}No Data</div>`}`;
                    }
                  })}`;
                }
              }
            )}</div>`;
          }
        })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Edit " + product?.productName }, {}, {
          default: () => {
            return `${validate_component(CreateProduct, "CreateProduct").$$render($$result, { mode, products, title: "Edit Products" }, {}, {})}`;
          }
        })}`;
      }
    }
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-279db74f.js.map
