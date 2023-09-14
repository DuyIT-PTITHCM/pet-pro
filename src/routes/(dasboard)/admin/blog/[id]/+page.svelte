<script lang="ts">
    import { title } from "$lib/store/meta";
    import { loadingState } from "./../../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Tabs, TabItem, DeviceMockup } from "flowbite-svelte";
    import CreateArticle from "$lib/components/admin/article/CreateArticle.svelte";
    import CreateSeo from "$lib/components/admin/seo/CreateSeo.svelte";

    const postService = RepositoryFactory.get("postRepository");
    let blog: any;
    let host = "http://103.142.26.42/";
    const mode = "modify";

    let queryParams = {
        type: "blog",
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
        reference: "blog",
    };
    export let data;

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

    postDetail();
</script>

<Tabs
    activeClasses="p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"
    inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    contentClass="p-4 bg-gray-50 dark:bg-gray-800 bg-blue-500 rounded-b-lg"
>
    <TabItem title="Edit {blog?.title}" open>
        {#if blog}
            <CreateArticle bind:article={blog} bind:queryParams />
        {/if}
    </TabItem>
    <TabItem title="Write Seo">
        <CreateSeo bind:seoData={blog} />
    </TabItem>
</Tabs>
