<script lang="ts">
    export let data;
    let host = "http://103.142.26.42";

    let product = data.data;

    let images = JSON.parse(product?.images);
    let imageSeo = "";
    if (images.length > 0) {
        imageSeo = host + images[0] ? host + images[0] : "";
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
<h1 class="text-3xl font-bold text-center">{product.productName}</h1>
<div class="flex justify-center">
    <div class="sm:m-10 m-1 container">
        <div class="w-full {images.length < 3 ? 'grid md:grid-cols-2 grid-cols-1': 'flex justify-center flex-col items-center'}">
            <div class="gap-4 {images.length <= 3 ? 'columns-' + (images.length) + ' h-[600px] w-fit px-4' :'lg:columns-4 md:columns-3 columns-2'}">
                {#each images as path, i}
                <img
                    src={!path
                        ? "/images/logo.png"
                        : `${host}` + "/" + path}
                    class="rounded-xl { images.length == 1 ? 'h-full w-full object-contain' : images.length > 3 ? 'mb-4 w-full' : 'h-full w-full object-contain'}"
                    alt="{product?.name}"
                />
                {/each}
            </div>
            <div>
                <ul>
                    <li>Product name: {product.productName}</li>
                    <li>Description : {@html product.description}</li>
                    <li>Note: {product.notes}</li>
                    <li>Origin: {product.origin}</li>
                </ul>
                <div class="">
                    <b>
                        {#if product.discount}
                            <del>{product.price}</del>{(product.price/product.discount)*100}
                        {:else}
                            {product.price}
                        {/if}
                    </b>
                </div>
            </div>
        </div>

    </div>
</div>