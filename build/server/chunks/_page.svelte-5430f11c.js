import { c as create_ssr_component, v as validate_component } from './ssr-a6fe4ea2.js';
import { l as loadingState } from './loading-9de519c5.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import './Indicator.svelte_svelte_type_style_lang-8ad01fc4.js';
import { T as Tabs, a as TabItem, C as CreateSeo } from './CreateSeo-2001dbdc.js';
import { C as CreateArticle } from './CreateArticle-57555447.js';
import './utils-22ec5563.js';
import './index-eecbf3f9.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import 'tailwind-merge';
import './common-f14333dd.js';
import './Fileupload-d32ca100.js';
import './Input-28e48a82.js';
import './Wrapper-3bde006e.js';
import './dev-1873bb41.js';
import './Textarea-22da094e.js';
import './index2-e28c90c4.js';
import './Editor-63c08df2.js';
import './toastError2-4d5b9c2d.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postService = RepositoryFactory.get("postRepository");
  let blog;
  let queryParams = { type: "blog" };
  let seo = {
    id: null,
    metaTitle: null,
    metaDescription: null,
    keywords: null,
    canonicalUrl: null,
    robotMetaTags: null,
    openGraphTags: null,
    structuredData: null,
    sitemapPriority: null,
    sitemapFrequency: null,
    sitemapLastModified: null,
    referenceId: null,
    reference: "blog"
  };
  let { data } = $$props;
  async function postDetail() {
    loadingState.set(true);
    blog = await postService.show(data?.id);
    blog = blog.data.data;
    if (!blog.seoId) {
      blog.seo = seo;
      blog.seo = seo;
    }
    blog.seo.referenceId = blog.id;
    loadingState.set(false);
  }
  function init() {
    postDetail();
  }
  init();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        activeClasses: "p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
        inactiveClasses: "p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
        contentClass: "p-4 bg-gray-50 dark:bg-gray-800 bg-blue-500 rounded-b-lg"
      },
      {},
      {
        default: () => {
          return `${validate_component(TabItem, "TabItem").$$render($$result, { title: "Edit " + blog?.title, open: true }, {}, {
            default: () => {
              return `${blog ? `${validate_component(CreateArticle, "CreateArticle").$$render(
                $$result,
                { article: blog, queryParams },
                {
                  article: ($$value) => {
                    blog = $$value;
                    $$settled = false;
                  },
                  queryParams: ($$value) => {
                    queryParams = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}`;
            }
          })} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Write Seo" }, {}, {
            default: () => {
              return `${validate_component(CreateSeo, "CreateSeo").$$render(
                $$result,
                { seoData: blog },
                {
                  seoData: ($$value) => {
                    blog = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5430f11c.js.map
