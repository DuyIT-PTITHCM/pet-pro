<script lang="ts">
    import { formatCurrency } from '$lib/Utils/accounting';
    import { updateCart } from '$lib/Utils/cartAction';
    import { cart } from '$lib/store/cart';
    import Icon from '@iconify/svelte';
    import { Checkbox, Input, Label, P, Button, Badge} from 'flowbite-svelte';
    let currentCart : any;
    let totalItem = 0, totalSelectItem = 0, totalCart = 0, totalOrder = 0;
    async function getCart(){
        await cart.subscribe(value => {
            currentCart = JSON.parse(value);
        });
        var isAll = currentCart.find((item) => item.isSelect == false);
        if(!isAll){
            isChooseAll = true;
        }
        handleCartChange();
        return currentCart;
    }
    let isChooseAll = false;
    function chooseAllCart() {
        currentCart = currentCart.map((item) => ({ ...item, isSelect : isChooseAll }));
        updateCart(currentCart);
        handleCartChange();
    }
    function checkChooseAll() {
        var isAll = currentCart.find((item) => item.isSelect == false);
        if(!isAll){
            isChooseAll = true;
        }
        updateCart(currentCart);
        handleCartChange();
    }
    function removeCartItem(id: number){
        var itemRemove = currentCart.find((item) => item.id == id);
        currentCart = currentCart.filter((item) => item != itemRemove);
        updateCart(currentCart);
    }

    async function updateQty(id: number, action: boolean) {
        const targetItem = currentCart.find((item) => item.id === id);

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
        currentCart = currentCart.map((item) => (item.id === id ? targetItem : item));
        updateCart(currentCart);
        handleCartChange();
        return;
    }
    function handleCartChange(){
        totalItem = currentCart.reduce(function (total, cartItem) {
            return total + cartItem.quantity;
        }, 0);
        totalSelectItem = currentCart.reduce(function (total, cartItem) {
            return total + (cartItem.isSelect ? cartItem.quantity : 0);
        }, 0);
        totalOrder = currentCart.reduce(function (total, cartItem) {
            return total + (cartItem.isSelect ? cartItem.quantity * cartItem.price : 0);
        }, 0);
        totalCart = currentCart.reduce(function (total, cartItem) {
            return total + cartItem.quantity * cartItem.price;
        }, 0);
        return;
    }
    $: totalQuantity = totalItem;
    $: totalQuantityWillBuy = totalSelectItem;
    $: totalOrder = totalOrder;
    $: totalCart = totalCart;

</script>
{#await getCart()}
    <div class="w-full h-screen flex justify-center items-center">
        <img class="m-auto" src="/images/common/cat-empty-cart.png" alt="">
    </div>
{:then res} 
    <div class="cart-header flex items-center justify-center h-[360px] w-full text-white">
        <h1 class="text-center">GIỎ HÀNG CỦA BẠN {#if !currentCart.length} <br> ĐANG TRỐNG {/if}</h1>
    </div>
    <div class="container m-auto mb-[100px] p-4">
        {#if !currentCart.length}
            <div class="w-full">
                <img class="m-auto" src="/images/common/cat-empty-cart.png" alt="">
            </div>
        {:else}
            <Badge class="md:text-lg text-sm my-4 p-2 text-center w-full" border>Các mặt hàng trong giỏ hàng của bạn không được bảo lưu — hãy kiểm tra ngay để đặt hàng.</Badge>
            <div class="flex xl:flex-row flex-col gap-3">
                <div class="flex-1">
                    <div class="w-full flex justify-between md:text-lg text-base bg-slate-100 dark:bg-slate-900 dark:text-white px-2 py-4 rounded-lg mb-4">
                        <p class="ml-2">Tổng: <b>{totalQuantity}</b> sản phẩm <br> Thành tiền: <b>{formatCurrency(totalCart)}</b></p>
                        <Checkbox bind:checked={isChooseAll} on:change={() => chooseAllCart()} class="scale-125"/>
                    </div>
                    {#each currentCart as cart, index (index)}
                        <div class="relative flex justify-between w-full rounded-lg mb-4 last:mb-0 overflow-hidden bg-slate-100 dark:bg-slate-900 dark:text-white">
                            <div class="flex items-center">
                                <img src="{cart.image}" alt="{cart.name}" class="sm:w-[200px] sm:h-[150px] w-[150px] h-[100%] object-cover">
                                <div class="sm:text-base text-sm md:block hidden ml-2">
                                    <p class="2xl:w-[350px] xl:w-[250px] w-[200px] text-justify overflow-hidden sm:line-clamp-2 line-clamp-1 m-2">{cart.name} </p>
                                    <p class="p-2">Nguồn gốc: {cart.origin}</p>
                                </div>
                            </div>
                            <div class="flex lg:flex-row flex-col justify-between md:w-auto w-full">
                                <div class="sm:text-base text-sm md:hidden block ml-2">
                                    <p class="sm:w-[350px] text-justify overflow-hidden sm:line-clamp-2 line-clamp-1 m-2">{cart.name} </p>
                                    <p class="p-1">Nguồn gốc: {cart.origin}</p>
                                </div>
                                <div class="flex md:flex-row flex-col md:items-center my-auto z-20 mr-5">
                                    <div class="md:block sm:flex p-1 sm:gap-4 ml-2">
                                        <p>{formatCurrency(cart.price)}</p>
                                        <p><b>{formatCurrency(cart.price * cart.quantity)}</b></p>
                                    </div>
                                    <div class="flex items-center">
                                        <button class="relative text-2xl p-2 hover:text-primary-700" on:click={() => updateQty(cart.id, true)}><Icon icon="typcn:plus"/></button>
                                        <div>
                                            <input type="number" min="1" max="20" id="" bind:value={cart.quantity} class="w-[50px] rounded-lg bg-transparent text-center {cart.quantity < 1 || cart.quantity > 20 && 'border border-red-500'}">
                                            {#if cart.quantity < 1 || cart.quantity > 20}
                                                <p class="text-red-500 text-2xl mt-[-14px] z-10 cursor-help" title="Quantity just from 1 to 20"><Icon icon="ep:warning-filled" class="m-auto" /></p>
                                            {/if}
                                        </div>
                                        <button class="text-2xl p-2 hover:text-primary-700" on:click={() => updateQty(cart.id, false)}><Icon icon="typcn:minus"/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-0 right-0 h-full flex flex-col justify-between items-center">
                                <Checkbox class="mx-auto scale-125 m-2" bind:checked={cart.isSelect} on:change={() => {isChooseAll = false; checkChooseAll()}}/>
                                <button on:click={() => removeCartItem(cart.id)} class="font-medium text-primary-600 hover:underline dark:text-primary-500 m-2"><Icon icon="fluent:delete-24-filled" class="text-2xl"/></button>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="xl:w-[500px] w-full p-4 rounded-lg dark:text-white bg-slate-100 dark:bg-slate-900">
                    <h3>Thông tin đơn hàng</h3>
                    <div class="flex justify-between md:text-xl text-base py-4">
                        <p>Số lượng: <span class="font-bold">{totalQuantityWillBuy}</span></p>
                        <p>Tổng: <span class="font-bold">{formatCurrency(totalOrder)}</span></p>
                    </div>
                    <div class="mb-6">
                        <Label for="receiver" class="block mb-2">Tên người nhận</Label>
                        <Input id="receiver" placeholder="Elon Musk" />
                    </div>
                    <div class="mb-6">
                        <Label for="phone" class="block mb-2">Số điện thoại</Label>
                        <Input id="phone" placeholder="0000-000-000" />
                    </div>
                    <div class="mb-6">
                        <Label for="address" class="block mb-2">Địa chỉ</Label>
                        <Input id="address" placeholder="Địa chỉ nhận hàng mong muốn..." />
                    </div>
                    <div class="mb-6">
                        <Label for="notes" class="block mb-2">Ghi chú</Label>
                        <Input id="notes" placeholder="Ghi chú của bạn..." />
                    </div>
                    <Button class="uppercase">đặt hàng</Button>
                </div>
            </div>
        {/if}
    </div>
{/await}

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
