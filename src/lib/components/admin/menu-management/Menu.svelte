<script>
    import { loadingState } from "../../../store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Button, Modal, Input, Badge } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import { toastErr } from "$lib/store/toastError";
    let popupModal = false;

    const menuService = RepositoryFactory.get("menuRepository");

    let isAddSubMenu = 0;
    let parentAdd = false;
    let isShowMenu = 0;
    let deleteMenuId = 0, deleteMenuName = null;
    let menus = [
        {
            id: null,
            name: null,
            url: null,
            parent_id: null,
            subMenus: [
                {
                    id: null,
                    name: null,
                    url: null
                }
            ]
        }
    ];
    loadingState.set(true);
    async function getMenus() {   
        loadingState.set(true);
        const res = await menuService.get();
        menus = res.data.data;
        loadingState.set(false);
    }
    getMenus()

    let newMenu = {
        id: null,
        name: null,
        url: null,
        parent_id: null
    }
    async function addMenu() {
        try {
            const res = await menuService.post(newMenu);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            newMenu.name = null;
            newMenu.url = null;
            getMenus()
        } catch (error) {
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
    async function editMenu() {
        try {
            const res = await menuService.put(newMenu.id, newMenu);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            getMenus()
            newMenu.name = null;
            newMenu.url = null;
        } catch (error) {
            console.log("hi")
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
    async function deleteMenu(id = 0) {
        try {
            const res = await menuService.delete(id);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            getMenus()
        } catch (error) {
            console.log("hi")
            const errors = error?.response?.data?.errors;
            var toasts = errors?.map(element => {
                return {
                    message : element.msg,
                    type : "error"
                }
            });
            toastErr.set(toasts);
        }
    }
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">
            menu management
        </h1>
    </div>
</div>
<div>
    <div class="bg-slate-600 rounded-lg p-6">
    {#if !menus && !$loadingState}
        <h1>nodata</h1>
    {:else if !$loadingState}
        <div class="flex">
            <button on:click={()=> parentAdd = !parentAdd} class="hover:opacity-80 p-3 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg">
                <Icon icon="mingcute:add-fill" class="{parentAdd == true ? 'rotate-45' : ''} text-[20px]" />
            </button>
            <div class="{parentAdd ? '' : 'hidden'}">
                <form class="flex items-center"><hr class="w-4 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" placeholder="Input name..." required bind:value={newMenu.name}/>
                    <hr class="w-4 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" placeholder="Input address..." required bind:value={newMenu.url}/>
                    <hr class="w-4 h-[4px] bg-cyan-700">
                    <button on:click={addMenu}>
                        <Icon icon="ep:success-filled" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                </form>
            </div>
        </div>
        {#each menus as menu (menu.id)}
        <div class="border-l-4 border-cyan-400 my-1">
            <div class="flex items-center">
                <div class="flex items-center">
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" bind:value={menu.name}/>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" bind:value={menu.url}/>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click={() => {isShowMenu = menu.id; isAddSubMenu = menu.id}}>
                        <Icon icon="{isShowMenu != menu.id ? 'icon-park-solid:down-one' : 'icon-park-solid:up-one'}" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click|preventDefault={() => {isAddSubMenu = menu.id; newMenu.parent_id = menu.id }}>
                        <Icon icon="mingcute:add-fill" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click={() => {newMenu.id = menu.id ; newMenu.name = menu.name ; newMenu.url = menu.url ; newMenu.parent_id = null ; editMenu()}}>
                        <Icon icon="bxs:edit" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click={()=>{deleteMenuId = menu.id; deleteMenuName = menu.name; popupModal = true}}>
                        <Icon icon="fluent:delete-28-filled" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                </div>
            </div>
            <div class="{isShowMenu == menu.id ? '' : 'hidden'} my-2">
                {#each menu.subMenus as subMenu, index}
                <div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" bind:value={subMenu.name}/>
                    <hr class="w-8 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" bind:value={subMenu.url}/>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click={() => { newMenu.id = subMenu.id ; newMenu.name = subMenu.name ; newMenu.url = subMenu.url ; newMenu.parent_id = menu.id ; editMenu()}}>
                        <Icon icon="bxs:edit" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click={()=>{deleteMenuId = subMenu.id; deleteMenuName = subMenu.name; popupModal = true}}>
                        <Icon icon="fluent:delete-28-filled" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                </div>
                {/each}
            </div>
            <div class="{isAddSubMenu == menu.id ? '' : 'hidden'} my-2">
                <form class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" placeholder="Input name..." required bind:value={newMenu.name}/>
                    <hr class="w-8 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" placeholder="Input address..." required bind:value={newMenu.url}/>
                    <hr class="w-2 h-[4px] bg-cyan-700">
                    <button on:click={addMenu}>
                        <Icon icon="ep:success-filled" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                </form>
            </div>
        </div>

        {/each}
    {/if}
    </div>
</div>
<Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
      <Icon icon="fluent:delete-20-filled" class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete <Badge color="dark" class="text-lg">{deleteMenuName}</Badge> menu?</h3>
      <Button color="red" class="mr-2" on:click={()=> {deleteMenu(deleteMenuId)}}>Yes, I'm sure</Button>
      <Button color="alternative">No, cancel</Button>
    </div>
  </Modal>