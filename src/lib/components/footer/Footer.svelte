<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Button, Modal } from 'flowbite-svelte'
    let defaultModal = false;
    const social = [
        {
            name: "facebook",
            url: "https://www.facebook.com/tri1890?locale=vi_VN",
            image: 'line-md:facebook'
        },
        {
            name: "youtube",
            url: "https://www.youtube.com/",
            image: 'ant-design:youtube-filled'
        },
        {
            name: "instagram",
            url: "/",
            image: 'ri:instagram-fill'
        },
        {
            name: "tiktok",
            url: "/",
            image: 'mingcute:tiktok-fill'
        },
    ];
    const services = [
            {
                id: 0,
                name: 'Pet care',
                description: 'Pet care includes all the tasks related to ensuring the safety and happiness of pets, such as feeding, brushing, walking, playing, and taking pets to the veterinarian.',
                image: 'https://thuythithi.com/wp-content/uploads/2020/05/3-tieu-chi-danh-gia-chat-luong-dich-vu-cham-soc-thu-cung-tai-nha.jpg',
                url: '/'
            },
            {
                id: 1,
                name: 'Pet boarding',
                description: 'Pet boarding is the act of ensuring the safety and happiness of pets when their owners are not home, such as feeding, brushing, walking, and playing with pets.',
                image: 'https://vcdn-kinhdoanh.vnecdn.net/2019/02/03/ks-cho-meo500-5587-1549156792.jpg',
                url: '/'
            },
            {
                id: 2,
                name: 'Grooming',
                description: 'Grooming is the act of caring for the appearance of pets, such as bathing, trimming hair, clipping nails, and cleaning ears.',
                image: 'https://mypet.vn/wp-content/uploads/2020/09/spa-thu-cung-2.jpg',
                url: '/'
            },
            {
                id: 3,
                name: 'Pet agency',
                description: 'Pet agencies provide pet buying and selling services.',
                image: 'https://zoipet.com/wp-content/uploads/2022/09/dich-vu-cham-soc-Copy.jpg',
                url: '/'
            },
            {
                id: 4,
                name: 'Pet store',
                description: 'Pet stores offer products and services for pets, such as food, toys, veterinary medicine, and pet care services.',
                image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg',
                url: '/'
            },
            {
                id: 5,
                name: 'Pet training school',
                description: 'Pet training schools offer pet training courses that help pets to be more obedient and behave better.',
                image: 'https://www.akc.org/wp-content/uploads/2021/01/031619_NOC_32099.jpg',
                url: '/'
            },
            {
                id: 6,
                name: 'Pet news website',
                description: 'Pet news websites provide news and information about pets, such as pet health, nutrition, care, and training.',
                image: 'https://www.petswelcome.com/wp/wp-content/uploads/2019/08/31444417_s.jpg',
                url: '/'
            },
            {
                id: 7,
                name: 'Pet community website',
                description: 'Pet community websites are where pet owners can share information, experiences, and love for their pets.',
                image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/1/840744/Loat-Anh-Dang-Yeu-Cu.jpg',
                url: '/'
            }
        ];
    const legal = [
        {
            name: 'Terms of Use',
            url: '/'
        },
        {
            name: 'Privacy Policy',
            url: '/'
        },
        {
            name: 'Licensing',
            url: '/'
        },
        {
            name: 'Contact',
            url: '/'
        },
        {
            name: 'career',
            url: '/'
        }
    ]
</script>


<footer class="relative overflow-x-hidden bg-slate-800">
    <div class="absolute w-full h-full overflow-hidden">
        <ul class="background">
            <li><img class="w-full h-full object-cover" src="/images/home-panner/1.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/signupbg.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/2.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/3.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/4.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/5.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/6.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/common/cat-bg.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/1.jpg" alt=""/></li>
            <li><img class="w-full h-full object-cover" src="/images/home-panner/1.jpg" alt=""/></li>
         </ul>
    </div>
    <!-- https://www.icegif.com/wp-content/uploads/2023/02/icegif-519.gif -->
    <div  class="z-10 relative">
        <div class="flex items-center justify-center flex-col relative w-full h-full bg-black bg-opacity-60 ">
            <div class="footer-info mb-20 mt-10 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:w-4/5 md:w-4/5 sm:mx-4 gap-4 ">
                <div class="w-full rounded-lg p-5 xl:col-span-2 md:col-span-3 sm:col-span-1 grid grid-cols-1 ">
                    <div class="flex items-center">
                        <img src="/images/logo.png" alt="" 
                        class="2xl:w-32 xl:w-32 lg:w-28 md:w-28 sm:w-20 w-20">
                        <p class="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold text-white ml-3">PetOne™</p>
                    </div>
                    <p class="text-justify text-white text-md col-span-2">We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work.</p>
                    <p class="my-4 text-white text-md col-span-2">Address: No. 47, Thu Duc District, Ho Chi Minh City, Viet Nam</p>
                    <Button on:click={() => defaultModal = true}>Show Map</Button>
                    <Modal title="Our Address" bind:open={defaultModal} autoclose>
                        <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6182334436364!2d106.7104288413416!3d10.832829612542865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752862ecc20187%3A0x167a5cd7990e165d!2sCaf%C3%A9%20Tony%20Riverside!5e0!3m2!1svi!2s!4v1691516641496!5m2!1svi!2s" width="100" height="450" style="border:0;" allowfullscreen loading="lazy" title="maps" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <svelte:fragment slot='footer'>
                          <Button color="alternative">Ok</Button>
                        </svelte:fragment>
                      </Modal>
                </div>
                <!-- <div class="w-full rounded-lg sm:col-span-1">
                    <ul class="text-white footer-list">
                        <ol class="border-b-2 border-white border-opacity-30 rounded-lg py-2 px-6 uppercase text-xl font-semibold">service</ol>
                        {#each services as item}
                            <li><a href={item.url}>{item.name}</a></li>
                        {/each}
                    </ul>
                </div> -->
                <div class="w-full rounded-lg">
                    <ul class="text-white footer-list">
                        <ol class="border-b-2 border-white border-opacity-30 rounded-lg py-2 px-6 uppercase text-xl font-semibold">company</ol>
                        {#each legal as item}
                            <li><a href={item.url}>{item .name}</a></li>
                        {/each}
                    </ul>
                </div>
                <div class="w-full rounded-lg">
                    <ul class="text-white footer-list">
                        <ol class="border-b-2 border-white border-opacity-30 rounded-lg py-2 px-6 uppercase text-xl font-semibold">social</ol>
                        {#each social as item}
                            <li><a href={item.url}><Icon class="footer-list-icon text-2xl" icon={item.image} /><span class="ml-3">{item .name}</span></a></li>
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="w-full absolute bottom-0 bg-black bg-opacity-50 mx-auto p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">PawCat™</a>. All Rights Reserved.
              </span>
              
            </div>
        </div>
    </div>
</footer>

<style>
    .footer-list a{
        display: block;
        width: 100%;
        padding: 10px 30px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        text-transform: capitalize;
    }
    .footer-list a:hover{
        box-shadow: 0 4px 4px rgba(255, 255, 255, 0.3) inset, 0 -4px 4px rgba(255, 255, 255, 0.3) inset;
        transition: box-shadow .6s;
        font-weight: 600;
    }

    /*  */
    @keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: .8;
        border-radius: 50%;
    }
}

.background {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.background li {
    position: absolute;
    overflow: hidden;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255);
    animation: animate 20s linear infinite;
}
.background li:nth-child(0) {
    left: 14%;
    width: 254px;
    height: 254px;
    bottom: -254px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 51%;
    width: 164px;
    height: 164px;
    bottom: -164px;
    animation-delay: 2s;
}
.background li:nth-child(2) {
    left: 41%;
    width: 140px;
    height: 140px;
    bottom: -140px;
    animation-delay: 9s;
}
.background li:nth-child(3) {
    left: 1%;
    width: 167px;
    height: 167px;
    bottom: -167px;
    animation-delay: 8s;
}
.background li:nth-child(4) {
    left: 45%;
    width: 107px;
    height: 107px;
    bottom: -107px;
    animation-delay: 19s;
}
.background li:nth-child(5) {
    left: 23%;
    width: 140px;
    height: 140px;
    bottom: -140px;
    animation-delay: 8s;
}
.background li:nth-child(6) {
    left: 3%;
    width: 131px;
    height: 131px;
    bottom: -131px;
    animation-delay: 12s;
}
.background li:nth-child(7) {
    left: 47%;
    width: 202px;
    height: 202px;
    bottom: -202px;
    animation-delay: 18s;
}
.background li:nth-child(8) {
    left: 77%;
    width: 145px;
    height: 145px;
    bottom: -145px;
    animation-delay: 10s;
}
.background li:nth-child(9) {
    left: 63%;
    width: 244px;
    height: 244px;
    bottom: -244px;
    animation-delay: 3s;
}
</style>