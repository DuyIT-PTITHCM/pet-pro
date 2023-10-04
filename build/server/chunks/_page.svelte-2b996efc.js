import { c as create_ssr_component, v as validate_component } from './ssr-8f3207f5.js';
import { C as CreateArticle } from './CreateArticle-3263e2f1.js';
import './utils-2dd7664d.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-3ab47950.js';
import './index-3be464aa.js';
import './Editor-12b817d1.js';
import './toastError2-3194e7be.js';
import './Indicator.svelte_svelte_type_style_lang-f97ac413.js';
import './Fileupload-ac4371a6.js';
import 'tailwind-merge';
import './Input-c07b967b.js';
import './Wrapper-ae21bffe.js';
import './dev-1873bb41.js';
import './index2-7fa367f4.js';

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
  let queryParams = { type: "blog" };
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
//# sourceMappingURL=_page.svelte-2b996efc.js.map
