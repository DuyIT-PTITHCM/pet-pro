<script>
    import {
        Carousel,
        Banner,
        Skeleton,
        ImagePlaceholder,
    } from "flowbite-svelte";
    const images = [
        {
            id: 0,
            name: "Cosmic timetraveler",
            imgurl: "https://img.freepik.com/premium-vector/cute-white-cat-kitten-have-purrrrfect-day-banner-cartoon-animal-hand-drawing-vector_44161-1315.jpg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            id: 1,
            name: "Cosmic timetraveler timetraveler",
            imgurl: "https://st3.depositphotos.com/21892936/32750/v/450/depositphotos_327506522-stock-illustration-banner-kawaii-family-cat-loving.jpg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            id: 2,
            name: "Cosmic timetraveler",
            imgurl: "https://img.freepik.com/premium-vector/cute-white-cat-kitten-have-purrrrfect-day-banner-cartoon-animal-hand-drawing-vector_44161-1315.jpg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            id: 3,
            name: "Cosmic timetraveler timetraveler",
            imgurl: "https://st3.depositphotos.com/21892936/32750/v/450/depositphotos_327506522-stock-illustration-banner-kawaii-family-cat-loving.jpg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
    ];
</script>

<div class="home-banner">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="py-4" />

    <Banner
        id="default-banner"
        position="absolute"
        classDiv="dark:bg-green-500 dark:border-green-400"
    >
        <p
            class="flex items-center text-sm font-normal text-gray-500 dark:text-white"
        >
            Overwriting divClass and innerClass
        </p>
    </Banner>
</div>
<div class="max-w-4xl">
    <Carousel {images} />
</div>

<style>
    .home-banner {
        position: relative;
    }
</style>
