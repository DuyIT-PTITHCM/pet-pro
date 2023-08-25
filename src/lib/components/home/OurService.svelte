<script>
    import Button from "../common/Button.svelte";

    const services = [
        {
            id: 0,
            name: 'Pet care',
            description: 'Pet care includes all the tasks related to ensuring the safety and happiness of pets, such as feeding, brushing, walking, playing, and taking pets to the veterinarian.',
            image: 'https://thuythithi.com/wp-content/uploads/2020/05/3-tieu-chi-danh-gia-chat-luong-dich-vu-cham-soc-thu-cung-tai-nha.jpg'
        },
        {
            id: 1,
            name: 'Pet boarding',
            description: 'Pet boarding is the act of ensuring the safety and happiness of pets when their owners are not home, such as feeding, brushing, walking, and playing with pets.',
            image: 'https://vcdn-kinhdoanh.vnecdn.net/2019/02/03/ks-cho-meo500-5587-1549156792.jpg'
        },
        {
            id: 2,
            name: 'Grooming',
            description: 'Grooming is the act of caring for the appearance of pets, such as bathing, trimming hair, clipping nails, and cleaning ears.',
            image: 'https://mypet.vn/wp-content/uploads/2020/09/spa-thu-cung-2.jpg'
        },
        {
            id: 3,
            name: 'Pet agency',
            description: 'Pet agencies provide pet buying and selling services.',
            image: 'https://zoipet.com/wp-content/uploads/2022/09/dich-vu-cham-soc-Copy.jpg'
        },
        {
            id: 4,
            name: 'Pet store',
            description: 'Pet stores offer products and services for pets, such as food, toys, veterinary medicine, and pet care services.',
            image: 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-cho-meo-kit-cat-kitten-pregnant-cat-1-2kg.jpg'
        },
        {
            id: 5,
            name: 'Pet training school',
            description: 'Pet training schools offer pet training courses that help pets to be more obedient and behave better.',
            image: 'https://www.akc.org/wp-content/uploads/2021/01/031619_NOC_32099.jpg'
        },
        {
            id: 6,
            name: 'Pet news website',
            description: 'Pet news websites provide news and information about pets, such as pet health, nutrition, care, and training.',
            image: 'https://www.petswelcome.com/wp/wp-content/uploads/2019/08/31444417_s.jpg'
        },
        {
            id: 7,
            name: 'Pet community website',
            description: 'Pet community websites are where pet owners can share information, experiences, and love for their pets.',
            image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/1/840744/Loat-Anh-Dang-Yeu-Cu.jpg'
        }
    ]
</script>
<div class="flex flex-col justify-center items-center p-10 relative w-full min-h-screen">
    <h1 class="text-3xl mb-5 font-semibold dark:text-white">Our Services</h1>
    <p class="mb-4 dark:text-white">Pets bring us joy and happiness, and we have a responsibility to take good care of them.</p>
    <div class="ourservice xl:w-4/5 md:w-11/12 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        {#each services as service}
        <div class="ourservice-service h-72 rounded-lg overflow-hidden text-center flex items-center justify-center flex-col relative">
            <img class="w-full h-72 object-cover" src={service.image} alt="">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white">
                <h3 class="text-2xl drop-shadow-lg shadow-black brightness-200 font-extrabold px-4 py-2 bg-opacity-50 dark:bg-opacity-40 text-white rounded-full">{service.name}</h3>
                <p class="service-desc my-2 mx-4 h-0 text-note drop-shadow-lg shadow-black brightness-200">{service.description}</p>
                <Button content='Read more' icon='icon-park-solid:right-two'/>
            </div>
        </div>
        {/each}
    </div>
</div>
<style>
    .text-note {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
    .ourservice-service:hover .service-desc{
        height: 70px;
        transition: height .4s;
    }
    .ourservice-service:hover img{
        filter: blur(8px);
        transition: filter ease .4s;
    }
</style>