<script lang="ts">
    import { loadingState } from "./../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { title, description } from "$lib/store/meta";
    import { t } from "$lib/translations";
    import {
        Button,
        Checkbox,
        Modal,
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
    import { toastErr } from "$lib/store/toastError";

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
    let deleteId = 0;
    let deleteModal = false;

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

        dataProductFromApi = products.data.data.docs.slice(0, 8);
        loadingState.set(false);
    }

    async function deleteProduct(id: number) {
        try {
            await productService.delete(id);
            toastErr.set([
                {
                    message: "Delete product success",
                    type: "success",
                },
            ]);
            await getProduct();
        } catch (error) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
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
            <!-- <a
                href="./products/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Filter</a
            > -->
            <a
                href="./products/create"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >{$t("products.createProduct")}</a
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
        <!-- <TableHeadCell class="text-center" on:click={() => toggleSort("id")}
            >Id</TableHeadCell
        > -->
        <TableHeadCell on:click={() => toggleSort("productName")}
            >{$t("common.name")}</TableHeadCell
        >
        <TableHeadCell>{$t("common.images")}</TableHeadCell>
        <TableHeadCell on:click={() => toggleSort("originalPrice")}
            >{$t("common.originalPrice")}</TableHeadCell
        >
        <TableHeadCell on:click={() => toggleSort("price")}
            >{$t("common.price")}</TableHeadCell
        >
        <TableHeadCell on:click={() => toggleSort("origin")}
            >{$t("common.post")}</TableHeadCell
        >
        <TableHeadCell on:click={() => toggleSort("slug")}>
            {$t("common.slug")}
        </TableHeadCell>
        <TableHeadCell on:click={() => toggleSort("status")}
            >{$t("common.seo")}
        </TableHeadCell>
        <TableHeadCell>{$t("common.category")}</TableHeadCell>
        <TableHeadCell>Action</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each sortedProducts as item}
            <TableBodyRow>
                <TableBodyCell tdClass="w-3"
                    ><div class="flex justify-center">
                        <Checkbox checked={isCheck} value={item.id} />
                    </div></TableBodyCell
                >
                <!-- <TableBodyCell>{item.id}</TableBodyCell> -->
                <TableBodyCell
                    tdClass="px-6 py-4 font-medium"
                    class="cursor-pointer"
                    on:click={() => gotoDetail(item.id)}
                    >{item.productName}</TableBodyCell
                >
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
                <TableBodyCell tdClass="px-6 py-4 font-medium">{item.slug}</TableBodyCell>
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
                <TableBodyCell
                    ><button on:click={() => {deleteModal = true; deleteId = item.id}}
                        ><Icon icon="fluent:delete-12-filled" class="text-gray-400 w-8 h-8 dark:text-gray-200" /></button
                    ></TableBodyCell
                >
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
<Modal bind:open={deleteModal} size="xs" autoclose>
    <div class="text-center">
        <Icon
            icon="uiw:warning"
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
        />
        <h3
            class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
        >
            Are you sure you want to delete this product?
        </h3>
        <Button
            color="red"
            class="me-2"
            on:click={() => deleteProduct(deleteId)}
            >Yes, I'm sure</Button
        >
        <Button color="alternative">No, cancel</Button>
    </div>
</Modal>
