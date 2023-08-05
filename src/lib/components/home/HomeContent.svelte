<script>
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
    },

    // Thêm các teammates khác tương tự ở đây
    ];
</script>
<div class="home-container">
    <!-- Benefit -->
    <div class="home-content w-full">
        <h1 class="content-heading benefit-heading">What do you get from us?</h1>
        <div
            class="content-benefit container grid md:grid-cols-2 sm:grid-cols-1 gap-3"
        >
            <div class="benefit benefit-content">
                <h3>We love and care for your pet as its own.</h3>
                <p>
                    We make your friend even better - dedicated and professional pet care service. Here, we love and care for your pet as if it were our own. Love and care is the motto we always adhere to in every aspect of our work.
                    <br><br>
                    With a team of passionate and experienced staff, we are committed to ensuring that your pet is cared for with the utmost care and safety. We understand the importance of a loving companion, and as such, we always consider each individual case to best meet each furry baby's needs.
                    <br><br>
                    On site, you can have complete peace of mind and peace of mind when leaving your pet with us. With a comfortable and comfortable environment, we guarantee your pet will have a pleasant and peaceful experience while staying here.
                    <br><br>
                    Let us share our love and passion for your pet, and together create memorable and happy memories for your family. We hope that you will feel secure and satisfied when choosing our service. Come join us today and share the love with your pet!
                </p>
            </div>
            <div class="benefit benefit-image">
                <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                    <div  class="row-start-1 col-start-2 col-span-2">
                        <img
                            src="https://img.freepik.com/free-photo/close-up-doctor-checking-cat_23-2149304262.jpg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div class="col-start-3">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/553edb97e4b0edb77339769b/1494344184158-4PJNQ49LHKB35NI2BI1Q/image-asset.jpeg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/free-photo/veterinarian-check-ing-puppy-s-health_23-2148728395.jpg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/premium-photo/vet-doctor-examining-dog-cat-animal-clinic_488220-17516.jpg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Rkcmymt9-a-tYG5M9gFE8l4Qofv2WvV2ew&usqp=CAU"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Our team -->
    <div class="home-content ourteam w-full">
        <h1 class="content-heading ourteam-heading">Our team</h1>
        <p class="content-subheading">We are committed to ensuring that your pet is cared for with the utmost care and safety.</p>
        <div class="ourteam-content">
            <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
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
                        <a href="/" class="docter-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/each}
            </div>
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
    }
    .home-content:first-child{
        padding-top: 100px;
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
    .benefit-heading{
        background: linear-gradient(to right, #30cfd0 0%, #fa4300 100%);
        background-clip: text;
        color: transparent;
    }
    .ourteam-heading{
        background: linear-gradient(to right, #0800ff 0%, #ff75ef 50%, #fa0000 100%);
        background-clip: text;
        color: transparent;
    }
    .benefit{
        padding: 10px;
    }
    .benefit img{
        border-radius: 8px;
    }
    .benefit-content{
        line-height: 1.8;
    }
    .benefit-content h3{
        font-size: 24px;
        margin-bottom: 10px;
    }
    .benefit-content p{
        text-align: justify;
    }
    .ourteam{
        background-color: rgba(0, 0, 0, 0.5);
    }
    .docter-item{
        position: relative;
    }
    .docter-image{
        height: 50%;
        width: 100%;
        object-fit: cover;
    }
    .docter-btn{
        position: absolute;
        bottom: 20px;
    }
    .docter-note {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* Số dòng tối đa hiển thị */
        overflow: hidden;
    }
</style>
