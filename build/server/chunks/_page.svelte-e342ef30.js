import { c as create_ssr_component, v as validate_component } from './ssr-ca1a55ab.js';
import { C as CreateArticle } from './CreateArticle-44d6f3e7.js';
import './utils-ea986cb1.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-6832c8ba.js';
import './index-36a920ec.js';
import './Editor-79a97520.js';
import './toastError2-7b7d76cc.js';
import './Indicator.svelte_svelte_type_style_lang-b4bd0601.js';
import './Fileupload-3bdd9980.js';
import 'tailwind-merge';
import './Input-c2602e14.js';
import './Wrapper-8a21dfe5.js';
import './dev-1873bb41.js';
import './index2-09122478.js';

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
//# sourceMappingURL=_page.svelte-e342ef30.js.map
