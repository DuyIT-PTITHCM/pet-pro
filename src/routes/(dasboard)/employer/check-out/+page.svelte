<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { HOST } from "$lib/Const";
    import { formatDateWithTime } from "$lib/Utils/common";
    import Camera from "$lib/components/common/Camera.svelte";
    import { toastErr } from "$lib/store/toastError";
    import { Button, Input, Label } from "flowbite-svelte";

    const useService = RepositoryFactory.get("useServiceRepository");
    let codeCheckOut: string;
    let checkInData: any;
    let checkoutvalue = {
        checkoutImage: "",
        checkoutStatus: "",
        checkoutReceiver: "",
        checkoutPhone: ""
    };
    async function getCheckIn(code: string) {
        try {
            if (code) {
                const res = await useService.get(code);
                if (res.data.data) {
                    checkInData = res.data.data;
                } else {
                    checkInData = false;
                }
            } else {
                toastErr.set([
                    {
                        message: "Code is required",
                        type: "error",
                    },
                ]);
            }
        } catch (err: any) {
            toastErr.set([
                {
                    message: err.message,
                    type: "error",
                },
            ]);
        }
    }
    async function checkout() {
        try {
            if(checkoutvalue.checkoutImage && checkoutvalue.checkoutPhone && checkoutvalue.checkoutReceiver && checkoutvalue.checkoutStatus){
                const res = await useService.put(checkInData.id, checkoutvalue);
                toastErr.set([
                    {
                        message: res.data.message,
                        type: "success",
                    },
                ]);
                checkInData = res.data.data;
            }else{
                toastErr.set([
                    {
                        message: "image, status, phone and receiver is required",
                        type: "error",
                    },
                ]);
            }
        } catch (error: any) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
    }
</script>

<div class="mx-auto xl:w-1/2 w-full dark:text-slate-50">
    <Input
        type="text"
        placeholder="Input code"
        bind:value={codeCheckOut}
        on:change={() => getCheckIn(codeCheckOut)}
    />

    {#if checkInData}
        <div
            class="flex justify-center items-center flex-col dark:bg-slate-800 bg-white mt-4 rounded-md"
        >
            <h1 class="text-gray-900 dark:text-white">{checkInData.code}</h1>
            <!-- <Badge>Chú ý: Giữ mã này của bạn mới có thể check out</Badge> -->
            <div class="flex gap-4">
                <div>
                    <img
                        src="{HOST}{checkInData.checkinImage
                            ? checkInData.checkinImage
                            : '/images/logo.png'}"
                        alt=""
                        class="w-[400px] h-[400px] object-cover rounded"
                    />
                    <div class="text-md font-bold py-2">
                        <p>Check In Status: {checkInData.checkinStatus}</p>
                        <p>
                            Check In Time: {formatDateWithTime(checkInData.checkinTime)}
                        </p>
                        <p>
                            Total: {checkInData.totalPrice.toLocaleString()} vnd
                        </p>
                    </div>
                </div>

                <div>
                    {#if checkInData.isCheckout}
                        
                        <div>
                            <img
                            src="{HOST}{checkInData.checkoutImage
                                ? checkInData.checkoutImage
                                : '/images/logo.png'}"
                            alt=""
                            class="w-[400px] h-[400px] object-cover rounded"
                        />
                            <div class="text-md font-bold py-2">
                                <p>Check Out Status: {checkInData.checkoutStatus}</p>
                                <p>
                                    Check Out Time: {formatDateWithTime(checkInData.checkoutTime)}
                                </p>
                            </div>
                        </div>
                    {:else if checkoutvalue.checkoutImage}
                        <div class="relative">
                            <img
                                src="{HOST}{checkoutvalue.checkoutImage
                                    ? checkoutvalue.checkoutImage
                                    : '/images/logo.png'}"
                                alt=""
                                class="w-[400px] h-[400px] object-cover rounded"
                            />
                            <div
                                class="absolute w-full top-0 flex justify-center items-center h-full opacity-0 hover:opacity-100 transition-all"
                            >
                                <Camera
                                    bind:image={checkoutvalue.checkoutImage}
                                    button={"Chụp lại"}
                                    buttonRetake="text-[100px]"
                                    isReTake
                                />
                            </div>
                        </div>
                        <br />
                        <Label for="outstatus" defaultClass="font-bold"
                            >Trạng thái check out</Label
                        >
                        <Input
                            id="outstatus"
                            placeholder="Input status"
                            bind:value={checkoutvalue.checkoutStatus}
                            class="mb-2"
                        />
                        <Label for="receiver" defaultClass="font-bold"
                            >Người nhận</Label
                        >
                        <Input
                            id="receiver"
                            placeholder="Người nhận"
                            bind:value={checkoutvalue.checkoutReceiver}
                            class="mb-2"
                        />
                        <Label for="phone" defaultClass="font-bold"
                            >Số điện thoại</Label
                        >
                        <Input
                            id="phone"
                            placeholder="Số điện thoại"
                            bind:value={checkoutvalue.checkoutPhone}
                            class="mb-2"
                        />
                        <Button on:click={checkout}>Xác nhận check out</Button>
                    {:else}
                        <Camera
                            bind:image={checkoutvalue.checkoutImage}
                            button={"Check Out"}
                        />
                    {/if}
                </div>
            </div>
            {#if checkInData.pet}
                <div
                    class="flex justify-around items-center w-full dark:bg-slate-900 bg-slate-200 py-4 rounded"
                >
                    <img
                        src="{HOST}{checkInData.pet.image
                            ? checkInData.pet.image
                            : '/images/logo.png'}"
                        alt="pet"
                        class="w-32 h-32 object-cover rounded"
                    />
                    <div class="p-4">
                        <p>Name: {checkInData.pet.name}</p>
                        <p>
                            Breed: {checkInData.pet.breed}
                        </p>
                        <p>
                            FurColor: {checkInData.pet.furColor}
                        </p>
                        <p>
                            Health: {checkInData.pet.healthStatus}
                        </p>
                    </div>
                    <div class="p-4">
                        <p>
                            Height: {checkInData.pet.height}
                        </p>
                        <p>
                            Length: {checkInData.pet.length}
                        </p>
                        <p>
                            Weight: {checkInData.pet.weight}
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    {:else if checkInData == false && codeCheckOut}
        <h4 class="text-center dark:text-white">
            Không tìm thấy bất kì lượt check in nào với code = {codeCheckOut.toUpperCase()}
        </h4>
    {:else}
        <h3 class="text-center dark:text-white">Input code to check out</h3>
    {/if}
</div>
