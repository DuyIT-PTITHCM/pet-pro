<script lang="ts">
    import axios from "axios";
    import { BASE_API } from "$lib/Const";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import { getCookie, removeCookie } from "$lib/Utils/cookieUtils";
    import { convertImageJsonToArray, formatDate } from "$lib/Utils/common";
    import { formatCurrency } from "$lib/Utils/accounting";
    var isSuccess = "";
    var order: any;
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
    async function init() {
        if ($page.url.search == "?shipcode=true") {
            isSuccess = "success";
            order = JSON.parse(getCookie("orderValue"));
        } else {
            try {
                axios
                    .get(BASE_API + "/orders/execute" + $page.url.search)
                    .then((response) => {
                        isSuccess = "success";
                        order = response.data.data;
                        removeCookie("cart");
                        removeCookie("cartQuantity");
                    })
                    .catch((error) => {
                        console.log(error);
                        isSuccess = "error";
                    });
            } catch (error) {
                isSuccess = "error";
                console.log(error);
            }
        }
    }
    init();
</script>

<div class="w-full h-screen flex justify-center items-center dark:text-white">
    {#if isSuccess == "success"}
       <div>
        <div>
            <img
                src="https://blogadmin.hashtechy.com/wp-content/uploads/2023/10/image-75.png"
                alt=""
            />
            <h3 class="flex items-center justify-center">
                Transaction success
                <Icon icon="noto-v1:grinning-face" class="text-4xl ml-2" />
            </h3>
        </div>
        <div class="mb-[400px]">
            <div class="dark:text-white w-full m-auto my-[100px]">
                <div class="flex gap-4">
                    <div class="w-full">
                        <h5>Thông tin đơn hàng {order.code}</h5>
                        <table>
                            <tr>
                                <td>Mã đơn hàng</td>
                                <td class="px-2">{order.code}</td>
                            </tr>
                            <tr>
                                <td>Tình trạng</td>
                                <td class="px-2">{order.status}</td>
                            </tr>
                            <tr>
                                <td>Người đặt</td>
                                <td class="px-2">{order.reciverName}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td class="px-2">{order.reciverEmail}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td class="px-2">{order.reciverPhone}</td>
                            </tr>
                            <tr>
                                <td>Notes</td>
                                <td class="px-2">{order.note}</td>
                            </tr>
                            <tr>
                                <td>Ngày đặt hàng</td>
                                <td class="px-2"
                                    >{formatDate(order.createdAt)}</td
                                >
                            </tr>
                            <tr>
                                <td title="ước lượng" class="underline"
                                    >Ngày giao hàng</td
                                >
                                <td class="px-2"
                                    >{order.status == "Pending" ||
                                    order.status == "Confirm" ||
                                    order.status == "Processing"
                                        ? formatDate(order.createdAt)
                                        : formatDate(order.updatedAt)}</td
                                >
                            </tr>
                        </table>
                    </div>
                    <div class="w-full">
                        <h5>Thông tin thanh toán</h5>
                        <table>
                            <tr>
                                <td>Phương thức</td>
                                <td class="px-2">{order.payment}</td>
                            </tr>
                            <tr>
                                <td>Tình trạng</td>
                                <td class="px-2">{order.paymentStatus}</td>
                            </tr>
                            <tr>
                                <td>Tổng</td>
                                <td class="px-2">{order.total} đ</td>
                            </tr>
                            <tr>
                                <td>Thời gian thanh toán</td>
                                <td class="px-2"
                                    >{formatDate(order.createDate)}</td
                                >
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <h5>Tình trạng đơn hàng</h5>
                    <div class="flex flex-col space-y-2 p-2 py-4 w-full m-auto">
                        <input
                            type="range"
                            class="w-full"
                            style="border-radius: 10px; height: 0.75rem; background: linear-gradient(to right, rgb(47, 164, 231) 100%, rgb(241, 248, 253) 100%);"
                            min="1"
                            name={order.status}
                            step="1"
                            value={statusList.find(
                                (x) => x.status == order.status,
                            )?.value}
                            disabled
                        />
                        <ul class="flex justify-between w-full">
                            {#each statusList as status}
                                <li class="flex justify-center relative">
                                    <span class="absolute">{status.status}</span
                                    >
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <h5 class="font-bold mt-8">Chi tiết đơn hàng</h5>
                    <table class="w-full bg-slate-100 dark:bg-slate-600">
                        {#each order.orderItems as orderItem}
                            <tr class="">
                                <td class="p-2">
                                    <a
                                        href="/san-pham/{orderItem.product
                                            .slug}"
                                        class="flex items-center"
                                    >
                                        <img
                                            src={convertImageJsonToArray(
                                                orderItem.product.images,
                                            )[0]}
                                            alt=""
                                            class="w-[50px] h-[50px] object-cover rounded-md mr-1"
                                        />
                                        {orderItem.product.productName}
                                    </a>
                                </td>
                                <td>Số lượng: {orderItem.quantity}</td>
                                <td
                                    >Đơn giá: {formatCurrency(
                                        orderItem.price,
                                    )}</td
                                >
                                <td
                                    >Thành tiền: {formatCurrency(
                                        orderItem.price * orderItem.quantity,
                                    )}</td
                                >
                            </tr>
                        {/each}
                    </table>
                </div>
            </div>
        </div>
       </div>
    {:else if isSuccess == "error"}
        <div>
            <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/card-payment-failure-4213844-3535313.png"
                alt=""
            />
            <h3 class="flex items-center justify-center">
                Transaction failed, please try again <Icon
                    icon="noto-v1:sad-but-relieved-face"
                    class="text-4xl ml-2"
                />
            </h3>
        </div>
    {:else}
        <div>
            <span class="text-9xl w-full flex justify-center"
                ><Icon icon="eos-icons:hourglass" color="orange" /></span
            >
            <h3 class="flex items-center justify-center">
                Transaction is in progress <Icon
                    icon="noto-v1:hushed-face"
                    class="text-4xl ml-2"
                    color="orange"
                />
            </h3>
        </div>
    {/if}
</div>
