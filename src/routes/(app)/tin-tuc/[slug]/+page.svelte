<script lang="ts">
    import { HOST } from '$lib/Const.js';
    import HeaderPage from '$lib/components/common/HeaderPage.svelte';
    import SideMenuHeading from '$lib/components/common/SideMenuHeading.svelte';
    import SideRefercence from '$lib/components/common/SideRefercence.svelte';

    export let data;
    let host = "http://103.142.26.42";

    let blog = data.data;

    let images = JSON.parse(blog?.imageUrl);
    let imageSeo = "";
    if (images.length > 0) {
        imageSeo = host + images[0] ? host + images[0] : "";
    }
</script>


<svelte:head>
    <title>{(blog?.seo?.metaTitle ? blog?.seo?.metaTitle : blog.title )}</title>
    <meta name="description" content={blog?.seo?.metaDescription ? blog?.seo?.metaDescription : blog.description} />
    <meta name="keywords" content={blog?.seo?.keywords ? blog?.seo?.keywords :   blog.productName} />
    <link rel="canonical" href={blog?.seo?.canonicalUrl ?blog?.seo?.canonicalUrl : host + blog.slug } />

    <meta property="og:title" content={(blog?.seo?.metaTitle ? blog?.seo?.metaTitle:   blog.productName )} />
    <meta property="og:description" content={blog?.seo?.metaDescription ? blog?.seo?.metaDescription : blog.description} />
    <meta property="og:image" content={blog?.seo?.image ?host + blog?.seo?.image: imageSeo} />

    {@html '<script type="application/ld+json">'+ blog?.seo?.structuredData + '</script>'}
    <meta name="sitemap_priority" content={blog?.seo?.sitemapPriority ? blog?.seo?.sitemapPriority : '' } />
    <meta name="sitemap_frequency" content={blog?.seo?.sitemapFrequency ? blog?.seo?.sitemapFrequency : 'always'} />

    <meta property="twitter:title" content={(blog?.seo?.metaTitle ? blog?.seo?.metaTitle:   blog.productName )} />
    <meta property="twitter:description" content={blog?.seo?.metaDescription ? blog?.seo?.metaDescription : blog.description} />
    <meta name="twitter:image" content={blog?.seo?.image ? host + blog?.seo?.image: imageSeo} />
</svelte:head>
<!-- blog blog -->
<HeaderPage title={blog.title} isShowTime author={blog?.author} date={blog?.updatedAt} image={HOST + images[0]} isBgOverlay/>
<div class="container m-auto p-4">
    <div class="grid grid-cols-12 gap-4 dark:text-slate-50">
        <div class="xl:col-span-9 md:col-span-12 col-span-full">
            <div class="my-4">
                <p class="text-justify">{blog.description}</p>
            </div>
            <div class="grid xl:grid-cols-9 grid-cols-12 gap-3">
                <div class="px-5 xl:col-span-3 md:col-span-4 col-span-full border dark:border-gray-600 rounded-lg">
                    <div class="w-full sticky top-[70px]">
                        <SideMenuHeading/>
                    </div>
                </div>
                <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">
                    {#if images[0]}
                        <img src="{HOST + images[0]}" alt="{blog.title}" class="w-full max-h-[500px] object-cover">
                    {/if}
                    <div id="postcontent" class="sm:text-base text-sm">
                        {@html blog?.content}
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:col-span-3 col-span-full">
            <div class="overflow-hidden rounded-lg xl:border">
                <p class="text-center p-4 font-bold border-b-4">Bài viết liên quan</p>
                <SideRefercence originSlug="tin-tuc" data={blog.reference} isSmallBox={true}/>
            </div>
        </div>
    </div>
</div>
<div class="mb-[80px]"></div>
