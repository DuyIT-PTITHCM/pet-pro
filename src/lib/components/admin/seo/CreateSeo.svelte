<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { BASE_API } from "$lib/Const";
    import { loadingState } from "$lib/store/loading";
    import { toastErr } from "$lib/store/toastError";
    import Icon from "@iconify/svelte";
    import axios from "axios";
    import { Fileupload } from "flowbite-svelte";

    export let seoData: any;

    let seo = seoData.seo;
    let host = "http://103.142.26.42";
    let file: any;
    file = seo.image;
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
        file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post(`${BASE_API}/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            });

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
            await axios.post(
                `${BASE_API}/upload/delete`,
                {
                    path: path,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                }
            );
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

<div
    class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"
>
    <h1 class="text-[34px] py-[10px] uppercase text-center font-bold">
        seo edit
    </h1>
    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-first-name"
            >
                Meta Title
            </label>
            <input
                bind:value={seo.metaTitle}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Input Meta Description"
            />
        </div>
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-last-name"
            >
                Meta Description
            </label>
            <input
                bind:value={seo.metaDescription}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Meta Description "
            />
        </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-first-name"
            >
                Keywords
            </label>
            <input
                bind:value={seo.keywords}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Input Meta keywords"
            />
        </div>
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-last-name"
            >
                Canonical Url
            </label>
            <input
                bind:value={seo.canonicalUrl}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Innput Canonical Url "
            />
        </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-first-name"
            >
                Robot MetaTags
            </label>
            <input
                bind:value={seo.robotMetaTags}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Input Meta Robot MetaTags"
            />
        </div>
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-last-name"
            >
                Open GraphTags
            </label>
            <input
                bind:value={seo.openGraphTags}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Innput Open GraphTags "
            />
        </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-last-name"
            >
                Sitemap Frequency
            </label>
            <input
                bind:value={seo.sitemapFrequency}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Innput Sitemap Frequency "
            />
        </div>
    </div>
    <div>
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
                        src={`http://103.142.26.42${file}`}
                        alt="avatar"
                    />
                    <div
                        class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"
                        on:click={handleDeleteFile(file)}
                    >
                        <Icon icon="iwwa:delete" width="30" />
                    </div>
                </div>
            </div>
        {/if}
    </div>
    <div class="flex justify-center items-center relative bottom-0">
        <div class="btn-signup w-fit">
            <button
                class=" bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"
                on:click={handleSubmit}>Submit</button
            >
        </div>
    </div>
</div>
