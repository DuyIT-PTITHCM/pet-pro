<script lang="ts">
    import { Button, CardPlaceholder } from "flowbite-svelte";
    import { HOST } from "$lib/Const";
    import { onMount } from "svelte";

    export let blogs: any = null;
    let host = HOST;
    let serviceBoxWidth = 0;
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
        var descriptionElement = document.getElementById(`blog${id}`);
        if (descriptionElement.scrollHeight > descriptionElement.clientHeight) {
            showReadMore[id] = true;
        } else {
            showReadMore[id] = false;
        }
    }
</script>

{#if blogs}
    {#each blogs as blog, index}
        {#await getImage(blog.imageUrl)}
            <div class="w-full">
                <CardPlaceholder size="lg" />
            </div>
        {:then res}
            <a href="/"
                class="flex rounded-lg overflow-hidden border hover:shadow-lg dark:text-white max-h-[140px]" bind:clientWidth={serviceBoxWidth}
            >
                <div class="overflow-hidden" style="width: {serviceBoxWidth*30/100}px;">
                    <img
                    src={host + blogImages[0]}
                    alt={blog.title}
                    class="w-full h-full object-cover hover:scale-105 transition-all"/>
                </div>
                <div class="md:p-4 p-3 flex-1">
                    <div class="flex flex-col justify-between items-start">
                        <h3 class="md:text-lg text-base font-semibold line-clamp-2">{blog.title}</h3>
                        <p
                            class="md:text-base text-sm mt-1 line-clamp-2 text-justify relative"
                            id="blog{index}"
                            use:onMount={checkDescriptionHeight(index)}
                        >
                            <span>{blog.description}</span>
                            {#if showReadMore[index]}
                                <a
                                    href="/"
                                    class="absolute bg-white dark:bg-slate-800 z-20 bottom-0 right-0"
                                    >...<span class=" text-blue-500">Xem thêm</span
                                    ></a
                                >
                                {/if}
                        </p>
                    </div>
                </div>
            </a>
        {/await}
    {/each}
{/if}