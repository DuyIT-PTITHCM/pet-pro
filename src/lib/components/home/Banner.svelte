<script>
  import { CarouselTransition } from 'flowbite-svelte';
  import { loadTranslations, t } from "$lib/translations";
  const images = [
    {
      id: 0,
      name: 'Cosmic timetraveler',
      imgurl: '/images/home-panner/1.jpg',
      attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
    {
      id: 1,
      name: 'Cristina Gottardi',
      imgurl: '/images/home-panner/2.jpg',
      attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },
    {
      id: 2,
      name: 'Johannes Plenio',
      imgurl: '/images/home-panner/3.jpg',
      attribution: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
    },
    {
      id: 3,
      name: 'Jonatan Pie',
      imgurl: '/images/home-panner/4.jpg',
      attribution: 'jonatan-pie-3l3RwQdHRHg-unsplash.com'
    },
    {
      id: 4,
      name: 'Mark Harpur',
      imgurl: '/images/home-panner/5.jpg',
      attribution: 'mark-harpur-K2s_YE031CA-unsplash'
    },
    {
      id: 5,
      name: 'Pietro De Grandi',
      imgurl: '/images/home-panner/6.jpg',
      attribution: 'pietro-de-grandi-T7K4aEPoGGk-unsplash'
    }
  ];

</script>

<div class="w-full min-h-screen home-banner overflow-hidden relative">
  <CarouselTransition {images} divClass="slide w-full overflow-hidden relative" loop transitionType="slide" transitionParams={{ duration: 2000 }} showIndicators={false} showCaptions={false} showThumbs={false} slideControls={false} duration={10000} />
  <div class="absolute w-full h-full top-0 flex flex-col items-center justify-center bg-opacity-5 dark:bg-opacity-40 bg-black">
    <div class="text-center 2xl:w-2/4 xl:w-2/4 md:w-3/4 sm:w-4/5 w-full mx-5">
      <h1 class="2xl:text-8xl xl:text-8xl md:text-7xl sm:text-5xl text-6xl font-bold text-white drop-shadow-lg shadow-black mb-10 brightness-200 uppercase">pet one</h1>
      <p class="2xl:text-3xl xl:text-3xl md:text-3xl sm:text-3xl text-xl uppercase font-bold text-white drop-shadow-lg shadow-black brightness-200 text-center m-6 tracking-wide">{$t("homepage.slogan")}</p>
      <p class="2xl:text-lg xl:text-lg md:text-lg sm:text-base text-sm text-white drop-shadow-lg shadow-black brightness-200 text-center mx-4">{$t("homepage.description")}</p>
    </div>
  </div>
</div>
<style>
</style>