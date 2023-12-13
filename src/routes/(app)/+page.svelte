<script>
    import Banner from "$lib/components/home/Banner.svelte";
    import ClientSay from "$lib/components/home/ClientSay.svelte";
    import Benefit from "$lib/components/home/Benefit.svelte";
    import OurTeam from "$lib/components/home/OurTeam.svelte";
    import OurService from "$lib/components/home/OurService.svelte";
    import { BASE_API } from "$lib/Const";
    import Products from "$lib/components/products/Products.svelte";
    import Blogs from "$lib/components/blogs/Blogs.svelte";
    import HeaderPage from "$lib/components/common/HeaderPage.svelte";

    async function getData(){
        try {
            let response = {
                blogsLasted: {},
                servicesLasted: {},
                bestSellingProduct: {},
            };
            const blogs = await fetch(`${BASE_API}/front/blog-lasted`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const services = await fetch(`${BASE_API}/front/service-lasted`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const products = await fetch(`${BASE_API}/front/products?type=pet&status=best_selling`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            var blogsLasted = await blogs.json();
            var servicesLasted = await services.json();
            var bestSellingProduct = await products.json();

            response.blogsLasted = blogsLasted.data.docs;
            response.servicesLasted = servicesLasted.data.docs;
            response.bestSellingProduct = bestSellingProduct.data;
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    function randomNumber() {
        return Math.floor(Math.random() * 7) + 1;
    }
    async function init(){
        await getData();
    }

    init();
</script>

<Banner/>
<Benefit/>
<OurTeam/>
{#await getData()}
    hhi
{:then res}
<div class="container m-auto my-[100px] px-2">
    <img src="https://siliconstack.com.au/wp-content/uploads/2019/09/Working-process.png" alt="">
</div>
<iframe class="w-full h-full" src="https://www.youtube.com/embed/7yLxxyzGiko?autoplay=1&mute=1&controls=0&loop=1&showinfo=0" title="Kittens walk with a tiny chicken" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<HeaderPage title={"Our Services"} 
description={"Pets bring us joy and happiness, and we have a responsibility to take good care of them."} 
isDescription={true} isShowTime={false} isBgOverlay image="/images/home-panner/{randomNumber()}.jpg"/>
<div class="container m-auto my-[100px] px-2 z-50">
    <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4">
        <OurService data={res?.servicesLasted}/>
    </div>
</div>
<HeaderPage title={"Our product"}  image="/images/home-panner/{randomNumber()}.jpg"
description={"Pet shops can be a great place to find everything you need to care for your pet."} 
isDescription={true} isShowTime={false} isBgOverlay/>
<div class="container m-auto my-[100px] px-2">
    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
        <Products products={res?.bestSellingProduct}/>
    </div>
</div>
<HeaderPage title={"Latest blog"} image="/images/home-panner/{randomNumber()}.jpg"
description={"How to feed, groom, and train your pet, as well as how to deal with common health problems."} 
isDescription={true} isShowTime={false} isBgOverlay/>
<div class="container m-auto my-[100px] px-2">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4" >
        <Blogs blogs={res?.blogsLasted}/>
    </div>
</div>
{/await}
<ClientSay/>
