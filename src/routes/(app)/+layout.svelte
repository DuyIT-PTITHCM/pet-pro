<script>
    import Loading from "$lib/components/common/Loading.svelte";
    import "../../app.css";
    import Header from "$lib/components/header/Header.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import Icon from "@iconify/svelte";
    import ToastError from "$lib/components/common/ToastError.svelte";

    export let data;
</script>

<!-- <svelte:head>
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
</svelte:head> -->
<div id="ontop"></div>
<div class="min-h-screen flex flex-col">
{#if data.menu.length > 0}
    <Header bind:menuProp={data.menu} />
{/if}
    <main>
        <slot />
    </main>
    <div class="mt-auto">
        <Footer />
    </div>
    <Loading />
</div>
<ToastError />
<a href="#ontop" class="p-4 bg-black bottom-0 right-0 fixed text-white rounded-full text-xl font-bold mb-3 mr-3 animate-spin z-50"><Icon icon="bxs:up-arrow" /></a>
