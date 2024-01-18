<script lang="ts">
    import Loading from "$lib/components/common/Loading.svelte";
    import "../../app.css";
    import Header from "$lib/components/header/Header.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import Icon from "@iconify/svelte";
    import ToastError from "$lib/components/common/ToastError.svelte";
    import { Popover } from "flowbite-svelte";
    import Chat from "$lib/components/chat/Chat.svelte";

    export let data;
    let placement   ;
    function onTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Thêm thuộc tính này để có hiệu ứng cuộn mượt
        });
    }
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
<div class="min-h-screen flex flex-col">
{#if data?.menu?.length > 0}
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
<div class="fixed right-0 bottom-0 flex flex-col mr-2 text-2xl z-50">
    <!-- <button class="transition-all p-3 bg-black text-white rounded-full mb-2 cursor-pointer" 
    id="chatbox" on:mouseenter={() => (placement = 'left')}>
        <Icon icon="ant-design:message-filled" rotate={3} />
    </button> -->
    <button class="transition-all p-3 bg-black text-white rounded-full mb-2" on:click={onTop}><Icon icon="bxs:up-arrow" /></button>
</div>
<!-- <Popover triggeredBy="#chatbox" {placement} trigger="click" class="w-[400px] h-[500px] text-sm font-light z-50">
    <Chat/>
</Popover> -->