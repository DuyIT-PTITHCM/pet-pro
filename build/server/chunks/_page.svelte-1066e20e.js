import { c as create_ssr_component, v as validate_component } from './ssr-6197c9bb.js';
import { l as loadingState } from './loading-561efc4f.js';
import { R as RepositoryFactory } from './RepositoryFactory-5f61db19.js';
import './Indicator.svelte_svelte_type_style_lang-5ca2282a.js';
import { C as CreateArticle } from './CreateArticle-1dea1568.js';
import './utils-779d328f.js';
import './index-6d3e2f99.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './Editor-da3639b3.js';
import './Fileupload-83b87f66.js';
import 'tailwind-merge';
import './Input-b6c6b4cd.js';
import './Wrapper-48062af6.js';
import './dev-1873bb41.js';

const css = {
  code: "@media screen and (max-width: 810px){}@media screen and (max-width: 500px){}@media screen and (max-width: 400px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postService = RepositoryFactory.get("postRepository");
  let service;
  let queryParams = { type: "service" };
  let { data } = $$props;
  async function postDetail() {
    loadingState.set(true);
    service = await postService.show(data?.id);
    service = service.data.data;
    loadingState.set(false);
  }
  postDetail();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = ` ${service ? `${validate_component(CreateArticle, "CreateArticle").$$render(
      $$result,
      { article: service, queryParams },
      {
        article: ($$value) => {
          service = $$value;
          $$settled = false;
        },
        queryParams: ($$value) => {
          queryParams = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1066e20e.js.map
