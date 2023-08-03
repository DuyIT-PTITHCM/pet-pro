<script>
    import { title, description } from "$lib/store/meta";
    
</script>
<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>