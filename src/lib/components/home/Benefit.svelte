<script>
    import { loadTranslations, t } from "$lib/translations";
</script>
<div class="relative w-full min-h-screen">
    <div class="absolute w-full h-full top-0 z-10 text-center">
        <div class="flex justify-center items-center flex-col h-full text-black dark:text-white ">
            <h2 class="2xl:text-6xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold drop-shadow-lg shadow-black mb-10 brightness-200 uppercase">{$t("homepage.benefit")}</h2>
            <div class="2xl:w-2/4 xl:w-2/4 md:w-4/5 sm:w-9/12 w-full 2xl:text-xl xl:text-xl md:text-xl sm:text-lg text-lg">
                <p class="w-full">
                    {$t("homepage.benefitDesc1")} <br><br> {$t("homepage.benefitDesc2")}
                </p>
            </div>
        </div>
        
    </div>
    <div class="w-full h-screen flex items-center justify-center relative drop-shadow-xl">
        <img src="/images/homepage/benefit.jpg" alt="benefit" class="benefit-image-1 animate-pulse h-3/4" >
        <img src="/images/homepage/benefit2.jpg" alt="benefit" class="benefit-image-2 animate-pulse h-3/4" >
        <div class="absolute w-full h-full bg-white dark:bg-black z-10 bg-opacity-30 dark:bg-opacity-40"></div>
    </div>
</div>
<style>
    .benefit-image-1{
        animation: moving_1 ease 6s infinite;
        border-radius: 50%;
    }
    .benefit-image-2{
        animation: moving_2 ease 6s infinite;
        border-radius: 50%;
        position: absolute;
    }
    @keyframes moving_1 {
        0%{
            transform: rotateY(0deg);
            z-index: 1;
        }
        50%{
            transform: rotateY(180deg);
            z-index: 0;
        }
        100%{
            transform: rotateY(0deg);
            z-index: 1;
        }
    }
    @keyframes moving_2 {
        0%{
            transform: rotateY(0deg);
            z-index: 0;
        }
        50%{
            transform: rotateY(180deg);
            z-index: 1;
        }
        100%{
            transform: rotateY(0deg);
            z-index: 0;
        }
    }
</style>