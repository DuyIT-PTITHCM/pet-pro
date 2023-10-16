<script lang="ts">
    import Icon from "@iconify/svelte";
    import Products from "$lib/components/products/Products.svelte";
    import { HOST } from "$lib/Const.js";
    import Blogs from "$lib/components/blogs/Blogs.svelte";
    import { page } from "$app/stores";
    import { description } from "$lib/store/meta";
    import Services from "$lib/components/services/Services.svelte";

    export let data;
    let isShowDescription = (data.data.url == $page.params.url)
    var types = ["product", "blog", "service"]
</script>

<svelte:head>
    <title
        >{data?.data?.seo?.metaTitle
            ? data?.data?.seo?.metaTitle
            : data?.data.name}</title
    >
    <meta
        name="description"
        content={data?.data?.seo?.metaDescription
            ? data?.data?.seo?.metaDescription
            : data?.data.name}
    />
    <meta
        name="keywords"
        content={data?.data?.seo?.keywords
            ? data?.data?.seo?.keywords
            : data?.data.name}
    />

    <link
        rel="canonical"
        href={data?.data?.seo?.canonicalUrl
            ? data?.data?.seo?.canonicalUrl
            : HOST + data?.data.slug}
    />
    {@html '<script type="application/ld+json">' +
        data?.data?.seo?.structuredData +
        "</script>"}

    <meta
        name="sitemap_priority"
        content={data?.data?.seo?.sitemapPriority
            ? data?.data?.seo?.sitemapPriority
            : ""}
    />
    <meta
        name="sitemap_frequency"
        content={data?.data?.seo?.sitemapFrequency
            ? data?.data?.seo?.sitemapFrequency
            : "always"}
    />

    <meta
        property="og:title"
        content={data?.data?.seo?.metaTitle
            ? data?.data?.seo?.metaTitle
            : data?.data.name}
    />
    <meta
        property="og:description"
        content={data?.data?.seo?.metaDescription
            ? data?.data?.seo?.metaDescription
            : data?.data.name}
    />
    <meta property="og:image" content={HOST + data?.data?.seo?.image} />

    <meta
        property="twitter:title"
        content={data?.data?.seo?.metaTitle
            ? data?.data?.seo?.metaTitle
            : data?.data.name}
    />
    <meta
        property="twitter:description"
        content={data?.data?.seo?.metaDescription
            ? data?.data?.seo?.metaDescription
            : data?.data.name}
    />
    <meta property="twitter:image" content={HOST + data?.data?.seo?.image} />
</svelte:head>
<div class="flex relative clear-both mb-10 mx-4 gap-4 m-auto">
    <div
        class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white lg:block hidden height-100vh border-r-4"
    >
        <div class="w-full rounded-lg text-sm">
            <ul class="list-none">
                {#if data?.data.parent_id}
                    <p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">
                        <Icon
                            class="text-primary-600"
                            icon="fluent-emoji-high-contrast:paw-prints"
                        />
                        Menus Referent
                        <Icon
                            class="text-primary-600"
                            icon="fluent-emoji-high-contrast:paw-prints"
                        />
                    </p>
                    {#each data?.data?.menuReferent as menuReferent}
                        {#if data?.data?.id != menuReferent}
                            <li class="menu-item">
                                <a
                                    class="{menuReferent.url == data?.data.url
                                        ? 'text-primary-600'
                                        : ''} block p-4 hover:text-primary-600 transition-all rounded-lg"
                                    href="/{menuReferent.url}"
                                    >{menuReferent.name}</a
                                >
                                <hr
                                    class="line-hover h-[4px] bg-black transition-all"
                                />
                            </li>
                        {/if}
                    {/each}
                {:else}
                    <p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">
                        <Icon
                            class="text-primary-600"
                            icon="fluent-emoji-high-contrast:paw-prints"
                        />
                        Menus
                        <Icon
                            class="text-primary-600"
                            icon="fluent-emoji-high-contrast:paw-prints"
                        />
                    </p>
                    {#each data?.data?.subMenus as subMenu}
                        <li class="menu-item">
                            <a
                                class="block p-4 hover:text-primary-600 transition-all rounded-lg"
                                href="/{subMenu.url}">{subMenu.name}</a
                            >
                            <hr
                                class="line-hover h-[4px] bg-black transition-all"
                            />
                        </li>
                    {/each}
                {/if}
            </ul>
        </div>
        <div class="w-full rounded-lg mt-4 text-sm">
            {#if data?.data.parent_id}
                <p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">
                    <Icon
                        class="text-primary-600"
                        icon="fluent-emoji-high-contrast:paw-prints"
                        />
                        categories
                        <Icon
                        class="text-primary-600"
                        icon="fluent-emoji-high-contrast:paw-prints"
                    /></p>
                <ul class="list-none">
                    {#each data?.data?.categories as category}
                        <li class="menu-item">
                            <a
                                class="block p-4 hover:text-primary-600 transition-all rounded-lg"
                                href="#{category.id}">{category.categoryName}</a
                            >
                            <hr
                                class="line-hover h-[4px] bg-black transition-all"
                            />
                        </li>
                    {/each}
                </ul>
            {:else}
                <p class="text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">
                    <Icon
                        class="text-primary-600"
                        icon="fluent-emoji-high-contrast:paw-prints"
                    />
                    categories
                    <Icon
                        class="text-primary-600"
                        icon="fluent-emoji-high-contrast:paw-prints"
                    />
                </p>
                <ul class="list-none">
                    {#each data?.data?.categories as category}
                        <li class="menu-item">
                            <a
                                class="block p-4 hover:text-primary-600 transition-all rounded-lg"
                                href="#{category.id}">{category.categoryName}</a
                            >
                            <hr
                                class="line-hover h-[4px] bg-black transition-all"
                            />
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
    <div class="w-full min-h-screen">
        <div class="">
            {#if data?.data && data?.data.parent_id}
                <div class="w-full">
                    <h1
                        class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center dark:text-white"
                    >
                        <Icon
                            class="text-primary-600"
                            icon="fluent-emoji-high-contrast:paw-prints"
                        /><span class="mx-4">{data?.data.name}</span><Icon
                            class="text-primary-600"
                            icon="fluent-emoji-high-contrast:paw-prints"
                        />
                    </h1>
                    <div class="flex justify-center items-center text-5xl">
                        <hr class="w-20 h-1 bg-slate-600 dark:bg-white" />
                        <Icon
                            class="animate-bounce m-4"
                            icon="fluent-emoji-flat:kissing-cat"
                        />
                        <hr class="w-20 h-1 bg-slate-600 dark:bg-white" />
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    {#if data?.data?.categories.length}
                        {#each data?.data?.categories as category}
                            {#if category.products.length || category.posts.length}
                                <h3
                                    id={category.id}
                                    class="dark:text-white uppercase text-lg font-bold flex items-center"
                                >
                                    {category.categoryName}
                                </h3>
                                {#if category.type == types[0]}
                                    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4" >
                                        <Products products={category.products} />
                                    </div>
                                {:else if category.type == types[1]}
                                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4" >
                                        <Blogs blogs={category.posts}/>
                                    </div>
                                {:else if category.type == types[2]}
                                    <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4" >
                                        <Services services={category.posts}/>
                                    </div>
                                {/if}
                            {/if}
                        {/each}
                    {/if}
                </div>
            {:else}
                {#each data?.data?.subMenus as submenu}
                    {#if submenu?.categories.length}
                        <div class="w-full dark:text-white mt-8">
                            <h3
                                class="md:text-2xl text-xl uppercase font-bold flex justify-center items-center text-center"
                            >
                                <Icon
                                    class="text-primary-600"
                                    icon="fluent-emoji-high-contrast:paw-prints"
                                /><span class="mx-4">{submenu.name}</span><Icon
                                    class="text-primary-600"
                                    icon="fluent-emoji-high-contrast:paw-prints"
                                />
                            </h3>
                            <div class="flex justify-center items-center text-5xl">
                                <hr class="w-20 h-1 bg-slate-600 dark:bg-white" />
                                <Icon
                                    class="animate-bounce m-2"
                                    icon="fluent-emoji-flat:kissing-cat"
                                />
                                <hr class="w-20 h-1 bg-slate-600 dark:bg-white" />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4">
                            {#each submenu?.categories as category}
                                {#if category.products.length || category.posts.length}
                                    <h3
                                        id={category.id}
                                        class="dark:text-white uppercase text-lg font-bold flex items-center"
                                    >
                                        {category.categoryName}
                                    </h3>
                                    {#if category.type == types[0]}
                                        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4" >
                                            <Products products={category.products} />
                                        </div>
                                    {:else if category.type == types[1]}
                                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-4" >
                                            <Blogs blogs={category.posts}/>
                                        </div>
                                    {:else if category.type == types[2]}
                                        <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4" >
                                            <Services services={category.posts}/>
                                        </div>
                                    {/if}
                                {/if}
                            {/each}
                        </div>
                    {/if}
                {/each}
            {/if}
        </div>
    </div>
</div>

<style>
    .line-hover {
        width: 0;
        opacity: 0.2;
    }
    .menu-item:hover .line-hover {
        width: 100%;
        transition: width 0.5s;
    }
    .sidebar-menu {
        position: sticky;
        top: 100px;
        left: 0;
        height: 100%;
        border-radius: 8px;
    }
    .height-100vh{
        height: 100vh;
    }
</style>
