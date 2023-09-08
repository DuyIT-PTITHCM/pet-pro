<script lang="ts">
  import { loadingState } from "./../../store/loading";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    GradientButton,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
    Modal,
    DarkMode,
    Button,
    Indicator,
  } from "flowbite-svelte";
  import LanguageSelect from "../LanguageSelect.svelte";
  import { loadTranslations, t } from "$lib/translations";
  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { BASE_API } from "$lib/Const";
  import { goto } from "$app/navigation";
  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";

  let menu: any[] = [
    {
      name: "Trang Chủ",
      url: "",
      active: true
    },
  ];

  loadingState.set(true);
  axios.get(`${BASE_API}/front/menu`).then((res) => {
    menu = menu.concat(res.data.data);
    loadingState.set(false);
  });
  let user = {
    id: "aabbcc",
    username: "Rosé BlackPink",
    email: "cheayoung@example.com",
    avatar:
      "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg",
  };
  let popupModal = false;
  let isSignIn = true;
  let heightHeader = 0;
</script>

<div class="w-full relative h-auto" bind:clientHeight={heightHeader}>
  <div class="w-full fixed top-0 z-50">
    <Navbar let:hidden let:toggle>
      <NavBrand href="/">
        <img
          src="/images/logo.png"
          class="mr-3 h-7 sm:h-9 shadow rounded-full bg-gray-50 dark:bg-transparent"
          alt="PetOne Logo"
        />
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >PetOne</span
        >
      </NavBrand>
      <div class="flex items-center md:order-2">
        <div class="relative p-4">
          <Icon icon="mdi:cart" class="scale-150" />
          <span class="absolute top-0 right-0 rounded-xl h-[23px] w-[23px] bg-primary-600 text-white flex justify-center items-center p-2">10</span>
        </div>
        <DarkMode {btnClass} />
        <Avatar
          id="avatar-menu"
          src={isSignIn ? user.avatar : "/images/avt.png"}
        />
        <NavHamburger
          on:click={toggle}
          class1="w-full md:flex md:w-auto md:order-1"
        />
      </div>
      <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        {#if isSignIn}
          <DropdownHeader>
            <span class="block text-sm">{user.username}</span>
            <span class="block truncate text-sm font-medium">{user.email}</span>
          </DropdownHeader>
          <DropdownItem href="/profile?userid={user.id}">Profile</DropdownItem>
          <DropdownDivider />
          <DropdownItem on:click={() => (popupModal = true)}
            >Sign out</DropdownItem
          >
        {:else}
          <DropdownItem href="/login">Sign In</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/signup">Sign Up</DropdownItem>
        {/if}
      </Dropdown>
      <NavUl divClass="w-full md:block md:w-auto" ulClass="flex flex-col md:flex-row md:mt-0 md:text-sm md:font-medium">
        {#each menu as item}
          <NavLi nonActiveClass="">
            <div class="parent-menu relative w-full">
              <button class="cursor-pointer w-full h-full p-4 { item.active == false?  'dark:text-white text-primary-600' : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}" 
              on:click={() => {
                item.active = false;
                menu.filter((i) => i !== item).forEach((i) => (i.active = true));
                const baseUrl = window.location.origin;
                goto(`${baseUrl}/` + item.url);
              }}
              >
                {$t(item.name)}
              </button>
              {#if item?.subMenus && item?.subMenus?.length > 0}
                <div class="child-menu absolute left-0 top-full border-2 w-full border-gray-600 dark:border-white h-0 hidden overflow-hidden bg-white dark:bg-slate-900 rounded-lg">
                  {#each item?.subMenus as sub}
                    <button class="block w-full p-4 hover:bg-slate-600 duration-300 hover:text-white"
                      on:click={() => {
                        item.active = false;
                        menu.filter((i) => i !== item).forEach((i) => (i.active = true));
                        const baseUrl = window.location.origin;
                        goto(`${baseUrl}/` + sub.url);
                      }}>
                      {sub.name}
                    </button>
                  {/each}
                </div>
              {/if}
            </div>
          </NavLi>
        {/each}
        <LanguageSelect />
      </NavUl>
    </Navbar>
  </div>
</div>
<div class="w-full relative h-auto opacity-0">
  <div class="w-full">
    <Navbar let:hidden let:toggle>
      <NavBrand href="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg"
          class="mr-3 h-6 sm:h-9 rounded-full"
          alt="PetOne Logo"
        />
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >PetOne</span
        >
      </NavBrand>
   
        <Avatar
          id="avatar-menu"
          src={true ? "/images/avt.png" : "/images/avt.png"}
        />
        <NavHamburger
          on:click={toggle}
          class1="w-full md:flex md:w-auto md:order-1"
        />
      <NavUl {hidden}>
        {#each menu as item}
          <NavLi>hi</NavLi>
        {/each}
      </NavUl>
    </Navbar>
  </div>
</div>
<!-- <div class="w-full" style="min-width:{heightHeader}px;"></div> -->
<Modal bind:open={popupModal} size="xs" autoclose class="z-50">
  <div class="text-center">
    <Icon
      icon="line-md:alert"
      class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
    />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
      Are you sure you want to Sign Out?
    </h3>
    <GradientButton color="red" class="mr-2" on:click={() => (isSignIn = false)}
      >Yes, I'm sure</GradientButton
    >
    <GradientButton color="teal">No, cancel</GradientButton>
  </div>
</Modal>
<style>
  .parent-menu:hover .child-menu{
    display: block;
    height: auto;
    animation: movedown linear .4s;
  }
  @keyframes movedown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100%{
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>