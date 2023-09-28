import { c as create_ssr_component, v as validate_component } from './ssr-01008541.js';
import { C as CreateArticle } from './CreateArticle-a9833d30.js';
import './utils-4ce9e277.js';
import './RepositoryFactory-9eb26519.js';
import './Const-3b06302f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-7fd196aa.js';
import './index-cefc8762.js';
import './Editor-38ea325b.js';
import './Indicator.svelte_svelte_type_style_lang-d22f5597.js';
import './Fileupload-31c680ce.js';
import 'tailwind-merge';
import './Input-7a1052fa.js';
import './Wrapper-97dcdf2f.js';
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
//# sourceMappingURL=_page.svelte-0765844e.js.map
