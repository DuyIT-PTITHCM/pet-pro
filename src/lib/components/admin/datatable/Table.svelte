<script>
	export let columns;
	export let data;
	
	const SORT_DEFAULT = 0;
	const SORT_ASCENDING = 1;
	const SORT_DESCENDING = -1;
	
	import { onMount } from 'svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, ButtonGroup, Button, Checkbox } from 'flowbite-svelte';
    import Icon from '@iconify/svelte';
	
	onMount(() => {
		columns = columns.map((c) => {
			c.sorting = 0;
			return c;
		})
	});
	
	function sort(index, mode) {
		console.log(index, mode)
		
		columns = columns.map((c, i) => {
			if (i === index) {
				c.sorting = mode
			} else c.sorting = SORT_DEFAULT;
			return c;
		})
		
		sortData();
	}
	
	function sortData() {
		const column = columns.find(c => c.sorting !== SORT_DEFAULT);
		
		if (!column) return false;
		
		data = data.sort((a, b) => {
			if (column.sorting === SORT_DEFAULT) {
				return 0;
			}
			
			if (column.sorting === SORT_ASCENDING) {
				console.log('asc sort')
				if (a[column.accessor] < b[column.accessor]) return -1;
			}
			
			if (column.sorting === SORT_DESCENDING) {
				console.log('desc sort')
				if (b[column.accessor] < a[column.accessor]) return -1;
			}
		});
		
		console.log(data[0])
	}
</script>
<div>
    <Table hoverable={true} divClass={"w-full rounded-xl overflow-hidden "}>
        <TableHead>
            <TableHeadCell class="!p-4">
                <Checkbox />
            </TableHeadCell>
            {#each columns as column, i}
            <TableHeadCell>
                <div class="table-header">
                    <div class="table-header__name">
                        {column.header}
                    </div>
                    <div class="table-header__sort">
                        <button class="hover:bg-slate-300 bg- dark:hover:bg-slate-50 rounded" on:click={() => sort(i, SORT_DESCENDING)}><Icon icon="icon-park-solid:up-one" /></button>
                        <button class="hover:bg-slate-300 dark:hover:bg-slate-50 rounded" on:click={() => sort(i, SORT_ASCENDING)}><Icon icon="icon-park-solid:down-one"/></button>
                    </div>
                </div>
            </TableHeadCell>
			{/each}
          
          <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
        {#each data as row}
          <TableBodyRow>
            <TableHeadCell class="!p-4">
                <Checkbox />
            </TableHeadCell>
            {#each columns as column}
            <TableBodyCell>{row[column.accessor]}</TableBodyCell>
            {/each}
            <TableBodyCell>
              <ButtonGroup>
                <Button outline color="blue">Edit</Button>
                <Button outline color="red">Delete</Button>
              </ButtonGroup>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
        </TableBody>
      </Table>
</div>
<style>
    .table-header{
        display: flex;
        align-items: center;
    }
    .table-header__name{
        margin: 4px;
    }
    .table-header__sort{
        font-size: 20px;
        margin: 4px;
    }
</style>
