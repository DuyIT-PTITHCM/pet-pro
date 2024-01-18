<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { HOST } from "$lib/Const";
    import { formatCurrency } from "$lib/Utils/accounting";
    import { convertImageJsonToArray, formatDate } from "$lib/Utils/common";
    import { getCookie } from "$lib/Utils/cookieUtils";
    import { toastErr } from "$lib/store/toastError";
    import { Accordion, AccordionItem } from "flowbite-svelte";
    const customerService = RepositoryFactory.get("customerRepository");
    let user: any;
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
        try {
            const userData = await customerService.get("profile");
            if (userData?.data.data) {
                user = userData?.data.data;
            }
        } catch (error) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
    }
    init();
</script>

<div class="dark:text-white">
    {#if user}
        <h3 class="text-center">WELCOME {user.name}</h3>
        <div class="dark:text-white">
            <h4>Your orders</h4>
            {#if user.orders}
            <Accordion>
                
                {#each user.orders as data}
                <AccordionItem>
                    <span slot="header" class="text-md">{data.code}</span>
                    <div class="dark:text-white m-auto my-[100px] bg-white dark:bg-slate-900 w-full">
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
                                        <td class="px-2">{data.reciverEmail}</td
                                        >
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td class="px-2">{data.reciverPhone}</td
                                        >
                                    </tr>
                                    <tr>
                                        <td>Notes</td>
                                        <td class="px-2">{data.note}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày đặt hàng</td>
                                        <td class="px-2"
                                            >{formatDate(data.createdAt)}</td
                                        >
                                    </tr>
                                    <tr>
                                        <td title="ước lượng" class="underline"
                                            >Ngày giao hàng</td
                                        >
                                        <td class="px-2"
                                            >{data.status == "Pending" ||
                                            data.status == "Confirm" ||
                                            data.status == "Processing"
                                                ? formatDate(data.createdAt)
                                                : formatDate(
                                                      data.updatedAt,
                                                  )}</td
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
                                        <td class="px-2"
                                            >{data.paymentStatus}</td
                                        >
                                    </tr>
                                    <tr>
                                        <td>Tổng</td>
                                        <td class="px-2">{data.total} đ</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian thanh toán</td>
                                        <td class="px-2"
                                            >{formatDate(data.createDate)}</td
                                        >
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h5>Tình trạng đơn hàng</h5>
                            <div
                                class="flex flex-col space-y-2 p-2 py-4 w-full m-auto"
                            >
                                <input
                                    type="range"
                                    class="w-full"
                                    style="border-radius: 10px; height: 0.75rem; background: linear-gradient(to right, rgb(47, 164, 231) 100%, rgb(241, 248, 253) 100%);"
                                    min="1"
                                    name={data.status}
                                    step="1"
                                    value={statusList.find(
                                        (x) => x.status == data.status,
                                    )?.value}
                                    disabled
                                />
                                <ul class="flex justify-between w-full">
                                    {#each statusList as status}
                                        <li
                                            class="flex justify-center relative"
                                        >
                                            <span class="absolute"
                                                >{status.status}</span
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                            <h5 class="font-bold mt-8">Chi tiết đơn hàng</h5>
                            <table
                                class="w-full bg-slate-100 dark:bg-slate-600"
                            >
                                {#each data.orderItems as orderItem}
                                    <tr class="">
                                        <td class="p-2">
                                            <a
                                                href="/san-pham/{orderItem
                                                    .product?.slug}"
                                                class="flex items-center"
                                            >
                                                <img
                                                    src={convertImageJsonToArray(
                                                        orderItem.product?.images,
                                                    )[0]}
                                                    alt=""
                                                    class="w-[50px] h-[50px] object-cover rounded-md mr-1"
                                                />
                                                {orderItem.product?.productName}
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
                                                orderItem.price *
                                                    orderItem.quantity,
                                            )}</td
                                        >
                                    </tr>
                                {/each}
                            </table>
                        </div>
                    </div>
                  </AccordionItem>

                {/each}
            </Accordion>

            {/if}
        </div>
        <div class="">
            <h4>Your pets</h4>
            {#if user.pets}
                <div class="mt-2">
                    {#each user.pets as pet}
                        <div
                            class="relative flex items-center justify-between rounded bg-gray-50 dark:bg-slate-900 p-4 mb-4"
                        >
                            <div
                                class="flex justify-between items-center w-full"
                            >
                                <img
                                    src="{HOST}{pet.image
                                        ? pet.image
                                        : '/images/logo.png'}"
                                    alt="pet"
                                    class="w-32 h-32 object-cover rounded"
                                />
                                <div class="p-4">
                                    <p>Name: {pet.name}</p>
                                    <p>Breed: {pet.breed}</p>
                                </div>
                                <div class="p-4">
                                    <p>FurColor: {pet.furColor}</p>
                                    <p>
                                        Health: {pet.healthStatus}
                                    </p>
                                </div>
                                <div class="p-4">
                                    <p>Height: {pet.height}</p>
                                    <p>Length: {pet.length}</p>
                                    <p>Weight: {pet.weight}</p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    {/if}
</div>
