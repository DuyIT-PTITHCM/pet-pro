<script>
    import { title, description } from "$lib/store/meta";
    title.set("about page");
    description.set('description page');
</script>
<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>
<h1>hello about</h1>