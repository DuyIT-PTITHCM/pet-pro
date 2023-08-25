<script lang="js">
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Checkbox
    } from "flowbite-svelte";
    export let items;

    let sortBy = '';
    let sortDirection = 1;
    
    function toggleSort(column = "") {
        if (sortBy === column) {
            sortDirection *= -1;
        } else {
            sortBy = column;
            sortDirection = 1;
        }
    }
    
    let sortedUsers;
    $: {
        sortedUsers = [...items].sort((a,b) =>{
            let aValue = a[sortBy];
            let bValue = b[sortBy];
            
            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return aValue.localeCompare(bValue) * sortDirection;
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return (aValue - bValue) * sortDirection;
            } else {
                // Fallback to simple comparison
                return (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) * sortDirection;
            }
        });
    }
    
    let isCheck = false
</script>

<Table hoverable={true} divClass={"rounded-xl overflow-hidden"}>
    <TableHead>
        <TableHeadCell><Checkbox  checked={isCheck} on:change={() => (isCheck = !isCheck)}/></TableHeadCell>
        <TableHeadCell on:click={() => toggleSort("id")}>ID</TableHeadCell>
        <!-- <TableHeadCell>Avatar</TableHeadCell> -->
        <TableHeadCell on:click={() => toggleSort("name")}>Name</TableHeadCell>
        <TableHeadCell on:click={() => toggleSort("email")}>Email</TableHeadCell>
        <TableHeadCell on:click={() => toggleSort("phone")}>Phone</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each sortedUsers as item}
            <TableBodyRow>
                <TableBodyCell tdClass="w-3"><div class="flex justify-center"><Checkbox checked={isCheck} value={item.id}/></div></TableBodyCell>
                <TableBodyCell>{item.id}</TableBodyCell>
                <!-- <TableBodyCell><img src={item.avatar} class="rounded-full w-12 h-12" alt=""></TableBodyCell> -->
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell>{item.email}</TableBodyCell>
                <TableBodyCell>{item.phone}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
