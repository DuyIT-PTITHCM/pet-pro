<script lang="ts">
    import HeaderPage from '$lib/components/common/HeaderPage.svelte';
    import SideMenuHeading from '$lib/components/common/SideMenuHeading.svelte';
    import SideRefercence from '$lib/components/common/SideRefercence.svelte';

    export let data;
    let host = "http://103.142.26.42";

    let service = data.data;

    let images = JSON.parse(service?.imageUrl);
    let imageSeo = "";
    if (images.length > 0) {
        imageSeo = host + images[0] ? host + images[0] : "";
    }
</script>


<svelte:head>
    <title>{(service?.seo?.metaTitle ? service?.seo?.metaTitle : service.title )}</title>
    <meta name="description" content={service?.seo?.metaDescription ? service?.seo?.metaDescription : service.description} />
    <meta name="keywords" content={service?.seo?.keywords ? service?.seo?.keywords :   service.productName} />
    <link rel="canonical" href={service?.seo?.canonicalUrl ?service?.seo?.canonicalUrl : host + service.slug } />

    <meta property="og:title" content={(service?.seo?.metaTitle ? service?.seo?.metaTitle:   service.productName )} />
    <meta property="og:description" content={service?.seo?.metaDescription ? service?.seo?.metaDescription : service.description} />
    <meta property="og:image" content={service?.seo?.image ?host + service?.seo?.image: imageSeo} />

    {@html '<script type="application/ld+json">'+ service?.seo?.structuredData + '</script>'}
    <meta name="sitemap_priority" content={service?.seo?.sitemapPriority ? service?.seo?.sitemapPriority : '' } />
    <meta name="sitemap_frequency" content={service?.seo?.sitemapFrequency ? service?.seo?.sitemapFrequency : 'always'} />

    <meta property="twitter:title" content={(service?.seo?.metaTitle ? service?.seo?.metaTitle:   service.productName )} />
    <meta property="twitter:description" content={service?.seo?.metaDescription ? service?.seo?.metaDescription : service.description} />
    <meta name="twitter:image" content={service?.seo?.image ? host + service?.seo?.image: imageSeo} />
</svelte:head>
<!-- service service -->
<HeaderPage title={service.title} isShowTime author={service?.author} date={service?.updatedAt} image={host + images[0]} isBgOverlay/>

<div class="container m-auto p-4">
    <div class="grid grid-cols-12 gap-4 dark:text-slate-50">
        <div class="xl:col-span-9 md:col-span-12 col-span-full">
            <div class="my-4">
                <p class="text-justify">{service.description}</p>
            </div>
            <div class="grid xl:grid-cols-9 grid-cols-12 gap-3">
                <div class="px-5 xl:col-span-3 md:col-span-4 col-span-full border dark:border-gray-600 rounded-lg">
                    <div class="w-full sticky top-[70px]">
                        <SideMenuHeading/>
                    </div>
                </div>
                <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">
                    {#if images[0]}
                        <img src="{host + images[0]}" alt="{service.title}" class="w-full max-h-[500px] object-cover">
                    {/if}
                    <div id="postcontent" class=" sm:text-base text-sm">
                        {@html service?.content}
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:col-span-3 col-span-full">
            <div class="rounded-lg border dark:border-gray-600 overflow-hidden">
                <p class="text-center p-4 font-bold border-b-4 dark:border-gray-600">Các dịch vụ khác</p>
                <SideRefercence isSmallBox data={service.reference} originSlug="dich-vu"/>
            </div>
        </div>
    </div>
</div>