<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { loadingState } from "$lib/store/loading";
    import { toastErr } from "$lib/store/toastError";
    import Editor from "$lib/components/common/Editor.svelte";
    import { t } from "$lib/translations";

    export let postData: any;

    let post = postData.post;
    let idEditor = "editor-post-description";

    const postService = RepositoryFactory.get("postRepository");
    async function handleSubmitCreatePost() {
        const res = await postService.post(post);
        post = res.data.data;
        postData.postId = post.id;
        postData.post = post;
        toastErr.set([
            {
                message: res.data.message,
                type: "success",
            },
        ]);
        return res;
    }
    async function handleSubmitUpdatePost() {
        return postService.put(post.id, post);
    }

    async function handleSubmit() {
        loadingState.set(true);
        if (!post.id) {
            try {
                await handleSubmitCreatePost();
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
                const res = await handleSubmitUpdatePost();
            } catch (error) {
                console.log(error);
            }
        }
        loadingState.set(false);
    }
</script>

<div
    class="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded flex flex-col p-4 h-full"
>
    <h1 class="text-[34px] py-[10px] uppercase text-center font-bold">
        {$t("post.postEdit")}
    </h1>
    <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"
                for="grid-first-name"
            >
                {$t("post.title")}
            </label>
            <input
                bind:value={post.title}
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
                {$t("post.author")}
            </label>
            <input
                bind:value={post.author}
                class="appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Meta Description "
            />
        </div>
    </div>
    <div>
        <Editor bind:id={idEditor} bind:text={post.content} />
    </div>

    <div class="flex justify-center items-center p-4">
        <div class="btn-signup w-fit">
            <button
                class=" bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"
                on:click={handleSubmit}>Submit</button
            >
        </div>
    </div>
</div>
