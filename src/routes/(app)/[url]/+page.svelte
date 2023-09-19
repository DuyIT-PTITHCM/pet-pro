<script lang="ts">
    import Icon from '@iconify/svelte';
    import Products from "$lib/components/products/Products.svelte";
    import { HOST } from '$lib/Const.js';
    export let data;
</script>

<svelte:head>
    <title>{(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle:   data?.data.name )}</title>
    <meta name="description" content={data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name} />
    <meta name="keywords" content={data?.data?.seo?.keywords ? data?.data?.seo?.keywords :   data?.data.name} />

    <link rel="canonical" href={data?.data?.seo?.canonicalUrl ?data?.data?.seo?.canonicalUrl : HOST + data?.data.slug } />
    {@html '<script type="application/ld+json">'+ data?.data?.seo?.structuredData + '</script>'}

    <meta name="sitemap_priority" content={data?.data?.seo?.sitemapPriority ? data?.data?.seo?.sitemapPriority : '' } />
    <meta name="sitemap_frequency" content={data?.data?.seo?.sitemapFrequency ? data?.data?.seo?.sitemapFrequency : 'always'} />

    <meta property="og:title" content={(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle:   data?.data.name )} />
    <meta property="og:description" content={data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name} />
    <meta property="og:image" content={HOST + data?.data?.seo?.image} />

    <meta property="twitter:title" content={(data?.data?.seo?.metaTitle ? data?.data?.seo?.metaTitle:   data?.data.name )} />
    <meta property="twitter:description" content={data?.data?.seo?.metaDescription ? data?.data?.seo?.metaDescription : data?.data.name} />
    <meta property="twitter:image" content={HOST + data?.data?.seo?.image} />
</svelte:head>

<div class="flex relative gap-4 m-4 clear-both mb-10">
    <div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white md:block hidden">
        <div class="w-full rounded-lg border text-sm">
            <ul class="list-none">
                {#if data?.data.parent_id}
                    <p class="text-center p-4">Menus Referent</p>
                    {#each data?.data?.menuReferent as menuReferent}
                        {#if data?.data?.id != menuReferent}
                        <li class="menu-item"><a class="{menuReferent.url == data?.data.url ? 'text-primary-600' : ''} block p-4 hover:text-primary-600 transition-all rounded-lg" href="/{menuReferent.url}">{menuReferent.name}</a><hr class="line-hover h-[4px] bg-black transition-all"></li>
                        {/if}
                    {/each}
                {:else}
                    <p class="text-center p-4">Menus</p>
                    {#each data?.data?.subMenus as subMenu}
                        <li class="menu-item"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="/{subMenu.url}">{subMenu.name}</a><hr class="line-hover h-[4px] bg-black transition-all"></li>
                    {/each}
                {/if}
            </ul>
        </div>
        <div class="w-full rounded-lg mt-4 border text-sm">
            {#if data?.data.parent_id}
                <p class="text-center p-4">categories</p>
                <ul class="list-none">
                    {#each data?.data?.categories as category}
                    <li class="menu-item"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="#{category.id}">{category.categoryName}</a><hr class="line-hover h-[4px] bg-black transition-all"></li>
                    {/each}
                </ul>
            {:else}
                <p class="text-center p-4">categories</p>
                <ul class="list-none">
                    {#each data?.data?.categories as category}
                    <li class="menu-item"><a class="block p-4 hover:text-primary-600 transition-all rounded-lg" href="#{category.id}">{category.categoryName}</a><hr class="line-hover h-[4px] bg-black transition-all"></li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
    <div class="w-full min-h-screen">
        <div class="">
            {#if data?.data.parent_id}
                    <div class="w-full">
                        <h2 class="uppercase text-3xl font-bold flex justify-center items-center p-3"><Icon class="text-primary-600" icon="fluent-emoji-high-contrast:paw-prints" /><span class="mx-4">{data?.data.name}</span><Icon class="text-primary-600" icon="fluent-emoji-high-contrast:paw-prints" /></h2>
                        {#if data?.data.isShowDescription == true}
                            <p>{data?.data.description}</p>
                        {/if}
                        <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white"><Icon class="animate-bounce m-4" icon="fluent-emoji-flat:kissing-cat" /><hr class="w-20 h-1 bg-slate-600 dark:bg-white"></div>
                    </div>
                    <div class="grid grid-cols-1 gap-4">
                        {#each data?.data?.categories as category}
                        <h3 id="{category.id}" class="dark:text-white uppercase text-xl font-bold flex items-center p-3">category {category.categoryName}</h3>
                        <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                            <Products products={category.products}/>
                            </div>
                        {/each}
                    </div>
            {:else}
                {#each data?.data?.subMenus as submenu}
                    <div class="w-full dark:text-white mt-5">
                        <h2 class="uppercase text-3xl font-bold flex justify-center items-center p-3"><Icon class="text-primary-600" icon="fluent-emoji-high-contrast:paw-prints" /><span class="mx-4">{submenu.name}</span><Icon class="text-primary-600" icon="fluent-emoji-high-contrast:paw-prints" /></h2>
                        {#if submenu.isShowDescription == true}
                            <p>{submenu.description}</p>
                        {/if}
                        <div class="flex justify-center items-center text-5xl"><hr class="w-20 h-1 bg-slate-600 dark:bg-white"><Icon class="animate-bounce m-4" icon="fluent-emoji-flat:kissing-cat" /><hr class="w-20 h-1 bg-slate-600 dark:bg-white"></div>
                    </div>
                    <div class="grid grid-cols-1 gap-4">
                        {#each submenu?.categories as category}
                        <h3 id="{category.id}" class="dark:text-white uppercase text-xl font-bold flex items-center p-3">category {category.categoryName}</h3>
                            <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                                <Products products={category.products}/>
                            </div>
                        {/each}
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>
<style>
    .line-hover {
        width: 0;
        opacity: .2;
    }
    .menu-item:hover .line-hover{
        width: 100%;
        transition: width .5s;
    }
    .sidebar-menu{
        position: sticky;
        top: 100px;
        left: 0;
        height: 100%;
    }
</style>