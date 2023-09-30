<script lang="ts">
    import { loadingState } from "./../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { title, description } from "$lib/store/meta";
    import { t } from "$lib/translations";
    import {
        Checkbox,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import { formatCurrency } from "$lib/Utils/accounting";
    import Pagination from "$lib/components/common/Pagination.svelte";
    import {
        getAllQueryParams,
        queryParamsToObject,
        updateQueryParams,
    } from "$lib/Utils/queryParams";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import { convertImageJsonToArray } from "$lib/Utils/common";
    import { HOST } from "$lib/Const";

    title.set("Producs Management");
    description.set("Producs Management System");

    const productService = RepositoryFactory.get("productRepository");
    let isCheck = false;
    let products = null;
    let sortedProducts: any[] = [];
    let sortBy = "";
    let sortDirection = 1;
    let dataProductFromApi: any[] = [];
    let queryParams = {
        page: 1,
    };

    async function handlePageChange(page) {
        queryParams.page = page;
        updateQueryParams(queryParams);
        await getProduct();
    }

    function toggleSort(column = "") {
        if (sortBy === column) {
            sortDirection *= -1;
        } else {
            sortBy = column;
            sortDirection = 1;
        }
    }
    async function getProduct() {
        loadingState.set(true);
        let queryFilter = getAllQueryParams();
        queryParams = queryParamsToObject(queryFilter);
        products = await productService.get(queryParams);

        dataProductFromApi = products.data.data.docs;
        loadingState.set(false);
    }

    function gotoDetail(id: Number) {
        goto("/admin/products/" + id);
    }

    $: {
        sortedProducts = [...dataProductFromApi].sort((a, b) => {
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
        getProduct();
    }

    init();
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            {$t("products.productsManagement")}
        </h1>
        <div class="flex gap-1">
            <a
                href="./products/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Filter</a
            >
            <a
                href="./products/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >{$t("products.createProduct")}</a
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
        <TableHeadCell class="text-center" on:click={() => toggleSort("id")}
            >Id</TableHeadCell
        >
        <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("productName")}
            >{$t("common.name")}</TableHeadCell
        >
        <TableHeadCell class="text-center">{$t("common.images")}</TableHeadCell>
        <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("originalPrice")}
            >{$t("common.originalPrice")}</TableHeadCell
        >
        <TableHeadCell class="text-center" on:click={() => toggleSort("price")}
            >{$t("common.price")}</TableHeadCell
        >
        <TableHeadCell class="text-center" on:click={() => toggleSort("origin")}
            >{$t("common.post")}</TableHeadCell
        >
        <TableHeadCell class="text-center" on:click={() => toggleSort("slug")}>
            {$t("common.slug")}
        </TableHeadCell>
        <TableHeadCell class="text-center" on:click={() => toggleSort("status")}
            >{$t("common.seo")}
        </TableHeadCell>
        <TableHeadCell class="text-center"
            >{$t("common.category")}</TableHeadCell
        >
    </TableHead>
    <TableBody>
        {#each sortedProducts as item}
            <TableBodyRow
                class="cursor-pointer"
                on:click={() => gotoDetail(item.id)}
            >
                <TableBodyCell tdClass="w-3"
                    ><div class="flex justify-center">
                        <Checkbox checked={isCheck} value={item.id} />
                    </div></TableBodyCell
                >
                <TableBodyCell>{item.id}</TableBodyCell>
                <TableBodyCell>{item.productName}</TableBodyCell>
                <TableBodyCell tdClass="min-w-[180px]">
                    <div class="grid grid-cols-4 gap-y-[4px] py-[2px]">
                        {#each convertImageJsonToArray(item.images) as path, i}
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
                <TableBodyCell
                    >{formatCurrency(item.originalPrice)}</TableBodyCell
                >
                <TableBodyCell>{formatCurrency(item.price)}</TableBodyCell>
                <TableBodyCell>
                    {#if item.post}
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
{#if products}
    <Pagination
        currentPage={products?.data?.data.currentPage}
        totalPages={products?.data?.data.pages}
        onPageChange={handlePageChange}
    />
{/if}
