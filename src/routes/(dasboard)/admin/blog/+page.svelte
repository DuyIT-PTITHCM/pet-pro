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
        Toggle,
    } from "flowbite-svelte";
    import Pagination from "$lib/components/common/Pagination.svelte";
    import {
        getAllQueryParams,
        queryParamsToObject,
        updateQueryParams,
    } from "$lib/Utils/queryParams";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { HOST } from "$lib/Const";
    import { convertImageJsonToArray } from "$lib/Utils/common";
    import { t } from "$lib/translations";
    import { toastErr } from "$lib/store/toastError";

    title.set("Blog Management");
    description.set("Blog Management System");

    const articleService = RepositoryFactory.get("postRepository");
    let isCheck = false;
    let blog:any = null;
    let sortedServices: any[] = [];
    let sortBy = "";
    let sortDirection = 1;
    let dataServiceFromApi: any[] = [];
    let queryParams = {
        page: 1,
        type:'blog'
    };

    // Function to handle page change
    async function handlePageChange(page: number) {
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
        dataServiceFromApi = blog.data.data.docs.slice(0, 8 );
        loadingState.set(false);
    }
    async function stopService(id: number, isActive: boolean){
        try {
            const data = await articleService.put('active/'+id, {isActive : !isActive})
            toastErr.set([
                {
                    message: isActive ? "Inactive service success" : "Active service success",
                    type: "success",
                },
            ]);
            return data;
        } catch (error) {
            toastErr.set([
                {
                    message: "Active service failed: " + error.message,
                    type: "error",
                },
            ]);
        }
    }
    function gotoDetail(id: Number) {
        goto("/admin/blog/" + id);
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
        getBlog();
    };

    init();
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            {$t("post.blogManagement")}
        </h1>
        <div class="flex gap-1">
            <!-- <a
                href="./blog/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Filter</a
            > -->
            <a
                href="./blog/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >{$t("post.createBlog")}</a
            >
        </div>
    </div>
</div>

<!-- table  -->
<Table hoverable={true} divClass="rounded-xl">
    <TableHead>
        <TableHeadCell
            ><Checkbox
                checked={isCheck}
                on:change={() => (isCheck = !isCheck)}
            /></TableHeadCell
        >
        <!-- <TableHeadCell  on:click={() => toggleSort("id")}
            >Id</TableHeadCell
        > -->
        <TableHeadCell
            
            on:click={() => toggleSort("title")}>{$t("common.name")}</TableHeadCell
        >
        <TableHeadCell >{$t("common.images")}</TableHeadCell>
        <TableHeadCell  on:click={() => toggleSort("slug")}
            >{$t("common.slug")}
        </TableHeadCell>
        <TableHeadCell  on:click={() => toggleSort("status")}
            >{$t("common.seo")}
        </TableHeadCell>
        <TableHeadCell >{$t("common.category")}</TableHeadCell>
        <TableHeadCell >Active</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each sortedServices as item}
            <TableBodyRow>
                <TableBodyCell tdClass="w-3"
                    ><div class="flex justify-center">
                        <Checkbox checked={isCheck} value={item.id} />
                    </div></TableBodyCell
                >
                <!-- <TableBodyCell>{item.id}</TableBodyCell> -->
                <TableBodyCell tdClass="px-6 py-4 font-medium "  class="cursor-pointer" on:click={() => gotoDetail(item.id)}>
                    <p class="max-w-[400px]">{item.title}</p>
                </TableBodyCell>
                <TableBodyCell tdClass="min-w-[180px]">
                    <div class="grid grid-cols-4 gap-y-[4px] py-[2px]">
                        {#each convertImageJsonToArray(item.imageUrl) as path, i}
                            <div
                                class="w-14 h-14 overflow-hidden bg-black rounded-[8px]"
                            >
                                <img
                                    src={!path
                                        ? "/images/logo.png"
                                        : `${HOST}` + "/" + path}
                                    class="w-full h-full"
                                    alt={item.name}
                                />
                            </div>
                        {/each}
                    </div>
                </TableBodyCell>
                
                <TableBodyCell tdClass="px-6 py-4 font-medium ">{item.slug}</TableBodyCell>

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
                <TableBodyCell>
                    <Toggle bind:checked={item.isActive} on:click={()=> {stopService(item.id, item.isActive)}}></Toggle>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
{#if blog}
    <Pagination
        totalPages={blog?.data?.data.pages}
        onPageChange={handlePageChange}
    />
{/if}
