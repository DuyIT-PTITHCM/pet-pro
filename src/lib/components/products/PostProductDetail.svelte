<script lang="ts">
    export let post: any;
</script>
<div class="grid md:grid-cols-10 gap-4">
    <div class="p-5 col-span-2 border rounded-xl">
        <h3 class="uppercase">{post.title}</h3>
        <p>Author: {post.author}</p>
        <p>Date: {post.updatedAt}</p>
    </div>
    <div class="post-container overflow-hidden col-span-8">
        {@html post?.content}
    </div>
</div>
<style>
    
</style>