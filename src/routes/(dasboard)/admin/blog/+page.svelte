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
    title.set("Blog Management");
    description.set("Blog Management System");

    const articleService = RepositoryFactory.get("postRepository");
    let isCheck = false;
    let blog = null;
    let sortedServices: any[] = [];
    let sortBy = "";
    let sortDirection = 1;
    let dataServiceFromApi: any[] = [];
    let host = "http://103.142.26.42/";
    let queryParams = {
        page: 1,
        type:'blog'
    };

    // Function to handle page change
    async function handlePageChange(page) {
        queryParams.page = page;
        updateQueryParams(queryParams);
        await getBlog();
    }

    function toggleSort(column = "") {
        if (sortBy === column) {
            sortDirection *= -1;
        } else {
            sortBy = column;
            sortDirection = 1;
        }
    }
    async function getBlog() {
        loadingState.set(true);
        let queryFilter = getAllQueryParams();
        queryParams = queryParamsToObject(queryFilter);
        queryParams.type = 'blog';
        blog = await articleService.get(queryParams);

        dataServiceFromApi = blog.data.data.docs;
        loadingState.set(false);
    }

    function convertImageJsonToArray(json) {
        return JSON.parse(json);
    }
    function gotoDetail(id: Number) {
        window.location.href = "/admin/blog/" + id;
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
    getBlog();
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            Blog Management
        </h1>
        <div class="flex gap-1">
            <a
                href="./blog/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Filter</a
            >
            <a
                href="./blog/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Create Blog</a
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
{#if blog}
    <Pagination
        currentPage={blog?.data?.data.currentPage}
        totalPages={blog?.data?.data.pages}
        onPageChange={handlePageChange}
    />
{/if}
