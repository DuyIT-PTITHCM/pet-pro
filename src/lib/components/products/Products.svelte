<script lang="ts">
    import { Button, Card, CardPlaceholder } from "flowbite-svelte";
    import { formatCurrency } from "$lib/Utils/accounting";
    import Icon from "@iconify/svelte";
    import CarouselCustom from "../carouselcus/CarouselCustom.svelte";
    import { HOST } from "$lib/Const";
    import { addCart } from "$lib/Utils/cartAction";
    import { goto } from "$app/navigation";
    import { convertImageJsonToArray } from "$lib/Utils/common";

    export let products: any = null;
    let host = HOST;
    let imageWidth = 0;

    async function getProductImage(images: any) {
        images = await convertImageJsonToArray(images);
        return images;
    }

    async function addToCart(prod: any, isShopNow = false){
        await addCart(prod);
        if(isShopNow) goto("/gio-hang");
    }
</script>
{#if products}
    {#each products as product}
        {#await getProductImage(product.images)}
        <div class="w-full">
            <CardPlaceholder size="lg" />
        </div>
        {:then res}
        <div class="relative">
            {#if product.discount > 0}
                <div class="absolute top-0 left-0 bg-yellow-300 text-white px-1 py-1 rounded-tr-md transform z-10 font-semibold rounded-md">
                    -{product.discount}%
                </div>
            {/if}
            <Card class="min-w-full overflow-hidden" padding="none">
                <div class="w-full overflow-hidden" style="height: {imageWidth*70/100}px;" bind:clientWidth={imageWidth}>
                    {#if res.length > 1}
                        <CarouselCustom perPage={1}  duration={400}>
                            {#each res as path, i}
                                <img src={!path ? "/images/logo.png" : `${host}` + "/" + path} class="w-full h-full object-cover" alt="{product?.productName}"/>
                            {/each}
                        </CarouselCustom>
                    {:else}
                        <img src={!res[0] ? "/images/logo.png" : `${host}` + "/" + res[0]} class="w-full h-full object-cover" alt="{product?.productName}" />
                    {/if}
                </div>

                <div class="px-3 pb-3">
                    <a data-sveltekit-reload href="/san-pham/{product.slug}" class="block text-black min-h-[72px] pt-2 dark:text-white hover:text-amber-500 ">
                        <h4 class="product-name mb-1 sm:text-base text-sm font-semibold line-clamp-2">{product?.productName}</h4>
                        <p class="sm:text-sm text-xs line-clamp-1">{product.description}</p>
                    </a>
                    <div class="flex justify-between my-3">
                        {#if product.discount>0}
                            <del>{formatCurrency(product?.originprice)}</del>
                        {:else}
                            <del></del>
                        {/if}
                        <span class="text-md font-semibold text-amber-500">{formatCurrency(product?.price)}</span>
                    </div>                        
                    <div class="flex justify-between">
                        <Button color="light" class="text-xl" on:click={() => addToCart(product, true)}><Icon icon="solar:cart-3-bold" /></Button>
                        <Button color="light" class="text-xl" on:click={() => addToCart(product)}><Icon icon="fa6-solid:cart-plus" /></Button>
                    </div>
                </div>
            </Card>
        </div>
        {/await}
    {/each}
{/if}

<style>
    .product-name{
        line-height: 1.2;
    }
</style>