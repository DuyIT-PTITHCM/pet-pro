<script>
  import "../../../app.css";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
  import {
    GradientButton,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
    Modal,
    DarkMode,
    Drawer,
    Checkbox,
    Label,
    CloseButton,
    Hr,
  } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  import { title, description } from "$lib/store/meta";
  import ToastError from "$lib/components/common/ToastError.svelte";
  import Loading from "$lib/components/common/Loading.svelte";
  import { me } from "$lib/store/userManagement";
  import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
  import { goto } from "$app/navigation";
  import LanguageSelect from "$lib/components/LanguageSelect.svelte";

  let hidden6 = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn,
  };
  let colors = ["#0f0f0f;", "#0f0f0f;"];
  let deg = 45;

  $: degString = `${deg}deg`;

  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";
  const menu = [
    {
      name: "home",
      url: "/admin",
      icon: "heroicons:chart-pie-solid",
      active: false,
    },
    {
      name: "user",
      url: "/admin/user-management",
      icon: "teenyicons:user-solid",
      active: false,
    },
    {
      name: "menu",
      url: "/admin/menu-management",
      icon: "ep:menu",
      active: false,
    },
    {
      name: "blog",
      url: "/admin/blog",
      icon: "fa-brands:blogger",
      active: false,
    },
    {
      name: "service",
      url: "/admin/service",
      icon: "ri:service-fill",
      active: false,
    },
    {
      name: "product",
      url: "/admin/products",
      icon: "solar:cat-bold",
      active: false,
    },
    {
      name: "order",
      url: "/admin/orders",
      icon: "iconamoon:delivery-free-fill",
      active: false,
    },
  ];
  var isHide = true;
  var isFixedHeader = false;
  //
  const userService = RepositoryFactory.get("userRepository");

  let popupModal = false;
  let sidebarWidth = 0;

  async function init() {
    try {
      const userData = await userService.info();
      me.set(userData?.data.data);
    } 
    catch {
      goto("/login")
    }
  }

  init();
</script>

<svelte:head>
  <title>{$title}</title>
  <meta name="description" content={$description} />
</svelte:head>
<div
  class="admin-header {isFixedHeader
    ? 'fixheader'
    : ''} bg-slate-100 dark:bg-slate-900"
>
  <div class="admin-header-box admin-header__left">
    <div class="logo-dashboard flex px-4">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg"
        class="mr-3 h-6 sm:h-9 rounded-full"
        alt="PetOne Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >PetOne</span
      >
    </div>
    <div class="hide-sidebar cursor-pointer {btnClass}">
      <input
        type="checkbox"
        class="hidden"
        name="hidesidebar"
        id="hidesidebar"
        bind:checked={isHide}
      />
      <label for="hidesidebar"
        ><Icon icon="fluent:list-bar-16-filled" class="text-2xl" /></label
      >
    </div>
    <DarkMode {btnClass} />
  </div>
  <div class="admin-header-box admin-header__right">
    <div class="flex items-center mr-3">
      <LanguageSelect />
    </div>
    <div>
      <Avatar id="avatar-menu" src={$me?.avatar} class="mr-4 cursor-pointer" />
      <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
          <span class="block text-sm">{$me?.name}</span>
          <span class="block truncate text-sm font-medium">{$me?.email}</span>
        </DropdownHeader>
        <DropdownItem href="/profile?userid={$me?.id}">Profile</DropdownItem>
        <DropdownDivider />
        <DropdownItem on:click={() => (popupModal = true)}
          >Sign out</DropdownItem
        >
      </Dropdown>
      <Modal bind:open={popupModal} size="xs" autoclose>
        <div class="text-center">
          <Icon
            icon="line-md:alert"
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
          />
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to Sign Out?
          </h3>
          <GradientButton color="red" class="mr-2">Yes, I'm sure</GradientButton
          >
          <GradientButton color="teal">No, cancel</GradientButton>
        </div>
      </Modal>
    </div>

    <div>
      <button
        class="p-2 m-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        on:click={() => (hidden6 = false)}
        ><Icon icon="ant-design:setting-filled" class="text-2xl" /></button
      >
      <Drawer
        placement="right"
        transitionType="fly"
        transitionParams={transitionParamsRight}
        bind:hidden={hidden6}
        id="sidebar6"
      >
        <div class="flex items-center">
          <h5
            id="drawer-label"
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <Icon
              icon="ant-design:setting-filled"
              class="w-4 h-4 mr-2.5"
            />Setting
          </h5>
          <CloseButton
            on:click={() => (hidden6 = true)}
            class="mb-4 dark:text-white"
          />
        </div>
        <div class="admin-setting">
          <div class="setting-fixed_header mb-4">
            <Label class="mt-4 flex items-center font-bold dark:text-white">
              <Checkbox
                class="mr-2"
                checked={isFixedHeader}
                on:change={() => (isFixedHeader = !isFixedHeader)}
              /> Fixed your header
            </Label>
          </div>
          <Hr classHr="my-8 w-64 h-1" icon>
            <Icon
              icon="icon-park-outline:setting-one"
              class="w-4 h-4 text-gray-700 dark:text-gray-300"
            />
          </Hr>
          <div class="setting-background font-bold dark:text-white">
            <p>Change your background</p>
            <div
              style="
                --deg: {degString};
                --gradient-1:{colors[0]};
                --gradient-2:{colors[1]};"
              class="admin-setbg my-2"
            />
            <label for="degrees">Degrees: {deg}</label>
            <input
              name="degrees"
              type="range"
              min="0"
              max="360"
              bind:value={deg}
            />

            <div class="flex justify-around">
              <label for="color-1">Color 1</label>
              <input name="color-1" type="color" bind:value={colors[0]} />

              <label for="color-2">Color 2</label>
              <input name="color-2" type="color" bind:value={colors[1]} />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  </div>
</div>
{#if isFixedHeader}
  <div class="after-header" />
{/if}
<!-- side bar -->
<div class="admin-content flex">
  <div
    class="admin-sidebar bg-slate-100 dark:bg-slate-900 dark:text-slate-300"
    bind:clientWidth={sidebarWidth}
  >
    <ul
      class="admin-sidebar__listitem {isFixedHeader == true
        ? 'sidebar__listitem-sticky-fixed'
        : 'sidebar__listitem-sticky'}"
    >
      {#if isHide}
        {#each menu as item}
          <li class="2xl:block xl:block lg:block md:block sm:block hidden">
            <a
              class="admin-sidebar__item {(($page.url.href.includes(item.url) && (item.url != '/admin')) || $page.url.pathname == item.url) ? "active-admin" : ""}"
              href=""
              on:click={(event) => {
                event.preventDefault();
                goto(item.url);
              }}
              ><Icon
                class="text-3xl"
                icon={item.icon}
              /></a
            >
          </li>
        {/each}
      {:else}
        {#each menu as item}
          <li>
            <a
              class="admin-sidebar__item min-w-max {(($page.url.href.includes(item.url) && (item.url != '/admin')) || $page.url.pathname == item.url) ? "active-admin" : ""}"
              href=""
              on:click={(event) => {
                event.preventDefault();
                goto(item.url);
              }}
              ><Icon
                class="text-3xl  mr-2"
                icon={item.icon}
              />{item.name}</a
            >
          </li>
        {/each}
      {/if}
    </ul>
  </div>
  <div
    class="bg-gray-200 bg-opacity-75 dark:bg-[#0d0e1e] grow overflow-hidden"
    style="--deg: {degString}; --gradient-1:{colors[0]}; --gradient-2:{colors[1]};"
  >
    <div class="2xl:m-4 xl:m-4 lg:m-4 md:m-4 sm:m-2">
      <slot />
    </div>
  </div>
</div>
<ToastError />
<Loading />

<style>
  .admin-header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(190, 190, 190);
    z-index: 1000;
  }
  .admin-header-box {
    height: 100%;
    display: flex;
    align-items: center;
  }
  /* sidebar */
  .admin-sidebar {
    max-width: 300px;
    min-height: 100vh;
    border-right: 1px solid rgb(190, 190, 190);
    position: relative;
    top: 0;
  }
  .admin-sidebar__listitem {
    list-style: none;
  }
  .sidebar__listitem-sticky {
    position: sticky;
    top: 0;
  }
  .sidebar__listitem-sticky-fixed {
    position: sticky;
    top: 60px;
  }
  .admin-sidebar__item {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    padding: 10px 20px;
    font-weight: 600;
  }
  .admin-sidebar__item:hover {
    background-color: gray;
    color: white;
    border-radius: 10px;
    transform: scale(0.9);
    box-shadow: 0 4px 4px rgb(0, 0, 0);
    transition: 0.4s ease;
  }
  .admin-content-box {
    background: rgb(219 220 222 / 75%);
  }
  /* Fixed header */
  .fixheader {
    position: fixed;
    top: 0;
  }
  .after-header {
    height: 60px;
    width: 100%;
    background-color: transparent;
  }

  /* set bg */
  .admin-setbg {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background: linear-gradient(
      var(--deg),
      var(--gradient-1),
      var(--gradient-2)
    );
  }
  .active-admin{
    background-color: gray;
    color: white;
    border-radius: 10px;
    transform: scale(0.9);
    box-shadow: 0 4px 4px rgb(0, 0, 0);
    transition: 0.4s ease;
  }
  /* end */
</style>
