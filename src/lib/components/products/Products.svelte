<script lang="ts">
    import { Button, Card, Carousel, Rating } from "flowbite-svelte";
    import { formatCurrency } from "$lib/Utils/accounting";
    import Icon from "@iconify/svelte";
    import CarouselCustom from "../carouselcus/CarouselCustom.svelte";

    export let products: any;
    let host = "http://103.142.26.42";

    function convertImageJsonToArray(json: any) {
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
{#each products as product}
    
<div class="relative">
    {#if product.discount > 0}
        <div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">
            {product.discount}% discount
        </div>
    {/if}
    <Card class="min-w-full" padding="none">
        <!-- <Carousel class="w-full" images={getProductImage(convertImageJsonToArray(product?.images))} slideClass="w-full" imgClass="w-full h-[400px] object-cover" showCaptions={false} showThumbs={false}/> -->
        <CarouselCustom perPage={1} autoplay={4000} duration={400}>
            {#each convertImageJsonToArray(product?.images) as path, i}
                <img src={!path ? "/images/logo.png" : `${host}` + "/" + path} class="rounded-xl w-full mb-4 h-[400px] object-cover" alt="{product?.name}" />
            {/each}
        </CarouselCustom>
        <div class="px-5 pb-5">
            <a href="/san-pham/{product.slug}">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4">{product?.productName}</h5>
                <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px]">{product.description}</p>
            </a>
            <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(product?.price)}</span>
            </div>
            <div class="flex float-right">
                <Button class="mr-1 text-2xl" href="/"><Icon icon="solar:cart-3-bold" /></Button>
                <Button class="text-2xl" href="/"><Icon icon="fa6-solid:cart-plus" /></Button>
            </div>
        </div>
    </Card>
</div>
{/each}
