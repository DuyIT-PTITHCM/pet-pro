<script lang="js">
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Checkbox,ButtonGroup, Button
    } from "flowbite-svelte";
    import DeleteSoftUser from "./DeleteSoftUser.svelte";
    import EditUser from "./EditUser.svelte";
    import Profile from "./Profile.svelte";
    import moment from 'moment'
    import Icon from "@iconify/svelte";
    import { t } from "$lib/translations";


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
                return (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) * sortDirection;
            }
        });
    }
    
    let isCheck = false
</script>
<Table hoverable={true} divClass="rounded-xl overflow-x-scroll">
    <TableHead>
        <TableHeadCell><Checkbox  checked={isCheck} on:change={() => (isCheck = !isCheck)}/></TableHeadCell>
        <!-- <TableHeadCell class="text-center" on:click={() => toggleSort("id")}>Id</TableHeadCell> -->
        <TableHeadCell class="">{$t("common.avatar")}</TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("name")}>{$t("common.name")}</TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("address")}>{$t("common.address")} </TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("email")}>{$t("common.email")}</TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("phone")}>{$t("common.phone")}</TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("birthDate")}>{$t("common.birthDate")}</TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("gender")}>{$t("common.gender")}</TableHeadCell>
        <TableHeadCell class="" on:click={() => toggleSort("role")}>{$t("common.role")}</TableHeadCell>
        <TableHeadCell class="">{$t("common.action")}</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each sortedUsers as item}
            <TableBodyRow>
                <TableBodyCell tdClass="w-3"><div class="flex justify-center"><Checkbox checked={isCheck} value={item.id}/></div></TableBodyCell>
                <!-- <TableBodyCell>{item.id}</TableBodyCell> -->
                <TableBodyCell><img src={!item.avatar? "/images/logo.png" : item.avatar} class="rounded-full w-12 h-12" alt=""></TableBodyCell>
                <TableBodyCell>{item.name}</TableBodyCell>
                <TableBodyCell tdClass="line-clamp-3 text-ellipsis max-w-[300px] min-w-[200px] text-justify px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{!item.information ? '-' : item.information}</TableBodyCell>
                <TableBodyCell>{item.email}</TableBodyCell>
                <TableBodyCell>{item.phone}</TableBodyCell>
                <TableBodyCell>{!item.birthDate != null ? moment(new Date(item?.birthDate)).format('DD-MM-YYYY') : '-'}</TableBodyCell>
                <TableBodyCell><Icon class="text-3xl" icon={item.gender == "male" ? "noto:male-sign" : item.gender == "female" ? "noto:female-sign" : item.gender == "other" ? "noto:rainbow-flag" : "fluent-emoji:red-question-mark"}/></TableBodyCell>
                <TableBodyCell><Icon class="text-3xl" icon="{item.role == "customer" ? "fluent-emoji:office-worker-light" : item.role == "admin" ? "ri:admin-fill" : "fluent-emoji:factory-worker-light"}"/></TableBodyCell>
                <TableBodyCell>
                    <ButtonGroup>
                        <Profile userId={item.id}/>
                        <EditUser userId={item.id}/>
                        <DeleteSoftUser userid={item.id}/>
                    </ButtonGroup>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>