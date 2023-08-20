<script>
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Checkbox,
        Pagination,
        Avatar
    } from "flowbite-svelte";
    import { writable } from "svelte/store";
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
    export let items;

    const sortKey = writable("id"); // default sort key
    const sortDirection = writable(1); // default sort direction (ascending)
    const sortItems = writable(items.slice()); // make a copy of the items array

    // Define a function to sort the items
    const sortTable = (key) => {
        // If the same key is clicked, reverse the sort direction
        if ($sortKey === key) {
            sortDirection.update((val) => -val);
        } else {
            sortKey.set(key);
            sortDirection.set(1);
        }
    };

    $: {
        const key = $sortKey;
        const direction = $sortDirection;
        const sorted = [...$sortItems].sort((a, b) => {
            const aVal = a[key];
            const bVal = b[key];
            if (aVal < bVal) {
                return -direction;
            } else if (aVal > bVal) {
                return direction;
            }
            return 0;
        });
        sortItems.set(sorted);
    }
// pagination
    $: activeUrl = $page.url.searchParams.get('page');
    let pages = [
        { name: 6, href: '/components/pagination?page=6' },
        { name: 7, href: '/components/pagination?page=7' },
        { name: 8, href: '/components/pagination?page=8' },
        { name: 9, href: '/components/pagination?page=9' },
        { name: 10, href: '/components/pagination?page=10' }
    ];

    $: {
        pages.forEach((page) => {
        let splitUrl = page.href.split('?');
        let queryString = splitUrl.slice(1).join('?');
        const hrefParams = new URLSearchParams(queryString);
        let hrefValue = hrefParams.get('page');
        if (hrefValue === activeUrl) {
            page.active = true;
        } else {
            page.active = false;
        }
        });
        pages = pages;
    }

    const previous = () => {
        alert('Previous btn clicked. Make a call to your server to fetch data.');
    };
    const next = () => {
        alert('Next btn clicked. Make a call to your server to fetch data.');
    };
    let helper = { start: 1, end: 10, total: 100 };
// end pagination

    let isCheck = false;
</script>

<Table hoverable={true} divClass={"rounded-xl overflow-hidden"}>
    <TableHead>
        <TableHeadCell><Checkbox  checked={isCheck} on:change={() => (isCheck = !isCheck)}/></TableHeadCell>
        <TableHeadCell on:click={() => sortTable("id")}>ID</TableHeadCell>
        <TableHeadCell>Avatar</TableHeadCell>
        <TableHeadCell on:click={() => sortTable("name")}>Name</TableHeadCell>
        <TableHeadCell on:click={() => sortTable("email")}>Email</TableHeadCell>
        <TableHeadCell on:click={() => sortTable("phone")}>Phone</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
        {#each $sortItems as item}
            <TableBodyRow>
                <TableBodyCell tdClass="w-3"><div class="flex justify-center"><Checkbox checked={isCheck} value={item.id}/></div></TableBodyCell>
                <TableBodyCell>{item.id}</TableBodyCell>
                <TableBodyCell><Avatar src={item.avatar}/></TableBodyCell>
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell>{item.email}</TableBodyCell>
                <TableBodyCell>{item.phone}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
<div class="list-pagination bg-slate-700 rounded-xl overflow-hidden p-4">
    <div class="flex items-center justify-between gap-2 font-semibold text-gray-900 dark:text-white">
        <div class="text-sm text-gray-700 dark:text-gray-400">
          Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
          to
          <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
          Entries
        </div>
        <Pagination {pages} on:previous={previous} on:next={next} icon>
            <svelte:fragment slot="prev">
              <span class="sr-only">Previous</span>
              <Icon icon="icon-park-solid:left-one" class="w-2.5 h-2.5" />
            </svelte:fragment>
            <svelte:fragment slot="next">
              <span class="sr-only">Next</span>
              <Icon icon="icon-park-solid:right-one" class="w-2.5 h-2.5" />
            </svelte:fragment>
          </Pagination>
      </div>
</div>