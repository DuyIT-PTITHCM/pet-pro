<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
  
    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
      carousel.goToNext()
    }
  </script>
  
  {#if browser}
    <Carousel
      bind:this={carousel}
    >
      <div>
        <h1>anh duy</h1>
      </div>
      <div>Nguyen</div>
      <div>it</div>
    </Carousel>
  {/if}
  
  <button on:click={handleNextClick}>Next</button>