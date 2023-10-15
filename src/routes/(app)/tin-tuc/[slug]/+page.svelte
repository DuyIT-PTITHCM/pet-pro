<script lang="ts">
    import Blogs from '$lib/components/blogs/Blogs.svelte';
    import Icon from '@iconify/svelte';

    export let data;
    console.log(data)
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
<div class="container m-auto p-4">
    <div class="grid grid-cols-12 gap-4 dark:text-slate-50">
        <div class="xl:col-span-9 md:col-span-12 col-span-full">
            <div class="my-4">
                <h1 class="lg:text-[38px] text-[28px]">{blog.title}</h1>
                <hr class="mb-4 h-[2px] border-none bg-slate-300">
                <p class="text-justify">{blog.description}</p>
                <div class="font-bold">
                    <p class="flex items-center"><Icon icon="fa6-solid:user-pen" class="mr-2 text-xl w-8"/> {blog?.author}</p>
                    <p class="flex items-center"><Icon icon="svg-spinners:clock" class="mr-2 text-xl w-8"/> {blog?.updatedAt}</p>
                </div>
            </div>
            <div class="grid xl:grid-cols-9 grid-cols-12 gap-3">
                <div class="p-5 xl:col-span-3 md:col-span-4 col-span-full border rounded-lg">
                    <div class="w-full h-9 bg-red-600 sticky top-[100px]"></div>
                </div>
                <div class="post-container overflow-hidden xl:col-span-6 md:col-span-8 col-span-full text-justify">
                    {#if images[0]}
                        <img src="{host + images[0]}" alt="{blog.title}" class="w-full max-h-[500px] object-cover">
                    {/if}
                    {@html blog?.content}
                </div>
            </div>
        </div>
        <div class="xl:col-span-3 col-span-full">
            <div class="rounded-lg border">
                <p class="text-center p-4 font-bold border-b-4">Bài viết liên quan</p>
                <div class="">
                <Blogs blogs={blog.reference} isSmallBox={true}/>
                </div>
            </div>
        </div>
    </div>
</div>