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
        slug: null,
        categoryId: null,
        prices: [],
        imageUrl: '',
    };
    let queryParams = {
        type: "service",
    };
</script>

<CreateArticle IsService bind:article  bind:queryParams/>
