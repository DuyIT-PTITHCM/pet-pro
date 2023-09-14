<script>
    import Loading from "$lib/components/common/Loading.svelte";
    import "../../app.css";
    import { title, description } from "$lib/store/meta";
    import Header from "$lib/components/header/Header.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";

    export let data;
</script>

<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>
{#if data.menu.length > 0}
    <Header bind:menuProp={data.menu} />
{/if}
<main>
    <slot />
</main>
<Footer />
<Loading />
