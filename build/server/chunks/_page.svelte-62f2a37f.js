import { c as create_ssr_component, v as validate_component } from './ssr-ca1a55ab.js';
import { l as loadingState } from './loading-6832c8ba.js';
import { R as RepositoryFactory } from './RepositoryFactory-c6b355ca.js';
import './Indicator.svelte_svelte_type_style_lang-b4bd0601.js';
import { T as Tabs, a as TabItem, C as CreateSeo } from './CreateSeo-f947ac28.js';
import { C as CreateArticle } from './CreateArticle-44d6f3e7.js';
import './utils-ea986cb1.js';
import './index-36a920ec.js';
import './Const-aff6847f.js';
import './cookieUtils-3c057440.js';
import 'js-cookie';
import 'axios';
import 'tailwind-merge';
import './common-0496d5da.js';
import './Fileupload-3bdd9980.js';
import './Input-c2602e14.js';
import './Wrapper-8a21dfe5.js';
import './dev-1873bb41.js';
import './index2-09122478.js';
import './Editor-79a97520.js';
import './toastError2-7b7d76cc.js';

const css = {
  code: "@media screen and (max-width: 810px){}@media screen and (max-width: 500px){}@media screen and (max-width: 400px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postService = RepositoryFactory.get("postRepository");
  let service;
  let services = {
    productName: null,
    description: null,
    price: null,
    originalPrice: null,
    stockQuantity: null,
    origin: null,
    notes: null,
    type: null,
    status: null,
    discount: null,
    slug: null,
    seoId: null,
    createdBy: 1,
    editedBy: 1,
    categoryId: null,
    images: "",
    expirationDate: null
  };
  let queryParams = { type: "service" };
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
    reference: "service"
  };
  let { data } = $$props;
  async function postDetail() {
    loadingState.set(true);
    service = await postService.show(data?.id);
    service = service.data.data;
    services = service;
    if (!services.seoId) {
      service.seo = seo;
      service.seo = seo;
    }
    service.seo.referenceId = service.id;
    loadingState.set(false);
  }
  function init() {
    postDetail();
  }
  init();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
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
          return `${validate_component(TabItem, "TabItem").$$render(
            $$result,
            {
              title: "Edit " + service?.title,
              open: true
            },
            {},
            {
              default: () => {
                return `${service ? `${validate_component(CreateArticle, "CreateArticle").$$render(
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
              }
            }
          )} ${validate_component(TabItem, "TabItem").$$render($$result, { title: "Write Seo" }, {}, {
            default: () => {
              return `${validate_component(CreateSeo, "CreateSeo").$$render(
                $$result,
                { seoData: service },
                {
                  seoData: ($$value) => {
                    service = $$value;
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
//# sourceMappingURL=_page.svelte-62f2a37f.js.map
