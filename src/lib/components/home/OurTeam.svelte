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
<div class="home-content content-bg w-full h-screen">
    <h1 class="content-heading text-white">Our team</h1>
    <p class="content-subheading">We are committed to ensuring that your pet is cared for with the utmost care and safety.</p>
    <div class="ourteam-content">
        <div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4">
            {#each teammates as docter}
            <div class="docter-item max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img class="docter-image rounded-t-lg" src={docter.image} alt={docter.name} />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{docter.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{docter.slogan}</p>
                    <p class="docter-note mb-3 font-normal text-gray-700 dark:text-gray-400">{docter.note}</p>
                    <div style="height: 50px;"></div>
                    
                </div>
                <div class="docter-btn">
                    <Button content='Read more' icon='icon-park-solid:right-two'/>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
<style>
    /* .home-container{
        display: flex;
        justify-content: center;
    } */
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
    .content-subheading{
        color: #fff;
        margin: 10px;
    }
    
    .content-bg {
        background-color: rgba(0, 0, 0, 0.6);
        background-image: url(https://www.purina.co.uk/sites/default/files/2020-12/Introducing%20Your%20New%20Cat%20to%20Your%20Other%20PetsHERO.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    .docter-item{
        position: relative;
    }
    .docter-image{
        height: 250px;
        width: 100%;
        object-fit: cover;
    }
    .docter-btn{
        position: absolute;
        bottom: 0;
        width: 100%;
        bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .docter-note {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
</style>
