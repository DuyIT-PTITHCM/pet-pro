<script lang="ts">
    import { formatCurrency } from '$lib/Utils/accounting.js';
    import CarouselCustom from '$lib/components/carouselcus/CarouselCustom.svelte';
    import PostProductDetail from '$lib/components/products/PostProductDetail.svelte';
    import Icon from '@iconify/svelte';
    import { Button, Modal, TabItem, Tabs } from 'flowbite-svelte';

    export let data;
    let host = "http://103.142.26.42";

    let product = data.data;
    let imagesModel = false;
    let isViewedImage = false;
    let images = JSON.parse(product?.images);
    let imageSeo = "";
    if (images.length > 0) {
        imageSeo = host + images[0] ? host + images[0] : "";
    }

    function viewImage(){
        isViewedImage = true;
        setTimeout(() => {
            isViewedImage = false;
        }, 1000);
        return isViewedImage;
    }
</script>


<svelte:head>
    <title>{(product?.seo?.metaTitle ? product?.seo?.metaTitle:   product.productName )}</title>
    <meta name="description" content={product?.seo?.metaDescription ? product?.seo?.metaDescription : product.productName} />
    <meta name="keywords" content={product?.seo?.keywords ? product?.seo?.keywords :   product.productName} />
    <link rel="canonical" href={product?.seo?.canonicalUrl ?product?.seo?.canonicalUrl : host + product.slug } />

    <meta property="og:title" content={product?.seo?.openGraphTags} />


    {@html '<script type="application/ld+json">'+ product?.seo?.structuredData + '</script>'}

    <meta name="sitemap_priority" content={product?.seo?.sitemapPriority ? product?.seo?.sitemapPriority : '' } />
    <meta name="sitemap_frequency" content={product?.seo?.sitemapFrequency ? product?.seo?.sitemapFrequency : 'always'} />

    <meta property="og:image" content={imageSeo} />
    <meta name="twitter:image" content={imageSeo} />
</svelte:head>
<h1 class="text-3xl font-bold text-center my-10 dark:text-white">{product.productName}</h1>
<div class="flex justify-center dark:text-slate-100">
    <div class="m-1 mb-10 container">
        <div class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div class="md:col-span-2 {images.length < 3 ? 'columns-' + (images.length) + ' h-[600px] w-full' : images.length == 3 ? 'grid grid-cols-2 gap-4 ' :'md:columns-3 columns-2 gap-4 '}">
                {#each images as path, i}
                <img on:click={() => (imagesModel = true)}
                    src={!path
                        ? "/images/logo.png"
                        : `${host}` + "/" + path}
                    class="rounded-xl  shadow-2xl  { images.length < 3 ? 'h-full w-full object-cover' : images.length == 3 ? 'w-full' : 'h-full w-full object-contain mb-4'} {images.length == 3  && i==2 ? 'col-span-2' : '' }"
                    alt="{product?.productName}"
                />
                {/each}
            </div>
            <div class="border rounded-xl shadow-2xl w-full h-fit md:p-6 p-4">
                <div class="">
                    <h2 class="mb-4 text-xl font-bold">Product name: {product.productName}</h2>
                    <p class="mb-4"><b>Origin</b>: {product.origin}</p>
                    <p class="mb-4"> <b>Description:</b> <br> {@html product.description}</p>
                    <p class="mb-4"><b>Notes:</b> <br> {@html product.notes}</p>
                    <div class="mb-4">
                        <p class="text-right">
                            {#if product.discount}
                                <div class="">
                                    <b class="text-2xl text-primary-600">{formatCurrency(product.price)}</b><br><br>
                                    <span class="p-2 animate-pulse rounded-full bg-red-600 text-white font-bold">Discount {product.discount}%</span>
                                    <del class="text-gray-800 dark:text-gray-200">{formatCurrency(product.price)}</del>
                                </div>
                            {:else}
                                <b class="text-2xl text-primary-600 mt-4 mb-10">{formatCurrency(product.price)}</b><br>
                            {/if}
                        </p>
                    </div>
                    <div class="flex justify-around w-full mt-[40px]">
                        <Button class="px-4"><Icon icon="fluent:cart-24-filled" class="text-xl mr-1" />ADD TO CART</Button>
                        <Button class="px-4"><Icon icon="icon-park-solid:buy" class="text-xl mr-1" />SHOP NOW</Button></div>
                </div>
            
                
            </div>
        </div>

    </div>
</div>
<Modal size="xl" class="md:h-screen" title="{images.length == 1 ? 'Image' : 'Images'} of {product?.productName}" bind:open={imagesModel} autoclose>
    <CarouselCustom perPage={1} classList="w-full max-h-screen">
        {#each images as path, i}
                <img
                    src={!path
                        ? "/images/logo.png"
                        : `${host}` + "/" + path}
                    class="rounded-xl w-full max-h-screen object-contain"
                    alt="{product?.productName}"
                />
        {/each}
    </CarouselCustom>
    <svelte:fragment slot="footer">
      <Button on:click={viewImage}>That's so cool! </Button>
      <Button on:click={viewImage} color="purple">I love it</Button>
    </svelte:fragment>
</Modal>
<div class="{isViewedImage ? '' : 'hidden'} absolute top-0 w-full h-full">
    <img src="https://demoda.vn/wp-content/uploads/2022/02/hinh-anh-dong-tinh-yeu-trai-tim-cam-roi.gif" alt="oke">
</div>

<!-- Post Product -->
<div class="flex justify-center w-full">
    <div class="container m-4">
        <PostProductDetail post={product.post}/>
    </div>
</div>