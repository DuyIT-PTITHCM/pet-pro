<script lang="ts">
    import { formatCurrency } from "$lib/Utils/accounting";
    import { loadingState } from "./../../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Tabs, TabItem } from "flowbite-svelte";
    import CreateProduct from "$lib/components/admin/products/CreateProduct.svelte";

    const productService = RepositoryFactory.get("productRepository");
    let product: any;
    let host = "http://103.142.26.42/";
    const mode = "modify";
    let products = {
        productName: null,
        description: null,
        price: null,
        originalPrice: null,
        stockQuantity: null,
        origin: null,
        notes: null,
        type: null,
        status: null,
        discount: null,
        slug: null,
        createdBy: 1,
        editedBy: 1,
        categoryId: null,
        images: "",
        expirationDate: null,
    };
    export let data;

    async function productDetail() {
        loadingState.set(true);
        product = await productService.show(data?.id);
        product = product.data.data;
        products = product;
        loadingState.set(false);
    }
    function convertImageJsonToArray(json) {
        if (json) {
            return JSON.parse(json);
        }
        return [];
    }

    productDetail();

    function formatDate(dateString: any) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
  }
</script>

<Tabs activeClasses="p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" 
inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" 
contentClass="p-4 bg-gray-50 dark:bg-gray-800 bg-blue-500 rounded-b-lg">
    <TabItem open title="{product?.productName}">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div class="grid md:grid-cols-2 grid-cols-1 text-gray-500 dark:text-gray-300 text-lg">
                <div>
                    <p class="border-b p-2 m-4">
                        Product Name : {product?.productName}
                    </p>
                    <p class="border-b p-2 m-4">
                        Type : {product?.type}
                    </p>
                    <p class="border-b p-2 m-4">
                        Product Location Status : {product?.status}
                    </p>
                    <p class="border-b p-2 m-4">
                        Product Category : {product?.category.categoryName}
                    </p>
                    <p class="border-b p-2 m-4">
                        Product Stock : {product?.stockQuantity}
                    </p>
                    <p class="border-b p-2 m-4">
                        The Origin : {product?.origin}
                    </p>
                    <p class="border-b p-2 m-4">
                        Product Description : {product?.description}
                    </p>
                </div>
                <div>
                    <p class="border-b p-2 m-4">
                        Original Price : {formatCurrency(product?.originalPrice)}
                    </p>
                    <p class="border-b p-2 m-4">
                        Price Sales : {formatCurrency(product?.price)}
                    </p>
                    <p class="border-b p-2 m-4">
                        Product Discount : {product?.discount} %
                    </p>
                    {#if product?.type != 'pet'}    
                    <p class="border-b p-2 m-4">
                        Product Expiration Date : {formatDate(product?.expirationDate)}
                    </p>
                    {/if}
                    <p class="border-b p-2 m-4">
                        Notes : {product?.notes}
                    </p>
                    <p class="border-b p-2 m-4">
                        Unique URL : {product?.slug}
                    </p>
                    <p class="border-b p-2 m-4">
                        Created At : {formatDate(product?.createdAt)}
                    </p>
                    <p class="border-b p-2 m-4">
                        Updated At : {formatDate(product?.updatedAt)}
                    </p>
                </div>
            </div>
            <div class="leading-8 flex flex-col items-center">
                <b class="block dark:text-gray-300">Images Product</b>
                <div class="gap-4 md:columns-3 sm:columns-2 columns-1">
                    {#each convertImageJsonToArray(product?.images) as path, i}
                    <img
                        src={!path
                            ? "/images/logo.png"
                            : `${host}` + "/" + path}
                        class="rounded-xl w-full h-auto mb-4 pi"
                        alt="{product?.name}"
                    />
                    {/each}
                </div>
            </div>
        </div>
        <div class="border-[1px] rounded-lg border-gray-700 dark:border-gray-300 mt-2">
        <Tabs contentClass="p-4 bg-gray-50 dark:bg-slate-900 rounded-b-lg" activeClasses="p-2 text-primary-500 bg-gray-100 rounded-t-lg dark:bg-slate-900 dark:text-primary-500" inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            <TabItem open title="Seo">
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
                    <div class=" text-gray-500 dark:text-gray-400">
                        <b class="block my-[10px]">Seo Information</b><br />
                        {#if product?.seo}
                            <p class="border-b p-2 m-4">
                                Canonical Url : {product?.seo?.canonicalUrl}
                            </p>
                            <p class="border-b p-2 m-4">
                                Keywords : {product?.seo?.keywords}
                            </p>
                            <p class="border-b p-2 m-4">
                                Meta Description : {product?.seo
                                    ?.metaDescription}
                            </p>
                            <p class="border-b p-2 m-4">
                                Meta Title : {product?.seo?.metaTitle}
                            </p>
                            <p class="border-b p-2 m-4">
                                Open GraphTags : {product?.seo?.openGraphTags}
                            </p>
                            <p class="border-b p-2 m-4">
                                Robot MetaTags : {product?.seo?.robotMetaTags}
                            </p>
                            <p class="border-b p-2 m-4">
                                Sitemap Frequency : {product?.seo
                                    ?.sitemapFrequency}
                            </p>
                            <p class="border-b p-2 m-4">
                                Structured Data : {JSON.parse(product?.seo?.structuredData)}
                            </p>
                            <p class="border-b p-2 m-4">
                                Created At : {formatDate(product?.seo?.createdAt)}
                            </p>
                        {:else}
                            <p>No Data</p>
                        {/if}
                    </div>
                    <div>
                        <b
                            class="block my-[10px] text-gray-500 dark:text-gray-300"
                            >Preview</b
                        ><br />

                        developing....
                    </div>
                </div>
            </TabItem>
            <TabItem open title="Posts">
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
                    <div class=" text-gray-500 dark:text-gray-300">
                        <b class="block my-[10px]">Posts Information</b><br />
                        {#if product?.post}
                            <p class="border-b p-2 m-4">
                                Author : {product?.post?.author}
                            </p>
                            <p class="border-b p-2 m-4">
                                Category : {product?.post?.category}
                            </p>
                            <p class="border-b p-2 m-4">
                                published At : {formatDate(product?.post?.published_at)}
                            </p>
                        {:else}
                            <p>No Data</p>
                        {/if}
                    </div>
                    <div>
                        <p class="py-[10px]">Images Posts</p>
                        <div class="grid grid-cols-3 gap-1">
                            {#each convertImageJsonToArray(product?.post?.images) as path, i}
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
                <div class="py-[20px] justify-center">
                    <h3> Content Posts</h3><br>
                    <div>
                        {@html product?.post?.content}
                    </div>
                </div>
            </TabItem>
        </Tabs>
    </div>
    </TabItem>
    <TabItem title="Edit {product?.productName}">
        <CreateProduct mode={mode} products={products} title="Edit Products"/>
    </TabItem>
</Tabs>
<style>

.gallery {
  column-count: 3;
  --webkit-column-count: 3;
  --moz-column-count: 3;
  gap: 1rem;
}

/* Responsive-ness for different screen-sizes */
@media screen and (max-width: 810px) {
  .gallery {
    column-count: 3;
    --webkit-column-count: 3;
    --moz-column-count: 3;
  }
}

@media screen and (max-width: 500px) {
  .gallery {
    column-count: 2 !important;
    --webkit-column-count: 2;
    --moz-column-count: 2;
  }
}

@media screen and (max-width: 400px) {
  .gallery {
    column-count: 1 !important;    
    --webkit-column-count: 1;
    --moz-column-count: 1;
  }
}

</style>