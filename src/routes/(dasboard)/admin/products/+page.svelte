<script lang="ts">
    import { loadingState } from "./../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { title, description } from "$lib/store/meta";
    import {
        ButtonGroup,
        Checkbox,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";
    import moment from "moment";
    import { formatCurrency } from "$lib/Utils/accounting";
    import Pagination from "$lib/components/common/Pagination.svelte";
    import {
        getAllQueryParams,
        queryParamsToObject,
        updateQueryParams,
    } from "$lib/Utils/queryParams";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    title.set("Producs Management");
    description.set("Producs Management System");

    const productService = RepositoryFactory.get("productRepository");
    let isCheck = false;
    let products = null;
    let sortedProducts: any[] = [];
    let sortBy = "";
    let sortDirection = 1;
    let dataProductFromApi: any[] = [];
    let host = "http://103.142.26.42/";
    let queryParams = {
        page: 1,
    };

    // Function to handle page change
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

    function convertImageJsonToArray(json) {
        return JSON.parse(json);
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
    getProduct();
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            Products Management
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
                >Create Products</a
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
            on:click={() => toggleSort("productName")}>NAME</TableHeadCell
        >
        <TableHeadCell class="text-center">IMAGES</TableHeadCell>
        <!-- <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("description")}
            >DESCRIPTION</TableHeadCell
        > -->
        <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("originalPrice")}
            >ORIGINAL PRICE</TableHeadCell
        >
        <TableHeadCell class="text-center" on:click={() => toggleSort("price")}
            >PRICE</TableHeadCell
        >
        <!-- <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("stockQuantity")}
            >STOCK QUANTITY
        </TableHeadCell> -->
        <TableHeadCell class="text-center" on:click={() => toggleSort("origin")}
            >POST</TableHeadCell
        >
        <!-- <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("discount")}
            >STOCK DISCOUNT
        </TableHeadCell> -->
        <TableHeadCell class="text-center" on:click={() => toggleSort("slug")}
            >SLUG
        </TableHeadCell>
        <!-- <TableHeadCell class="text-center" on:click={() => toggleSort("notes")}
            >NOTE
        </TableHeadCell> -->
        <TableHeadCell class="text-center" on:click={() => toggleSort("status")}
            >SEO
        </TableHeadCell>
        <!-- <TableHeadCell class="text-center" on:click={() => toggleSort("type")}
            >TYPE
        </TableHeadCell> -->
        <!-- <TableHeadCell
            class="text-center"
            on:click={() => toggleSort("expirationDate")}
            >EXPIRATION DATE
        </TableHeadCell> -->
        <TableHeadCell class="text-center">CATEGORY</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each sortedProducts as item}
            <TableBodyRow class="cursor-pointer" on:click={() => gotoDetail(item.id)}>
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
                                        : `${host}` + "/" + path}
                                    class="w-full h-full"
                                    alt={item.name}
                                />
                            </div>
                        {/each}
                    </div>
                </TableBodyCell>
                <!-- <TableBodyCell>{item.description}</TableBodyCell> -->
                <TableBodyCell
                    >{formatCurrency(item.originalPrice)}</TableBodyCell
                >
                <TableBodyCell>{formatCurrency(item.price)}</TableBodyCell>
                <!-- <TableBodyCell>{item.stockQuantity}</TableBodyCell> -->
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
                <!-- <TableBodyCell>{item.discount +' %'}</TableBodyCell> -->
                <TableBodyCell>{item.slug}</TableBodyCell>
                <!-- <TableBodyCell
                    tdClass="line-clamp-3 text-ellipsis max-w-[300px] min-w-[200px] text-justify px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >{!item.notes ? "-" : item.notes}</TableBodyCell
                > -->
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
                <!-- <TableBodyCell>{item.type}</TableBodyCell> -->
                <!-- <TableBodyCell
                    >{!item.expirationDate != null
                        ? moment(new Date(item?.expirationDate)).format(
                              "DD-MM-YYYY"
                          )
                        : "-"}</TableBodyCell
                > -->
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
