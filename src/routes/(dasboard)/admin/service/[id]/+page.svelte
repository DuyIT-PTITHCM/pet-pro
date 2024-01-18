<script lang="ts">
    import { loadingState } from "./../../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Tabs, TabItem } from "flowbite-svelte";
    import CreateArticle from "$lib/components/admin/article/CreateArticle.svelte";
    import CreateSeo from "$lib/components/admin/seo/CreateSeo.svelte";

    const postService = RepositoryFactory.get("postRepository");
    let service: any;
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
        expirationDate: null,
    };
    let queryParams = {
        type: "service",
    };
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
        reference: "service",
    };
    export let data;

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
    };

    init();
</script>

<Tabs
    activeClasses="p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"
    inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    contentClass="p-4 bg-gray-50 dark:bg-gray-800 bg-blue-500 rounded-b-lg"
>
    <TabItem title="Edit {service?.title}" open>
        {#if service}
            <CreateArticle IsService bind:article={service} bind:queryParams />
        {/if}
    </TabItem>
    <TabItem title="Write Seo">
        <CreateSeo bind:seoData={service} />
    </TabItem>
</Tabs>

<style>
    .gallery {
        column-count: 3;
        --webkit-column-count: 3;
        --moz-column-count: 3;
        gap: 1rem;
    }

    /* Responsive-ness for different screen-sizes */
    @media screen and (max-width: 810px) {
        .gallery {
            column-count: 3;
            --webkit-column-count: 3;
            --moz-column-count: 3;
        }
    }

    @media screen and (max-width: 500px) {
        .gallery {
            column-count: 2 !important;
            --webkit-column-count: 2;
            --moz-column-count: 2;
        }
    }

    @media screen and (max-width: 400px) {
        .gallery {
            column-count: 1 !important;
            --webkit-column-count: 1;
            --moz-column-count: 1;
        }
    }
</style>
