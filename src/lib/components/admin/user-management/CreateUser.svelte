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
  import { BASE_API } from "$lib/Const";
  import { createAxiosClient } from "$lib/Utils/axiosServer";
  import Icon from "@iconify/svelte";
  import { toastErr } from "$lib/store/toastError";
  import { loadingState } from "$lib/store/loading";
  import { isUserEdited } from "$lib/store/userManagement";
  import axios from "axios";
  let createUserFrom = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn,
  };
  let user = {
    name: "",
    phone: "",
    avatar: "",
    email: "",
    information: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  };
  let genders = [
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "other", name: "Other" },
  ];

  let roles = [
    { value: "customer", name: "Customer" },
    { value: "employer", name: "Employee" },
  ];
  let messageEmail = "",
    messagePassword = "",
    messagePhone = "",
    messageConfirmPass = "",
    messageAddress = "",
    messageUsername = "",
    selectedImage = "",
    validPassword = "";
  let file;
  async function handleFileInputChange(event) {
    file = await event.target.files[0];
    selectedImage = URL.createObjectURL(file);
    const formData = new FormData();
    formData.append("file", file);
    try {
      axios
        .post("http://103.142.26.42/api/v1.0/upload", formData)
        .then((response) => {
          console.log(response.data.data.path);
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
      console.log("pas");
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
    const axiosClient = createAxiosClient();
    loadingState.set(true);
    axiosClient
      .post(`${BASE_API}/auth/register`, user)
      .then(function (response) {
        loadingState.set(false);
        toastErr.set([
          {
            message: "Create user successfull",
            type: "success",
          },
        ]);
        isUserEdited.set(true);
        createUserFrom = true;
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
</script>

<Button on:click={() => (createUserFrom = false)}>Create New User</Button>
<Drawer
  placement="right"
  width={"2xl:w-1/4 xl:w-1/4 lg:w-2/4 sm:w-2/4 w-full"}
  transitionType="fly"
  transitionParams={transitionParamsRight}
  bind:hidden={createUserFrom}
  id="createUserForm"
>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <Icon icon="mdi:create" class="w-4 h-4 mr-2.5" />Create New User
    </h5>
    <CloseButton
      on:click={() => (createUserFrom = true)}
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
            on:blur={() => (messageUsername = "Please enter your name")}
          />
          <Helper color="red"
            >{#if messageUsername && user.name === ""}{messageUsername}{/if}</Helper
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
            on:blur={() => (messagePhone = "Please enter your Phone number")}
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
            on:blur={() => (messageEmail = "Please enter your Email")}
          />
          <Helper color="red"
            >{#if messageEmail && user.email === ""}{messageEmail}{/if}</Helper
          >
        </div>
        <div>
          <Label for="address" class="mb-2 capitalize"
            >address<span class="text-red-600">*</span></Label
          >
          <textarea
            class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 border-slate-300"
            bind:value={user.information}
            on:blur={() => (messageAddress = "Please enter address")}
          />
          <Helper color="red"
            >{#if messageAddress && user.information === ""}{messageAddress}{/if}</Helper
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
          <Label for="birthDate" class="mb-2 capitalize"
            >birthDate<span class="text-red-600">*</span></Label
          >
          <Input
            id="birthDate"
            type="date"
            max={new Date(Date.now()).toISOString().split("T")[0]}
            bind:value={user.birthDate}
          />
        </div>
        <div>
          <Label for="password" class="mb-2 capitalize"
            >Password<span class="text-red-600">*</span></Label
          >
          <Input
            type="password"
            id="password"
            placeholder="•••••••••"
            bind:value={user.password}
            on:blur={() => (messagePassword = "Please enter your Password")}
          />
          <Helper color="red"
            >{#if messagePassword && user.password === ""}{messagePassword}{:else}{validPassword}{/if}</Helper
          >
        </div>

        <div>
          <Label for="confirm_password" class="mb-2 capitalize"
            >Confirm password<span class="text-red-600">*</span></Label
          >
          <Input
            type="password"
            id="confirm_password"
            placeholder="•••••••••"
            bind:value={user.confirmPassword}
            on:blur={() =>
              (messageConfirmPass = "Please enter your Confirm Password")}
          />
          <Helper color="red"
            >{#if messageConfirmPass && user.confirmPassword === ""}{messageConfirmPass}{/if}</Helper
          >
        </div>
      </div>
      <div class="btn-signup grid grid-cols-1">
        <Button type="submit" on:click={handleSubmitRegister}>Submitt</Button>
      </div>
    </form>
  </div>
</Drawer>
