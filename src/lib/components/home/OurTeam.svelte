<script>
    import Button from '../common/Button.svelte';
    const teammates = [
    {
        id: 1,
        name: 'John Doe',
        slogan: 'Your Pet Care Expert',
        image: 'https://daihocthuyhanoi.edu.vn/assets/uploads/news/images/B%C3%A1c-s%C4%A9-th%C3%BA-y-tr%E1%BA%BB-tu%E1%BB%95i-%C4%91ang-nu%C3%B4i-ch%C3%B3-maltese-t%E1%BA%A1i-v%C4%83n-ph%C3%B2ng-b%C3%A1c-s%C4%A9.jpg',
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
    <h1 class="text-34 font-bold mt-20 text-white">Our team</h1>
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
        background-image: url(https://www.purina.co.uk/sites/default/files/2020-12/Introducing%20Your%20New%20Cat%20to%20Your%20Other%20PetsHERO.jpg);
    }

    .docter-note {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
</style>
