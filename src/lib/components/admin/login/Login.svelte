<script lang="ts">
    import {
        Button,
        Checkbox,
        DarkMode,
        Label,
        Input,
        Helper,
    } from "flowbite-svelte";
    import loginbg from "$lib/assest/images/loginbg.jpg";
    import { createAxiosClient } from "$lib/Utils/axiosServer";
    import { BASE_API } from "$lib/Const";
    import { onMount } from "svelte";
    import ToastCustom from "$lib/components/common/ToastCustom.svelte";
    import { setCookie } from "$lib/Utils/cookieUtils";

    let user = {
        email: "",
        password: "",
        rememberMe: false,
    };
    let wastedTimeComponent;
    async function userLogin() {
        try {
            const axiosClient = createAxiosClient();
            const response = await axiosClient.post(
                `${BASE_API}/auth/login`,
                user
            );
            const expiresIn = user.rememberMe ? 30 : 1;
            setCookie("access_token", response?.data?.data?.token, {
                expires: expiresIn,
            });
            window.location.href = "/"
        } catch (error) {
            onMount(
                wastedTimeComponent.showToast(
                    "Login failed!!! Email or password not correct",
                    1
                )
            );
        }
    }
</script>

<div
    class="darkmode fixed top-2 right-2 rounded-lg z-50 bg-slate-200 dark:bg-slate-900"
>
    <DarkMode />
</div>
<div
    class="relative flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"
>
    <div
        class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 z-10"
    >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="w-full flex justify-center my-5">
                <a
                    href="/"
                    class="flex items-center text-3xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        class="w-10 h-10 mr-2 rounded-full"
                        src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg"
                        alt="logo"
                    />
                    PetOne
                </a>
            </div>
            <form class="space-y-4 md:space-y-6">
                <div class="mb-6">
                    <Label for="email" class="block mb-2">Email</Label>
                    <Input
                        bind:value={user.email}
                        type="email"
                        placeholder="Enter your email"
                    />
                    <Helper class="mt-2" />
                </div>
                <div class="mb-6">
                    <Label for="password" class="block mb-2">Password</Label>
                    <Input
                        bind:value={user.password}
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Helper class="mt-2" />
                </div>
                <div class="flex justify-between">
                    <Checkbox bind:checked={user.rememberMe}
                        >Remember me</Checkbox
                    >
                    <a
                        href="/"
                        class="text-primary-600 dark+:text-primary-500 hover:underline font-bold text-sm"
                        >Forgot password ?</a
                    >
                </div>
                <Button on:click={userLogin} type="submit" class="w-full"
                    >Log In</Button
                >
                <a
                    href="/signup"
                    class="text-primary-600 dark+:text-primary-500 hover:underline font-bold text-sm text-right w-full block"
                    >Sign up for Pet One</a
                >
            </form>
        </div>
    </div>
    <div class="absolute w-full h-full dark:brightness-50 transition-all">
        <img class="w-full h-full object-cover" src={loginbg} alt="" />
    </div>
</div>
<ToastCustom bind:this={wastedTimeComponent} />
