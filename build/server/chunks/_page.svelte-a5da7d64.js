import { c as create_ssr_component, v as validate_component } from './ssr-e41dcf02.js';
import { C as CreateArticle } from './CreateArticle-256eb12b.js';
import './utils-a4f7b281.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-6e9dcca6.js';
import './index-92a6d03f.js';
import './Editor-97fd80a2.js';
import './toastError2-475540f6.js';
import './Indicator.svelte_svelte_type_style_lang-fb348a31.js';
import './Fileupload-f6d15a88.js';
import 'tailwind-merge';
import './Input-81fd4d1e.js';
import './Wrapper-3c132686.js';
import './dev-1873bb41.js';
import './index2-be839c26.js';

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
//# sourceMappingURL=_page.svelte-a5da7d64.js.map
