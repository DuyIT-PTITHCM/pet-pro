<script lang="ts">
    import { Button, CardPlaceholder } from "flowbite-svelte";
    import { HOST } from "$lib/Const";
    import { onMount } from "svelte";


    export let services: any = null;
    let host = HOST;
    let blogImages: any;
    let showReadMore = Array(1).fill(false);
    async function convertImageJsonToArray(json: any) {
        if (json) {
            return await JSON.parse(json);
        }
        return [];
    }
    async function getImage(images: any) {
        blogImages = await convertImageJsonToArray(images);
        return blogImages;
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
        {#await getImage(service.imageUrl)}
            <div class="w-full">
                <CardPlaceholder size="lg" />
            </div>
        {:then res}
            <a
                href="/"
                class="service-box rounded-lg overflow-hidden hover:shadow-lg hover:brightness-105 dark:text-white relative shadow-lg"
            >
                <img
                    src={host + blogImages[0]}
                    alt={service.title}
                    class="w-full h-[400px] rounded-full ml-[-40%] overflow-hidden object-cover transition-all"
                />
                <div
                    class="xl:p-10 p-2 absolute z-10 top-0 w-full h-full flex justify-center items-end flex-col hover:bg-white hover:bg-opacity-50"
                >
                    <h5>{service.title}</h5>
                    <div class="service-desc hidden">
                        <p
                        class="line-clamp-4 overflow-ellipsis text-justify relative m-4 lg:text-[18px] text-base"
                        id="service{index}"
                        use:onMount={checkDescriptionHeight(index)}
                        >
                            {service.description}
                        </p>
                    </div>
                    <Button href="/" color="primary">Xem thêm</Button>
                </div>
            </a>
        {/await}
    {/each}
{/if}

<style>
    .service-box:hover img {
        opacity: .9;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-left: 0;
    }

    .service-box:hover>div>.service-desc{
        display: block;
        font-weight: 500;
        line-clamp: 4;
    }
</style>
