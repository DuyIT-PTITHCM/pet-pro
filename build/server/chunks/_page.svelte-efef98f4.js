import { c as create_ssr_component, v as validate_component } from './ssr-0d75b2b1.js';
import { C as CreateArticle } from './CreateArticle-69faded7.js';
import './utils-6372ffc9.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-7776c1fb.js';
import './index-62c253a0.js';
import './Editor-ce0557b2.js';
import './toastError2-46921f4f.js';
import './Indicator.svelte_svelte_type_style_lang-70e1b2fc.js';
import './Fileupload-6fdd2e79.js';
import 'tailwind-merge';
import './Input-1aa3eef5.js';
import './Wrapper-c7581240.js';
import './dev-1873bb41.js';
import './index2-780444f8.js';

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
//# sourceMappingURL=_page.svelte-efef98f4.js.map
