<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Button, Modal } from 'flowbite-svelte'
    let defaultModal = false;
    const menu = [
        {
        name: "home",
        url: "/",
        },
        {
        name: "about",
        url: "/about",
        },
        {
        name: "blog",
        url: "/blog",
        },
    ];
    const social = [
        {
            name: "facebook",
            url: "/",
            image: 'line-md:facebook'
        },
        {
            name: "youtube",
            url: "/",
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

<footer class="home-footer w-ful">
    <div class="footer-background">
        <div class="footer-content">
            <div class="footer-info mb-20 mt-10 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:w-4/5 md:w-4/5 sm:mx-4 gap-4">
                <div class="footer-logo p-5 xl:col-span-2 md:col-span-3 sm:col-span-1 grid grid-cols-1">
                    <div class="footer-logo-box">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="" class="footer-logo">
                        <p class="footer-name">PetOne™</p>
                    </div>
                    <p class="footer-caption text-white text-md col-span-2">We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work.</p>
                    <p class="footer-address text-white text-md col-span-2">Address: No. 47, Thu Duc District, Ho Chi Minh City, Viet Nam</p>
                    <Button on:click={() => defaultModal = true}>Show Map</Button>
                    <Modal title="Our Address" bind:open={defaultModal} autoclose>
                        <iframe class="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.6182334436364!2d106.7104288413416!3d10.832829612542865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752862ecc20187%3A0x167a5cd7990e165d!2sCaf%C3%A9%20Tony%20Riverside!5e0!3m2!1svi!2s!4v1691516641496!5m2!1svi!2s" width="100" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <svelte:fragment slot='footer'>
                          <Button color="alternative">Ok</Button>
                        </svelte:fragment>
                      </Modal>
                </div>
                <div class="footer-service sm:col-span-1">
                    <ul class="text-white footer-list">
                        <ol class="py-2 px-6 uppercase text-xl font-semibold">service</ol>
                        {#each services as item}
                            <li><a href={item.url}>{item.name}</a></li>
                        {/each}
                    </ul>
                </div>
                <div class="footer-legal">
                    <ul class="text-white footer-list">
                        <ol class="py-2 px-6 uppercase text-xl font-semibold">company</ol>
                        {#each legal as item}
                            <li><a href={item.url}>{item .name}</a></li>
                        {/each}
                    </ul>
                </div>
                <div class="footer-social">
                    <ul class="text-white footer-list">
                        <ol class="py-2 px-6 uppercase text-xl font-semibold">social</ol>
                        {#each social as item}
                            <li><a href={item.url}><Icon class="footer-list-icon text-2xl" icon={item.image} /><span class="ml-3">{item .name}</span></a></li>
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="footer-nav mx-auto p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">PawCat™</a>. All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-whitesm:mt-0">
                    {#each menu as item}
                    <li>
                        <a href={item.url} class="text-white hover:underline md:mr-6 capitalize">{item.name}</a>
                    </li>
                    {/each}
              </ul>
            </div>
        </div>
    </div>
</footer>

<style>
    .home-footer{
        /* background-color: rgba(0, 0, 0, 0.367); */
        background-image: url(https://cdn2.vectorstock.com/i/1000x1000/74/91/pets-line-icons-on-black-background-vector-5917491.jpg);
        background-position: center;
        background-attachment: fixed;
        min-height: 400px;
    }
    .footer-background{
        background-color: rgba(0, 0, 0, 0.4);
        background-image: url(https://www.icegif.com/wp-content/uploads/2023/02/icegif-519.gif);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: inherit;
        height: inherit;
    }
    .footer-content{
        width: inherit;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.3);
        position: relative;
    }
    .footer-info > div{
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        border-radius: 10px;
    }
    .footer-logo img{
        width: 140px;
        height: 140px;
        border-radius: 50%;
    }
    .footer-nav{
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .footer-logo-box{
        display: flex;
        align-items: center;
    }
    .footer-info{
        margin-bottom: 100px;
        margin-top: 100px;
    }
    .footer-name{
        font-size: 34px;
        font-weight: bold;
        color: #fff;
        padding: 30px;
    }
    .footer-caption{
        text-align: justify;
    }
    .footer-list ol{
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }
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
    .footer-map{
        width: 100%;
    }
    .footer-address{
        font-weight: 600;
        margin: 10px 0;
    }
</style>