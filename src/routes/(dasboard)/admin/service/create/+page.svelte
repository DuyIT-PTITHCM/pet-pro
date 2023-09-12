<script lang="ts">
    import CreateArticle from "$lib/components/admin/article/CreateArticle.svelte";

    let article = {
        id: null,
        title: "",
        content: "",
        description: "",
        author: "",
        published_at: null,
        views: 0,
        categoryId: null,
        imageUrl: ''
    };
    let queryParams = {
        type: "service",
    };
</script>

<CreateArticle bind:article  bind:queryParams/>
