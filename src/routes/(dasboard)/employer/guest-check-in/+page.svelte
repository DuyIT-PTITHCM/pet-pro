<script lang="ts">
    import {
        Input,
        Label,
        Fileupload,
        GradientButton,
        Button,
        Modal,
    } from "flowbite-svelte";
    import { BASE_API, HOST } from "$lib/Const";
    import { createAxiosClient } from "$lib/Utils/axiosServer";
    import axios from "axios";
    import { toastErr } from "$lib/store/toastError";
    import Nodata from "$lib/components/common/Nodata.svelte";
    import { formatDate, formatDateWithTime } from "$lib/Utils/common";

    let checkIn = {
        name: "John Doe",
        address: "123 Main St, City",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        breed: "Labrador",
        furColor: "Golden",
        height: 60,
        length: 80,
        weight: 30,
        healthStatus: "Healthy",
        image: "image.jpg",
        serviceId: 1,
        checkinImage: "i.jpg",
    };
    let checkOut = {
        checkoutImage: "img.jpg",
        checkoutStatus: "goood",
    };
    let formCheckout = false;
    let formCheckIn = false;
    let idCheckOut = 0;
    let capturedImageSrc: string;
    let selectedImage = "";
    let file;
    let videoStream: any;
    let videoRef = null;
    let checkList: any;
    async function handleFileInputChange(event) {
        file = await event.target.files[0];
        console.log(file);
        selectedImage = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append("file", file);
        try {
            axios
                .post(BASE_API + "/uploadnoauth", formData)
                .then((response) => {
                    console.log(checkIn.checkinImage);
                    checkIn.checkinImage = response.data.data.path;
                })
                .catch((error) => {
                    toastErr.set([
                        {
                            message: "File upload failed",
                            type: "error",
                        },
                    ]);
                });
        } catch (error) {
            toastErr.set([
                {
                    message: "File upload failed",
                    type: "error",
                },
            ]);
        }
    }
    async function handleSubmit() {
        const axiosClient = createAxiosClient();
        axiosClient
            .post(`${BASE_API}/checkInOut`, checkIn)
            .then(function (response) {
                checkInOutToday();
                toastErr.set([
                    {
                        message: "Check In success",
                        type: "success",
                    },
                ]);
            })
            .catch(function (error) {
                const errors = error?.response?.data?.data?.errors;
                var toasts = errors?.map((element) => {
                    return {
                        message: element.msg,
                        type: "error",
                    };
                });
                toastErr.set(toasts);
            });
            formCheckIn = false;
    }

    const startCamera = async () => {
        try {
            videoStream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });

            if (videoRef) {
                videoRef.srcObject = videoStream;
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    const stopCamera = () => {
        if (videoStream) {
            const tracks = videoStream.getTracks();
            tracks.forEach((track) => track.stop());
        }
    };
    const generateGuid = () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                const r = (Math.random() * 16) | 0;
                const v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            },
        );
    };
    async function handleCapture (isCheckoutcapture = false) {
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.videoWidth;
        canvas.height = videoRef.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/png");
        capturedImageSrc = dataUrl;
        console.log(dataUrl);
        // Tạo một liên kết tải xuống
        const downloadLink = document.createElement("a");
        // Chuyển đổi dataUrl thành Blob
        const blob = await fetch(dataUrl).then((response) => response.blob());
        const formData = new FormData();
        const guid = generateGuid();
        const fileName = `captured_image_${guid}.png`;
        formData.append("file", blob, fileName);
        try {
            axios
                .post(BASE_API + "/uploadnoauth", formData)
                .then((response) => {
                    isCheckoutcapture
                        ? (checkOut.checkoutImage = response.data.data.path)
                        : (checkIn.checkinImage = response.data.data.path);
                    console.log(
                        isCheckoutcapture +
                            " " +
                            checkIn.checkinImage +
                            " in " +
                            checkOut.checkoutImage +
                            " path " +
                            response.data.data.path,
                    );
                })
                .catch((error) => {
                    toastErr.set([
                        {
                            message: "File upload failed",
                            type: "error",
                        },
                    ]);
                });
        } catch (error) {
            toastErr.set([
                {
                    message: "File upload failed",
                    type: "error",
                },
            ]);
        }
        stopCamera();
        // downloadLink.href = dataUrl;
        // downloadLink.download = "captured_image.png";

        // // Mô phỏng sự kiện nhấp chuột để bắt đầu tải xuống
        // document.body.appendChild(downloadLink);
        // downloadLink.click();

        // // Xóa liên kết để tránh gây nhiễu
        // document.body.removeChild(downloadLink);
        // Do something with the captured image data (e.g., send to server, display on the page)
    };
    async function checkOutFunc() {
        const axiosClient = createAxiosClient();
        axiosClient
            .put(`${BASE_API}/checkInOut/${idCheckOut}`, checkOut)
            .then(function (response) {
                checkInOutToday();
                toastErr.set([
                    {
                        message: "Check Out success",
                        type: "success",
                    },
                ]);
            })
            .catch(function (error) {
                const errors = error?.response?.data?.data?.errors;
                var toasts = errors?.map((element) => {
                    return {
                        message: element.msg,
                        type: "error",
                    };
                });
                toastErr.set(toasts);
            });
        formCheckout = false;
    }
    async function checkInOutToday() {
        try {
            axios
                .get(BASE_API + "/checkInOut")
                .then((response) => {
                    checkList = response.data.data;
                })
                .catch((error) => {
                    toastErr.set([
                        {
                            message: "File upload failed",
                            type: "error",
                        },
                    ]);
                });
        } catch (error) {
            toastErr.set([
                {
                    message: "File upload failed",
                    type: "error",
                },
            ]);
        }
    }
    checkInOutToday();
</script>

<h3 class="text-center">Dashboard for Emp</h3>
<Button class="mb-3"
    on:click={() => {
        formCheckIn = true;
    }}>Check In</Button
>
<div class="w-full">
    {#if checkList}
        {#each checkList as item}
            <div
                class="flex items-center justify-between mb-3 rounded-md w-full"
            >
                <div
                    class="flex-1 flex justify-between items-center mr-3 p-4 bg-slate-200 rounded-md"
                >
                    <div>
                        <img
                            src={HOST + item.checkinImage}
                            alt=""
                            class="w-52 h-52 object-cover"
                        />
                    </div>
                    <div>
                        <p>Name: {item.name}</p>
                        <p>Address: {item.address}</p>
                        <p>Email: {item.email}</p>
                    </div>
                    <div>
                        <p>Phone: {item.phone}</p>
                        <p>Freed: {item.breed}</p>
                        <p>FurColor: {item.furColor}</p>
                        <p>healthStatus: {item.healthStatus}</p>
                    </div>
                    <div>
                        <p>height: {item.height}</p>
                        <p>length: {item.length}</p>
                        <p>weight: {item.weight}</p>
                        <p>Time: {formatDateWithTime(item.createdAt)}</p>
                    </div>
                    <!-- <div>
                        <p>Service</p>
                        <p>{item.category.categoryName}</p>
                        <p class="text-lg">Total: {item.totalPrice}</p>
                    </div> -->
                </div>
                <div>
                    {#if item.isCheckout}
                        <div
                            class="min-w-[300px] flex justify-center items-center bg-slate-200 rounded-md p-4"
                        >
                            <img
                                src={HOST + item.checkoutImage}
                                alt=""
                                class="w-52 h-52 object-cover"
                            />
                            <div>
                                <p>Checkout status: {item.checkoutStatus}</p>
                            <p>Checkout time: {formatDateWithTime(item.checkoutTime)}</p>
                            </div>
                        </div>
                    {:else}
                        <div
                            class="min-w-[300px] flex justify-center items-center"
                        >
                            <Button
                                on:click={() => {
                                    formCheckout = true;
                                    idCheckOut = item.id;
                                }}>Check Out</Button
                            >
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    {/if}
</div>
<Modal bind:open={formCheckout} size="xs" autoclose={false} class="w-full">
    <button on:click={startCamera}>Start Camera</button>
    <button on:click={stopCamera}>Stop Camera</button>
    {#if capturedImageSrc}
        <img src={capturedImageSrc} style="max-width: 100%;" alt="s" />
    {/if}
    {#if videoStream}
        <video bind:this={videoRef} autoplay></video>
        <button on:click={() => handleCapture(true)}>Capture Image</button>
    {/if}
    <br />
    <p>status</p>
    <input
        type="text"
        placeholder="status checkout"
        bind:value={checkOut.checkoutStatus}
    />
    <Button on:click={() => checkOutFunc()}>Check Out</Button>
</Modal>
<Modal bind:open={formCheckIn} size="md" autoclose={false} class="w-full">
    <form
        class=" bg-slate-100 dark:bg-slate-900 relative p-[20px] rounded-lg z-10"
    >
        <div>
            <button on:click={startCamera}>Start Camera</button>
            {#if capturedImageSrc}
                <img src={capturedImageSrc} style="max-width: 100%;" alt="s" />
            {/if}
            {#if videoStream}
                <video bind:this={videoRef} autoplay></video>
                <button on:click={stopCamera}>Stop Camera</button>
                <button on:click={() => handleCapture()}>Capture Image</button>
            {/if}
        </div>

        <div class="flex items-center justify-center text-center flex-col">
            {#if selectedImage}
                <img
                    class="avt rounded-full h-100 w-100 object-cover"
                    src={selectedImage}
                    alt="avatar"
                />
            {/if}
            <Label class="space-y-2 mb-2 col-span-3">
                <span>Check In image</span>
                <Fileupload
                    bind:value={checkIn.checkinImage}
                    on:change={handleFileInputChange}
                />
            </Label>
        </div>
        <div class="grid gap-4 mb-6 md:grid-cols-1">
            <div>
                <Label for="username" class="mb-2"
                    >Name<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="username"
                    placeholder="Flowbite"
                    bind:value={checkIn.name}
                />
            </div>
            <div>
                <Label for="phone" class="mb-2"
                    >Phone number<span class="text-red-600">*</span></Label
                >
                <Input
                    type="tel"
                    id="phone"
                    placeholder="1234-567-890"
                    bind:value={checkIn.phone}
                />
            </div>
            <div>
                <Label for="email" class="mb-2"
                    >Email address<span class="text-red-600">*</span></Label
                >
                <Input
                    type="email"
                    id="email"
                    placeholder="john.doe@company.com"
                    bind:value={checkIn.email}
                />
            </div>
            <div>
                <Label for="adr" class="mb-2"
                    >Adress<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="adr"
                    placeholder="john doe company"
                    bind:value={checkIn.address}
                />
            </div>
            <div>
                <Label for="breed" class="mb-2"
                    >Breed<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="breed"
                    placeholder="breed"
                    bind:value={checkIn.breed}
                />
            </div>
            <div>
                <Label for="color" class="mb-2"
                    >furColor<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="color"
                    placeholder="colorm"
                    bind:value={checkIn.furColor}
                />
            </div>
            <div>
                <Label for="status" class="mb-2"
                    >Health Status<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="status"
                    placeholder="good"
                    bind:value={checkIn.healthStatus}
                />
            </div>
            <div>
                <Label for="height" class="mb-2"
                    >Height<span class="text-red-600">*</span></Label
                >
                <Input
                    type="number"
                    id="height"
                    min="0"
                    max="100"
                    bind:value={checkIn.height}
                />
            </div>
            <div>
                <Label for="length" class="mb-2"
                    >length<span class="text-red-600">*</span></Label
                >
                <Input type="number" id="length" bind:value={checkIn.length} />
            </div>
            <div>
                <Label for="weight" class="mb-2"
                    >weight<span class="text-red-600">*</span></Label
                >
                <Input type="number" id="weight" bind:value={checkIn.weight} />
            </div>
        </div>
        <div class="btn-signup grid grid-cols-1">
            <GradientButton
                color="pinkToOrange"
                type="submit"
                on:click={handleSubmit}>Submit</GradientButton
            >
        </div>
    </form>
</Modal>
