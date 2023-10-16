import { v as validate_store, a as subscribe } from './utils-a4f7b281.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as each, a as add_attribute } from './ssr-e41dcf02.js';
import { l as loadingState } from './loading-6e9dcca6.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import { t as title, d as description } from './meta-d95f6ffd.js';
import { I as Icon } from './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import { C as Checkbox } from './Checkbox-daaeebb1.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell, g as getAllQueryParams, q as queryParamsToObject, P as Pagination, u as updateQueryParams } from './queryParams-e01c1a16.js';
import { c as convertImageJsonToArray } from './common-0496d5da.js';
import { H as HOST } from './Const-aff6847f.js';
import { t as t2 } from './index2-28f799b2.js';
import './index-92a6d03f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import 'tailwind-merge';
import './dev-1873bb41.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t2, "t");
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  title.set("Service Management");
  description.set("Service Management System");
  const articleService = RepositoryFactory.get("postRepository");
  let isCheck = false;
  let services = null;
  let sortedServices = [];
  let sortBy = "";
  let sortDirection = 1;
  let dataServiceFromApi = [];
  let queryParams = { page: 1, type: "service" };
  async function handlePageChange(page) {
    queryParams.page = page;
    updateQueryParams(queryParams);
    await getService();
  }
  async function getService() {
    loadingState.set(true);
    let queryFilter = getAllQueryParams();
    queryParams = queryParamsToObject(queryFilter);
    queryParams.type = "service";
    services = await articleService.get(queryParams);
    dataServiceFromApi = services.data.data.docs;
    loadingState.set(false);
  }
  function init() {
    getService();
  }
  init();
  {
    {
      sortedServices = [...dataServiceFromApi].sort((a, b) => {
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
  $$unsubscribe_t();
  return `<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl"><div class="flex items-center justify-between"><h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">${escape($t("post.serviceManagement"))}</h1> <div class="flex gap-1"><a href="./service/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-11d7fem">Filter</a> <a href="./service/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${escape($t("post.createService"))}</a></div></div></div>  ${validate_component(Table, "Table").$$render(
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
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Id`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($t("common.name"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($t("common.images"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($t("common.slug"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($t("common.seo"))}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape($t("common.category"))}`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(sortedServices, (item) => {
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
                      return `${escape(item.title)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "min-w-[180px]" }, {}, {
                    default: () => {
                      return `<div class="grid grid-cols-4 gap-y-[4px] py-[2px]">${each(convertImageJsonToArray(item.imageUrl), (path, i) => {
                        return `<div class="w-14 h-14 overflow-hidden bg-black rounded-[8px]"><img${add_attribute("src", !path ? "/images/logo.png" : `${HOST}/` + path, 0)} class="w-full h-full"${add_attribute("alt", item.name, 0)}> </div>`;
                      })}</div> `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.slug)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
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
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
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
  )} ${services ? `${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      currentPage: services?.data?.data.currentPage,
      totalPages: services?.data?.data.pages,
      onPageChange: handlePageChange
    },
    {},
    {}
  )}` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3b231ac3.js.map