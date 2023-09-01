<script lang="ts">
    import { formatCurrency } from "$lib/Utils/accounting";
    import { loadingState } from "./../../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Tabs, TabItem } from "flowbite-svelte";

    const productService = RepositoryFactory.get("productRepository");
    let product: any;
    let host = "http://103.142.26.42/";
    export let data;

    async function productDetail() {
        loadingState.set(true);
        product = await productService.show(data?.id);
        product = product.data.data;
        loadingState.set(false);

        console.log(product);
    }
    function convertImageJsonToArray(json) {
        if (json) {
            return JSON.parse(json);
        }
        return [];
    }

    productDetail();
</script>

<Tabs>
    <TabItem open title="Profile">
        <div class="grid grid-cols-2 gap-5">
            <div class=" text-gray-500 dark:text-gray-400">
                <b class="block my-[10px]">Product Information</b><br />
                <p class="border-b border-gray-400">
                    Type : {product?.type}
                </p>
                <p class="border-b border-gray-400">
                    Product Name : {product?.productName}
                </p>
                <p class="border-b border-gray-400">
                    Product Location Status : {product?.status}
                </p>
                <p class="border-b border-gray-400">
                    Product Category : {product?.category.categoryName}
                </p>
                <p class="border-b border-gray-400">
                    Product Stock : {product?.stockQuantity}
                </p>
                <p class="border-b border-gray-400">
                    The Origin : {product?.origin}
                </p>
                <p class="border-b border-gray-400">
                    Product Description : {product?.description}
                </p>
                <p class="border-b border-gray-400">
                    Original Price : {formatCurrency(product?.originalPrice)}
                </p>
                <p class="border-b border-gray-400">
                    Price Sales : {formatCurrency(product?.price)}
                </p>
                <p class="border-b border-gray-400">
                    Product Discount : {product?.discount} %
                </p>
                <p class="border-b border-gray-400">
                    Product Expiration Date : {product?.expirationDate}
                </p>
                <p class="border-b border-gray-400">
                    Notes : {product?.notes}
                </p>
                <p class="border-b border-gray-400">
                    Unique URL : {product?.slug}
                </p>
            </div>
            <div>
                <p class="py-[10px]">Images Product</p>
                <div class="grid grid-cols-3 gap-1">
                    {#each convertImageJsonToArray(product?.images) as path, i}
                        <img
                            src={!path
                                ? "/images/logo.png"
                                : `${host}` + "/" + path}
                            class=""
                            alt=""
                        />
                    {/each}
                </div>
            </div>
        </div>
        <Tabs>
            <TabItem open title="Seo">
                <div class="grid grid-cols-2 gap-5">
                    <div class=" text-gray-500 dark:text-gray-400">
                        <b class="block my-[10px]">Seo Information</b><br />
                        {#if product?.seo}
                            <p class="">
                                Canonical Url : {product?.seo?.canonicalUrl}
                            </p>
                            <p class="">
                                Keywords : {product?.seo?.keywords}
                            </p>
                            <p class="">
                                Meta Description : {product?.seo
                                    ?.metaDescription}
                            </p>
                            <p class="">
                                Meta Title : {product?.seo?.metaTitle}
                            </p>
                            <p class="">
                                Open GraphTags : {product?.seo?.openGraphTags}
                            </p>
                            <p class="">
                                Robot MetaTags : {product?.seo?.robotMetaTags}
                            </p>
                            <p class="">
                                Sitemap Frequency : {product?.seo
                                    ?.sitemapFrequency}
                            </p>
                            <p class="">
                                Structured Data : {product?.seo?.structuredData}
                            </p>
                            <p class="">
                                Created At : {product?.seo?.createdAt}
                            </p>
                        {:else}
                            <p>No Data</p>
                        {/if}
                    </div>
                    <div>
                        <b
                            class="block my-[10px] text-gray-500 dark:text-gray-400"
                            >Preview</b
                        ><br />

                        developing....
                    </div>
                </div>
            </TabItem>
            <TabItem open title="Posts">
                <div class="grid grid-cols-2 gap-5">
                    <div class=" text-gray-500 dark:text-gray-400">
                        <b class="block my-[10px]">Posts Information</b><br />
                        {#if product?.post}
                            <p class="">
                                Author : {product?.post?.author}
                            </p>
                            <p class="">
                                Category : {product?.post?.category}
                            </p>
                            <p class="">
                                published At : {product?.post?.published_at}
                            </p>
                        {:else}
                            <p>No Data</p>
                        {/if}
                    </div>
                    <div>
                        <p class="py-[10px]">Images Posts</p>
                        <div class="grid grid-cols-3 gap-1">
                            {#each convertImageJsonToArray(product?.post.images) as path, i}
                                <img
                                    src={!path
                                        ? "/images/logo.png"
                                        : `${host}` + "/" + path}
                                    class=""
                                    alt=""
                                />
                            {/each}
                        </div>
                    </div>
                </div>
                <!-- content show here  -->
                <div class="py-[20px] flex justify-center">
                    {product?.post?.content}
                </div>
            </TabItem>
        </Tabs>
    </TabItem>
    <TabItem title="Edit Product">
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Settings:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </TabItem>
</Tabs>
