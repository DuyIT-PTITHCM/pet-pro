import { c as create_ssr_component, v as validate_component } from './ssr-a6fe4ea2.js';
import { C as CreateArticle } from './CreateArticle-57555447.js';
import './utils-22ec5563.js';
import './RepositoryFactory-c6b355ca.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-9de519c5.js';
import './index-eecbf3f9.js';
import './Editor-63c08df2.js';
import './toastError2-4d5b9c2d.js';
import './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import './Fileupload-d32ca100.js';
import 'tailwind-merge';
import './Input-28e48a82.js';
import './Wrapper-3bde006e.js';
import './dev-1873bb41.js';
import './index2-e28c90c4.js';

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
//# sourceMappingURL=_page.svelte-0a97dbfb.js.map
