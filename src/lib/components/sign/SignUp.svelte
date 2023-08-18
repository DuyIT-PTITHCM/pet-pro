<script>
    import {
        Input,
        Label,
        Checkbox,
        A,
        Fileupload,
        GradientButton,
        Helper,
    } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import ToastCustom from "../common/ToastCustom.svelte";
    let genders = [
        { id: 1, text: "Male" },
        { id: 2, text: "Famale" },
        { id: 3, text: "Orther" },
    ];
    let admit = false;

    const currentDateTime = new Date();
    let user = {
        fullname: "",
        phone: "",
        avatar: "",
        email: "",
        password: "",
        role: 1,
        created: currentDateTime.getDate(),
    };

    let selectedImage;
    function handleFileInputChange(event) {
        const file = event.target.files[0];
        if (file) {
            selectedImage = URL.createObjectURL(file);
        }
    }
    let email = "someone@example.com";
    let username = "tridz";
    let isvalidemail = function isEmailValid() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(user.email);
    };

    let isValidPassword = function isPasswordValid() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(user.password);
    };
    let passwordConfirm = "";
    
    function handleUserDetail() {
        if (user.fullname == '') {
            showToast("Please enter your fullname", 1);
        }
        else if(user.phone == ''){
            showToast("Please enter your phone number", 1);
        }
        else if(user.email == '' || user.email == null){
            showToast("Please enter your email", 1);
        }
        else if (user.email == email || !isvalidemail) {
            showToast("Email is invalid or already in use", 1);
        }
        else if (user.password.length == 0) {
            showToast(
                "Please enter your Password.", 1
            );
        }
        else if (user.password.length < 8) {
            showToast(
                "Password must have at least 8 characters.", 1
            );
        }
        else if (user.password != passwordConfirm) {
            showToast("Password and password confirm is mismatch", 1);
        }
        else if (!isValidPassword) {
            showToast(
                "Password must have including an uppercase letter, a lowercase letter, a digit, and a special character.", 1
            );
        }
        else {
            showToast(
                `Sign Up is sucessfull, wellcome ${
                    user.fullname
                }`, 0
            );
        }
    }

    let messageEmail = "",
        messagePassword = "",
        messagePhone = "",
        messageConfirmPass = "",
        messageUsername = "";
    // Toast
    let toasts = [];
    let toastId = 0;

    function showToast(message, type) {
        const toast = { id: toastId++, message, type, visible: true };
        toasts = [...toasts, toast];
        setTimeout(() => {
            hideToast(toast);
        }, 5000);
    }
</script>

<div class="sign-up">
    <div class="back 2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12">
        <div class="bg-sign">
            <div class="bg-sign_animate">

            </div>
        </div>
    </div>
    <form class="sign-up-form 2xl:w-1/4 xl:w-1/4 md:w-2/4 w-11/12">
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
                    >Fullname<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="username"
                    placeholder="Flowbite"
                    bind:value={user.fullname}
                    on:blur={() =>
                        (messageUsername = "Please enter your Fullname")}
                />
                <Helper color="red"
                    >{#if messageUsername && user.fullname === ""}{messageUsername}{/if}</Helper
                >
            </div>
            <div>
                <Label for="phone" class="mb-2">Phone number<span class="text-red-600">*</span></Label>
                <Input
                    type="tel"
                    id="phone"
                    placeholder="1234-567-890"
                    bind:value={user.phone}
                    on:blur={() => (messagePhone = "Please enter your Phone number")}
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
                    bind:value={passwordConfirm}
                    on:blur={() => (messageConfirmPass = "Please enter your Confirm Password")}
                />
                <Helper color="red"
                    >{#if messageConfirmPass && passwordConfirm === ""}{messageConfirmPass}{/if}</Helper
                >
            </div>
            <Checkbox class="mb-6 space-x-1" bind:checked={admit} required>
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
</div>
<div class="toast-container">
    {#each toasts as toast (toast.id)}
        {#if toast.visible}
            <ToastCustom {toasts}/>
        {/if}
    {/each}
</div>

<style>
    .sign-up {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
    .sign-up-form{
        position: relative;
        z-index: 10;
    }
    .back{
        height: 100%;
        border-radius: 10px;
        position: absolute;
        z-index: 1;
    }
    .bg-sign{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bg-sign_animate{
        position: absolute;
        width: 300px;
        height: 300px;
        filter: blur(1px);
        background: #a8ff78;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #78ffd785, #59ff00);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #01ffb3, #59ff00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-image: url(https://w.ladicdn.com/s700x850/5fffa60b5f0dcb001234da20/img_2801-20210118045850.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        animation: moving 10s linear infinite;
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
    .toast-container {
        z-index: 1000;
        position: fixed;
        top: 100px;
        right: 1rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
    }

    .toast {
        color: white;
        padding: 1rem;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
        animation: slide-in 0.5s linear forwards;
    }
    .success {
        background: #a8ff78;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .error {
        background: #ee0979; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ee0979, #ff6a00); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ee0979, #ff6a00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    @keyframes slide-in {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }
    @keyframes moving {
        0% {
            box-shadow: 0 0 10px #01ffb3;
            rotate: 0deg;
        }
        100% {
            box-shadow: 0 0 10px #ff0101;
            rotate: 360deg;
        }
    }
</style>