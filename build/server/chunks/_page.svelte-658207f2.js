import { v as validate_store, a as subscribe, h as is_promise, n as noop } from './utils-a4f7b281.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as each, a as add_attribute } from './ssr-e41dcf02.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { a as cart } from './cart-5baadeca.js';
import 'js-cookie';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { t as t2 } from './index2-28f799b2.js';
import { B as Badge } from './Badge-7dcce463.js';
import { B as Button } from './Button-921a77e0.js';
import { C as Checkbox, L as Label } from './Checkbox-daaeebb1.js';
import { I as Input } from './Input-81fd4d1e.js';
import { T as Textarea } from './Textarea-677f2e1b.js';
import 'accounting';
import './cookieUtils-3c057440.js';
import './index-92a6d03f.js';
import 'tailwind-merge';
import './CloseButton-d467ac5d.js';
import './index3-4d2710df.js';
import './index4-e6d78c98.js';
import './Frame-775bdd72.js';
import './dev-1873bb41.js';
import './Wrapper-3c132686.js';

const css = {
  code: '.cart-header.s-WVyz9xJuDSvu{background:url("/images/common/cardheader.png");background-repeat:no-repeat;background-size:cover;background-position:center}input.s-WVyz9xJuDSvu::-webkit-outer-spin-button,input.s-WVyz9xJuDSvu::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number].s-WVyz9xJuDSvu{-moz-appearance:textfield}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalQuantity;
  let totalQuantityWillBuy;
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let currentCart;
  let totalItem = 0, totalSelectItem = 0, totalCart = 0, totalOrder = 0;
  async function getCart() {
    await cart.subscribe((value) => {
      if (value)
        currentCart = JSON.parse(value);
      else
        currentCart = [];
    });
    var isAll = currentCart.find((item) => item.isSelect == false);
    if (!isAll) {
      isChooseAll = true;
    }
    handleCartChange();
    return currentCart;
  }
  let isChooseAll = false;
  function handleCartChange() {
    totalItem = currentCart.reduce(
      function(total, cartItem) {
        return total + cartItem.quantity;
      },
      0
    );
    totalSelectItem = currentCart.reduce(
      function(total, cartItem) {
        return total + (cartItem.isSelect ? cartItem.quantity : 0);
      },
      0
    );
    totalOrder = currentCart.reduce(
      function(total, cartItem) {
        return total + (cartItem.isSelect ? cartItem.quantity * cartItem.price : 0);
      },
      0
    );
    totalCart = currentCart.reduce(
      function(total, cartItem) {
        return total + cartItem.quantity * cartItem.price;
      },
      0
    );
    return;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    totalQuantity = totalItem;
    totalQuantityWillBuy = totalSelectItem;
    totalOrder = totalOrder;
    totalCart = totalCart;
    $$rendered = `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="w-full h-screen flex justify-center items-center"><img class="m-auto" src="/images/common/cat-empty-cart.png" alt=""></div> `;
      }
      return function(res) {
        return ` <div class="cart-header flex items-center justify-center h-[360px] w-full text-white s-WVyz9xJuDSvu"><h1 class="text-center uppercase">${escape($t("cart.cartHeader"))} ${!currentCart.length ? `<br> ${escape($t("cart.cartHeaderEmpty"))} ` : ``}</h1></div> <div class="container m-auto mb-[100px] p-4">${!currentCart.length ? `<div class="w-full"><img class="m-auto" src="/images/common/cat-empty-cart.png" alt=""></div>` : `${validate_component(Badge, "Badge").$$render(
          $$result,
          {
            class: "md:text-lg text-sm my-4 p-2 text-center w-full",
            border: true
          },
          {},
          {
            default: () => {
              return `${escape($t("cart.policy"))}`;
            }
          }
        )} <div class="flex xl:flex-row flex-col gap-3"><div class="flex-1"><div class="w-full flex justify-between md:text-lg text-base bg-slate-100 dark:bg-slate-900 dark:text-white px-2 py-4 rounded-lg mb-4"><p class="ml-2">${escape($t("cart.quantity"))}: <b>${escape(totalQuantity)}</b><br>${escape($t("cart.total"))}: <b>${escape(formatCurrency(totalCart))}</b></p> ${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          { class: "scale-125", checked: isChooseAll },
          {
            checked: ($$value) => {
              isChooseAll = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> ${each(currentCart, (cart2, index) => {
          return `<div class="relative flex justify-between w-full rounded-lg mb-4 last:mb-0 overflow-hidden bg-slate-100 dark:bg-slate-900 dark:text-white"><div class="flex items-center"><img${add_attribute("src", cart2.image, 0)}${add_attribute("alt", cart2.name, 0)} class="sm:w-[200px] sm:h-[150px] w-[150px] h-[100%] object-cover"> <div class="sm:text-base text-sm md:block hidden ml-2"><p class="2xl:w-[350px] xl:w-[250px] w-[200px] text-justify overflow-hidden sm:line-clamp-2 line-clamp-1 m-2">${escape(cart2.name)}</p> <p class="p-2">Nguồn gốc: ${escape(cart2.origin)}</p> </div></div> <div class="flex lg:flex-row flex-col justify-between md:w-auto w-full"><div class="sm:text-base text-sm md:hidden block ml-2"><p class="sm:w-[350px] text-justify overflow-hidden sm:line-clamp-2 line-clamp-1 m-2">${escape(cart2.name)}</p> <p class="p-1">Nguồn gốc: ${escape(cart2.origin)}</p></div> <div class="flex md:flex-row flex-col md:items-center my-auto z-20 mr-5"><div class="md:block sm:flex p-1 sm:gap-4 ml-2"><p>${escape(formatCurrency(cart2.price))}</p> <p><b>${escape(formatCurrency(cart2.price * cart2.quantity))}</b></p></div> <div class="flex items-center"><button class="relative text-2xl p-2 hover:text-primary-700">${validate_component(Icon, "Icon").$$render($$result, { icon: "typcn:plus" }, {}, {})}</button> <div><input type="number" min="1" max="20" id="" class="${"w-[50px] rounded-lg bg-transparent text-center " + escape(cart2.quantity < 1 || cart2.quantity > 20 && "border border-red-500", true) + " s-WVyz9xJuDSvu"}"${add_attribute("value", cart2.quantity, 0)}> ${cart2.quantity < 1 || cart2.quantity > 20 ? `<p class="text-red-500 text-2xl mt-[-14px] z-10 cursor-help" title="Quantity just from 1 to 20">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "ep:warning-filled",
              class: "m-auto"
            },
            {},
            {}
          )}</p>` : ``}</div> <button class="text-2xl p-2 hover:text-primary-700">${validate_component(Icon, "Icon").$$render($$result, { icon: "typcn:minus" }, {}, {})}</button></div> </div></div> <div class="absolute top-0 right-0 h-full flex flex-col justify-between items-center">${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              class: "mx-auto scale-125 m-2",
              checked: cart2.isSelect
            },
            {
              checked: ($$value) => {
                cart2.isSelect = $$value;
                $$settled = false;
              }
            },
            {}
          )} <button class="font-medium text-primary-600 hover:underline dark:text-primary-500 m-2">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              icon: "fluent:delete-24-filled",
              class: "text-2xl"
            },
            {},
            {}
          )}</button></div> </div>`;
        })}</div> <div class="xl:w-[500px] w-full p-4 rounded-lg dark:text-white bg-slate-100 dark:bg-slate-900"><h3 class="uppercase">${escape($t("cart.orderDetails"))}</h3> <div class="flex justify-between md:text-xl text-base py-4"><p>${escape($t("cart.quantity"))}: <span class="font-bold">${escape(totalQuantityWillBuy)}</span></p> <p>${escape($t("cart.total"))}: <span class="font-bold">${escape(formatCurrency(totalOrder))}</span></p></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "receiver", class: "block mb-2" }, {}, {
          default: () => {
            return `${escape($t("cart.reciver"))}`;
          }
        })} ${validate_component(Input, "Input").$$render($$result, { id: "receiver", placeholder: "Elon Musk" }, {}, {})}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "block mb-2" }, {}, {
          default: () => {
            return `${escape($t("cart.phone"))}`;
          }
        })} ${validate_component(Input, "Input").$$render($$result, { id: "phone", placeholder: "0000-000-000" }, {}, {})}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "address", class: "block mb-2" }, {}, {
          default: () => {
            return `${escape($t("cart.address"))}`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "address",
            placeholder: "Địa chỉ nhận hàng mong muốn..."
          },
          {},
          {}
        )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "notes", class: "block mb-2" }, {}, {
          default: () => {
            return `${escape($t("cart.notes"))}`;
          }
        })} ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          {
            rows: "4",
            id: "notes",
            placeholder: "Ghi chú của bạn...",
            class: "max-h-[500px]"
          },
          {},
          {}
        )}</div> ${validate_component(Button, "Button").$$render($$result, { class: "uppercase" }, {}, {
          default: () => {
            return `${escape($t("cart.order"))}`;
          }
        })}</div></div>`}</div> `;
      }();
    }(getCart())}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-658207f2.js.map
