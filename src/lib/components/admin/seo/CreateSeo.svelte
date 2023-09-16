<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { BASE_API } from "$lib/Const";
    import { loadingState } from "$lib/store/loading";
    import { toastErr } from "$lib/store/toastError";
    import Icon from "@iconify/svelte";
    import axios from "axios";
    import { Fileupload, Textarea } from "flowbite-svelte";

    export let seoData: any;
    export let divClass = "grid sm:grid-cols-2 grid-cols-1";

    let seo = seoData.seo;
    let host = "http://103.142.26.42";
    let file: any;
    file = seo.image;

    const uploadFileService = RepositoryFactory.get("uploadRepository");
    function convertImageJsonToArray(json) {
        if (json) {
            return JSON.parse(json);
        }
        return [];
    }

    let images = convertImageJsonToArray(seoData.images);
    let image = images ? images[0] : "";

    // Chèn dữ liệu động
    const seoService = RepositoryFactory.get("seoRepository");
    async function handleSubmitCreateSeo() {
        let structuredData = {
            "@context": `${host}`,
            "@type": "sản phẩm ",
            name: `${seoData.name}`,
            description: `${seo.metaDescription}`,
            image: `${image}`,
            brand: {
                "@type": "Thương Hiệu",
                name: "Pet One",
            },
            offers: {
                "@type": "Offer",
                price: `${seoData.price}`,
                priceCurrency: "VNĐ",
                availability: "http://103.142.26.42",
                seller: {
                    "@type": "Organization",
                    name: "Pet One",
                },
            },
        };
        seo.image = file;
        seo.structuredData = JSON.stringify(structuredData);
        const res = await seoService.post(seo);
        seo = res.data.data;
        seoData.seoId = seo.id;
        seoData.seo = seo;
        return res;
    }
    async function handleSubmitUpdateSeo() {
        let structuredData = {
            "@context": `${host}`,
            "@type": "sản phẩm ",
            name: `${seoData.productName}`,
            description: `${seo.metaDescription}`,
            image: `${image}`,
            brand: {
                "@type": "Thương Hiệu",
                name: "Pet One",
            },
            offers: {
                "@type": "Offer",
                price: `${seoData.price}`,
                priceCurrency: "VNĐ",
                availability: "http://103.142.26.42",
                seller: {
                    "@type": "Organization",
                    name: "Pet One",
                },
            },
        };
        seo.image = file;
        seo.structuredData = JSON.stringify(structuredData);
        return seoService.put(seo.id, seo);
    }

    async function handleSubmit() {
        loadingState.set(true);
        if (!seo.id) {
            try {
                await handleSubmitCreateSeo();
            } catch (error) {
                const errors = error?.response?.data?.errors;
                var toasts = errors?.map((element: any) => {
                    return {
                        message: element.path + "-" + element.msg,
                        type: "error",
                    };
                });
                toastErr.set(toasts);
            }
        } else {
            try {
                const res = await handleSubmitUpdateSeo();
            } catch (error) {
                console.log(error);
            }
        }
        loadingState.set(false);
    }
    async function handleFileInputChange(event: any) {
        const fileUpload = await event.target.files[0];
        let formData = new FormData();
        formData.append("file", fileUpload);

        try {
            const res = await uploadFileService.uploadFile(formData);
            file = res.data.data.path;
        } catch (error) {
            toastErr.set([
                {
                    message: "File upload failed",
                    type: "error",
                },
            ]);
        }
    }
    async function handleDeleteFile(path: String) {
        try {
            await uploadFileService.deleteFile({
                path: path,
            });
            file = "";
        } catch (error) {
            toastErr.set([
                {
                    message: "File deleting failed",
                    type: "error",
                },
            ]);
        }
    }
</script>
<div class="{divClass} bg-white dark:bg-slate-800 dark:text-white shadow-md rounded h-full" >
    <h1 class="text-[34px] py-[10px] uppercase text-center font-bold col-span-full">
        seo edit
    </h1>
    <!-- <div class="-mx-3 md:flex mb-6"> -->
        <div class="px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="metaTitle"
            >
                Meta Title
            </label>
            <input
                bind:value={seo.metaTitle}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="metaTitle"
                type="text"
                placeholder="Input Meta Description"
            />
        </div>
        <div class="px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="metaDescription"
            >
                Meta Description
            </label>
            <Textarea
                bind:value={seo.metaDescription}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="metaDescription"
                type="text"
                placeholder="Meta Description "
            />
        </div>
    <!-- </div>
    <div class="-mx-3 md:flex mb-6"> -->
        <div class="px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="keywords"
            >
                Keywords
            </label>
            <input
                bind:value={seo.keywords}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="keywords"
                type="text"
                placeholder="Input Meta keywords"
            />
        </div>
        <div class="px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="canonicalUrl"
            >
                Canonical Url
            </label>
            <input
                bind:value={seo.canonicalUrl}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="canonicalUrl"
                type="text"
                placeholder="Innput Canonical Url "
            />
        </div>
    <!-- </div>
    <div class="-mx-3 md:flex mb-6"> -->
        <div class="px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="robotMetaTags"
            >
                Robot MetaTags
            </label>
            <input
                bind:value={seo.robotMetaTags}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="robotMetaTags"
                type="text"
                placeholder="Input Meta Robot MetaTags"
            />
        </div>
        <!-- <div class="px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="openGraphTags"
            >
                Open GraphTags
            </label>
            <input
                bind:value={seo.openGraphTags}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="openGraphTags"
                type="text"
                placeholder="Innput Open GraphTags "
            />
        </div> -->
    <!-- </div>
    <div class="-mx-3 md:flex mb-6"> -->
        <div class="px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="sitemapFrequency"
            >
                Sitemap Frequency
            </label>
            <input
                bind:value={seo.sitemapFrequency}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="sitemapFrequency"
                type="text"
                placeholder="Innput Sitemap Frequency "
            />
        </div>
    <!-- </div> -->
    <div class="px-3 col-span-full">
        <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
            for="grid-zip"
        >
            Images
        </label>
        <Fileupload
            on:change={handleFileInputChange}
            class="w-24 py-[10px] bg-white"
        />
        {#if file}
            <div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]">
                <div class="relative">
                    <img
                        class="object-cover w-full h-[300px] rounded"
                        src={file}
                        alt="avatar"
                    />
                    <button
                        class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"
                        on:click={() => handleDeleteFile(file)}
                    >
                        <Icon icon="iwwa:delete" width="30" />
                </button>
                </div>
            </div>
        {/if}
    </div>
    <div class="col-span-full flex justify-center items-center relative mb-4">
        <div class="btn-signup w-fit">
            <button
                class=" bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"
                on:click={handleSubmit}>Submit</button
            >
        </div>
    </div>
</div>
