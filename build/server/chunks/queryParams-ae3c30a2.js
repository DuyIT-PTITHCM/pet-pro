import { c as create_ssr_component, e as escape, a as each } from './ssr-8f3207f5.js';

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
  return `${totalPages > 1 ? `<div class="pagination flex justify-center items-center mt-10"><button class="${"mx-1 px-2 py-1 border border-gray-300 rounded bg-white dark:bg-gray-800 dark:text-white " + escape(
    currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer",
    true
  )}" ${currentPage === 1 ? "disabled" : ""}>Previous</button> ${each(getDisplayRange(), (page) => {
    return `<button class="${[
      "mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer " + escape(
        currentPage === page ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 dark:text-white",
        true
      ),
      currentPage === page ? "selected" : ""
    ].join(" ").trim()}">${escape(page)} </button>`;
  })} <button class="${"mx-1 px-2 py-1 border border-gray-300 rounded bg-white dark:bg-gray-800 dark:text-white " + escape(
    currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer",
    true
  )}" ${currentPage === totalPages ? "disabled" : ""}>Next</button></div>` : ``}`;
});
function getAllQueryParams() {
  const searchParams = new URLSearchParams(location.search);
  const queryParams = {};
  for (const [param, value] of searchParams.entries()) {
    queryParams[param] = value;
  }
  return queryParams;
}
function updateQueryParams(params) {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    if (params[key] !== null && params[key] !== void 0) {
      searchParams.append(key, params[key]);
    }
  }
  const newUrl = `${location.pathname}?${searchParams.toString()}`;
  history.pushState({ path: newUrl }, "", newUrl);
}
function queryParamsToObject(queryParams) {
  const paramFilter = {};
  for (const key in queryParams) {
    const value = queryParams[key];
    if (value !== null && value !== void 0) {
      paramFilter[key] = value;
    }
  }
  return paramFilter;
}

export { Pagination as P, getAllQueryParams as g, queryParamsToObject as q, updateQueryParams as u };
//# sourceMappingURL=queryParams-ae3c30a2.js.map
