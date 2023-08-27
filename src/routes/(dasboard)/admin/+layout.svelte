<script>
  import "../../../app.css";
  import Icon from '@iconify/svelte';
  import { GradientButton, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Modal, DarkMode, Drawer, Checkbox, Label, CloseButton, Hr } from "flowbite-svelte";
  import { sineIn } from 'svelte/easing';
  import { title, description } from "$lib/store/meta";
  import ToastError from "$lib/components/common/ToastError.svelte";
    import Loading from "$lib/components/common/Loading.svelte";
  
  // show setting dashboard
  let hidden6 = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
// set background color
let colors = [
		"#fff989",
		"#89d9ff"
	]
	let deg = 45
	
	// 	Convert deg number to string for CSS
	$: degString = `${deg}deg`
// end

  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 mx-2';
  const menu = [
    {
      name: "home",
      url: "/admin",
      icon: "heroicons:chart-pie-solid",
      active: false,
    },
    {
      name: "user managerment",
      url: "/admin/user-management",
      icon: "teenyicons:user-solid",
      active: false,
    },
    {
      name: "blog",
      url: "#",
      icon: "icon-park-solid:hi",
      active: false,
    },
  ];
  var isHide = true;
  var isFixedHeader = false;
  // 
  let user = { id:'aabbcc', username: 'Rosé BlackPink', email:'cheayoung@example.com', avatar:'https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg' }
  let popupModal = false;
  let sidebarWidth = 0;
</script>
<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>
<div class="admin-header {isFixedHeader ? 'fixheader' : ''} bg-slate-100 dark:bg-slate-900">
  <div class="admin-header-box admin-header__left">
    <div class="logo-dashboard flex px-4">
      <img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="PetOne Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PetOne</span>
    </div>
    <div class="hide-sidebar cursor-pointer {btnClass}">
      <input type="checkbox" class="hidden" name="hidesidebar" id="hidesidebar" bind:checked={isHide}>
      <label for="hidesidebar"><Icon icon="fluent:list-bar-16-filled" class="text-2xl" /></label>
    </div>
    <DarkMode {btnClass} />
  </div>
  <div class="admin-header-box admin-header__right">
    <div>
      <Avatar id="avatar-menu" src={user.avatar} class="mr-4 cursor-pointer"/>
      <Dropdown placement="bottom" triggeredBy="#avatar-menu">
          <DropdownHeader>
            <span class="block text-sm">{user.username}</span>
            <span class="block truncate text-sm font-medium">{user.email}</span>
          </DropdownHeader>
          <DropdownItem href="/profile?userid={user.id}">Profile</DropdownItem>
          <DropdownDivider />
          <DropdownItem on:click={() => (popupModal = true)}>Sign out</DropdownItem>
      </Dropdown>
      <Modal bind:open={popupModal} size="xs" autoclose>
        <div class="text-center">
          <Icon icon="line-md:alert" class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to Sign Out?</h3>
          <GradientButton color="red" class="mr-2">Yes, I'm sure</GradientButton>
          <GradientButton color="teal">No, cancel</GradientButton>
        </div>
      </Modal>
    </div>

    <div>
      <button class="p-2 m-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" on:click={() => (hidden6 = false)}><Icon icon="ant-design:setting-filled" class="text-2xl"/></button>
      <Drawer placement="right" transitionType="fly" transitionParams={transitionParamsRight} bind:hidden={hidden6} id="sidebar6">
        <div class="flex items-center">
          <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <Icon icon="ant-design:setting-filled" class="w-4 h-4 mr-2.5" />Setting
          </h5>
          <CloseButton on:click={() => (hidden6 = true)} class="mb-4 dark:text-white" />
        </div>
        <div class="admin-setting">
          <div class="setting-fixed_header mb-4">
            <Label class="mt-4 flex items-center font-bold dark:text-white">
              <Checkbox class="mr-2" checked={isFixedHeader} on:change={() => (isFixedHeader = !isFixedHeader)}/> Fixed your header
            </Label>
          </div>
          <Hr classHr="my-8 w-64 h-1" icon>
            <Icon icon="icon-park-outline:setting-one" class="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </Hr>
          <div class="setting-background font-bold dark:text-white">
            <p>Change your background</p>
            <div style="
                --deg: {degString};
                --gradient-1:{colors[0]};
                --gradient-2:{colors[1]};"
                class="admin-setbg my-2">
            </div>
            <label for="degrees">Degrees: {deg}</label>
            <input name="degrees" type="range" min="0" max="360" bind:value={deg}/>

            <div class="flex justify-around">
              <label for="color-1">Color 1</label>
              <input name="color-1" type="color" bind:value={colors[0]}/>

              <label for="color-2">Color 2</label>
              <input name="color-2" type="color" bind:value={colors[1]}/>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  </div>
</div>
  {#if isFixedHeader}
    <div class="after-header"></div>
  {/if}
  <!-- side bar -->
<div class="admin-content flex">
  <div class="admin-sidebar bg-slate-100 dark:bg-slate-900 dark:text-slate-300" bind:clientWidth={sidebarWidth}>
    <ul class="admin-sidebar__listitem  {isFixedHeader == true ? 'sidebar__listitem-sticky-fixed' : 'sidebar__listitem-sticky'}">
      {#if isHide}
        {#each menu as item}
        <li class="2xl:block xl:block lg:block md:block sm:block hidden">
          <a
          class="admin-sidebar__item {item.active == true ? 'active' : ''}"
            href={item.url}
            on:click={() => {
              item.active = true;
              menu.filter((i) => i !== item).forEach((i) => (i.active = false));
            }}><Icon class="text-3xl" icon={item.icon} /></a>
        </li>
        {/each}
      {:else}
        {#each menu as item}
        <li>
          <a
          class="admin-sidebar__item min-w-max {item.active == true ? 'active' : ''}"
            href={item.url}
            on:click={() => {
              item.active = true;
              menu.filter((i) => i !== item).forEach((i) => (i.active = false));
            }}><Icon class="text-3xl  mr-2" icon={item.icon} />{item.name}</a>
        </li>
        {/each}
      {/if}
      
    </ul>
  </div>
  <div class="admin-content-box flex-auto" style="--deg: {degString}; --gradient-1:{colors[0]}; --gradient-2:{colors[1]};">
    <div class="m-4">
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
.admin-sidebar{
  max-width: 300px;
  min-height: 100vh;
  border-right: 1px solid rgb(190, 190, 190);
  position: relative;
  top: 0;
}
.admin-sidebar__listitem{
  list-style: none;
}
.sidebar__listitem-sticky{
  position: sticky;
  top: 0;
}
.sidebar__listitem-sticky-fixed{
  position: sticky;
  top: 60px;
}
.admin-sidebar__item{
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 10px 20px;
  font-weight: 600;
}
.admin-sidebar__item:hover{
  background-color: gray;
  color: white;
  border-radius: 10px;
  transform: scale(.9);
  box-shadow: 0 4px 4px rgb(0, 0, 0);
  transition: .4s ease;
}
.admin-content-box{
  width: 100%;
  background: linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2))
}
/* Fixed header */
.fixheader{
  position: fixed;
  top: 0;
}
.after-header{
  height: 60px;
  width: 100%;
  background-color: transparent;
}
.active{
  box-shadow: 2px 0px 1px rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
}

/* set bg */
.admin-setbg{
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2))
}
/* end */
</style>
