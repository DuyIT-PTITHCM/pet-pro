<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Tabs, TabItem, Label, Input, Radio } from 'flowbite-svelte';
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { toastErr } from '$lib/store/toastError';
    import { isMenuEdited } from '$lib/store/userManagement';
    const categoryService = RepositoryFactory.get("categoryRepository");

    export let categories : any;
    // $: console.log(categories)
    let nameCategoryName: string;
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
            isMenuEdited.set({
                isEdit : true,
                menuId: menuId
            });
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
            isMenuEdited.set({
                isEdit : true,
                menuId: menuId
            });
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
            isMenuEdited.set({
                isEdit : true,
                menuId: menuId
            });
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
  </script>
<div class="border-2 border-gray-300 shadow-[0_20px_20px_-8px_rgba(0,0,0,0.3)] dark:border-gray-800 dark:shadow rounded-xl overflow-hidden">
    <Tabs contentClass="bg-gray-50 rounded-lg dark:bg-gray-800 h-full" style="underline">
        <TabItem open>
            <div slot="title" class="flex items-center gap-2 rounded-lg">
                Categories of {categories.manuname}
            </div>
            <div class="dark:bg-gray-700 min-h-[150px] p-4">
                {#if categories.cates.length > 0}
                    <div class="w-full h-full">
                        {#each categories.cates as category}
                            <div class="flex justify-between items-center mb-4 w-full bg-slate-200 dark:bg-slate-900 pl-4 cursor-pointer rounded-lg overflow-hidden">
                                <input type="text" class="flex-1 block bg-transparent outline-0 border-0 dark:text-gray-200 rounded-lg" bind:value={category.categoryName} />
                                <div>
                                    <button class="text-xl dark:text-white p-4 -mr-1 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black"
                                    on:click={() => {editCategory(category.categoryName, category.id, categories.id)}}>
                                        <Icon icon="fluent:edit-20-filled" />
                                    </button>
                                    <button class="text-xl dark:text-white p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black"
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

                            <button class="text-xl p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-500 " on:click={() => {addCategory(nameCategoryName, categories.id)}}>
                                <Icon icon="fluent:add-12-filled" />
                            </button>
                        </div>
                    </div>
                    <!-- {#if isAddCate || category}
                        <div class="w-full rounded-lg my-4 border p-4">
                            <div>
                                <Label for="catename" class="mb-2">Category name</Label>
                                <Input type="text" id="catename" placeholder="Input category name" required />
                            </div>
                            <br>
                            <div class="flex justify-between">
                                <p class="mb-4 font-semibold text-gray-900 dark:text-white">
                                Category: <span class="capitalize">{technology}</span>
                                </p>
                                <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
                                    <li><Radio class="p-3" bind:group={technology} disabled value="product">Product</Radio></li>
                                    <li><Radio class="p-3" bind:group={technology} disabled value="service">Service</Radio></li>
                                    <li><Radio class="p-3" bind:group={technology} disabled value="blog">Blog</Radio></li>
                                </ul>
                            </div>
                        </div>
                    {/if} -->
                {:else}
                    <div class="flex p-4 dark:text-gray-200">
                        <p>This menu don't have any category</p> <div class="animate-bounce font-bold ml-1">. . .</div>
                    </div>
                {/if}
            </div>
        </TabItem>
        <TabItem>
            <div slot="title" class="flex items-center gap-2">
                Dashboard
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Dashboard:</b>
            Lorem ipsum dolor sit amet, 
            </p>
        </TabItem>
    </Tabs>
</div>