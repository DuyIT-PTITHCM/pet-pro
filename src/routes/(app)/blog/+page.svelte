<script>
    import { title, description } from "$lib/store/meta";
    title.set("blog page");
    description.set('blog page description');
</script>
<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>
<h1>blog</h1>