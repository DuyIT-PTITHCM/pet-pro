<script>
  import { Carousel, CarouselTransition } from "flowbite-svelte";
  const images = [
    {
      id: 0,
      name: "Cosmic timetraveler 1",
      imgurl:
        "https://www.clarksonvillagevet.com/wp-content/uploads/sites/277/2022/05/25-1024x373.png",
      description: "image1",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      classname: "ka",
    },
    {
      id: 1,
      name: "Cosmic timetraveler 2",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      imgurl:
        "https://www.bluestarvet.com/wp-content/uploads/2018/11/pet-exam.jpg",
      description: "image2",
    },
    {
      id: 2,
      name: "Cosmic timetraveler 2",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      imgurl:
        "https://www.lemonade.com/content-hub/pet/wp-content/uploads/2022/10/cattvfeatured.jpg",
      description: "image2",
    },
    {
      id: 3,
      name: "Cosmic timetraveler 2",
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
      imgurl:
        "https://www.beanbags.com.au/wp-content/uploads/2019/01/banner-canine-pet-beds-desktop.jpg",
      description: "image2",
    },
  ];
  let showThumbs = false;
  let showCaptions = false;
  let showIndicators = false;
  let slideControls = false;
  let slideClass = "div-image";
  let divClass = "overflow-hidden relative rounded-lg home-slide";
</script>

<div class="w-full home-panner">
  <Carousel
    {divClass}
    {images}
    {showThumbs}
    {showCaptions}
    loop
    {showIndicators}
    {slideClass}
    {slideControls}
    duration="5000"
  />
  <div class="home-panner_caption dark:bg-black/[.5]">
    <div class="caption-left md:w-2/4 text-white">
      <h1>We love your pets as if they were ours</h1>
      <br />
      <p>
        We love and care for your pet as its own. Our staff always put the
        welfare and health of pets and the satisfaction and peace of mind of our
        customers as our top goals.
        <br /> <br />
        With experience and passion, we are committed to providing the best care
        for your pet. Let us accompany you in the care and upbringing of your lovely
        companion. Here, we understand the importance of the special relationship
        between you and your pet.
      </p>
    </div>
  </div>
</div>

<style>
  .home-panner {
    position: relative;
  }
  .home-panner_caption {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .caption-left {
    line-height: 1.6;
    padding: 8px;
  }
  .caption-left h1 {
    text-shadow: 0 0 20px white;
    font-size: 34px;
  }
  .caption-left p {
    text-align: justify;
    text-shadow: 0 0 20px white;
  }
</style>
