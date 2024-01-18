<script>
    import Button from '../common/Button.svelte';
    const teammates = [
    {
        id: 1,
        name: 'John Doe',
        slogan: 'Your Pet Care Expert',
        image: 'data:image/jpeg;base64,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',
        note: "e and care is the motto we always adhere to in every aspect of our work."
    },
    {
        id: 2,
        name: 'Jane Smith',
        slogan: 'Passionate about Animal Welfare',
        image: 'https://cce.com.vn/wp-content/uploads/2021/12/bacsi2-e1638341531111-1280x720.png',
        note: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work. We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."

    },
    {
        id: 3,
        name: 'Michael Johnson',
        slogan: 'Dedicated to Happy Pets',
        image: 'https://jobsgo.vn/blog/wp-content/uploads/2020/02/tieu-chuan-tot-nghiep-cao-dang-thu-y.jpg',
        note: "We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work."
    }
    ];
</script>

<!-- Our team -->
<div class="content-bg bg-black-50 bg-image-center bg-no-repeat bg-cover bg-fixed w-full min-h-screen flex flex-col justify-center items-center p-12 relative">
    <h1 class="text-3xl font-bold mt-20 text-white">Our team</h1>
    <p class="text-white m-3">We are committed to ensuring that your pet is cared for with the utmost care and safety.</p>
    <div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4">
            {#each teammates as docter}
            <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img class="h-64 w-full object-fit-cover rounded-t-lg" src={docter.image} alt={docter.name} />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{docter.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{docter.slogan}</p>
                    <p class="docter-note mb-3 font-normal text-gray-700 dark:text-gray-400">{docter.note}</p>
                    <div style="height: 50px;"></div>
                    
                </div>
                <div class="w-full bottom-5 absolute flex justify-center items-center">
                    <Button content='Read more' icon='icon-park-solid:right-two'/>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
<style>
    .content-bg {
        background-image: url("/images/homepage/ourteam.jpg");
    }

    .docter-note {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
</style>
