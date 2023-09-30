<script lang="ts">
    import { loadingState } from "./../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { title, description } from "$lib/store/meta";
    import {
        Checkbox,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import Pagination from "$lib/components/common/Pagination.svelte";
    import {
        getAllQueryParams,
        queryParamsToObject,
        updateQueryParams,
    } from "$lib/Utils/queryParams";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { convertImageJsonToArray } from "$lib/Utils/common";
    
    title.set("Service Management");
    description.set("Service Management System");

    const articleService = RepositoryFactory.get("postRepository");
    let isCheck = false;
    let services = null;
    let sortedServices: any[] = [];
    let sortBy = "";
    let sortDirection = 1;
    let dataServiceFromApi: any[] = [];
    let host = "http://103.142.26.42/";
    let queryParams = {
        page: 1,
        type:'service'
    };

    // Function to handle page change
    async function handlePageChange(page) {
        queryParams.page = page;
        updateQueryParams(queryParams);
        await getService();
    }

    function toggleSort(column = "") {
        if (sortBy === column) {
            sortDirection *= -1;
        } else {
            sortBy = column;
            sortDirection = 1;
        }
    }
    async function getService() {
        loadingState.set(true);
        let queryFilter = getAllQueryParams();
        queryParams = queryParamsToObject(queryFilter);
        queryParams.type = 'service';
        services = await articleService.get(queryParams);

        dataServiceFromApi = services.data.data.docs;
        loadingState.set(false);
    }

    function gotoDetail(id: Number) {
        goto("/admin/service/" + id);
    }
    $: {
        sortedServices = [...dataServiceFromApi].sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];
            if (typeof aValue === "string" && typeof bValue === "string") {
                return aValue.localeCompare(bValue) * sortDirection;
            } else if (
                typeof aValue === "number" &&
                typeof bValue === "number"
            ) {
                return (aValue - bValue) * sortDirection;
            } else {
                return (
                    (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) *
                    sortDirection
                );
            }
        });
    }
    function init() {
        getService();
    };

    init();
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            Service Management
        </h1>
        <div class="flex gap-1">
            <a
                href="./service/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Filter</a
            >
            <a
                href="./service/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Create Service</a
            >
        </div>
    </div>
</div>

<!-- table  -->
<Table hoverable={true} divClass="rounded-xl overflow-x-scroll">
    <TableHead>
        <TableHeadCell
            ><Checkbox
                checked={isCheck}
                on:change={() => (isCheck = !isCheck)}
            /></TableHeadCell
        >
        <TableHeadCell  on:click={() => toggleSort("id")}
            >Id</TableHeadCell
        >
        <TableHeadCell
            
            on:click={() => toggleSort("title")}>NAME</TableHeadCell
        >
        <TableHeadCell >IMAGES</TableHeadCell>
        <TableHeadCell  on:click={() => toggleSort("slug")}
            >SLUG
        </TableHeadCell>
        <TableHeadCell  on:click={() => toggleSort("status")}
            >SEO
        </TableHeadCell>
        <TableHeadCell >CATEGORY</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each sortedServices as item}
            <TableBodyRow class="cursor-pointer" on:click={gotoDetail(item.id)}>
                <TableBodyCell tdClass="w-3"
                    ><div class="flex justify-center">
                        <Checkbox checked={isCheck} value={item.id} />
                    </div></TableBodyCell
                >
                <TableBodyCell>{item.id}</TableBodyCell>
                <TableBodyCell>{item.title}</TableBodyCell>
                <TableBodyCell tdClass="min-w-[180px]">
                    <div class="grid grid-cols-4 gap-y-[4px] py-[2px]">
                        {#each convertImageJsonToArray(item.imageUrl) as path, i}
                            <div
                                class="w-14 h-14 overflow-hidden bg-black rounded-[8px]"
                            >
                                <img
                                    src={!path
                                        ? "/images/logo.png"
                                        : `${host}` + "/" + path}
                                    class="w-full h-full"
                                    alt={item.name}
                                />
                            </div>
                        {/each}
                    </div>
                </TableBodyCell>
                
                <TableBodyCell>{item.slug}</TableBodyCell>

                <TableBodyCell>
                    {#if item.seo}
                        <Icon
                            icon="material-symbols:done-rounded"
                            color="green"
                            width="40"
                            height="40"
                        />
                    {:else}
                        <Icon
                            icon="ic:outline-warning"
                            color="red"
                            width="40"
                            height="40"
                        />
                    {/if}
                </TableBodyCell>
                <TableBodyCell>{item.category.categoryName}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
{#if services}
    <Pagination
        currentPage={services?.data?.data.currentPage}
        totalPages={services?.data?.data.pages}
        onPageChange={handlePageChange}
    />
{/if}
