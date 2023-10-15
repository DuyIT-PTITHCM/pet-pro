<script lang="ts">
    export let post: any;
    function getMenuHeading(){
        var postContent = document.getElementById('postcontent')
        var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    }

    function init(){
        getMenuHeading()
    }
</script>
<div class="md:grid md:grid-cols-10 gap-4 dark:text-slate-50">
    <div class="p-5 md:col-span-2 border rounded-xl">
        <div class="">
            <h3 class="uppercase">{post?.title}</h3>
            <p>Author: {post?.author}</p>
            <p>Date: {post?.updatedAt}</p>
        </div>
        <div class="w-full h-9 bg-red-600 sticky top-[100px]"></div>
    </div>
    <div id="postcontent" class="post-container overflow-hidden md:col-span-8">
        {@html post?.content}
    </div>
</div>
<style>
    
</style>