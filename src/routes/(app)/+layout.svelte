<script>
	import Loading  from '$lib/components/common/Loading.svelte';
    import "../../app.css";
    import { title, description } from "$lib/store/meta";
    import Header from "$lib/components/header/Header.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
</script>
<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>
<Header/>
<main>
    <slot />
</main>
<Footer/>
<Loading />