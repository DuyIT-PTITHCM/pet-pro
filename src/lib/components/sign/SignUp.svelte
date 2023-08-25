<script>
    import { onMount } from "svelte";
    import ToastCustom from "../common/ToastCustom.svelte";

    import {
        Input,
        Label,
        Checkbox,
        A,
        Fileupload,
        GradientButton,
        Helper,
        DarkMode,
    } from "flowbite-svelte";
    import { BASE_API } from "$lib/Const";
    import { createAxiosClient } from "$lib/Utils/axiosServer";
    let admit = false;

    let user = {
        name: "",
        phone: "",
        avatar: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    let selectedImage = "";
    function handleFileInputChange(event) {
        const file = event.target.files[0];
        if (file) {
            selectedImage = URL.createObjectURL(file);
        }
    }
    // Toast
    let wastedTimeComponent;
    async function handleUserDetail() {
        const axiosClient = createAxiosClient();
        axiosClient
            .post(`${BASE_API}/auth/register`, user)
            .then(function (response) {
                window.location.href = "/login";
            })
            .catch(function (error) {
                const errors = error?.response?.data?.data?.errors;
                errors.forEach(element => {
                    onMount(wastedTimeComponent.showToast(element.path + " " + element.msg, 1));
                });
            });
    }

    let messageEmail = "",
        messagePassword = "",
        messagePhone = "",
        messageConfirmPass = "",
        messageUsername = "";
</script>

<div
    class="darkmode fixed top-2 right-2 rounded-lg z-50 bg-slate-200 dark:bg-slate-900"
>
    <DarkMode />
</div>
<div class="flex items-center justify-center min-h-screen relative">
    <form
        class="2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12 bg-slate-100 dark:bg-slate-900 relative p-[20px] rounded-lg z-10"
    >
        <div class="flex items-center justify-center text-center flex-col">
            {#if selectedImage}
                <img class="avt rounded-full h-100 w-100 object-cover" src={selectedImage} alt="avatar" />
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
                <Label for="username" class="mb-2"
                    >name<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="username"
                    placeholder="Flowbite"
                    bind:value={user.name}
                    on:blur={() => (messageUsername = "Please enter your name")}
                />
                <Helper color="red"
                    >{#if messageUsername && user.name === ""}{messageUsername}{/if}</Helper
                >
            </div>
            <div>
                <Label for="phone" class="mb-2"
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
                <Label for="email" class="mb-2"
                    >Email address<span class="text-red-600">*</span></Label
                >
                <Input
                    type="email"
                    id="email"
                    placeholder="john.doe@company.com"
                    bind:value={user.email}
                    on:blur={() => (messageEmail = "Please enter your Email")}
                />
                <Helper color="red"
                    >{#if messageEmail && user.email === ""}{messageEmail}{/if}</Helper
                >
            </div>
            <div>
                <Label for="password" class="mb-2"
                    >Password<span class="text-red-600">*</span></Label
                >
                <Input
                    type="password"
                    id="password"
                    placeholder="•••••••••"
                    bind:value={user.password}
                    on:blur={() =>
                        (messagePassword = "Please enter your Password")}
                />
                <Helper color="red"
                    >{#if messagePassword && user.password === ""}{messagePassword}{/if}</Helper
                >
            </div>

            <div>
                <Label for="confirm_password" class="mb-2"
                    >Confirm password<span class="text-red-600">*</span></Label
                >
                <Input
                    type="password"
                    id="confirm_password"
                    placeholder="•••••••••"
                    bind:value={user.confirmPassword}
                    on:blur={() =>
                        (messageConfirmPass =
                            "Please enter your Confirm Password")}
                />
                <Helper color="red"
                    >{#if messageConfirmPass && user.confirmPassword === ""}{messageConfirmPass}{/if}</Helper
                >
            </div>
            <Checkbox class="space-x-1" bind:checked={admit} required>
                I agree with the <A
                    href="/"
                    class="text-primary-700 dark:text-primary-600 hover:underline"
                    >terms and conditions</A
                >.
            </Checkbox>
        </div>
        <div class="btn-signup grid grid-cols-1">
            <GradientButton
                color="pinkToOrange"
                type="submit"
                disabled={!admit}
                on:click={handleUserDetail}>Submit</GradientButton
            >
        </div>
    </form>
    <div class="absolute w-full h-full dark:brightness-50 transition-all">
        <img class="w-full h-full object-cover" src="/images/signupbg.jpg" alt="" />
    </div>
</div>

<ToastCustom bind:this={wastedTimeComponent} />
