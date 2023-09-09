import { c as create_ssr_component, v as validate_component, b as each, e as escape, a as add_attribute } from './ssr-bf7d1ced.js';
import { l as loadingState } from './loading-01041b6e.js';
import { R as RepositoryFactory } from './RepositoryFactory-7d37287f.js';
import { t as title, d as description } from './meta-fbb8b016.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-f470b2bc.js';
import { C as Checkbox } from './Checkbox-3c5bf704.js';
import { g as getAllQueryParams, q as queryParamsToObject, T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell, u as updateQueryParams } from './queryParams-b7a04d7b.js';
import 'moment';
import { f as formatCurrency } from './accounting-d72f8257.js';
import './utils-9f8bdf1a.js';
import './index-1c7c9ace.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import 'tailwind-merge';
import './dev-1873bb41.js';
import 'accounting';

const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage = 1 } = $$props;
  let { totalPages = 1 } = $$props;
  let { onPageChange } = $$props;
  function getDisplayRange() {
    const displayRange = 2;
    const start = Math.max(1, currentPage - displayRange);
    const end = Math.min(totalPages, currentPage + displayRange);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0)
    $$bindings.totalPages(totalPages);
  if ($$props.onPageChange === void 0 && $$bindings.onPageChange && onPageChange !== void 0)
    $$bindings.onPageChange(onPageChange);
  return `<div class="pagination flex justify-center items-center mt-20"><button class="mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer bg-white dark:bg-gray-800 dark:text-white" ${currentPage === 1 ? "disabled" : ""}>Previous</button> ${each(getDisplayRange(), (page) => {
    return `<button class="${[
      "mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer " + escape(
        currentPage === page ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 dark:text-white",
        true
      ),
      currentPage === page ? "selected" : ""
    ].join(" ").trim()}">${escape(page)} </button>`;
  })} <button class="mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer bg-white dark:bg-gray-800 dark:text-white" ${currentPage === totalPages ? "disabled" : ""}>Next</button></div>`;
});
function convertImageJsonToArray(json) {
  return JSON.parse(json);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("Producs Management");
  description.set("Producs Management System");
  const productService = RepositoryFactory.get("productRepository");
  let isCheck = false;
  let products = null;
  let sortedProducts = [];
  let sortBy = "";
  let sortDirection = 1;
  let dataProductFromApi = [];
  let host = "http://103.142.26.42/";
  let queryParams = { page: 1 };
  async function handlePageChange(page) {
    queryParams.page = page;
    updateQueryParams(queryParams);
    await getProduct();
  }
  async function getProduct() {
    loadingState.set(true);
    let queryFilter = getAllQueryParams();
    queryParams = queryParamsToObject(queryFilter);
    products = await productService.get(queryParams);
    dataProductFromApi = products.data.data.docs;
    loadingState.set(false);
  }
  getProduct();
  {
    {
      sortedProducts = [...dataProductFromApi].sort((a, b) => {
        let aValue = a[sortBy];
        let bValue = b[sortBy];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue) * sortDirection;
        } else if (typeof aValue === "number" && typeof bValue === "number") {
          return (aValue - bValue) * sortDirection;
        } else {
          return (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) * sortDirection;
        }
      });
    }
  }
  return `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold" data-svelte-h="svelte-1hu5ouf">Products Management</h1> <div class="flex gap-1"><a href="./products/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-11xky2f">Filter</a> <a href="./products/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-yt2j2v">Create Products</a></div></div></div>  ${validate_component(Table, "Table").$$render(
    $$result,
    {
      hoverable: true,
      divClass: "rounded-xl overflow-x-scroll"
    },
    {},
    {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isCheck }, {}, {})}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `Id`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `NAME`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `IMAGES`;
              }
            })}  ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `ORIGINAL PRICE`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `PRICE`;
              }
            })}  ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `POST`;
              }
            })}  ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `SLUG`;
              }
            })}  ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `SEO`;
              }
            })}   ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "text-center" }, {}, {
              default: () => {
                return `CATEGORY`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(sortedProducts, (item) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "cursor-pointer" }, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "w-3" }, {}, {
                    default: () => {
                      return `<div class="flex justify-center">${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: isCheck, value: item.id }, {}, {})} </div>`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.id)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.productName)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "min-w-[180px]" }, {}, {
                    default: () => {
                      return `<div class="grid grid-cols-4 gap-y-[4px] py-[2px]">${each(convertImageJsonToArray(item.images), (path, i) => {
                        return `<div class="w-14 h-14 overflow-hidden bg-black rounded-[8px]"><img${add_attribute("src", !path ? "/images/logo.png" : `${host}/` + path, 0)} class="w-full h-full"${add_attribute("alt", item.name, 0)}> </div>`;
                      })}</div> `;
                    }
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(formatCurrency(item.originalPrice))}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(formatCurrency(item.price))}`;
                    }
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${item.post ? `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          icon: "material-symbols:done-rounded",
                          color: "green",
                          width: "40",
                          height: "40"
                        },
                        {},
                        {}
                      )}` : `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          icon: "ic:outline-warning",
                          color: "red",
                          width: "40",
                          height: "40"
                        },
                        {},
                        {}
                      )}`} `;
                    }
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.slug)}`;
                    }
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${item.seo ? `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          icon: "material-symbols:done-rounded",
                          color: "green",
                          width: "40",
                          height: "40"
                        },
                        {},
                        {}
                      )}` : `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          icon: "ic:outline-warning",
                          color: "red",
                          width: "40",
                          height: "40"
                        },
                        {},
                        {}
                      )}`} `;
                    }
                  })}   ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.category.categoryName)}`;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    }
  )} ${products ? `${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      currentPage: products?.data?.data.currentPage,
      totalPages: products?.data?.data.pages,
      onPageChange: handlePageChange
    },
    {},
    {}
  )}` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e7c311ef.js.map
