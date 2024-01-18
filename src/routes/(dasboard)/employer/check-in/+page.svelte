<script lang="ts">
    import { BASE_API, HOST } from "$lib/Const";
    import axios from "axios";
    import { toastErr } from "$lib/store/toastError";
    import html2canvas from "html2canvas";
    import {
        Accordion,
        AccordionItem,
        Badge,
        Button,
        Fileupload,
        Input,
        Label,
        Modal,
        MultiSelect,
        Textarea,
    } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { captureAndSave, formatDateWithTime } from "$lib/Utils/common";
    import Camera from "$lib/components/common/Camera.svelte";
    const useService = RepositoryFactory.get("useServiceRepository");
    let searchKey = "",
        selectedImage = "",
        checkInImage = "",
        checkinStatus = "",
        checkInSuccess: any,
        isCheckInSuccess = false;
    let users: any;
    let petCheckIn: any;

    let servicesShow = [
        {
            value: "",
            name: "",
        },
    ];
    let targetWeight = 0;
    let totalPrice = 0;
    let totalFinal = 0;
    let serviceSelectedShow: any;
    let files: any[] = [],
        services: any[] = [],
        file;
    let serviceSelected: any[] = [];
    let servicesPriceShow: any[] = [];
    let deletePetModal = false,
        checkInModal = false;
    let formAddPet = false,
        idShow = 0,
        idAddPet = 0;
    let newPet = {
        id: 0,
        name: null,
        breed: null,
        furColor: null,
        height: null,
        length: null,
        weight: null,
        healthStatus: null,
        image: null,
        userId: 0,
    };
    let newPetOrigin = {
        id: 0,
        name: null,
        breed: null,
        furColor: null,
        height: null,
        length: null,
        weight: null,
        healthStatus: null,
        image: null,
        userId: 0,
    };

    //
    $: calculateTotal(targetWeight, serviceSelected);
    $: calculateAddTotal(servicesPriceShow);
    //
    async function addCheckIn(id: number) {
        try {
            if (
                checkInImage &&
                servicesPriceShow &&
                totalFinal &&
                checkinStatus
            ) {
                const dataRequest = {
                    petId: id,
                    checkinImage: checkInImage,
                    checkinStatus,
                    serviceId: servicesPriceShow.map((x) => x.id).join(","),
                    totalPrice: totalFinal,
                };
                const res = await useService.post(dataRequest);
                toastErr.set([
                    {
                        message: res.data.message,
                        type: "success",
                    },
                ]);
                checkInSuccess = res.data.data;
                isCheckInSuccess = true;
                checkInModal = false;
                setTimeout(async () => {
                    await captureAndSave("captureElement", "check-in_" + checkInSuccess.code.toUpperCase());
                }, 1000);
            } else {
                toastErr.set([
                    {
                        message:
                            "Checkin fail: image, service and status is required",
                        type: "error",
                    },
                ]);
            }
        } catch (error) {
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map((element: any) => {
                return {
                    message: element.msg,
                    type: "error",
                };
            });
            toastErr.set(toasts);
        }
    }

    async function handleFileInputChange(event: any) {
        file = await event.target.files[0];
        selectedImage = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append("file", file);
        try {
            axios
                .post(BASE_API + "/uploadnoauth", formData)
                .then((response) => {
                    newPet.image = response.data.data.path;
                    checkInImage = response.data.data.path;
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
    async function getUsersWithPet(search: string) {
        try {
            axios
                .get(BASE_API + `/pets?searchKey=${search}`)
                .then((response) => {
                    users = response.data.data;
                })
                .catch((error) => {
                    toastErr.set([
                        {
                            message: error.message,
                            type: "error",
                        },
                    ]);
                });
        } catch (error: any) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
    }
    async function addOrUpdatePet(userId: number) {
        try {
            if (newPet.id > 0) {
                axios
                    .put(BASE_API + `/pets/${newPet.id}`, newPet)
                    .then(async (response) => {
                        users = response.data.data;
                        toastErr.set([
                            {
                                message: "Update pet success",
                                type: "success",
                            },
                        ]);
                        await getUsersWithPet(searchKey);
                        formAddPet = false;
                    })
                    .catch((error) => {
                        toastErr.set([
                            {
                                message: error.message,
                                type: "error",
                            },
                        ]);
                    });
            } else {
                newPet.userId = userId;
                axios
                    .post(BASE_API + "/pets", newPet)
                    .then(async (response) => {
                        users = response.data.data;
                        toastErr.set([
                            {
                                message: "Add pet success",
                                type: "success",
                            },
                        ]);
                        await getUsersWithPet(searchKey);
                        formAddPet = false;
                    })
                    .catch((error) => {
                        toastErr.set([
                            {
                                message: error.message,
                                type: "error",
                            },
                        ]);
                    });
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
    async function deletePet(id: number) {
        try {
            axios
                .delete(BASE_API + `/pets/${id}`)
                .then(async (response) => {
                    toastErr.set([
                        {
                            message: "Remove pet success",
                            type: "success",
                        },
                    ]);
                    await getUsersWithPet(searchKey);
                })
                .catch((error) => {
                    toastErr.set([
                        {
                            message: error.message,
                            type: "error",
                        },
                    ]);
                });
        } catch (error: any) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
    }

    //checkin data
    async function getServices(weight: number, pet: any) {
        try {
            petCheckIn = pet;
            targetWeight = weight;
            axios
                .get(BASE_API + `/front/services`)
                .then(async (response) => {
                    services = response.data.data;
                    servicesShow = services.map((item) => ({
                        value: item.id,
                        name: item.title,
                    }));
                })
                .catch((error) => {
                    toastErr.set([
                        {
                            message: error.message,
                            type: "error",
                        },
                    ]);
                });
        } catch (error: any) {
            toastErr.set([
                {
                    message: error.message,
                    type: "error",
                },
            ]);
        }
    }
    function calculateAddTotal(services: any) {
        totalFinal = 0;
        for (var i = 0; i < services.length; i++) {
            // Kiểm tra nếu giá không phải là null và isCheck là true
            if (services[i].price !== null) {
                totalFinal += parseFloat(services[i].price)
                    ? parseFloat(services[i].price)
                    : 0;
            }
        }
    }
    function calculateTotal(weight: number, listIdService: any) {
        var servicesPrices = services.filter((x) =>
            listIdService.includes(x.id),
        );
        serviceSelectedShow = servicesPrices;
        const totalPriceForPetWeight = calculateTotalPriceForPetWeight(
            weight,
            servicesPrices,
        );
        totalPrice = totalPriceForPetWeight;
    }
    function calculateTotalPriceForPetWeight(
        petWeight: number,
        filteredServices: any,
    ) {
        let totalPrice = 0;
        servicesPriceShow = [];
        // Duyệt qua danh sách dịch vụ đã lọc
        for (const service of filteredServices) {
            // Sắp xếp danh sách giá của dịch vụ theo trọng lượng từ thấp đến cao
            service.prices.sort((a: any, b: any) => a.weight - b.weight);
            let selectedPrice = 0;

            // Duyệt qua danh sách giá của dịch vụ
            for (const price of service.prices) {
                if (petWeight <= price.petWeight) {
                    selectedPrice = price.price;
                    servicesPriceShow.push({
                        id: service.id,
                        name: service.title,
                        price: price.price,
                        isCheck: false,
                    });
                    break;
                }
                if (
                    petWeight >
                    service.prices[service.prices.length - 1].petWeight
                ) {
                    servicesPriceShow.push({
                        id: service.id,
                        name: service.title,
                        price: null,
                        isCheck: true,
                    });
                    break;
                }
            }
            totalPrice += selectedPrice;
        }
        return totalPrice;
    }

</script>

<div class="mx-auto my-4 lg:w-1/2 md:w-3/4 w-full">
    <Input
        type="text"
        placeholder="Input name, email or phone"
        bind:value={searchKey}
        on:change={() => getUsersWithPet(searchKey)}
    />
    <div class="dark:text-white mt-4">
        {#if users}
            <div class="gap-4 w-full float-left">
                {#each users as user}
                    <div
                        class="w-full mb-4 p-4 rounded bg-white dark:bg-slate-700"
                    >
                        <div class="flex justify-between items-center">
                            <img
                                src="{HOST}{user?.avatar
                                    ? user.avatar
                                    : '/images/logo.png'}"
                                alt=""
                                class="w-20 h-20 object-cover rounded"
                            />
                            <div class="p-4">
                                <p>Name: {user?.name}</p>
                                <p>Email: {user?.email}</p>
                            </div>
                            <div class="p-4">
                                <p>Phone: {user?.phone}</p>
                                <p>Address: {user?.information}</p>
                            </div>
                            <div class="">
                                <button
                                    class="text-3xl hover:bg-white hover:text-black rounded-full"
                                    on:click={() => {
                                        formAddPet = true;
                                        idAddPet = user.id;
                                        newPet = newPetOrigin;
                                    }}
                                    ><Icon
                                        icon="simple-line-icons:plus"
                                    /></button
                                >
                                <button
                                    class="text-3xl hover:bg-white hover:text-black rounded-full"
                                    on:click={() => {
                                        idShow == user?.id
                                            ? (idShow = 0)
                                            : (idShow = user?.id);
                                    }}
                                    ><Icon
                                        icon="icon-park-outline:{idShow ==
                                        user?.id
                                            ? 'up'
                                            : 'down'}-c"
                                    /></button
                                >
                            </div>
                        </div>
                        {#if idShow == user?.id}
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
                                        <div class="m-4">
                                            <div
                                                class="flex w-24 justify-between items-center"
                                            >
                                                <button
                                                    class="text-3xl hover:bg-white hover:text-black rounded-full transition-all"
                                                    on:click={() => {
                                                        newPet = pet;
                                                        formAddPet = true;
                                                        selectedImage =
                                                            pet.image;
                                                    }}
                                                    ><Icon
                                                        icon="iconamoon:edit-fill"
                                                    /></button
                                                >
                                                <button
                                                    class="text-3xl hover:bg-white hover:text-black rounded-full transition-all"
                                                    on:click={() =>
                                                        (deletePetModal = true)}
                                                    ><Icon
                                                        icon="fluent:delete-12-filled"
                                                    /></button
                                                >
                                            </div>
                                            <Modal
                                                bind:open={deletePetModal}
                                                size="xs"
                                                autoclose
                                            >
                                                <div class="text-center">
                                                    <Icon
                                                        icon="typcn:warning"
                                                        class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                                    />
                                                    <h3
                                                        class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                                                    >
                                                        Are you sure you want to
                                                        delete this pet?
                                                    </h3>
                                                    <Button
                                                        color="red"
                                                        class="me-2"
                                                        on:click={() =>
                                                            deletePet(pet.id)}
                                                        >Yes, I'm sure</Button
                                                    >
                                                    <Button color="alternative"
                                                        >No, cancel</Button
                                                    >
                                                </div>
                                            </Modal>
                                            <br />
                                            <Button
                                                class="w-24"
                                                on:click={() => {
                                                    checkInModal = true;
                                                    getServices(
                                                        pet.weight,
                                                        pet,
                                                    );
                                                }}>Check In</Button
                                            >
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<Modal bind:open={formAddPet} size="md" autoclose={false} class="w-full">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Add new pet
    </h3>
    <Fileupload
        on:change={handleFileInputChange}
        class="w-24 py-[10px] bg-white"
    />
    {#if selectedImage}
        <img
            class="rounded-full h-[300px] w-[300px] object-cover"
            src={selectedImage}
            alt="avatar"
        />
    {/if}
    <div class="w-full flex gap-3 flex-1">
        <Label class="space-y-2 flex-1">
            <span>Name</span>
            <Input
                type="text"
                name="name"
                placeholder="miu miu"
                required
                bind:value={newPet.name}
            />
        </Label>
        <Label class="space-y-2 flex-1">
            <span>Breed</span>
            <Input
                type="text"
                name="breed"
                placeholder="breed"
                required
                bind:value={newPet.breed}
            />
        </Label>
    </div>
    <div class="flex gap-3">
        <Label class="space-y-2 flex-1">
            <span>FurColor</span>
            <Input
                type="text"
                name="furColor"
                placeholder="furColor"
                required
                bind:value={newPet.furColor}
            />
        </Label>
        <Label class="space-y-2 flex-1">
            <span>Health</span>
            <Input
                type="text"
                name="healthStatus"
                placeholder="healthStatus"
                required
                bind:value={newPet.healthStatus}
            />
        </Label>
    </div>

    <div class="flex gap-3">
        <Label class="space-y-2 flex-1">
            <span>Height</span>
            <Input
                type="number"
                name="height"
                placeholder="height"
                required
                bind:value={newPet.height}
                class="w-full"
            />
        </Label>
        <Label class="space-y-2 flex-1">
            <span>Length</span>
            <Input
                type="number"
                name="length"
                placeholder="length"
                required
                bind:value={newPet.length}
            />
        </Label>
        <Label class="space-y-2 flex-1">
            <span>Weight</span>
            <Input
                type="number"
                name="weight"
                placeholder="weight"
                required
                bind:value={newPet.weight}
            />
        </Label>
    </div>
    <Button
        type="submit"
        class="w-full1"
        on:click={() => addOrUpdatePet(idAddPet)}
        >{#if newPet.id}UPDATE{:else}CREATE{/if}</Button
    >
</Modal>

<Modal bind:open={checkInModal} size="xl" autoclose={false}>
    <div class="min-h-[700px] gap-4">
        <div class="flex gap-4">
            <div class="flex-1">
                <div class="flex flex-1 shadow-md rounded-md">
                    <img
                        src="{HOST}{petCheckIn.image
                            ? petCheckIn.image
                            : '/images/logo.png'}"
                        alt="pet"
                        class="w-52 h-52 object-cover rounded"
                    />
                    <div class="flex text-xl">
                        <div class="p-4">
                            <p>Name: {petCheckIn.name}</p>
                            <p>
                                Breed: {petCheckIn.breed}
                            </p>
                            <p>
                                FurColor: {petCheckIn.furColor}
                            </p>
                            <p>
                                Health: {petCheckIn.healthStatus}
                            </p>
                        </div>
                        <div class="p-4">
                            <p>
                                Height: {petCheckIn.height}
                            </p>
                            <p>
                                Length: {petCheckIn.length}
                            </p>
                            <p>
                                Weight: {petCheckIn.weight}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    {#if serviceSelectedShow}
                        <Accordion>
                            {#each serviceSelectedShow as serviceShow}
                                <AccordionItem>
                                    <span slot="header" class="text-base"
                                        >{serviceShow.title}</span
                                    >
                                    <table class="w-full">
                                        <tr>
                                            <th class="text-left">Cân nặng</th>
                                            <th class="text-left"
                                                ><span class="ml-3"
                                                    >Giá dịch vụ</span
                                                ></th
                                            >
                                        </tr>
                                        {#each serviceShow.prices as price, index}
                                            {#if index == 0}
                                                <tr
                                                    class="border-b {targetWeight <=
                                                        price.petWeight &&
                                                        'text-primary-600 font-bold dark:text-white'}"
                                                >
                                                    <td class="py-2"
                                                        >Dưới {price.petWeight}kg</td
                                                    >
                                                    <td
                                                        ><span class="ml-3"
                                                            >{price.price.toLocaleString()}</span
                                                        > vnd</td
                                                    >
                                                </tr>
                                            {/if}
                                            {#if serviceShow.prices[index + 1]}
                                                <tr
                                                    class="border-b {price.petWeight <
                                                        targetWeight &&
                                                        targetWeight <=
                                                            serviceShow.prices[
                                                                index + 1
                                                            ].price ?
                                                        'text-primary-600 font-bold dark:text-white' : ''}"
                                                >
                                                    <td class="py-2"
                                                        >Từ {price.petWeight}kg
                                                        đến {serviceShow.prices[
                                                            index + 1
                                                        ].petWeight}kg
                                                    </td>
                                                    <td
                                                        ><span class="ml-3"
                                                            >{serviceShow.prices[
                                                                index + 1
                                                            ].price.toLocaleString()}
                                                            vnd</span
                                                        ></td
                                                    >
                                                </tr>
                                            {:else}
                                                <tr
                                                    class="border-b {targetWeight >
                                                        price.petWeight &&
                                                        'text-primary-600 font-bold dark:text-white'}"
                                                >
                                                    <td
                                                        class="py-2"
                                                        colspan="2"
                                                    >
                                                        Trên {price.petWeight}kg
                                                        liên hệ cửa hàng.
                                                    </td>
                                                </tr>
                                            {/if}
                                        {/each}
                                    </table>
                                </AccordionItem>
                            {/each}
                        </Accordion>
                    {/if}
                </div>
            </div>
            <div class="flex-1 shadow-md rounded-md">
                <p>Select service</p>
                <MultiSelect
                    items={servicesShow}
                    bind:value={serviceSelected}
                />
                <div
                    class="w-full p-4 border mt-4 rounded-md dark:border-gray-600"
                >
                    {#if servicesPriceShow}
                        <table class="w-full">
                            <tr>
                                <th class="text-left">Service</th>
                                <th class="text-left">Price</th>
                            </tr>
                            {#each servicesPriceShow as showitem}
                                <tr class="border-b dark:border-b-gray-600">
                                    <td class="py-2 max-w-[200px]">{showitem.name}</td>
                                    <td class="py-2">
                                        {#if showitem.isCheck}
                                            <Input
                                                type="number"
                                                min="0"
                                                required
                                                max="100000000"
                                                bind:value={showitem.price}
                                                placeholder="Liên hệ cửa hàng"
                                            />
                                        {:else}
                                            {showitem.price.toLocaleString()} vnd
                                        {/if}
                                    </td>
                                </tr>
                            {/each}
                            <tr>
                                <th class="text-left py-2"
                                    >Cân nặng {targetWeight}</th
                                >
                                <th class="text-left py-2">
                                    <table class="w-full">
                                        <tr>
                                            <td>Tổng</td>
                                            <td
                                                >{totalPrice.toLocaleString()}</td
                                            >
                                        </tr>
                                        <tr>
                                            <td>Tổng tiền</td>
                                            <td
                                                >{(
                                                    totalFinal - totalPrice
                                                ).toLocaleString()}</td
                                            >
                                        </tr>
                                        <tr>
                                            <td>Tổng tiền</td>
                                            <td
                                                >{totalFinal.toLocaleString()}</td
                                            >
                                        </tr>
                                    </table>
                                </th>
                            </tr>
                            <tr>
                                <td colspan="2" class="my-4">
                                    {#if checkInImage}
                                        <div class="relative">
                                            <img
                                                src="{HOST}{checkInImage
                                                    ? checkInImage
                                                    : '/images/logo.png'}"
                                                alt=""
                                                class="w-full h-[400px] object-cover rounded"
                                            />
                                            <div
                                                class="absolute w-full top-0 flex justify-center items-center h-full opacity-0 hover:opacity-100 transition-all"
                                            >
                                                <Camera
                                                    bind:image={checkInImage}
                                                    button={"Chụp lại"}
                                                    buttonRetake="text-[100px]"
                                                    isReTake
                                                />
                                            </div>
                                        </div>
                                    {:else}
                                        <Camera
                                            bind:image={checkInImage}
                                            button={"Chụp hình"}
                                        />
                                    {/if}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="my-4">
                                    <Label for="textarea-id" class="mb-2"
                                        >Your message</Label
                                    >
                                    <Textarea
                                        id="textarea-id"
                                        placeholder="Your message"
                                        rows="4"
                                        name="message"
                                        bind:value={checkinStatus}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <Button
                                        on:click={() =>
                                            addCheckIn(petCheckIn.id)}
                                        >Check In</Button
                                    >
                                </td>
                            </tr>
                        </table>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</Modal>
<Modal bind:open={isCheckInSuccess} size="md" autoclose={true} class="w-full">
    <div id="captureElement" class="flex justify-center items-center flex-col">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Check In successful
        </h3>
        <h1 class="text-gray-900 dark:text-white">{checkInSuccess.code}</h1>
        <Badge>Chú ý: Giữ mã này của bạn mới có thể check out</Badge>
        <br />
        <img
            src="{HOST}{checkInSuccess.checkinImage
                ? checkInSuccess.checkinImage
                : '/images/logo.png'}"
            alt=""
            class="w-[400px] h-[400px] object-cover rounded"
        />
        <div class="text-md font-bold py-2">
            <p>Status: {checkInSuccess.checkinStatus}</p>
            <p>Time: {formatDateWithTime(checkInSuccess.checkinTime)}</p>
            <p>Total: {checkInSuccess.totalPrice.toLocaleString()} vnd</p>
        </div>
        {#if petCheckIn}
            <div
                class="flex justify-around items-center w-full dark:bg-slate-900 bg-slate-200 py-2 rounded"
            >
                <img
                    src="{HOST}{petCheckIn.image
                        ? petCheckIn.image
                        : '/images/logo.png'}"
                    alt="pet"
                    class="w-32 h-32 object-cover rounded"
                />
                <div class="p-4">
                    <p>Name: {petCheckIn.name}</p>
                    <p>
                        Breed: {petCheckIn.breed}
                    </p>
                    <p>
                        FurColor: {petCheckIn.furColor}
                    </p>
                    <p>
                        Health: {petCheckIn.healthStatus}
                    </p>
                </div>
                <div class="p-4">
                    <p>
                        Height: {petCheckIn.height}
                    </p>
                    <p>
                        Length: {petCheckIn.length}
                    </p>
                    <p>
                        Weight: {petCheckIn.weight}
                    </p>
                </div>
            </div>
        {/if}
    </div>
</Modal>
