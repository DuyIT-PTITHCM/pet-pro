import { c as create_ssr_component, e as escape, v as validate_component, a as each, b as add_attribute } from './ssr-8f3207f5.js';
import { f as formatCurrency } from './accounting-d72f8257.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import { C as Checkbox, L as Label } from './Checkbox-7a46d6c3.js';
import { I as Input } from './Input-c07b967b.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-b6867f72.js';
import './utils-2dd7664d.js';
import 'accounting';
import 'tailwind-merge';
import './Wrapper-ae21bffe.js';
import './dev-1873bb41.js';

const css = {
  code: '.cart-header.s-WVyz9xJuDSvu{background:url("/images/common/cardheader.png");background-repeat:no-repeat;background-size:cover;background-position:center}input.s-WVyz9xJuDSvu::-webkit-outer-spin-button,input.s-WVyz9xJuDSvu::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number].s-WVyz9xJuDSvu{-moz-appearance:textfield}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalQuantity;
  let totalQuantityWillBuy;
  let totalOrder;
  let totalCart;
  var carts = [
    {
      id: 0,
      productName: "Chó Lavender Dragon Ball Chó Lavender Dragon Ball Chó Lavender Dragon Ball",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_HokNDZkCkGbuqamVlKeIs47Sq3-D3whWt7edYOyyYLoxjf3yu7C5En39YflaGwCPag&usqp=CAU",
      origin: "Mèo châu phi",
      quantity: 4,
      price: 4100,
      isSelect: false
    },
    {
      id: 2,
      productName: "Chó Lavender Dragon Ball",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_HokNDZkCkGbuqamVlKeIs47Sq3-D3whWt7edYOyyYLoxjf3yu7C5En39YflaGwCPag&usqp=CAU",
      origin: "Mèo châu phi",
      quantity: 4,
      price: 4100,
      isSelect: false
    },
    {
      id: 3,
      productName: "Chó Lavender Dragon Ball",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_HokNDZkCkGbuqamVlKeIs47Sq3-D3whWt7edYOyyYLoxjf3yu7C5En39YflaGwCPag&usqp=CAU",
      origin: "Mèo châu phi",
      quantity: 40,
      price: 4100,
      isSelect: true
    }
  ];
  let isChooseAll = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    totalQuantity = carts.reduce(
      function(total, cartItem) {
        return total + cartItem.quantity;
      },
      0
    );
    totalQuantityWillBuy = carts.reduce(
      function(total, cartItem) {
        return total + (cartItem.isSelect ? cartItem.quantity : 0);
      },
      0
    );
    totalOrder = carts.reduce(
      function(total, cartItem) {
        return total + (cartItem.isSelect ? cartItem.quantity * cartItem.price : 0);
      },
      0
    );
    totalCart = carts.reduce(
      function(total, cartItem) {
        return total + cartItem.quantity * cartItem.price;
      },
      0
    );
    $$rendered = `<div class="cart-header flex items-center justify-center h-[360px] w-full text-white s-WVyz9xJuDSvu"><h1 data-svelte-h="svelte-2pqgbp">GIỎ HÀNG CỦA BẠN</h1></div> <div class="container m-auto mb-[100px]"><div class="text-lg font-bold my-[50px] dark:text-white"><p>Tổng: ${escape(totalQuantity)} sản phẩm <br> Thành tiền: ${escape(formatCurrency(totalCart))}</p> <p data-svelte-h="svelte-19zmtej">Các mặt hàng trong giỏ hàng của bạn không được bảo lưu — hãy kiểm tra ngay để đặt hàng.</p></div> <div class="flex xl:flex-row flex-col gap-3"><div class="flex-1">${validate_component(Table, "Table").$$render(
      $$result,
      {
        hoverable: true,
        divClass: "relative overflow-x-auto rounded-lg border"
      },
      {},
      {
        default: () => {
          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "!p-4 w-3" }, {}, {
                default: () => {
                  return `${validate_component(Checkbox, "Checkbox").$$render(
                    $$result,
                    { checked: isChooseAll },
                    {
                      checked: ($$value) => {
                        isChooseAll = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Sản phẩm`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Đơn giá`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Só lượng`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Thành tiền`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `<span class="sr-only" data-svelte-h="svelte-1evs4en">Edit</span>`;
                }
              })}`;
            }
          })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
            default: () => {
              return `${each(carts, (cart, index) => {
                return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "!p-4" }, {}, {
                      default: () => {
                        return `${validate_component(Checkbox, "Checkbox").$$render(
                          $$result,
                          { checked: cart.isSelect },
                          {
                            checked: ($$value) => {
                              cart.isSelect = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex items-center"><img${add_attribute("src", cart.productImage, 0)}${add_attribute("alt", cart.productName, 0)} class="w-[200px] rounded-xl"> <p class="!block min-w-[200px] overflow-hidden text-ellipsis p-2">${escape(cart.productName)} <br><br>Nguồn gốc: ${escape(cart.origin)}</p></div> `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(formatCurrency(cart.price))}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex items-center"><button class="relative text-2xl p-2 hover:text-primary-700">${validate_component(Icon, "Icon").$$render($$result, { icon: "typcn:plus" }, {}, {})}</button> <div class=""><input type="number" min="1" max="20" id="" class="${"w-[50px] rounded-lg bg-transparent text-center " + escape(cart.quantity < 1 || cart.quantity > 20 && "border border-red-500", true) + " s-WVyz9xJuDSvu"}"${add_attribute("value", cart.quantity, 0)}> ${cart.quantity < 1 || cart.quantity > 20 ? `<p class="text-red-500 text-2xl mt-[-14px] z-10 cursor-help" title="Quantity just from 1 to 20">${validate_component(Icon, "Icon").$$render(
                          $$result,
                          {
                            icon: "ep:warning-filled",
                            class: "m-auto"
                          },
                          {},
                          {}
                        )}</p>` : ``}</div> <button class="text-2xl p-2 hover:text-primary-700">${validate_component(Icon, "Icon").$$render($$result, { icon: "typcn:minus" }, {}, {})}</button></div> `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(formatCurrency(cart.price * cart.quantity))}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<button class="font-medium text-primary-600 hover:underline dark:text-primary-500">${validate_component(Icon, "Icon").$$render(
                          $$result,
                          {
                            icon: "fluent:delete-24-filled",
                            class: "text-2xl"
                          },
                          {},
                          {}
                        )}</button> `;
                      }
                    })} `;
                  }
                })}`;
              })}`;
            }
          })}`;
        }
      }
    )}</div> <div class="xl:w-[500px] w-full p-4 rounded-lg border dark:text-white"><h3 data-svelte-h="svelte-1vylckf">Thông tin đơn hàng</h3> <div class="flex justify-between text-2xl py-4"><p>Số lượng: <span class="font-bold">${escape(totalQuantityWillBuy)}</span></p> <p>Tổng: <span class="font-bold">${escape(formatCurrency(totalOrder))}</span></p></div> <div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "default-input",
        class: "block mb-2"
      },
      {},
      {
        default: () => {
          return `Tên người nhận`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "default-input",
        placeholder: "Nguyễn Văn A"
      },
      {},
      {}
    )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "default-input",
        class: "block mb-2"
      },
      {},
      {
        default: () => {
          return `Default input`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "default-input",
        placeholder: "Default input"
      },
      {},
      {}
    )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "default-input",
        class: "block mb-2"
      },
      {},
      {
        default: () => {
          return `Default input`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "default-input",
        placeholder: "Default input"
      },
      {},
      {}
    )}</div></div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0adc84a3.js.map
