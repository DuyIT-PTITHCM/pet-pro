<script>
    import CarouselCustom from '../carouselcus/CarouselCustom.svelte'
    const clientsays = [
        {
            id: 0,
            name: 'Rosé',
            address: 'BlackPink',
            avatar: 'https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/13/tieu-su-ca-si-rose-blackpink-12-167628252304049682913.jpg',
            message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our workWe make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our workWe make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our workWe make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."          
        },
        {
            id: 1,
            name: 'Lisa',
            address: 'BlackPink',
            avatar: 'https://image.baogialai.com.vn/w800/dataimages/202110/original/images3084255_1gt.jpg',
            message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."          
        },
        {
            id: 2,
            name: 'Jennie',
            address: 'BlackPink',
            avatar: 'https://tieusu.com/wp-content/uploads/2023/06/Jennie-blackpink-1.jpg',
            message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."          
        },
        {
            id: 3,
            name: 'Jisoo',
            address: 'BlackPink',
            avatar: 'https://vcdn1-ngoisao.vnecdn.net/2023/08/04/3-1691137255.jpg?w=460&h=0&q=100&dpr=1&fit=crop&s=7ovbnryib6yV5ny1j7q-wA',
            message: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."          
        }
    ]
    let controls = false
</script>
<!-- Client say about us -->
<div class="home-content clientsay-box-content bg-fixed w-full min-h-screen relative">
    <div class="absolute w-full h-full bg-white dark:bg-black z-10 bg-opacity-10 dark:bg-opacity-40"></div>
    <!-- <div class="overlay"></div> -->
    <h1 class="content-heading clientsay-heading text-white z-10">What our clients say about us</h1>
    <div class="content-clientsa w-full z-10">
        <CarouselCustom autoplay={10000} {controls} perPage={1}>
            {#each clientsays as clent, index (index)}
              <div class="clientsay-client md:w-2/4 sm:w-full mx-auto">
                <img class="client-avatar mx-auto" src={clent.avatar} alt={clent.name}>
                <p class="mb-2 text-2xl font-bold tracking-tight text-white">{clent.name}</p>
                <p class="mb-2 text-md font-bold tracking-tight text-white">{clent.address}</p>
                <p class="client-message mb-10 font-normal text-gray-100 2xl:text-xl xl:text-xl md:text-xl sm:text-lg text-lg">{clent.message}</p>
              </div>
            {/each}
            <span slot="left-control">Left</span>
            <span slot="right-control">Right</span>
        </CarouselCustom>
    </div>
</div>

<style>
    .home-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px;
        position: relative;
    }
    .content-heading {
        font-size: 34px;
        margin-bottom: 20px;
        font-weight: 600;
    }
    
    /* Client say */
    .clientsay-box-content{
        background-image: url(/images/homepage/lientsaybg.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .clientsay-client{
        text-align: center;
    }
    .client-avatar{
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 4px 10px black;
    }
    .client-message{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; /* Số dòng tối đa hiển thị */
        overflow: hidden;
        text-shadow: 0 0 10px black;
    }
</style>
