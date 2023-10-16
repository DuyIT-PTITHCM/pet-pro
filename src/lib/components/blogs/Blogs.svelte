<script lang="ts">
    import { Button, CardPlaceholder } from "flowbite-svelte";
    import { HOST } from "$lib/Const";
    import { onMount } from "svelte";

    export let blogs: any = null;
    export let isSmallBox = false;
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
            <a data-sveltekit-reload href="/tin-tuc/{blog.slug}"
                class="flex overflow-hidden dark:text-white max-h-[140px] {isSmallBox ? 'py-4 hover:text-primary-500' : 'rounded-lg border hover:shadow-lg '} " bind:clientWidth={serviceBoxWidth}
            >
                <div class="overflow-hidden" style="width: {serviceBoxWidth*30/100}px;">
                    <img
                    src={host + res[0]}
                    alt={blog.title}
                    class="w-full h-full object-cover hover:scale-105 transition-all"/>
                </div>
                <div class="{isSmallBox ? 'p-1' : 'md:p-4 p-3'} flex-1">
                    <div class="flex flex-col justify-between items-start">
                        <h3 class="{isSmallBox ? 'text-base line-clamp-3 text-justify ' : 'md:text-lg text-base line-clamp-2'} font-semibold">{blog.title}</h3>
                        <p
                            class="{isSmallBox && 'xl:hidden'} md:text-base text-sm mt-1 line-clamp-2 text-justify relative overflow-hidden"
                            id="blog{index}"
                            use:onMount={checkDescriptionHeight(index)}
                        >
                            <span>{blog.description}</span>
                            {#if showReadMore[index]}
                                <p
                                    class="absolute bg-white dark:bg-slate-800 z-20 bottom-0 right-0"
                                    >...<span class=" text-blue-500">Xem thêm</span
                                    ></p
                                >
                            {/if}
                        </p>
                    </div>
                </div>
            </a>
            {#if isSmallBox}
                <hr>
            {/if}
        {/await}
    {/each}
{/if}