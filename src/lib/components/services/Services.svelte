<script lang="ts">
    import { Button, CardPlaceholder } from "flowbite-svelte";
    import { HOST } from "$lib/Const";
    import { onMount } from "svelte";


    export let services: any = null;
    let host = HOST;
    let showReadMore = Array(1).fill(false);
    async function convertImageJsonToArray(json: any) {
        if (json) {
            return await JSON.parse(json);
        }
        return [];
    }
    function checkDescriptionHeight(id: number) {
        var descriptionElement = document.getElementById(`service${id}`);
        if (descriptionElement.scrollHeight > descriptionElement.clientHeight) {
            showReadMore[id] = true;
        } else {
            showReadMore[id] = false;
        }
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
                class="service-box rounded-lg overflow-hidden hover:shadow-lg hover:brightness-105 dark:text-white relative shadow-lg"
            >
                <img
                    src={host + res[0]}
                    alt={service.title}
                    class="w-full h-[300px] object-cover transition-all"
                />
                <div
                    class="xl:p-10 p-2 absolute z-10 top-0 w-full h-full flex justify-center items-center flex-col bg-black bg-opacity-30 text-white"
                >
                    <h5>{service.title}</h5>
                    <div class="service-desc hidden">
                        <p
                        class="line-clamp-3 overflow-ellipsis text-justify relative m-4"
                        id="service{index}"
                        use:onMount={checkDescriptionHeight(index)}
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
     .service-box img{
        clip-path: circle(150% at 0 100%);

        margin: 0;
        border-radius: 0;
     }
    .service-box:hover img {
        clip-path: circle(50.0% at 0 100%);
        animation:  clip-path .6s;
    }
    @keyframes hoverAnimate {
        from {
            clip-path: polygon(100% 0, 100% 100%, 25% 85%, 100% 100%, 0 100%, 0% 60%, 0 0);
        }
        to{
        clip-path: polygon(100% 0, 18% 25%, 20% 83%, 100% 100%, 0 100%, 0% 60%, 0 0);

        }
    }
    .service-box:hover>div>.service-desc{
        display: block;
    }
</style>
