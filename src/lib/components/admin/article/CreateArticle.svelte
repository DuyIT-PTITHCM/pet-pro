<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { loadingState } from "$lib/store/loading";
    import Editor from "$lib/components/common/Editor.svelte";
    import { toastErr } from "$lib/store/toastError";
    import { Button, Fileupload } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { t } from "$lib/translations";
    import { BASE_API, HOST } from "$lib/Const";

    export let IsService = false;
    export let IsBlog = false;
    export let article: any;
    export let queryParams: any;
    article.reference = queryParams.type;

    let categories: any[] = [],
        files: any[] = [],
        file;

    if (article && article.id) {
        files = JSON.parse(article.imageUrl);
    }
    let priceItem = {
        id: 0,
        serviceId: null,
        petWeight: null,
        price: null,
    };
    const postService = RepositoryFactory.get("postRepository");
    const categoryService = RepositoryFactory.get("categoryRepository");
    const uploadFileService = RepositoryFactory.get("uploadRepository");

    function addPrice() {
        if (priceItem.petWeight > 0 && priceItem.price > 0) {
            article.prices = [...article.prices, { ...priceItem }];
        } else {
            toastErr.set([
                {
                    message:
                        "Weight and price must be not null and more than 0",
                    type: "error",
                },
            ]);
        }
    }
    function removePrice(item: any) {
        if (item.id) {
            article.prices.find((x) => x.id == item.id).serviceId = -1;
            article.price = article.price;
        } else {
            article.prices = article.prices.filter((price) => price !== item);
        }
    }
    async function handleSubmitUpdatePost() {
        article.imageUrl = JSON.stringify(files);
        toastErr.set([
                {
                    message: "Cập nhật thành công",
                    type: "success",
                },
            ]);
        return postService.put(article.id, article);
    }
    async function handleSubmitCreatePost() {
        article.imageUrl = JSON.stringify(files);
        const res = await postService.post(article);
        article = res.data.data;
        console.log("JJJ")
        return article;
    }

    async function handleFileInputChange(event: any) {
        file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await uploadFileService.uploadFile(formData);

            files.push(res.data.data.path);
            files = files;
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
            files = files.filter((item) => item !== path);
            if (article && article.id) {
                await handleSubmitUpdatePost();
            }
        } catch (error) {
            toastErr.set([
                {
                    message: "File deleting failed",
                    type: "error",
                },
            ]);
        }
    }

    async function getCategories() {
        loadingState.set(true);
        const res = await categoryService.get(queryParams);
        categories = res.data.data;
        loadingState.set(false);
    }

    async function handleSubmit() {
        loadingState.set(true);
        if (!article.id) {
            try {
                await handleSubmitCreatePost();
                loadingState.set(false);
                toastErr.set([
                    {
                        message: "Tạo thành công",
                        type: "success",
                    },
                ]);
                if (IsService){
                    goto("/admin/service/")
                }
                else if (IsBlog) {
                    goto("/admin/blog/");
                }
                else{
                    console.log(article)
                }
            } catch (error) {
                const errors = error?.response?.data?.errors;
                var toasts = errors?.map((element: any) => {
                    return {
                        message: element.path + "-" + element.msg,
                        type: "error",
                    };
                });
                toastErr.set(toasts);
                loadingState.set(false);
            }
        } else {
            try {
                const res = await handleSubmitUpdatePost();
            } catch (error) {
                console.log(error);
            }
        }
        loadingState.set(false);
    }
    async function init() {
        await getCategories();
    }
    init();
    $: showPrices = article?.prices?.filter((item) => item.serviceId != -1);
</script>

<div
    class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"
>
    <h1 class="text-[34px] py-[10px] uppercase text-center font-bold">
        Article
    </h1>
    <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-first-name"
            >
                {$t("post.title")}
            </label>
            <input
                bind:value={article.title}
                on:change={() => {
                    article.slug = article.title
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, "-");
                }}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Input Title"
            />
        </div>
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-zip"
            >
                {$t("common.category")}
            </label>
            <div class="relative">
                <select
                    class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded dark:bg-gray-700"
                    id="grid-state"
                    bind:value={article.categoryId}
                >
                    {#each categories as item, index}
                        <option value={item.id}>{item.categoryName}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
    <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-last-name"
            >
                {$t("post.author")}
            </label>
            <input
                bind:value={article.author}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Input Author "
            />
        </div>
        <div class="md:w-1/2 px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-zip"
            >
                {$t("common.slug")}
            </label>
            <input
                bind:value={article.slug}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Input Slug"
            />
        </div>
    </div>

    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-password"
            >
                {$t("common.description")}
            </label>

            <textarea
                bind:value={article.description}
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
            />
        </div>
    </div>
    {#if IsService}
        <div class="flex w-full gap-4">
            <div class="md:w-1/2 w-full">
                <div class="w-full">
                    <div class="flex gap-4">
                        <div class="w-full">
                            <label
                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                                for="petWeight">Pet Weight</label
                            >
                            <input
                                bind:value={priceItem.petWeight}
                                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="petWeight"
                                type="number"
                                placeholder="Input Weight"
                            />
                        </div>
                        <div class="w-full">
                            <label
                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                                for="petPrice">Service Price</label
                            >
                            <input
                                bind:value={priceItem.price}
                                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="petPrice"
                                type="number"
                                placeholder="Input Price"
                            />
                        </div>
                    </div>
                    <div>
                        <Button on:click={() => addPrice()}>Add Price</Button>
                    </div>
                </div>
                <div
                    class="bg-slate-100 dark:bg-slate-900 rounded-md w-full p-4 mt-2"
                >
                    <table class="w-full">
                        <tr>
                            <th class="text-left">Cân nặng</th>
                            <th class="text-left"
                                ><span class="ml-3">Giá dịch vụ</span></th
                            >
                        </tr>
                        
                        {#each showPrices as price, index}
                            {#if index == 0}
                                <tr class="border-b">
                                    <td class="py-2"
                                        >Dưới {price.petWeight}kg</td
                                    >
                                    <td
                                        ><span class="ml-3"
                                            >{price.price.toLocaleString()}</span
                                        > vnd</td
                                    >
                                </tr>
                            {/if}
                            <tr class="border-b">
                                {#if showPrices[index + 1]}
                                    <td class="py-2"
                                        >Từ {price.petWeight}kg đến {showPrices[
                                            index + 1
                                        ].petWeight}kg
                                    </td>
                                    <td
                                        ><span class="ml-3"
                                            >{showPrices[
                                                index + 1
                                            ].price.toLocaleString()} vnd</span
                                        ></td
                                    >
                                {:else}
                                    <td class="py-2" colspan="2">
                                        Trên {price.petWeight}kg liên hệ cửa
                                        hàng.
                                    </td>
                                {/if}
                            </tr>
                        {/each}
                    </table>
                </div>
            </div>
            <div
                class="md:w-1/2 gap-4 w-full items-center bg-slate-100 dark:bg-slate-900 p-4 rounded-md"
            >
                <div class="flex justify-around w-full gap-4 items-center">
                    <p
                        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                    >
                        Pet weight
                    </p>
                    <p
                        class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                    >
                        Service Price
                    </p>
                    <p></p>
                </div>
                {#if article.prices}
                    {#each article.prices as item, index}
                        {#if item.serviceId >= 0}
                            <div
                                class="flex w-full gap-4 items-center justify-between"
                            >
                                <input
                                    bind:value={item.petWeight}
                                    class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="petWeight"
                                    type="number"
                                    placeholder="Input Weight"
                                />

                                <input
                                    bind:value={item.price}
                                    class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    id="petPrice"
                                    type="number"
                                    placeholder="Input Price"
                                />
                                <Button on:click={() => removePrice(item)}
                                    >Remove</Button
                                >
                            </div>
                        {/if}
                    {/each}
                {:else}
                    Add new price
                {/if}
            </div>
        </div>
    {/if}
    <div>
        <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
            for="grid-last-name"
        >
            {$t("post.content")}
        </label>
        <Editor bind:text={article.content} />
    </div>

    <div>
        <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
            for="grid-zip"
        >
            {$t("common.images")}
        </label>
        <Fileupload
            on:change={handleFileInputChange}
            class="w-24 py-[10px] bg-white"
        />
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]">
            {#each files as path}
                <div class="relative">
                    <img
                        class="object-cover w-full h-[300px] rounded"
                        src={`${HOST + path}`}
                        alt="avatar"
                    />
                    <div
                        class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"
                        on:click={() => handleDeleteFile(path)}
                    >
                        <Icon icon="iwwa:delete" width="30" />
                    </div>
                </div>
            {/each}
        </div>
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
