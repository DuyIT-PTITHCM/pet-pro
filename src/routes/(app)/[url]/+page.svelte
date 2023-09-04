<script lang="ts">
    import { formatCurrency } from "$lib/Utils/accounting";
    import { Badge, Button, Card, Carousel, Rating } from 'flowbite-svelte';
    import { BASE_API } from "$lib/Const";
    import Icon from '@iconify/svelte';
    export let data;
    let host = "http://103.142.26.42";

    function convertImageJsonToArray(json) {
        if (json) {
            return JSON.parse(json);
        }
        return [];
    }
    function getProductImage(images: any) {
        const productList = images.map((path: string, index: number) => ({
        id: index + 1,
        imgurl: !path ? "/images/logo.png" : `${host}`+ path,
        }));
        return productList;
  }
</script>

<div class="flex relative gap-4 m-4 clear-both mb-10">
    <div class="sidebar-menu sticky top-0 left-0 uppercase w-[300px] dark:text-white md:block hidden">
        <div class="w-full rounded-lg border">
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
        <div class="w-full rounded-lg mt-4 border">
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
                            {#each category.products as product}
                                <div class="relative">
                                    {#if product.discount > 0}
                                        <div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">
                                            {product.discount}% discount
                                        </div>
                                    {/if}
                                    <Card class="min-w-full" padding="none">
                                        <Carousel class="w-full" images={getProductImage(convertImageJsonToArray(product?.images))} slideClass="w-full" imgClass="w-full" showCaptions={false} showThumbs={false}/>
                                        <div class="px-5 pb-5">
                                            <a href="{BASE_API + "/products/" + product.id}">
                                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4">{product?.productName}</h5>
                                                <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px]">{product.description}</p>
                                            </a>
                                            <Rating rating={4} size={24} class="mt-2.5 mb-5">
                                                <Badge slot="text" class="ml-3">4</Badge>
                                            </Rating>
                                            <div class="flex justify-between items-center">
                                                <span class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(product?.price)}</span>
                                                <div class="flex">
                                                    <Button class="mr-1" href="/">Buy now</Button>
                                                    <Button href="/">Add cart</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            {/each}
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
                                {#each category.products as product}
                                <div class="relative">
                                    {#if product.discount > 0}
                                        <div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">
                                            {product.discount}% discount
                                        </div>
                                    {/if}
                                    <Card class="min-w-full" padding="none">
                                        <Carousel class="w-full" images={getProductImage(convertImageJsonToArray(product?.images))} slideClass="w-full" imgClass="w-full" showCaptions={false} showThumbs={false}/>
                                        <div class="px-5 pb-5">
                                            <a href="{BASE_API + "/products/" + product.id}">
                                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4">{product?.productName}</h5>
                                                <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px]">{product.description}</p>
                                            </a>
                                            <Rating rating={4} size={24} class="mt-2.5 mb-5"/>
                                            <div class="flex justify-between items-center">
                                                <span class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(product?.price)}</span>
                                                <div class="flex">
                                                    <Button class="mr-1" href="/">Buy now</Button>
                                                    <Button href="/">Add cart</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                {/each}
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