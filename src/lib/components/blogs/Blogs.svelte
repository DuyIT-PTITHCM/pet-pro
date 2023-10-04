<script lang="ts">
    import { CardPlaceholder } from "flowbite-svelte";
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


    function checkDescriptionHeight(id : number) {
    var descriptionElement = document.getElementById((`blog${id}`));
    if (descriptionElement.scrollHeight > descriptionElement.clientHeight) {
        showReadMore[id] = true;
        console.log(descriptionElement?.innerText+"! true " + id + showReadMore[id])
        if (descriptionElement.classList.contains('overflow-ellipsis')) {
    // Lấy nội dung của phần tử
    var descriptionInnerHTML = descriptionElement.innerHTML;
    console.log(descriptionInnerHTML);
  }

    } else {
      showReadMore[id] = false;
      console.log("! false " + id)
    }
  };
</script>
{#if blogs}
    {#each blogs as blog, index}
        {#await getImage(blog.imageUrl)}
        <div class="w-full">
            <CardPlaceholder size="lg" />
        </div>
        {:then res}
        <div class="flex rounded-lg overflow-hidden border hover:opacity-80 hover:shadow-lg dark:text-white">
            <img src="{host+blogImages[0]}" alt="{blog.title}" class="h-[200px] w-[300px] object-cover hover:scale-105 transition-all">
            <div class="p-4">
                <h5>{blog.title}</h5>
                <p
                class="absolute line-clamp-5 overflow-ellipsis"
                id="blog{index}"
                use:onMount={checkDescriptionHeight(index)}
                >
                <span>{blog.description}</span>
                {#if showReadMore[index]}
                    <a href="/" class="absolute bg-white z-20 bottom-0">...<span class=" text-blue-500">Xem thêm</span></a>
                {/if}
                </p>
            </div>
            
        </div>
        {/await}
    {/each}
{/if}