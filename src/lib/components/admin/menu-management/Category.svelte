<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Tabs, TabItem, Label, Input, Radio } from 'flowbite-svelte';
    export let categories : any;
    let isAddCate = false;
    let category: any;
    // $: console.log(categories)
    function viewCategory(data: any){
        isAddCate = false;
        category = data;
    }
  </script>
<div class="border-2 border-gray-300 shadow-[0_20px_20px_-8px_rgba(0,0,0,0.3)] dark:border-gray-800 dark:shadow rounded-xl overflow-hidden">
    <Tabs contentClass="px-4 bg-gray-50 rounded-lg dark:bg-gray-800" style="underline">
        <TabItem open>
            <div slot="title" class="flex items-center gap-2 rounded-lg">
                Categories of {categories.manuname}
            </div>
            <div>
                {#if categories.cates.length > 0}
                    <div class="w-full h-full">
                        {#each categories.cates as category}
                            <button class="flex justify-between items-center w-full bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-700 my-4 pl-4 cursor-pointer rounded-lg overflow-hidden"
                            on:click={() => viewCategory(category)}>
                                <p class="text-sm text-gray-900 dark:text-gray-200">{category.categoryName}</p>
                                <div>
                                    <button class="text-xl dark:text-white p-4 -mr-1 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black">
                                        <Icon icon="fluent:edit-20-filled" />
                                    </button>
                                    <button class="text-xl dark:text-white p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-black">
                                        <Icon icon="fluent:delete-28-filled" />
                                    </button>
                                </div>
                            </button>
                        {/each}
                        <button class="flex justify-between items-center w-full  text-gray-900 dark:text-gray-200 bg-slate-200 dark:bg-slate-900
                                hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700 my-4 pl-4 cursor-pointer rounded-lg overflow-hidden"
                                on:click={() => {isAddCate = !isAddCate; category = null}}>
                            <p class="text-sm">Add new Category</p>
                            <div class="text-xl p-4">
                                <Icon icon="fluent:add-12-filled" />
                            </div>
                        </button>
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