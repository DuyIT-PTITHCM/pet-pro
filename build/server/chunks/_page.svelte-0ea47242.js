import { c as create_ssr_component, v as validate_component } from './ssr-6197c9bb.js';
import { C as CreateArticle } from './CreateArticle-1dea1568.js';
import './utils-779d328f.js';
import './RepositoryFactory-5f61db19.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-561efc4f.js';
import './index-6d3e2f99.js';
import './Editor-da3639b3.js';
import './Indicator.svelte_svelte_type_style_lang-5ca2282a.js';
import './Fileupload-83b87f66.js';
import 'tailwind-merge';
import './Input-b6c6b4cd.js';
import './Wrapper-48062af6.js';
import './dev-1873bb41.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let article = {
    id: null,
    title: "",
    content: "",
    description: "",
    author: "",
    published_at: null,
    views: 0,
    slug: null,
    categoryId: null,
    imageUrl: ""
  };
  let queryParams = { type: "service" };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(CreateArticle, "CreateArticle").$$render(
      $$result,
      { article, queryParams },
      {
        article: ($$value) => {
          article = $$value;
          $$settled = false;
        },
        queryParams: ($$value) => {
          queryParams = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0ea47242.js.map
