<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    GradientButton,
    Modal,
    DarkMode,
    Popover,
  } from "flowbite-svelte";
  import LanguageSelect from "../LanguageSelect.svelte";
  import { loadTranslations, t } from "$lib/translations";
  import { slide } from 'svelte/transition';
  import Icon from "@iconify/svelte";
    import { page } from "$app/stores";

  export let menuProp: any[] = [];

  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2";

  let menu: any[] = [];

  menu = menu.concat(menuProp);
  let popupModal = false;
  let isSignIn = true;
  let heightHeader = 0;
  let toggle =false;
  let numSubmenu = 0;

  function showMobileSubmenu(id: number){
    numSubmenu == id ? numSubmenu = 0 : numSubmenu = id;
    return numSubmenu;
  }
</script>

<div class="w-full relative">
  <div class="w-full" style="height: {heightHeader}px;"></div>

  <div class="w-full fixed top-0 z-50" bind:clientHeight={heightHeader}>
    <Navbar let:hidden let:toggle={toggle} class="shadow-md">
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
        <a href="/login" title="Login" class="hidden md:block">
          <Icon icon="fluent-mdl2:signin" color="black" width="30" height="30" />
        </a>
        <button class="relative p-4">
          <Icon icon="mdi:cart" class="scale-150" />
          <span class="absolute top-0 right-0 rounded-xl h-[23px] w-[23px] bg-primary-600 text-white flex justify-center items-center p-2">10</span>
        </button>
        <DarkMode {btnClass} />
        <NavHamburger
          on:click={toggle}
          class1="w-full md:flex md:w-auto md:order-1"
        />
      </div>
      <NavUl {hidden} divClass="w-full md:block md:w-auto" ulClass="flex flex-col md:flex-row md:mt-0 md:text-sm md:font-medium bg-transparent">
        {#each menu as item, index}
          <NavLi nonActiveClass="">
            <div class="parent-menu relative w-full border-b-2 md:border-none">
              <div id="menu{item.id}" class="flex items-center relative">
                <button class="cursor-pointer w-full px-5 py-3 z-10 flex-1 text-left { $page.params.url == item.url?  'dark:text-white text-primary-600' : ''}" 
                  on:click={() => {
                    const baseUrl = window.location.origin;
                    window.location.href=(`${baseUrl}/` + item.url);
                  }}
                  >
                  {$t(item.name)}
                </button>
                <div class="md:hidden"></div>
                {#if item?.subMenus && item?.subMenus?.length > 0}
                  <button class="text-xl p-3 md:hidden" on:click={() => showMobileSubmenu(item.id)}>
                    <Icon icon="mingcute:down-fill" class="float-right" />
                  </button>
                {/if}
              </div>
              {#if item?.subMenus && item?.subMenus?.length > 0}
                <Popover class="text-sm font-normal w-64 hidden md:block text-black" transition={slide} triggeredBy="#menu{item.id}">
                  {#each item.subMenus as sub}
                    <button class="block w-full p-4 { $page.params.url == sub.url ?  'dark:text-white text-primary-600 font-bold' : 'hover:text-primary-700 dark:text-slate-400 dark:hover:text-white'}"
                      on:click={() => {
                        const baseUrl = window.location.origin;
                        window.location.href=(`${baseUrl}/` + sub.url);
                      }}>
                      {sub.name}
                    </button>
                  {/each}
                </Popover>
                <div class="text-sm w-full font-normal md:hidden">
                  {#each item.subMenus as sub}
                    <button class="block w-full {numSubmenu == item.id ? 'h-14' : 'h-0 overflow-hidden'}  transition-all { $page.params.url == sub.url ?  'dark:text-white text-primary-600 font-bold' : 'hover:text-primary-700 dark:text-slate-400 dark:hover:text-white'}"
                      on:click={() => {
                        const baseUrl = window.location.origin;
                        window.location.href=(`${baseUrl}/` + sub.url);
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