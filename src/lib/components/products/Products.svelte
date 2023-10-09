<script lang="ts">
    import { Button, Card, CardPlaceholder } from "flowbite-svelte";
    import { formatCurrency } from "$lib/Utils/accounting";
    import Icon from "@iconify/svelte";
    import CarouselCustom from "../carouselcus/CarouselCustom.svelte";
    import { HOST } from "$lib/Const";
    import { addCart } from "$lib/Utils/cartAction";

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

    async function addToCart(prod: any){
        await addCart(prod);
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
            <Card class="min-w-full overflow-hidden" padding="none">
                <CarouselCustom perPage={1}  duration={400}>
                    {#each res as path, i}
                        <img src={!path ? "/images/logo.png" : `${host}` + "/" + path} class="rounded w-full mb-4 h-[350px] object-cover" alt="{product?.productName}" />
                    {/each}
                </CarouselCustom>
                
                <div class="px-5 pb-5">
                    <a href="/san-pham/{product.slug}">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white py-4 hover:text-primary-600 dark:hover:text-primary-500">{product?.productName}</h5>
                        <p class="tracking-tight text-gray-900 dark:text-white line-clamp-2 min-h-[50px] hover:text-primary-600 dark:hover:text-primary-500">{product.description}</p>
                    </a>
                    <div class="flex justify-between items-center mt-4">
                        <div>
                            <span class="text-xl font-bold text-primary-600 dark:text-white">{formatCurrency(product?.price)}</span>
                            {#if product.discount>0}
                            <br><del>{formatCurrency(product?.originprice)}</del>
                            {/if}
                        </div>
                        <div class="flex float-right">
                            <Button outline class="mr-1 text-2xl" href="/"><Icon icon="solar:cart-3-bold" /></Button>
                            <Button outline class="text-2xl" on:click={() => addToCart(product)}><Icon icon="fa6-solid:cart-plus" /></Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        {/await}
    {/each}
{/if}