<script lang="ts">
    import { Button, CardPlaceholder } from "flowbite-svelte";
    import { HOST } from "$lib/Const";
    import { onMount } from "svelte";

    export let blogs: any = null;
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
            <div
                class="flex rounded-lg overflow-hidden border hover:opacity-80 hover:shadow-lg dark:text-white"
            >
                <div class="w-[300px] bg-black overflow-hidden">
                    <img
                    src={host + blogImages[0]}
                    alt={blog.title}
                    class="w-[300px] h-[250px] object-cover hover:scale-105 transition-all"/>
                </div>
                <div class="p-4 flex-1">
                    <div class="flex flex-col justify-between h-full items-start">
                        <h5>{blog.title}</h5>
                        <p
                            class="line-clamp-4 overflow-ellipsis text-justify relative"
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
                        <Button class="px-10">Xem thêm</Button>
                    </div>
                </div>
            </div>
        {/await}
    {/each}
{/if}