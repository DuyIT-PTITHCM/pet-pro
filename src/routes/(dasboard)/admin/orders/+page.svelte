<script lang="ts">
    import { loadingState } from "./../../../../lib/store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { title, description } from "$lib/store/meta";
    import { t } from "$lib/translations";
    import Pagination from "$lib/components/common/Pagination.svelte";
    import {
        getAllQueryParams,
        queryParamsToObject,
        updateQueryParams,
    } from "$lib/Utils/queryParams";
    import { Button } from "flowbite-svelte";
    import { formatCurrency } from "$lib/Utils/accounting";
    import { convertImageJsonToArray, formatDate } from "$lib/Utils/common";
    import { toastErr } from "$lib/store/toastError";

    title.set("Producs Management");
    description.set("Producs Management System");

    const orderService = RepositoryFactory.get("orderRepository");
    let products: any;
    let dataOrders: any[] = [];
    let queryParams = {
        page: 1,
    };
    let isChangeStatus = false;
    let idEdit = 0;
    let statusList = [
        {
            value: 1,
            status: "Pending",
        },
        {
            value: 2,
            status: "Confirm",
        },
        {
            value: 3,
            status: "Processing",
        },
        {
            value: 4,
            status: "Shipping",
        },
        {
            value: 5,
            status: "Completed",
        },
        {
            value: 6,
            status: "Returned",
        },
        {
            value: 7,
            status: "Canceled",
        },
    ];
    async function handlePageChange(page: number) {
        queryParams.page = page;
        updateQueryParams(queryParams);
        await getOrders();
    }

    async function getOrders() {
        loadingState.set(true);
        let queryFilter = getAllQueryParams();
        queryParams = queryParamsToObject(queryFilter);
        products = await orderService.get(queryParams);
        dataOrders = products.data.data.docs;
        dataOrders.forEach(x => x.status = statusList.find(y => y.status == x.status)?.value);
        loadingState.set(false);
    }
    async function updateStatus(id: number, status: number) {
        var statusBody = {
            status: statusList.find(x => x.value == status)?.status
        }
        try{
            const updatestatus = await orderService.put(id, statusBody);
            toastErr.set([
                {
                    message: "Update status success",
                    type: "success"
                }
            ]);
        }catch(error){
            toastErr.set([
                {
                    message: "Update status failed: " + error.message,
                    type: "error"
                }
            ]);
        }
        getOrders();
    }
    function init() {
        loadingState.set(false);
        getOrders();
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
{#each dataOrders as item}
    <div
        class="w-full flex gap-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-md mb-4"
    >
        <div class="flex gap-4 w-1/2">
            <div class="w-full">
                <h5>Thông tin đơn hàng {item.code}</h5>
                <table>
                    <tr>
                        <td>Mã đơn hàng</td>
                        <td class="px-2">{item.code}</td>
                    </tr>
                    <tr>
                        <td>Tình trạng</td>
                        <td class="px-2">{item.status}</td>
                    </tr>
                    <tr>
                        <td>Người đặt</td>
                        <td class="px-2">{item.reciverName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td class="px-2">{item.reciverEmail}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td class="px-2">{item.reciverPhone}</td>
                    </tr>
                    <tr>
                        <td>Notes</td>
                        <td class="px-2">{item.note}</td>
                    </tr>
                    <tr>
                        <td>Ngày đặt hàng</td>
                        <td class="px-2">{formatDate(item.createdAt)}</td>
                    </tr>
                    <tr>
                        <td title="ước lượng" class="underline"
                            >Ngày giao hàng</td
                        >
                        <td class="px-2">{item.status == "Pending" || item.status == "Confirm" || item.status == "Processing" ? formatDate(item.createdAt) : formatDate(item.updatedAt)}</td>
                    </tr>
                </table>
            </div>
            <div class="w-full">
                <h5>Thông tin thanh toán</h5>
                <table>
                    <tr>
                        <td>Phương thức</td>
                        <td class="px-2">{item.payment}</td>
                    </tr>
                    <tr>
                        <td>Tình trạng</td>
                        <td class="px-2">{item.paymentStatus}</td>
                    </tr>
                    <tr>
                        <td>Tổng</td>
                        <td class="px-2">{item.total} đ</td>
                    </tr>
                    <tr>
                        <td>Thời gian thanh toán</td>
                        <td class="px-2">{formatDate(item.createDate)}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="w-1/2">
            <h5>
                Tình trạng đơn hàng
                {#if isChangeStatus && idEdit == item.id}
                    <Button on:click={() => updateStatus(item.id, item.status)}>save</Button>
                {/if}
            </h5>
            <div class="flex flex-col space-y-2 p-2 py-4 w-4/5 m-auto">
                <input
                    type="range"
                    class="w-full"
                    style="border-radius: 10px; height: 0.75rem; background: linear-gradient(to right, rgb(47, 164, 231) 100%, rgb(241, 248, 253) 100%);"
                    min="1"
                    name={item.status}
                    max={statusList.length}
                    step="1"
                    bind:value={item.status}
                    on:input={() => {
                        isChangeStatus = true;
                        idEdit = item.id;
                    }}
                />
                <ul class="flex justify-between w-full">
                    {#each statusList as status}
                        <li class="flex justify-center relative">
                            <span class="absolute">{status.status}</span>
                        </li>
                    {/each}
                </ul>
            </div>
            <p class="font-bold mt-8">Chi tiết đơn hàng</p>
            <table class="w-full bg-slate-100">
                {#each item.orderItems as orderItem}
                    <tr class="">
                        <td class="p-2">
                            <a href="/san-pham/{orderItem.product.slug}" class="flex items-center ">
                            <img
                                src="{convertImageJsonToArray(orderItem.product.images)[0]}"
                                alt=""
                                class="w-[50px] h-[50px] object-cover rounded-md mr-1"
                            />
                                {orderItem.product.productName}
                            </a>
                        </td>
                        <td>Số lượng: {orderItem.quantity}</td>
                        <td>Đơn giá: {formatCurrency(orderItem.price)}</td>
                        <td>Thành tiền: {formatCurrency(orderItem.price * orderItem.quantity)}</td>
                    </tr>
                {/each}
            </table>
        </div>
    </div>
{/each}
{#if products}
    <Pagination
        currentPage={products?.data?.data.currentPage}
        totalPages={products?.data?.data.pages}
        onPageChange={handlePageChange}
    />
{/if}
