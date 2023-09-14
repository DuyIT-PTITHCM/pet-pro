<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { loadingState } from "$lib/store/loading";
    import Editor from "$lib/components/common/Editor.svelte";
    import axios from "axios";
    import { BASE_API } from "$lib/Const";
    import { toastErr } from "$lib/store/toastError";
    import { Fileupload } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";

    export let article: any;
    export let queryParams: any;

    article.reference = queryParams.type;

    let categories: any[] = [],
        files: any[] = [],
        file;

    if (article && article.id) {
        files = JSON.parse(article.imageUrl);
    }
    const postService = RepositoryFactory.get("postRepository");
    const categoryService = RepositoryFactory.get("categoryRepository");
    const uploadFileService = RepositoryFactory.get("uploadRepository");

    async function handleSubmitCreatePost() {
        article.imageUrl = JSON.stringify(files);
        const res = await postService.post(article);
        article = res.data.data;
        return res;
    }
    async function handleSubmitUpdatePost() {
        article.imageUrl = JSON.stringify(files);
        return postService.put(article.id, article);
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
                goto("/admin/service/");
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
                Title
            </label>
            <input
                bind:value={article.title}
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
                Category
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
                Author
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
                Slug
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
                Description
            </label>

            <textarea
                bind:value={article.description}
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
            />
        </div>
    </div>
    <div>
        <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
            for="grid-last-name"
        >
            content
        </label>
        <Editor bind:text={article.content} />
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
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]">
            {#each files as path}
                <div class="relative">
                    <img
                        class="object-cover w-full h-[300px] rounded"
                        src={`http://103.142.26.42${path}`}
                        alt="avatar"
                    />
                    <div
                        class="absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"
                        on:click={handleDeleteFile(path)}
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
