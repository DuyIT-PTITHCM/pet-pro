
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, GradientButton, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Modal, DarkMode } from 'flowbite-svelte';
  import LanguageSelect from "../LanguageSelect.svelte";
  import { loadTranslations, t } from "$lib/translations";
  import Icon from '@iconify/svelte';
  import insignavt from '$lib/assest/images/avt.png'
  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2';

  const menu = [
    {
      name: "home",
      url: "/",
      active: false
    },
    {
      name: "about",
      url: "/about",
      active: false
    },
    {
      name: "blog",
      url: "/blog",
      active: false
    },
  ];
  let user = { id:'aabbcc', username: 'Rosé BlackPink', email:'cheayoung@example.com', avatar:'https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg' }
  let popupModal = false;
  let isSignIn = true;
</script>
<div class="header">

  <div class="navbar">
    <Navbar let:hidden let:toggle>
      <NavBrand href="/">
        <img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PetOne</span>
      </NavBrand>
      <div class="flex items-center md:order-2">
        <GradientButton color="pinkToOrange"><Icon icon="mdi:cart" class="scale-150" /><span class="ml-3">10</span></GradientButton >
        <DarkMode {btnClass} />
        <Avatar id="avatar-menu" src={isSignIn ? user.avatar : insignavt}/>
        <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
      </div>
      <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        {#if isSignIn}
          <DropdownHeader>
            <span class="block text-sm">{user.username}</span>
            <span class="block truncate text-sm font-medium">{user.email}</span>
          </DropdownHeader>
          <DropdownItem href="/profile?userid={user.id}">Profile</DropdownItem>
          <DropdownDivider />
          <DropdownItem on:click={() => (popupModal = true)}>Sign out</DropdownItem>
        {:else}
          <DropdownItem href="/login">Sign In</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/signup">Sign Up</DropdownItem>
        {/if}
      </Dropdown>
      <NavUl {hidden}>
        {#each menu as item}
          <NavLi href={item.url} active={item.active} on:click={() => {
            item.active = true;
            menu.filter(i => i !== item).forEach(i => i.active = false);
          }}>{$t("header." + item.name)}</NavLi>
        {/each}
        <LanguageSelect />
      </NavUl>
    </Navbar>
  </div>
</div>
<div class="out-header"></div>
<Modal bind:open={popupModal} size="xs" autoclose>
  <div class="text-center">
    <Icon icon="line-md:alert" class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to Sign Out?</h3>
    <GradientButton color="red" class="mr-2" on:click={() => isSignIn = false}>Yes, I'm sure</GradientButton>
    <GradientButton color="teal">No, cancel</GradientButton>
  </div>
</Modal>
<style>
  .header{
    position: relative;
    width: 100%;
  }
  .navbar{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }
  .out-header{
    margin-bottom: 70px;
  }
</style>