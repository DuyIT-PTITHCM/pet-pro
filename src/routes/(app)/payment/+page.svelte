<script lang="ts">
    import axios from "axios";
    import { BASE_API } from "$lib/Const";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import { getCookie, removeCookie } from "$lib/Utils/cookieUtils";
    var isSuccess = "";
    var order: any;
    async function init() {
        if($page.url.search == "?shipcode=true"){
            isSuccess = "success";
            order = JSON.parse(getCookie('orderValue'));
        }else{
            try {
            axios
                .get(BASE_API + "/orders/execute" + $page.url.search)
                .then((response) => {
                    isSuccess = "success";
                    order = response.data.data;
                    removeCookie('cart');
                    removeCookie('cartQuantity');
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
            <img
                src="https://blogadmin.hashtechy.com/wp-content/uploads/2023/10/image-75.png"
                alt=""
            />
            <h3 class="flex items-center justify-center">
                Transaction success
                <Icon
                    icon="noto-v1:grinning-face"
                    class="text-4xl ml-2"
                />
            </h3>
        </div>
        <div>
            {order.code}
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
