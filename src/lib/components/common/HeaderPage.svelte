<script lang="ts">
    import { formatDate } from "$lib/Utils/common";
    import Icon from "@iconify/svelte";
    export let image = "/images/common/cat-bg.jpg";
    export let title = "PET ONE";
    export let description = "WE LOVE YOUR PETS AS IF THEY WERE OURS";
    export let isShowTime = true;
    export let isBgOverlay = false;
    export let author = "Pet One";
    export let isDescription = false;
    export let date = '';
</script>
<div class="w-full h-[360px] bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url({image});">
    <div class="{isBgOverlay && 'bg-title'} w-full h-full">
        <div class="container m-auto h-full w-full">
            <div class="flex justify-center items-center flex-col w-full h-full  text-white">
                {#if isDescription}
                    <h1 class="uppercase 2xl:text-[48px] lg:text-[38px] text-[28px] text-center m-4">{title}</h1>
                    <p class="font-bold text-white md:text-xl text-lg text-center m-4">
                        {@html description}
                    </p>
                {:else}
                    <h1 class="uppercase lg:text-[38px] text-[28px] text-center m-4">{title}</h1>
                {/if}
                {#if isShowTime}
                    <div class="font-bold flex">
                        <p class="flex items-center border-x px-2"><Icon icon="fa6-solid:user-pen" class="mr-2 text-xl w-8"/> {author}</p>
                        <p class="flex items-center border-x px-2"><Icon icon="svg-spinners:clock" class="mr-2 text-xl w-8"/>{formatDate(date)}</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
<style>
    .bg-title{
        background: rgb(180,58,124);
        background: linear-gradient( 190deg, rgba(180,58,124,0.8) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(252,176,69,0.6) 100%);
        background: -webkit-linear-gradient(190deg, rgba(180,58,124,0.6) 0%, rgba(255, 106, 106, 0.2) 50%, rgba(255, 154, 14, 0.4) 100%);
    }
</style>