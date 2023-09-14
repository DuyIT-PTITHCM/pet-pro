import { c as create_ssr_component, v as validate_component } from './ssr-3e906495.js';
import { C as CreateArticle } from './CreateArticle-bab4d48f.js';
import './utils-2dd7664d.js';
import './RepositoryFactory-e953311f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import './loading-3ab47950.js';
import './index-3be464aa.js';
import './Editor-c3e36d04.js';
import './Indicator.svelte_svelte_type_style_lang-4cae1de8.js';
import './Fileupload-f29886df.js';
import 'tailwind-merge';
import './Input-01303dee.js';
import './Wrapper-12bc4865.js';
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
//# sourceMappingURL=_page.svelte-b23d8e46.js.map
