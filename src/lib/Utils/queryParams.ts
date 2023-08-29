export function getAllQueryParams(): Record<string, string> {
    const searchParams = new URLSearchParams(location.search);
    const queryParams: Record<string, string> = {};

    for (const [param, value] of searchParams.entries()) {
        queryParams[param] = value;
    }

    return queryParams;
}

export function updateQueryParams(params: Record<string, string | null | undefined>): void {
    const searchParams = new URLSearchParams();

    for (const key in params) {
        if (params[key] !== null && params[key] !== undefined) {
            searchParams.append(key, params[key]!);
        }
    }

    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    history.pushState({ path: newUrl }, '', newUrl);
}

export function clearQueryParam(paramName: string): void {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(paramName);

    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    history.pushState({ path: newUrl }, '', newUrl);
}
export function queryParamsToObject(queryParams: Record<string, string | null>): Record<string, any> {
    const paramFilter: Record<string, any> = {};
  
    for (const key in queryParams) {
      const value = queryParams[key];
      if (value !== null && value !== undefined) {
        paramFilter[key] = value;
      }
    }
  
    return paramFilter;
  }
  