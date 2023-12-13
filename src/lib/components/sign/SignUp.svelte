<script>
    import { loadingState } from "./../../store/loading";
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
    import axios from "axios";
    import { toastErr } from "$lib/store/toastError";
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
    let file;
    async function handleFileInputChange(event) {
        file = await event.target.files[0];
        selectedImage = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append("file", file);
        try {
            axios
                .post(BASE_API + "/upload", formData)
                .then((response) => {
                    user.avatar = response.data.data.path;
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

    function validateEmail(email = "") {
        // A basic email pattern matching
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Validate Password
    function validatePassword(password = "") {
        // Password should be at least 8 characters long and contain at least one digit and one special character
        const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
        return passwordPattern.test(password);
    }
    async function handleSubmitRegister() {
        if (!user.name) {
            messageUsername = "Name is required";
        }
        if (!user.phone) {
            messagePhone = "Phone is required";
        }
        if (!validateEmail(user.email)) {
            messageEmail = "Email is not valid";
        }
        if (!validatePassword(user.password)) {
            validPassword =
                "Password should be at least 8 characters long and contain at least one digit and one special character";
        }
        if (user.password != user.confirmPassword) {
            messageConfirmPass = "Password confirm and Password is mismatch";
        }
        if (
            user.name &&
            user.phone &&
            validateEmail(user.email) &&
            validatePassword(user.password) &&
            user.password == user.confirmPassword
        ) {
            handleUserDetail();
        } else {
            return;
        }
    }
    async function handleUserDetail() {
        loadingState.set(true);
        const axiosClient = createAxiosClient();
        axiosClient
            .post(`${BASE_API}/auth/register`, user)
            .then(function (response) {
                loadingState.set(false);
                window.location.href = "/login";
            })
            .catch(function (error) {
                loadingState.set(false);
                const errors = error?.response?.data?.data?.errors;
                var toasts = errors?.map((element) => {
                    return {
                        message: element.msg,
                        type: "error",
                    };
                });
                toastErr.set(toasts);
            });
    }

    let messageEmail = "",
        messagePassword = "",
        messagePhone = "",
        messageConfirmPass = "",
        messageUsername = "",
        validPassword = "";
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
        <!-- <div class="flex items-center justify-center text-center flex-col">
            {#if selectedImage}
                <img
                    class="avt rounded-full h-100 w-100 object-cover"
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
        </div> -->
        <div class="grid gap-4 mb-6 md:grid-cols-1">
            <div>
                <Label for="username" class="mb-2"
                    >Name<span class="text-red-600">*</span></Label
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
                    >{#if messagePassword && user.password === ""}{messagePassword}{:else}{validPassword}{/if}</Helper
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
                on:click={handleSubmitRegister}>Submit</GradientButton
            >
        </div>
    </form>
    <div class="absolute w-full h-full dark:brightness-50 transition-all">
        <img
            class="w-full h-full object-cover"
            src="/images/signupbg.jpg"
            alt=""
        />
    </div>
</div>
