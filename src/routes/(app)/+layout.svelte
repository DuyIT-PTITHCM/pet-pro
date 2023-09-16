<script>
    import Loading from "$lib/components/common/Loading.svelte";
    import "../../app.css";
    import Header from "$lib/components/header/Header.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";

    export let data;
</script>

<svelte:head>
    <title>Trang chủ - Cửa hàng thú cưng Pet One</title>
    <meta
        name="description"
        content="Cửa hàng thú cưng chuyên cung cấp các sản phẩm và dịch vụ cho thú cưng của bạn."
    />
    <link rel="canonical" href="http://103.142.26.42/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta charset="UTF-8" />

    <meta property="og:title" content="Trang chủ - Cửa hàng thú cưng Pet One" />
    <meta
        property="og:description"
        content="Cửa hàng thú cưng chuyên cung cấp các sản phẩm và dịch vụ cho thú cưng của bạn."
    />
    <meta
        property="og:image"
        content="/images/logo.png"
    />
    <meta property="og:url" content="http://103.142.26.42/" />

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
