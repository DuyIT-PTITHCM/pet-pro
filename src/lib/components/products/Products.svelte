<script lang="ts">
    import { Button, Card, CardPlaceholder, Carousel, Rating } from "flowbite-svelte";
    import { formatCurrency } from "$lib/Utils/accounting";
    import Icon from "@iconify/svelte";
    import CarouselCustom from "../carouselcus/CarouselCustom.svelte";
    import { HOST } from "$lib/Const";

    export let products: any = null;
    let host = HOST;

    async function convertImageJsonToArray(json: any) {
        if (json) {
            return await JSON.parse(json);
        }
        return [];
    }
    async function getProductImage(images: any) {
        images = await convertImageJsonToArray(images);
        return images;
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
        <div class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-2xl border-l-8 border-t-4 border-red-600 -ml-2 transform z-10 animate-bounce">
            {product.discount}% discount
        </div>
    {/if}
    <Card class="min-w-full" padding="none">
        <CarouselCustom perPage={1}  duration={400}>
            {#each res as path, i}
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
{/await}
{/each}
{/if}