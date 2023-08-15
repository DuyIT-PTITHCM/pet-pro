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
    let genders = [
        { id: 1, text: "Male" },
        { id: 2, text: "Famale" },
        { id: 3, text: "Orther" },
    ];
    let admit = false;

    const currentDateTime = new Date();
    let user = {
        firstname: "",
        lastname: "",
        username: "",
        phone: "",
        avatar: "",
        birthdate: "",
        gender: 0,
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
        if (user.email == '' || user.email == null || user.email == email || !isvalidemail) {
            showToast("Email is invalid or already in use", 1);
        } else if (username == user.username) {
            showToast("Username already in use");
        } else if (user.password != passwordConfirm) {
            showToast("Password and password confirm is mismatch", 1);
        } else if (user.password.length < 8) {
            showToast(
                "Password must have at least 8 characters.", 1
            );
        } else if (!isValidPassword) {
            showToast(
                "Password must have including an uppercase letter, a lowercase letter, a digit, and a special character.", 1
            );
        }
        else {
            showToast(
                `Sign Up is sucessfull, wellcome ${
                    user.firstname + " " + user.lastname
                }`, 0
            );
        }
    }

    let messageFirstname = "",
        messageLastname = "",
        messageEmail = "",
        messagePassword = "",
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

    function hideToast(toast) {
        toast.visible = false;
        setTimeout(() => {
            toasts = toasts.filter((t) => t !== toast);
        }, 300);
    }
</script>

<div class="sign-up">
    <form class="2xl:w-2/4 xl:w-2/4 md:w-4/5 sm:w-9/12">
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
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <Label for="first_name" class="mb-2"
                    >First name<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="first_name"
                    placeholder="John"
                    bind:value={user.firstname}
                    on:blur={() =>
                        (messageFirstname = "Please enter your Firstname")}
                />
                <Helper color="red"
                    >{#if messageFirstname && user.firstname === ""}{messageFirstname}{/if}</Helper
                >
            </div>
            <div>
                <Label for="last_name" class="mb-2"
                    >Last name<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="last_name"
                    placeholder="Doe"
                    bind:value={user.lastname}
                    on:blur={() =>
                        (messageLastname = "Please enter your Lastname")}
                />
                <Helper color="red"
                    >{#if messageLastname && user.lastname === ""}{messageLastname}{/if}</Helper
                >
            </div>
            <div>
                <Label for="username" class="mb-2"
                    >Username<span class="text-red-600">*</span></Label
                >
                <Input
                    type="text"
                    id="username"
                    placeholder="Flowbite"
                    bind:value={user.username}
                    on:blur={() =>
                        (messageUsername = "Please enter your Username")}
                />
                <Helper color="red"
                    >{#if messageUsername && user.username === ""}{messageUsername}{/if}</Helper
                >
            </div>
            <div>
                <Label for="phone" class="mb-2">Phone number</Label>
                <Input
                    type="tel"
                    id="phone"
                    placeholder="1234-567-890"
                    bind:value={user.phone}
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
                    bind:value={user.email}
                    on:blur={() => (messageEmail = "Please enter your Email")}
                />
                <Helper color="red"
                    >{#if messageEmail && user.email === ""}{messageEmail}{/if}</Helper
                >
            </div>

            <div class="grid grid-cols-2 gap-6">
                <div>
                    <Label for="birthdate" class="mb-2">Birth Date</Label>
                    <Input
                        type="date"
                        id="birthdate"
                        placeholder=""
                        bind:value={user.birthdate}
                        required
                    />
                </div>
                <div>
                    <Label for="gender" class="mb-2">Gender</Label>
                    <select class="w-full rounded-lg" bind:value={user.gender}>
                        <option value="" selected hidden>Select Gender</option>
                        {#each genders as gender}
                            <option value={gender.id}>
                                {gender.text}
                            </option>
                        {/each}
                    </select>
                </div>
            </div>
            <div>
                <Label for="password" class="mb-2"
                    >Password<span class="text-red-600">*</span></Label
                >
                <Input
                    type="password"
                    id="password"
                    placeholder="•••••••••"
                    required
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
                    >Confirm password</Label
                >
                <Input
                    type="password"
                    id="confirm_password"
                    placeholder="•••••••••"
                    bind:value={passwordConfirm}
                    required
                />
            </div>
        </div>
        <Checkbox class="mb-6 space-x-1" bind:checked={admit} required>
            I agree with the <A
                href="/"
                class="text-primary-700 dark:text-primary-600 hover:underline"
                >terms and conditions</A
            >.
        </Checkbox>
        <div class="btn-signup grid grid-cols-3">
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
            <div class="toast {toast.type === 0 ? 'success' : 'error'}">
                <p class="flex items-center"><Icon class="text-3xl" icon="{toast.type === 0 ? 'fluent-emoji:cat-face' : 'fluent-emoji-flat:crying-cat'}" /> 
                    {toast.message}
                </p>
                <button on:click={() => hideToast(toast)}
                    ><Icon icon="foundation:x" /></button
                >
            </div>
        {/if}
    {/each}
</div>

<style>
    .sign-up {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 90vh;
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
</style>
