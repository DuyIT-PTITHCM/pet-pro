<script>
    import {
        CloseButton,
        Drawer,
        Button,
        Label,
        Fileupload,
        Input,
        Helper, Select
    } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { sineIn } from "svelte/easing";
    import Icon from "@iconify/svelte";
    import ToastCustom from "../../common/ToastCustom.svelte";
    import { RepositoryFactory } from '$lib/ClientService/RepositoryFactory';
    import moment from 'moment'
    let genders = [
        { value: 'male', name: 'Male' },
        { value: 'female', name: 'Female' },
        { value: 'orther', name: 'Orther' }
    ];
    let roles = [
        { value: 'customer', name: 'Customer' },
        { value: 'employee', name: 'Employee' }
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
        password: "yourpassword",
        birthDate: "1990-01-01",
        gender: "male",
        role: "customer"
    }

    let messageEmail = "",
        messagePhone = "", messageAddress = "",
        messageUsername = "", selectedImage = "";
    function handleFileInputChange(event) {
        const file = event.target.files[0];
        if (file) {
            selectedImage = URL.createObjectURL(file);
        }
    }
    let wastedTimeComponent;
    async function getUser(uid = 0) {
        editUserForm = false;
        const userService = RepositoryFactory.get("userRepository");
        const userdata = userService.getUser(uid).then(function (response) {
            user = response.data.data
            user.birthDate =  moment(new Date(user.birthDate)).format('MM/DD/YYYY');
            console.log(user)
        })
        .catch(function (error) {
            error
        });
        return userdata
    }
    async function editUser() {
        const userService = RepositoryFactory.get("userRepository");
        userService.put(userId ,user).then(function (response) {
            console.log(response);
            onMount(wastedTimeComponent.showToast(response.data.message, 0));
        })
        .catch(function (error) {
            console.log(error)
            const errors = error?.response?.data?.errors;
                errors.forEach(element => {
                    onMount(wastedTimeComponent.showToast(element.msg, 1));
                });
        });
    }
    let maxDate = new Date().toISOString().split('T')[0]; 
</script>

<Button outline color="blue" class="text-xl" on:click={() => (getUser(userId))}><Icon icon="iconamoon:edit-fill" /></Button>
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
            <Icon icon="mdi:create" class="w-4 h-4 mr-2.5" />Edit User {user.name}
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
                {/if}
                <Label class="space-y-2 mb-2 col-span-3">
                    <span>Avatar</span>
                    <Fileupload
                        bind:value={user.avatar}
                        on:change={handleFileInputChange}
                    />
                </Label>
            </div>
            <div class="grid gap-4 mb-6 md:grid-cols-1">
                <div>
                    <Label for="username" class="mb-2 capitalize"
                        >name<span class="text-red-600">*</span></Label
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
                        >address<span class="text-red-600">*</span></Label
                    >
                    <Input
                        type="text"
                        id="address"
                        placeholder="48 Bui Thi Xuan"
                        bind:value={user.information}
                        on:blur={() =>
                            (messageAddress = "Please enter your Phone number")}
                    />
                    <Helper color="red"
                        >{#if messageAddress && user.information === ""}{messageAddress}{/if}</Helper
                    >
                </div>
                <div>
                    <Label for="phone" class="mb-2 capitalize"
                        >Phone number<span class="text-red-600">*</span></Label
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
                        >Email address<span class="text-red-600">*</span></Label
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
                        Role
                        <Select class="mt-2" items={roles} bind:value={user.role} />
                      </Label>
                </div>
                <div>
                    <Label>
                        Gender
                        <Select class="mt-2" items={genders} bind:value={user.gender} />
                      </Label>
                </div>
                <div>
                    <Input type="date" format="YYYY-MM-DD" pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$" min="1900-01-01" max={ new Date(Date.now()).toISOString().split('T')[0]} bind:value={user.birthDate}/>
                    <h1>{user.birthDate}</h1>
                </div>
              
            </div>
            <div class="btn-signup grid grid-cols-1">
                <Button type="submit" on:click={editUser}>Submit</Button
                >
            </div>
        </form>
    </div>
    
</Drawer>
<ToastCustom bind:this={wastedTimeComponent} />
