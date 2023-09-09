<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
    export let categories;
    $: console.log(categories)
  </script>
<Tabs style="underline">
    <TabItem open>
        <div slot="title" class="flex items-center gap-2">
        Categories of {categories.manuname}
        </div>
        <div class="">
            {#each categories.cates as category}
                <p class="text-sm text-gray-500 dark:text-gray-400">{category.categoryName}</p>
            {/each}
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            Dashboard
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </TabItem>
</Tabs>