<script lang="ts">
    import { formatCurrency } from '$lib/Utils/accounting.js';
    import { addCart } from '$lib/Utils/cartAction.js';
    import CarouselCustom from '$lib/components/carouselcus/CarouselCustom.svelte';
    import PostProductDetail from '$lib/components/products/PostProductDetail.svelte';
    import Products from '$lib/components/products/Products.svelte';
    import Icon from '@iconify/svelte';
    import { Button, Hr, Modal } from 'flowbite-svelte';

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
    async function addToCart(prod: any){
        await addCart(prod);
    }
</script>


<svelte:head>
    <title>{(product?.seo?.metaTitle ? product?.seo?.metaTitle:   product.productName )}</title>
    <meta name="description" content={product?.seo?.metaDescription ? product?.seo?.metaDescription : product.description} />
    <meta name="keywords" content={product?.seo?.keywords ? product?.seo?.keywords :   product.productName} />
    <link rel="canonical" href={product?.seo?.canonicalUrl ?product?.seo?.canonicalUrl : host + product.slug } />

    <meta property="og:title" content={(product?.seo?.metaTitle ? product?.seo?.metaTitle:   product.productName )} />
    <meta property="og:description" content={product?.seo?.metaDescription ? product?.seo?.metaDescription : product.description} />
    <meta property="og:image" content={product?.seo?.image ?host + product?.seo?.image: imageSeo} />

    {@html '<script type="application/ld+json">'+ product?.seo?.structuredData + '</script>'}
    <meta name="sitemap_priority" content={product?.seo?.sitemapPriority ? product?.seo?.sitemapPriority : '' } />
    <meta name="sitemap_frequency" content={product?.seo?.sitemapFrequency ? product?.seo?.sitemapFrequency : 'always'} />

    <meta property="twitter:title" content={(product?.seo?.metaTitle ? product?.seo?.metaTitle:   product.productName )} />
    <meta property="twitter:description" content={product?.seo?.metaDescription ? product?.seo?.metaDescription : product.description} />
    <meta name="twitter:image" content={product?.seo?.image ? host + product?.seo?.image: imageSeo} />
</svelte:head>
<div class="container m-auto">
    <h1 class="my-10 text-primary-600 lg:text-3xl md:text-2xl sm:text-xl text-lg dark:text-white flex justify-center items-center text-center"> <div class="text-3xl p-2"><Icon icon="ph:paw-print-bold"/></div>{product.productName} <div class="text-3xl p-2"><Icon icon="ph:paw-print-bold"/></div></h1>
    <div class="flex justify-center dark:text-slate-100 overflow-hidden">
        <div class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div class="rounded-xl overflow-hidden md:col-span-2 {images.length < 3 ? 'columns-' + (images.length) + ' w-full' : images.length == 3 ? 'grid grid-cols-2 gap-4 ' :'md:columns-3 columns-2 gap-4 '}">
                {#each images as path, i}
                <img on:click={() => (imagesModel = true)}
                    src={!path
                        ? "/images/logo.png"
                        : `${host}` + "/" + path}
                    class="rounded-lg cursor-zoom-in {images.length == 1 && 'max-h-[500px]'} { images.length < 3 ? 'w-full object-cover' : images.length == 3 ? 'w-full' : 'w-full object-contain mb-4'} {images.length == 3  && i==2 ? 'col-span-2' : '' }"
                    alt="{product?.productName}"
                />
                {/each}
            </div>
            <div class="rounded-lg p-4 border h-full flex flex-col justify-between">
                <div>
                    <h3 class="mb-4 text-xl font-bold">{product.productName}</h3>
                    <Hr classHr="my-2 w-64 h-1" icon>
                        <Icon icon="teenyicons:quote-solid" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </Hr>
                    <!-- <p class="mb-4"><b>Origin</b>: {product.origin}</p> -->
                    <p class="mb-4">{@html product.description}</p>
                    <Hr classHr="my-2 w-64 h-1" icon><Icon icon="emojione-v1:note-pad" class="w-6 h-6 text-gray-700 dark:text-gray-300"/></Hr>
                    <div class="mb-4  product-desc" id="note">{@html product.notes}</div>
                </div>
                <div>
                    <Hr classHr="my-2 w-64 h-1" icon>
                        <Icon icon="solar:tag-price-linear" class="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </Hr>
                    <div class="mb-4">
                        <p class="text-right">
                            {#if product.discount}
                            <div class="flex justify-between">
                                <div class="">
                                    <span class="px-4 py-2 animate-pulse rounded-full bg-red-600 text-white font-bold lg:text-base text-sm">-{product.discount}%</span>
                                    <del class="text-gray-800 dark:text-gray-200">{formatCurrency(product.price)}</del>
                                </div>
                                <b class="text-2xl text-primary-600">{formatCurrency(product.price - product.price*product.discount/100)}</b>
                            </div>
                            {:else}
                                <b class="text-2xl text-primary-600 mt-4 mb-10">{formatCurrency(product.price)}</b><br>
                            {/if}
                        </p>
                    </div>
                    <div class="flex justify-between w-full mt-[20px]">
                        <Button class="px-4" on:click={() => addToCart(product)}><Icon icon="fluent:cart-24-filled" class="text-xl mr-1" />ADD TO CART</Button>
                        <Button class="px-4"><Icon icon="icon-park-solid:buy" class="text-xl mr-1" />SHOP NOW</Button>
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
    <div class="{isViewedImage ? '' : 'hidden'} fixed top-0 left-0 w-full h-full">
        <img src="https://demoda.vn/wp-content/uploads/2022/02/hinh-anh-dong-tinh-yeu-trai-tim-cam-roi.gif" alt="oke">
    </div>
    {#if product.post}
        <PostProductDetail post={product.post}/>
    {/if}
    {#if product.productReferences.length > 0}
    <h4 class="text-center m-4 dark:text-white">Product References</h4>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <Products products={product.productReferences}/>
        </div>
    {/if}  
</div>