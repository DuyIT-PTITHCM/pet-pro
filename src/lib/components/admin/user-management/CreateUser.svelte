<script>
  import {
    CloseButton,
    Drawer,
    Button,
    Label,
    Fileupload,
    Input,
    Helper,
  } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { sineIn } from "svelte/easing";
  import { BASE_API } from "$lib/Const";
  import { createAxiosClient } from "$lib/Utils/axiosServer";
  import Icon from "@iconify/svelte";
  import ToastCustom from "../../common/ToastCustom.svelte";
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
    password: "",
    confirmPassword: "",
  };
  let messageEmail = "",
    messagePassword = "",
    messagePhone = "",
    messageConfirmPass = "",
    messageUsername = "";
  let selectedImage = "";
  function handleFileInputChange(event) {
    const file = event.target.files[0];
    if (file) {
      selectedImage = URL.createObjectURL(file);
    }
  }
  let wastedTimeComponent;
    async function handleUserDetail() {
        const axiosClient = createAxiosClient();
        axiosClient
            .post(`${BASE_API}/auth/register`, user)
            .then(function (response) {
              onMount(wastedTimeComponent.showToast("Create user successfull", 0));
            })
            .catch(function (error) {
                const errors = error?.response?.data?.data?.errors;
                errors.forEach(element => {
                    onMount(wastedTimeComponent.showToast(element.path + " " + element.msg, 1));
                });
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
    <form
      class="w-full p-[20px] rounded-lg z-10"
    >
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
            >{#if messagePassword && user.password === ""}{messagePassword}{/if}</Helper
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
        <Button type="submit" on:click={handleUserDetail}>Submit</Button>
      </div>
    </form>
  </div>
</Drawer>
<ToastCustom bind:this={wastedTimeComponent} />
