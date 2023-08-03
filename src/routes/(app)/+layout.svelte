<script>
    import "../../app.css";
    import { title, description } from "$lib/store/meta";
    import Header from "$lib/components/header/Header.svelte";
</script>
<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>
<Header/>
<main>
    <slot />
</main>
