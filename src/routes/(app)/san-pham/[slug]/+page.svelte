<script>
    export let data;
    let host = "http://103.142.26.42";

    let product = data.data;

    let images = JSON.parse(product?.images);
    console.log(product.images);

    let imageSeo = "";
    if (images.length > 0) {
        imageSeo = host + images[0] ? host + images[0] : "";
    }
</script>

<svelte:head>
    <title>{product?.seo.metaTitle}</title>
    <meta name="description" content={product?.seo.metaDescription} />
    <meta name="keywords" content={product?.seo.keywords} />
    <link rel="canonical" href={product?.seo.canonicalUrl} />

    <meta property="og:title" content={product?.seo.openGraphTags} />


    {@html '<script type="application/ld+json">'+ product?.seo.structuredData + '</script>'}

    <meta name="sitemap_priority" content={product?.seo.sitemapPriority} />
    <meta name="sitemap_frequency" content={product?.seo.sitemapFrequency} />

    <meta property="og:image" content={imageSeo} />
    <meta name="twitter:image" content={imageSeo} />
</svelte:head>
<h1>hello cac ban</h1>
