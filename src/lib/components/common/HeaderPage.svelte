<script lang="ts">
    import Icon from "@iconify/svelte";
    export let image = "/images/common/cat-bg.jpg";
    export let title = "PET ONE";
    export let isShowTime = false;
    export let isBgOverlay = false;
    export let author = "Pet One";
    export let titleClass = false;
    export let date = '';
    // export let date = new Date().toDateString();
    // function formatDate(inputDate: string){
    //     const newDate = new Date(inputDate);
    //     const day = newDate.getDate().toString().padStart(2, '0');
    //     const month = (newDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
    //     const year = newDate.getFullYear();
    //     return `${day}/${month}/${year}`;
    // }
</script>
<div class="w-full h-[360px] bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url({image});">
    <div class="{isBgOverlay && 'bg-title'} w-full h-full">
        <div class="container m-auto h-full w-full">
            <div class="flex justify-center items-center flex-col w-full h-full  text-white">
                {#if titleClass}
                    <p class="font-bold text-white md:text-xl text-lg text-center m-4">
                        {@html title}
                    </p>
                {:else}
                    <h1 class="lg:text-[38px] text-[28px] text-center m-4">{title}</h1>
                {/if}
                <div class="font-bold flex {isShowTime == false && 'hidden'}">
                    <p class="flex items-center border-x px-2"><Icon icon="fa6-solid:user-pen" class="mr-2 text-xl w-8"/> {author}</p>
                    <!-- <p class="flex items-center border-x px-2"><Icon icon="svg-spinners:clock" class="mr-2 text-xl w-8"/>{date ? formatDate(date) : date}</p> -->
                    <p class="flex items-center border-x px-2"><Icon icon="svg-spinners:clock" class="mr-2 text-xl w-8"/>{date}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .bg-title{
        background: rgb(180,58,124);
        background: linear-gradient(190deg, rgba(180,58,124,0.8) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(252,176,69,0.8) 100%);
        background: -webkit-linear-gradient(190deg, rgba(180,58,124,0.6) 0%, rgba(255, 106, 106, 0.2) 50%, rgba(255, 154, 14, 0.6) 100%);
    }
</style>