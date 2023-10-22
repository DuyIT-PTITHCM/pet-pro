<script lang="ts">
    import { formatDate } from "$lib/Utils/common";
    import Icon from "@iconify/svelte";
    import SideMenuHeading from "../common/SideMenuHeading.svelte";

    export let post: any;
    
</script>
<div class="md:grid md:grid-cols-12 gap-4 dark:text-slate-50 mt-[40px] px-3">
    <div class="p-2 md:col-span-3 border rounded-lg dark:border-gray-600">
        <div class="text-sm my-2">
            <h3 class="uppercase sm:text-lg text-base">{post?.title}</h3>
            <p class="flex items-centerpx-2 my-2"><Icon icon="fa6-solid:user-pen" class="mr-2 text-xl w-8"/> {post?.author}</p>
            <p class="flex items-centerpx-2"><Icon icon="svg-spinners:clock" class="mr-2 text-xl w-8"/>{formatDate(post?.updatedAt)}</p>
        </div>
        <div class="w-full sticky top-[70px] dark:border-gray-600 px-2">
            <SideMenuHeading/>
        </div>
    </div>
    <div id="postcontent" class="post-container overflow-hidden md:col-span-9 sm:mt-0 mt-4 sm:text-base text-sm">
        {@html post?.content}
    </div>
</div>
<style>
    
</style>