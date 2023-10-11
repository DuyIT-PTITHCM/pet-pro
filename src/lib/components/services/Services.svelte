<script lang="ts">
    import { Button, CardPlaceholder } from "flowbite-svelte";
    import { HOST } from "$lib/Const";
    import { onMount } from "svelte";
    export let services: any = null;
    let host = HOST;
    let imageWidth = 0;
    async function convertImageJsonToArray(json: any) {
        if (json) {
            return await JSON.parse(json);
        }
        return [];
    }
</script>

{#if services}
    {#each services as service, index}
        {#await convertImageJsonToArray(service.imageUrl)}
            <div class="w-full">
                <CardPlaceholder size="lg" />
            </div>
        {:then res}
            <div
                class="service-box rounded-lg overflow-hidden dark:text-white relative" bind:clientWidth={imageWidth}
                style="min-height: {imageWidth*60/100}px; max-height: 220px"
            >
                <img
                    src={host + res[0]}
                    alt={service.title}
                    class="w-full h-full object-cover"
                    
                />
                <div class="service-box_overlay absolute w-full h-full top-0 left-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 transition-all"></div>
                <div
                    class="xl:p-4 p-2 absolute z-10 top-0 w-full h-full flex justify-center items-center flex-col dark:text-white"
                >
                    <h5 class="md:text-xl mb-4 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 p-2 px-4 rounded-full text-center line-clamp-2">{service.title}</h5>
                    <div class="service-desc hidden">
                        <p
                        class="line-clamp-3 overflow-ellipsis text-justify relative mb-4"
                        >
                            {service.description}
                        </p>
                    </div>
                    <Button href="/" color="primary">Xem thêm</Button>
                </div>
            </div>
        {/await}
    {/each}
{/if}

<style>
     .service-box .service-box_overlay{
        clip-path: circle(0% at 50% 0%);
        margin: 0;
        border-radius: 0;
     }
    .service-box:hover .service-box_overlay {
        clip-path: circle(100% at 50% 100%);
        animation:  clip-path 1s;
    }
    @keyframes hoverAnimate {
        from {
            clip-path: polygon(100% 0, 18% 25%, 20% 83%, 100% 100%, 0 100%, 0% 60%, 0 0);
        }
        to{
            clip-path: polygon(100% 0, 100% 100%, 25% 85%, 100% 100%, 0 100%, 0% 60%, 0 0);
        }
    }
    .service-box:hover>div>.service-desc{
        display: block;
    }
</style>
