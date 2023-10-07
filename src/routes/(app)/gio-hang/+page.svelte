<script lang="ts">
    import { formatCurrency } from '$lib/Utils/accounting';
    import Icon from '@iconify/svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, Input, Label, P} from 'flowbite-svelte';
    var carts = 
    [
        {
            id: 0,
            productName: "Chó Lavender Dragon Ball Chó Lavender Dragon Ball Chó Lavender Dragon Ball",
            productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_HokNDZkCkGbuqamVlKeIs47Sq3-D3whWt7edYOyyYLoxjf3yu7C5En39YflaGwCPag&usqp=CAU",
            origin: "Mèo châu phi",
            quantity: 4,
            price: 4100,
            isSelect: false
        },
        {
            id: 2,
            productName: "Chó Lavender Dragon Ball",
            productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_HokNDZkCkGbuqamVlKeIs47Sq3-D3whWt7edYOyyYLoxjf3yu7C5En39YflaGwCPag&usqp=CAU",
            origin: "Mèo châu phi",
            quantity: 4,
            price: 4100,
            isSelect: false
        },
        {
            id: 3,
            productName: "Chó Lavender Dragon Ball",
            productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_HokNDZkCkGbuqamVlKeIs47Sq3-D3whWt7edYOyyYLoxjf3yu7C5En39YflaGwCPag&usqp=CAU",
            origin: "Mèo châu phi",
            quantity: 40,
            price: 4100,
            isSelect: true
        },
    ]
    let isChooseAll = false;
    function chooseAllCart() {
        carts = carts.map((item) => ({ ...item, isSelect : isChooseAll }));
    }
    function checkChooseAll() {
        var isAll = carts.find((item) => item.isSelect == false);
        if(!isAll){
            isChooseAll = true;
        }
    }
    function removeCartItem(id: number){
        var itemRemove = carts.find((item) => item.id == id);
        carts = carts.filter((item) => item != itemRemove);
    }
    // function updateQty(id: number, action: boolean){
    //     carts.forEach((item) => (item.id == id && (action ? ( item.quantity < 20 ? ++item.quantity : 20) : (item.quantity == 1 ? 1 : --item.quantity))))
    // }
    function updateQty(id: number, action: boolean) {
        // Tìm đối tượng trong danh sách có id tương ứng
        const targetItem = carts.find((item) => item.id === id);

        // Nếu không tìm thấy đối tượng, không làm gì cả
        if (!targetItem) {
            return;
        }

        if (action) {
            if (targetItem.quantity < 20) {
            targetItem.quantity++;
            }
        } else {
            if (targetItem.quantity > 1) {
            targetItem.quantity--;
            }
        }
        console.log(targetItem)
        carts = carts.map((item) => (item.id === id ? targetItem : item));
    }

    $: totalQuantity = carts.reduce(function (total, cartItem) {
        return total + cartItem.quantity;
    }, 0);
    $: totalQuantityWillBuy = carts.reduce(function (total, cartItem) {
        return total + (cartItem.isSelect ? cartItem.quantity : 0);
    }, 0);
    $: totalOrder = carts.reduce(function (total, cartItem) {
        return total + (cartItem.isSelect ? cartItem.quantity * cartItem.price : 0);
    }, 0);
    $: totalCart = carts.reduce(function (total, cartItem) {
        return total + cartItem.quantity * cartItem.price;
    }, 0);
</script>

<div class="cart-header flex items-center justify-center h-[360px] w-full text-white">
    <h1>GIỎ HÀNG CỦA BẠN</h1>
</div>
<div class="container m-auto mb-[100px]">
    <div class="text-lg font-bold  my-[50px] dark:text-white">
        <p>Tổng: {totalQuantity} sản phẩm <br> Thành tiền: {formatCurrency(totalCart)}</p>
        <p>Các mặt hàng trong giỏ hàng của bạn không được bảo lưu — hãy kiểm tra ngay để đặt hàng.</p>
    </div>
    <div class="flex xl:flex-row flex-col gap-3">
        <div class="flex-1">
            <Table hoverable={true} divClass="relative overflow-x-auto rounded-lg border">
                <TableHead>
                  <TableHeadCell class="!p-4 w-3">
                    <Checkbox  bind:checked={isChooseAll} on:change={() => {chooseAllCart()}}/>
                  </TableHeadCell>
                  <TableHeadCell>Sản phẩm</TableHeadCell>
                  <TableHeadCell>Đơn giá</TableHeadCell>
                  <TableHeadCell>Só lượng</TableHeadCell>
                  <TableHeadCell>Thành tiền</TableHeadCell>
                  <TableHeadCell>
                    <span class="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody>
                    {#each carts as cart, index (index)}
                        <TableBodyRow>
                            <TableBodyCell class="!p-4">
                            <Checkbox bind:checked={cart.isSelect} on:change={() => {isChooseAll = false; checkChooseAll()}}/>
                            </TableBodyCell>
                            <TableBodyCell>
                                <div class="flex items-center">
                                    <img src="{cart.productImage}" alt="{cart.productName}" class="w-[200px] rounded-xl">
                                    <p class="!block min-w-[200px] overflow-hidden text-ellipsis p-2">{cart.productName} <br><br>Nguồn gốc: {cart.origin}</p>
                                </div>
                            </TableBodyCell>
                            <TableBodyCell>{formatCurrency(cart.price)}</TableBodyCell>
                            <TableBodyCell>
                                <div class="flex items-center">
                                    <button class="relative text-2xl p-2 hover:text-primary-700" on:click={() => updateQty(cart.id, true)}><Icon icon="typcn:plus"/></button>
                                        <div class="">
                                            <input type="number" min="1" max="20" id="" bind:value={cart.quantity} class="w-[50px] rounded-lg bg-transparent text-center {cart.quantity < 1 || cart.quantity > 20 && 'border border-red-500'}">
                                            {#if cart.quantity < 1 || cart.quantity > 20}
                                                <p class="text-red-500 text-2xl mt-[-14px] z-10 cursor-help" title="Quantity just from 1 to 20"><Icon icon="ep:warning-filled" class="m-auto" /></p>
                                            {/if}
                                        </div>
                                    <button class="text-2xl p-2 hover:text-primary-700" on:click={() => updateQty(cart.id, false)}><Icon icon="typcn:minus"/></button>
                                </div>
                            </TableBodyCell>
                            <TableBodyCell>{formatCurrency(cart.price * cart.quantity)}</TableBodyCell>
                            <TableBodyCell>
                                <button on:click={() => removeCartItem(cart.id)} class="font-medium text-primary-600 hover:underline dark:text-primary-500"><Icon icon="fluent:delete-24-filled" class="text-2xl"/></button>
                            </TableBodyCell>
                        </TableBodyRow>
                    {/each}
                </TableBody>
            </Table>
        </div>
        <div class="xl:w-[500px] w-full p-4 rounded-lg border dark:text-white">
            <h3>Thông tin đơn hàng</h3>
            <div class="flex justify-between text-2xl py-4">
                <p>Số lượng: <span class="font-bold">{totalQuantityWillBuy}</span></p>
                <p>Tổng: <span class="font-bold">{formatCurrency(totalOrder)}</span></p>
            </div>
            <div class="mb-6">
                <Label for="default-input" class="block mb-2">Tên người nhận</Label>
                <Input id="default-input" placeholder="Nguyễn Văn A" />
            </div>
            <div class="mb-6">
                <Label for="default-input" class="block mb-2">Default input</Label>
                <Input id="default-input" placeholder="Default input" />
            </div>
            <div class="mb-6">
                <Label for="default-input" class="block mb-2">Default input</Label>
                <Input id="default-input" placeholder="Default input" />
            </div>
        </div>    
    </div>
</div>

<style>
    .cart-header{
        background: url("/images/common/cardheader.png"); 
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>