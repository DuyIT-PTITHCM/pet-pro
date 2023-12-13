<script lang="ts">
    import { formatCurrency } from "$lib/Utils/accounting.js";
    import { convertImageJsonToArray, formatDate } from "$lib/Utils/common.js";

    export let data;
    data = data.data;
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
</script>

<div
    class="dark:text-white w-1/2 m-auto my-[100px]"
>
    <div class="flex gap-4">
        <div class="w-full">
            <h5>Thông tin đơn hàng {data.code}</h5>
            <table>
                <tr>
                    <td>Mã đơn hàng</td>
                    <td class="px-2">{data.code}</td>
                </tr>
                <tr>
                    <td>Tình trạng</td>
                    <td class="px-2">{data.status}</td>
                </tr>
                <tr>
                    <td>Người đặt</td>
                    <td class="px-2">{data.reciverName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td class="px-2">{data.reciverEmail}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td class="px-2">{data.reciverPhone}</td>
                </tr>
                <tr>
                    <td>Notes</td>
                    <td class="px-2">{data.note}</td>
                </tr>
                <tr>
                    <td>Ngày đặt hàng</td>
                    <td class="px-2">{formatDate(data.createdAt)}</td>
                </tr>
                <tr>
                    <td title="ước lượng" class="underline">Ngày giao hàng</td>
                    <td class="px-2"
                        >{data.status == "Pending" ||
                        data.status == "Confirm" ||
                        data.status == "Processing"
                            ? formatDate(data.createdAt)
                            : formatDate(data.updatedAt)}</td
                    >
                </tr>
            </table>
        </div>
        <div class="w-full">
            <h5>Thông tin thanh toán</h5>
            <table>
                <tr>
                    <td>Phương thức</td>
                    <td class="px-2">{data.payment}</td>
                </tr>
                <tr>
                    <td>Tình trạng</td>
                    <td class="px-2">{data.paymentStatus}</td>
                </tr>
                <tr>
                    <td>Tổng</td>
                    <td class="px-2">{data.total} đ</td>
                </tr>
                <tr>
                    <td>Thời gian thanh toán</td>
                    <td class="px-2">{formatDate(data.createDate)}</td>
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
                name={data.status}
                step="1"
                value={statusList.find(x => x.status == data.status)?.value}
                disabled
            />
            <ul class="flex justify-between w-full">
                {#each statusList as status}
                    <li class="flex justify-center relative">
                        <span class="absolute">{status.status}</span>
                    </li>
                {/each}
            </ul>
        </div>
        <h5 class="font-bold mt-8">Chi tiết đơn hàng</h5>
        <table class="w-full bg-slate-100 dark:bg-slate-600">
            {#each data.orderItems as orderItem}
                <tr class="">
                    <td class="p-2">
                        <a
                            href="/san-pham/{orderItem.product.slug}"
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
                    <td>Đơn giá: {formatCurrency(orderItem.price)}</td>
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
