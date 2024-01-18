<script>
    import {
        CloseButton,
        Drawer,
        Button,
        Label,
        Fileupload,
        Input,
        Helper,
        Select,
    } from "flowbite-svelte";
    import { sineIn } from "svelte/easing";
    import Icon from "@iconify/svelte";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import moment from "moment";
    import { isUserEdited } from "$lib/store/userManagement";
    import { toastErr } from "$lib/store/toastError";
    import { t } from "$lib/translations";
    import { HOST } from "$lib/Const";

    let genders = [
        { value: "male", name: "Male" },
        { value: "female", name: "Female" },
        { value: "other", name: "Other" },
    ];

    const uploadFileService = RepositoryFactory.get("uploadRepository");

    let roles = [
        { value: "customer", name: "Customer" },
        { value: "employer", name: "Employee" },
    ];
    let editUserForm = true;
    let transitionParamsRight = {
        x: 320,
        duration: 200,
        easing: sineIn,
    };
    export let userId = 0;
    let user = {
        name: "John Doe",
        avatar: "",
        information: "thonn onn18",
        email: "duynait1112@gmail.com",
        phone: "12345678910",
        birthDate: "1990-01-01",
        gender: "male",
        role: "customer",
    };

    let messageEmail = "",
        messagePhone = "",
        messageAddress = "",
        messageUsername = "",
        selectedImage = "";
    let file;
    async function handleFileInputChange(event) {
        file = await event.target.files[0];
        selectedImage = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await uploadFileService.uploadFile(formData);
            user.avatar = res.data.data.path;
        } catch (error) {
            toastErr.set([
                {
                    message: "File upload failed",
                    type: "error",
                },
            ]);
        }
    }
    async function getUser(uid = 0) {
        editUserForm = false;
        const userService = RepositoryFactory.get("userRepository");
        const userdata = userService
            .getUser(uid)
            .then(function (response) {
                user = response.data.data;
                user.birthDate = moment(new Date(user.birthDate)).format(
                    "yyyy-MM-DD"
                );
            })
            .catch(function (error) {
                error;
            });
        return userdata;
    }
    async function editUser() {
        const userService = RepositoryFactory.get("userRepository");
        try {
            const res = await userService.put(userId, user);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            isUserEdited.set(true);
            editUserForm = true;
        } catch (error) {
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
</script>

<Button outline color="blue" class="text-xl" on:click={() => getUser(userId)}
    ><Icon icon="iconamoon:edit-fill" /></Button
>
<Drawer
    placement="right"
    width={"2xl:w-1/4 xl:w-1/4 lg:w-2/4 sm:w-2/4 w-full"}
    transitionType="fly"
    transitionParams={transitionParamsRight}
    bind:hidden={editUserForm}
    id="createUserForm"
>
    <div class="flex items-center">
        <h5
            id="drawer-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
            <Icon icon="mdi:create" class="w-4 h-4 mr-2.5" />{$t("common.editUser")} {user.name}
        </h5>
        <CloseButton
            on:click={() => (editUserForm = true)}
            class="mb-4 dark:text-white"
        />
    </div>
    <div class="flex items-center justify-center relative">
        <form class="w-full p-[20px] rounded-lg z-10">
            <div class="flex items-center justify-center text-center flex-col">
                {#if selectedImage}
                    <img
                        class="avt rounded-full h-24 w-24 object-cover"
                        src={selectedImage}
                        alt="avatar"
                    />
                {:else}
                    <img
                        class="avt rounded-full h-24 w-24 object-cover"
                        src={HOST + user.avatar}
                        alt="avatar"
                    />
                {/if}
                <Label class="space-y-2 mb-2 col-span-3">
                    <span>{$t("common.avatar")}</span>
                    <Fileupload
                        bind:value={user.avatar}
                        on:change={handleFileInputChange}
                    />
                </Label>
            </div>
            <div class="grid gap-4 mb-6 md:grid-cols-1">
                <div>
                    <Label for="username" class="mb-2 capitalize"
                        >{$t("common.name")}<span class="text-red-600">*</span></Label
                    >
                    <Input
                        type="text"
                        id="username"
                        placeholder="Flowbite"
                        bind:value={user.name}
                        on:blur={() =>
                            (messageUsername = "Please enter your name")}
                    />
                    <Helper color="red"
                        >{#if messageUsername && user.name === ""}{messageUsername}{/if}</Helper
                    >
                </div>
                <div>
                    <Label for="address" class="mb-2 capitalize"
                        >{$t("common.address")}<span class="text-red-600">*</span></Label
                    >
                    <textarea class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border-slate-300"
                        bind:value={user.information}
                        on:blur={() =>
                            (messageAddress = "Please enter address")}
                    />
                    <Helper color="red"
                        >{#if messageAddress && user.information === ""}{messageAddress}{/if}</Helper
                    >
                </div>
                <div>
                    <Label for="phone" class="mb-2 capitalize"
                        >{$t("common.phone")}<span class="text-red-600">*</span></Label
                    >
                    <Input
                        type="tel"
                        id="phone"
                        placeholder="1234-567-890"
                        bind:value={user.phone}
                        on:blur={() =>
                            (messagePhone = "Please enter your Phone number")}
                    />
                    <Helper color="red"
                        >{#if messagePhone && user.phone === ""}{messagePhone}{/if}</Helper
                    >
                </div>
                <div>
                    <Label for="email" class="mb-2 capitalize"
                        >{$t("common.email")}<span class="text-red-600">*</span></Label
                    >
                    <Input
                        type="email"
                        id="email"
                        placeholder="john.doe@company.com"
                        bind:value={user.email}
                        on:blur={() =>
                            (messageEmail = "Please enter your Email")}
                    />
                    <Helper color="red"
                        >{#if messageEmail && user.email === ""}{messageEmail}{/if}</Helper
                    >
                </div>
                <div>
                    <Label>
                        {$t("common.role")}
                        <Select
                            class="mt-2"
                            items={roles}
                            bind:value={user.role}
                        />
                    </Label>
                </div>
                <div>
                    <Label>
                        {$t("common.gender")}
                        <Select
                            class="mt-2"
                            items={genders}
                            bind:value={user.gender}
                        />
                    </Label>
                </div>
                <div>
                    <Label for="birthDate" class="mb-2 capitalize"
                        >{$t("common.birthDate")}<span class="text-red-600">*</span></Label
                    >
                    <Input
                        id="birthDate"
                        type="date"
                        max={new Date(Date.now()).toISOString().split("T")[0]}
                        bind:value={user.birthDate}
                    />
                </div>
            </div>
            <div class="btn-signup grid grid-cols-1">
                <Button color={"yellow"} type="submit" on:click={editUser}>Submit</Button>
            </div>
        </form>
    </div>
</Drawer>

