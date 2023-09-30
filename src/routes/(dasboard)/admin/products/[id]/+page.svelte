<script lang="ts">
    import { formatCurrency } from "$lib/Utils/accounting";
    import { loadingState } from "./../../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Tabs, TabItem, DeviceMockup } from "flowbite-svelte";
    import CreateProduct from "$lib/components/admin/products/CreateProduct.svelte";
    import Icon from "@iconify/svelte";
    import { HOST, MODE_MODIFY } from "$lib/Const";
    import { convertImageJsonToArray } from "$lib/Utils/common";
    import Nodata from "$lib/components/common/Nodata.svelte";
    import { t } from "$lib/translations";

    export let data;

    const productService = RepositoryFactory.get("productRepository");
    let product: any;
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

    async function productDetail() {
        loadingState.set(true);
        product = await productService.show(data?.id);
        product = product.data.data;
        products = product;
        loadingState.set(false);
    }

    function formatDate(dateString: any) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    function init() {
        productDetail();
    }

    init();
</script>

<Tabs
    style="underline"
    activeClasses="p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"
    inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    contentClass="rounded-b-lg"
>
    <TabItem open title={product?.productName}>
        <div
            class="grid lg:grid-cols-2 grid-cols-1 gap-5 bg-white dark:bg-gray-800 rounded-b-lg"
        >
            <div class="grid md:grid-cols-2 grid-cols-1 dark:text-gray-300">
                <div>
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.name")}:</b>
                        {product?.productName}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.type")}:</b>
                        {product?.type}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.status")}:</b>
                        {product?.status}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("common.category")}:</b>
                        {product?.category.categoryName}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.quantityInStock")}:</b>
                        {product?.stockQuantity}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.origin")}:</b>
                        {product?.origin}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("common.description")}:</b>
                        {product?.description}
                    </p>
                </div>
                <div>
                    <p class="border-b p-2 m-4">
                        <b> {$t("common.originalPrice")}:</b>
                        {formatCurrency(product?.originalPrice)}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("common.price")}:</b>
                        {formatCurrency(product?.price)}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.discount")}:</b>
                        {product?.discount} %
                    </p>
                    {#if product?.type != "pet"}
                        <p class="border-b p-2 m-4">
                            <b>{$t("products.expirationDate")}:</b>
                            {formatDate(product?.expirationDate)}
                        </p>
                    {/if}
                    <p class="border-b p-2 m-4">
                        <b>{$t("products.notes")} :</b>
                        {@html product?.notes}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("common.slug")}:</b>
                        {product?.slug}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b>{$t("common.createdAt")} :</b>
                        {formatDate(product?.createdAt)}
                    </p>
                    <p class="border-b p-2 m-4">
                        <b> {$t("common.updatedAt")} :</b>
                        {formatDate(product?.updatedAt)}
                    </p>
                </div>
            </div>
            <div class="leading-8 flex flex-col items-center">
                <b class="block dark:text-gray-300">{$t("common.images")}</b>
                <div class="gap-4 md:columns-3 sm:columns-2 columns-1">
                    {#each convertImageJsonToArray(product?.images) as path, i}
                        <img
                            src={!path
                                ? "/images/logo.png"
                                : `${HOST}` + "/" + path}
                            class="rounded-xl w-full h-auto mb-4 pi"
                            alt={product?.name}
                        />
                    {/each}
                </div>
            </div>
        </div>
        <div class="mt-2 bg-white dark:bg-gray-800 rounded-lg">
            <Tabs
                style="underline"
                activeClasses="p-2 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"
                inactiveClasses="p-2 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                contentClass=""
            >
                <TabItem open title={$t("seo.seoInformation")}>
                    {#if product?.seo?.id}
                        <div
                            class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"
                        >
                            <div class=" text-gray-500 dark:text-gray-400">
                                <p class="border-b p-2 m-4">
                                    <b>{$t("seo.metaTitle")} : </b>{product?.seo
                                        ?.metaTitle}
                                </p>
                                <p class="border-b p-2 m-4">
                                    <b>{$t("seo.metaDescription")} </b> <br />
                                    {product?.seo?.metaDescription}
                                </p>
                                <p class="border-b p-2 m-4">
                                    <b>{$t("seo.canonicalUrl")} :</b>
                                    {product?.seo?.canonicalUrl}
                                </p>
                                <p class="border-b p-2 m-4">
                                    <b>{$t("seo.keywords")} :</b>
                                    {product?.seo?.keywords}
                                </p>
                                <p class="border-b p-2 m-4">
                                    <b>{$t("seo.robotMetatags")} :</b>
                                    {product?.seo?.robotMetaTags}
                                </p>
                                <p class="border-b p-2 m-4">
                                    <b>
                                        {$t("seo.sitemapFrequency")} :
                                    </b>{product?.seo?.sitemapFrequency}
                                </p>
                            </div>
                            <div>
                                <DeviceMockup device="ios">
                                    <div
                                        class="flex flex-col items-center justify-center w-full h-full p-4 text-gray-200 bg-no-repeat bg-fixed bg-cover bg-center"
                                        style="background: url(https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1-768x512.jpg);"
                                    >
                                        <div
                                            class="w-full flex items-center mb-2"
                                        >
                                            <img
                                                src="https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg"
                                                alt=""
                                                class="mr-2 w-10 h-10 rounded-full object-cover"
                                            />
                                            <p
                                                class="rounded-lg p-2 bg-slate-600 text-sm"
                                            >
                                                Hey!
                                            </p>
                                        </div>
                                        <div
                                            class="w-full flex items-center mb-2"
                                        >
                                            <img
                                                src="https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg"
                                                alt=""
                                                class="mr-2 w-10 h-10 rounded-full object-cover"
                                            />
                                            <p
                                                class="rounded-lg p-2 bg-slate-600 text-sm flex-1"
                                            >
                                                This is {product?.productName}
                                            </p>
                                        </div>
                                        <div class="w-full flex mb-2">
                                            <img
                                                src="https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg"
                                                alt=""
                                                class="mr-2 w-10 h-10 rounded-full object-cover"
                                            />
                                            <div
                                                class="w-full rounded-lg bg-slate-600 flex-1"
                                            >
                                                <p
                                                    class="text-sm text-center p-1"
                                                >
                                                    {product?.seo?.canonicalUrl}
                                                </p>
                                                <img
                                                    src={HOST +
                                                        product?.seo?.image}
                                                    alt={product?.seo
                                                        ?.metaTitle}
                                                />
                                                <p class="text-sm p-2">
                                                    {product?.seo?.metaTitle}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            class="w-full flex items-center justify-end mb-2"
                                        >
                                            <p
                                                class="rounded-lg p-2 bg-slate-600 text-sm flex items-center"
                                            >
                                                Oh! It very nice <Icon
                                                    icon="fluent-emoji-flat:red-heart"
                                                />
                                                <Icon
                                                    icon="fluent-emoji-flat:red-heart"
                                                />
                                            </p>
                                            <img
                                                src="https://kenh14cdn.com/2020/2/23/005ghwu5ly1g5zg5rv1udj33aj4xme84-15824491538811346801649.jpg"
                                                alt=""
                                                class="ml-2 w-10 h-10 rounded-full object-cover"
                                            />
                                        </div>
                                        <div
                                            class="w-full flex items-center justify-end mb-2"
                                        >
                                            <p
                                                class="rounded-lg p-2 bg-slate-600 text-sm flex items-center"
                                            >
                                                Thank you <Icon
                                                    icon="fluent-emoji-flat:heart-with-ribbon"
                                                />
                                            </p>
                                            <img
                                                src="https://kenh14cdn.com/2020/2/23/005ghwu5ly1g5zg5rv1udj33aj4xme84-15824491538811346801649.jpg"
                                                alt=""
                                                class="ml-2 w-10 h-10 rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </DeviceMockup>
                            </div>
                        </div>
                    {:else}
                        <Nodata />
                    {/if}
                </TabItem>
                <TabItem open title={$t("post.productPostDetail")}>
                    {#if product?.post?.id}
                        <div
                            class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5"
                        >
                            <div class=" text-gray-500 dark:text-gray-300">
                                <p class="border-b p-2 m-4">
                                    {$t("post.author")} : {product?.post
                                        ?.author}
                                </p>
                                <p class="border-b p-2 m-4">
                                    {$t("common.category")} : {product?.post
                                        ?.category}
                                </p>
                                <p class="border-b p-2 m-4">
                                    {$t("common.publishedAt")} : {formatDate(
                                        product?.post?.published_at
                                    )}
                                </p>
                            </div>
                            <div>
                                <p class="py-[10px]">{$t("common.images")}</p>
                                <div class="grid grid-cols-3 gap-1">
                                    {#each convertImageJsonToArray(product?.post?.images) as path, i}
                                        <img
                                            src={!path
                                                ? "/images/logo.png"
                                                : `${HOST}` + "/" + path}
                                            class=""
                                            alt=""
                                        />
                                    {/each}
                                </div>
                            </div>
                        </div>
                        <!-- content show here  -->
                        <div class="py-[20px] justify-center">
                            <h3>{$t("post.content")}</h3>
                            <br />
                            <div class="dark:text-gray-100">
                                {@html product?.post?.content}
                            </div>
                        </div>
                    {:else}
                        <Nodata />
                    {/if}
                </TabItem>
            </Tabs>
        </div>
    </TabItem>
    <TabItem title="Edit {product?.productName}">
        <CreateProduct
            mode={MODE_MODIFY}
            {products}
            title="products.editProduct"
        />
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
