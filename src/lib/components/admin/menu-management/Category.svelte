<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Tabs, TabItem, ListPlaceholder } from 'flowbite-svelte';
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { toastErr } from '$lib/store/toastError';
    import CreateSeo from '../seo/CreateSeo.svelte';
    import { t } from "$lib/translations";


    const categoryService = RepositoryFactory.get("categoryRepository");
    var isReload = false;
    export let menu : any;
    let categories: any[] = [];
    // $: console.log(categories)
    let nameCategoryName: string;
    let seo = {
        id: null,
        metaTitle: null,
        metaDescription: null,
        keywords: null,
        canonicalUrl: null,
        robotMetaTags: null,
        openGraphTags: null,
        structuredData: null,
        sitemapPriority: null,
        sitemapFrequency: null,
        sitemapLastModified: null,
        reference: "menu",
        referenceId: menu.id,
    };
    menu.seo = menu.seo ? menu.seo : seo;
    async function showCategories(){
        try {
            isReload = true;
            let queryParams = {
                menuId: menu.id,
                type: menu.type,
            };
            const res = await categoryService.get(queryParams);
            categories = res.data.data;
            isReload = false;
        } catch (error) {
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
    async function addCategory(name: string, menuId: number){
        try {
            var newCategory = {
                categoryName: name,
                menuId: menuId,
            }
            const res = await categoryService.post(newCategory);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            nameCategoryName = '';
            showCategories();
            //isMenuEdited.set(true);
        } catch (error) {
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
    async function editCategory(name: string, id: number, menuId: number){
        try {
            var category = {
                categoryName: name,
                menuId: menuId,
            }
            const res = await categoryService.put(id, category);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            showCategories();
            //isMenuEdited.set(true);
        } catch (error) {
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }

    async function deleteMenu(id = 0) {
        try {
            const res = await categoryService.delete(id);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            showCategories();
            //isMenuEdited.set(true);
        } catch (error) {
            console.log("hi")
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
    $: menu && showCategories();
  </script>
<div class="w-full border-2 border-gray-300 shadow-[0_20px_20px_-8px_rgba(0,0,0,0.3)] dark:border-gray-800 dark:shadow rounded-xl overflow-hidden">
    <Tabs contentClass="bg-gray-50 rounded-lg dark:bg-gray-800 h-full" style="underline">
        <TabItem open>
            <div slot="title" class="flex items-center gap-2 rounded-lg">
                {$t("common.categoryOf")} {menu.name}
            </div>
            <div class="dark:bg-gray-700 min-h-[150px] p-4">
                {#if isReload}
                    <ListPlaceholder />
                {:else if categories.length > 0}
                    <div class="w-full h-full">
                        {#each categories as category}
                            <div class="flex justify-between items-center mb-4 w-full bg-slate-200 dark:bg-slate-900 pl-4 cursor-pointer rounded-lg overflow-hidden">
                                <input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg" bind:value={category.categoryName} />
                                <div>
                                    <button class="text-xl dark:text-white p-4 -mr-1 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black rounded-lg"
                                    on:click={() => {editCategory(category.categoryName, category.id, category.menuId)}}>
                                        <Icon icon="fluent:edit-20-filled" />
                                    </button>
                                    <button class="text-xl dark:text-white p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black rounded-lg"
                                    on:click={() => {deleteMenu(category.id)}}>
                                        <Icon icon="fluent:delete-28-filled" />
                                    </button>
                                </div>
                            </div>
                        {/each}
                        <div class="flex justify-between items-center w-full  text-gray-900 dark:text-gray-200 bg-slate-200 dark:bg-slate-900
                                my-4 pl-4 rounded-lg overflow-hidden"
                                >
                                <input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg" placeholder="Input category name to add..." bind:value={nameCategoryName}/>

                            <button class="text-xl p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-500 rounded-lg" on:click={() => {addCategory(nameCategoryName, menu.id)}}>
                                <Icon icon="fluent:add-12-filled" />
                            </button>
                        </div>
                    </div>
                {:else}
                    <div class="p-4 dark:text-gray-200">
                        <p>This menu don't have any category <span class="block animate-bounce font-bold ml-1">. . .</span></p>
                        <div class="flex justify-between items-center w-full  text-gray-900 dark:text-gray-200 bg-slate-200 dark:bg-slate-900
                                my-4 pl-4 rounded-lg overflow-hidden"
                                >
                                <input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg" placeholder="Input category name to add..." bind:value={nameCategoryName}/>

                            <button class="text-xl p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-500 rounded-lg" on:click={() => {addCategory(nameCategoryName, menu.id)}}>
                                <Icon icon="fluent:add-12-filled"/>
                            </button>
                        </div>
                    </div>
                {/if}
            </div>
        </TabItem>
        <TabItem>
            <div slot="title" class="flex items-center gap-2">
                {$t("common.seo")}
            </div>
            <CreateSeo bind:seoData={menu}/>
        </TabItem>
    </Tabs>
</div>