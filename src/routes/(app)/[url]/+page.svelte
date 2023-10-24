<script lang="ts">
    import Icon from "@iconify/svelte";
    import Products from "$lib/components/products/Products.svelte";
    import { HOST } from "$lib/Const.js";
    import Blogs from "$lib/components/blogs/Blogs.svelte";
    import { page } from "$app/stores";
    import { description } from "$lib/store/meta";
    import Services from "$lib/components/services/Services.svelte";
    import HeaderPage from "$lib/components/common/HeaderPage.svelte";
    import { Button, CloseButton, Drawer } from "flowbite-svelte";
    import { sineIn } from 'svelte/easing';

    export let data;
    let isShowMenu = true;
    let transitionParams = {
        x: -320,
        duration: 200,
        easing: sineIn
    };
    let isShowDescription = (data.data.url == $page.params.url)
    var types = ["product", "blog", "service"]
    function headingColor(title: string){
        const len = title.length;
        const mid = Math.floor(len / 2);
        const firstPart = title.slice(0, mid);
        const secondPart = title.slice(mid);
        return firstPart + '<span class="text-yellow-400">'+ secondPart +'</span>';
    }
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
            : data?.data.description}
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
            : data?.data.description}
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
            : data?.data.description}
    />
    <meta property="twitter:image" content={HOST + data?.data?.seo?.image} />
</svelte:head>
{#if (data?.data.isShowDescription == true) && isShowDescription == true && data?.data.description}
    <HeaderPage title={data?.data.name} description={data?.data.description} isDescription={true} isShowTime={false} isBgOverlay/>
{/if}
<button on:click={() => (isShowMenu = false)} class="fixed top-1/2 left-0 text-2xl dark:bg-white dark:text-black rounded-r-3xl p-2 ml-[-10px] z-[1000] bg-primary-600 text-white {!isShowMenu && 'hidden'}">
    <div class="show-menu-icon">
        <Icon icon="icon-park-outline:right" />
    </div>
    <div class="opacity-0">
        <Icon icon="icon-park-outline:right" />
    </div>
</button>

<Drawer transitionType="fly" {transitionParams} bind:hidden={isShowMenu} id="sidebar1">
    <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 font-semibold text-gray-500 dark:text-gray-400 text-lg">
            <Icon icon="material-symbols:menu" class="scale-125" /><span class="ml-2">Menu</span>
        </h5>
        <CloseButton on:click={() => (isShowMenu = true)} class="mb-4 dark:text-white" />
      </div>
    <div class="dark:text-white" >
        <div class="text-sm">
            <ul class="list-none">
                {#if data?.data.parent_id}
                    <p class="uppercase text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg ">
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
            <p class="uppercase text-center p-4 text-shadow-xs flex items-center gap-1 justify-center text-lg">
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
        </div>
    </div>
</Drawer>
<div class="container relative m-auto px-2">
    <div class="w-full">
        <div class="">
            {#if data?.data && data?.data.parent_id}
                <div class="w-full mt-[40px]">
                    <!-- <h1
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
                    </div> -->
                    <h2 class="md:text-2xl text-xl uppercase font-extrabold flex items-center">
                        <span>{@html headingColor(data?.data.name)}</span>
                    </h2>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    {#if data?.data?.categories.length}
                        {#each data?.data?.categories as category}
                            {#if category.products.length || category.posts.length}
                                <h3
                                    id={category.id}
                                    class="dark:text-white uppercase text-lg font-bold flex items-center mt-[20px]"
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
                        <div class="w-full dark:text-white mt-[40px]">
                            <h2
                                class="md:text-2xl text-xl uppercase font-extrabold flex items-center"
                            >
                                <!-- <Icon
                                    class="text-primary-600"
                                    icon="fluent-emoji-high-contrast:paw-prints"
                                /> -->
                                <span>{@html headingColor(submenu.name)}</span>
                                <!-- <Icon
                                    class="text-primary-600"
                                    icon="fluent-emoji-high-contrast:paw-prints"
                                /> -->
                            </h2>
                            <!-- <div class="flex justify-center items-center text-5xl">
                                <hr class="w-20 h-1 bg-slate-600 dark:bg-white" />
                                <Icon
                                    class="animate-bounce m-2"
                                    icon="fluent-emoji-flat:kissing-cat"
                                />
                                <hr class="w-20 h-1 bg-slate-600 dark:bg-white" />
                            </div> -->
                        </div>
                        <div class="grid grid-cols-1 gap-4 ">
                            {#each submenu?.categories as category}
                                {#if category.products.length || category.posts.length}
                                    <h3
                                        id={category.id}
                                        class="dark:text-white uppercase text-lg font-bold flex items-center  mt-[20px]"
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
<div class="mb-[80px]"></div>
<style>
    .line-hover {
        width: 0;
        opacity: 0.2;
    }
    .menu-item:hover .line-hover {
        width: 100%;
        transition: width 0.5s;
    }
    @keyframes moveX {
        0%   { margin-left: 0px;}
        50%  { margin-left: 4px}
        100% { margin-left: 0px;}
    }

    .show-menu-icon {
        position: absolute;
        animation: moveX 1s infinite;
    }
</style>
