<script>
	import { onMount } from 'svelte';
    import ToastCustom from '../common/ToastCustom.svelte';

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
    import signUpBg from "$lib/assest/images/signupbg.jpg";
    import axios from 'axios';
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

    let isValidPassword = function isPasswordValid() {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(user.password);
    };
    // Toast
    let wastedTimeComponent;
    async function handleUserDetail() {
        if (user.name == "") {
            onMount(wastedTimeComponent.showToast("Please enter your name", 1))
        } else if (user.phone == "") {
            onMount(wastedTimeComponent.showToast("Please enter your phone number", 1));
        } else if (user.email == "" || user.email == null) {
            onMount(wastedTimeComponent.showToast("Please enter your email", 1));
        } else if (user.password.length == 0) {
            onMount(wastedTimeComponent.showToast("Please enter your Password.", 1));
        } else if (user.password.length < 8) {
            onMount(wastedTimeComponent.showToast("Password must have at least 8 characters.", 1));
        } else if (user.password != user.confirmPassword) {
            onMount(wastedTimeComponent.showToast("Password and password confirm is mismatch", 1));
        } else if (!isValidPassword) {
            onMount(wastedTimeComponent.showToast(
                "Password must have including an uppercase letter, a lowercase letter, a digit, and a special character.", 1
            ));
        } else {
            let result = null;
            // try {
            //     const res = await fetch('http://103.142.26.42/api/v1.0/auth/register', {
            //         method: 'POST',
            //         body: JSON.stringify({
            //             name: user.name,
            //             email: user.email,
            //             password: user.password,
            //             confirmPassword: user.confirmPassword
            //         })
            //     })

            //     const json = await res.json()
            //     console.log(json)
            //     result = JSON.stringify(json)

            // } catch (error) {
            //     console.log(error)
            // }

            axios
                .post('http://103.142.26.42/api/v1.0/auth/register',user)
                .then(function (response) {
                    console.log(response);
                    console.log(response.errors.msg + "hear")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
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
<div class="sign-up">
    <form
        class="sign-up-form 2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12 bg-slate-100 dark:bg-slate-900"
    >
        <div class="input-avt">
            {#if selectedImage}
                <img class="avt" src={selectedImage} alt="avatar" />
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
    <div class="bgloginform dark:brightness-50 transition-all">
        <img src={signUpBg} alt="" />
    </div>
</div>

<ToastCustom  bind:this={wastedTimeComponent}/>

<style>
    .sign-up {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        position: relative;
    }
    .sign-up-form {
        position: relative;
        padding: 20px;
        border-radius: 20px;
        z-index: 10;
    }
    .bgloginform {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .bgloginform img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .input-avt {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }
    .input-avt img {
        border-radius: 50%;
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
</style>