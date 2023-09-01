<script>
    import { loadingState } from "../../../store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Input } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import { toastErr } from "$lib/store/toastError";
    import MenuItem from "./MenuItem.svelte";
    import { isUserEdited } from "$lib/store/userManagement";
    import { onMount } from "svelte";

    const menuService = RepositoryFactory.get("menuRepository");
    let parentAdd = false;
    let isAction = false;
    let menus = [
        {
            id: 0,
            name: '',
            url: null,
            parent_id: null,
            subMenus: [
                {
                    id: 0,
                    name: '',
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
    onMount(() => {
        const unSubscribe = isUserEdited.subscribe((edited) => {
            edited && getMenus();
            isUserEdited.set(false);
        });

        return unSubscribe;
    });
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
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">
            Menu management
        </h1>
    </div>
</div>
<div>
    <div class="bg-neutral-50 dark:bg-slate-900 rounded-lg p-6">
    {#if !menus && !$loadingState}
        <h1>nodata</h1>
    {:else if !$loadingState}
        <div class="flex">
            <button on:click={()=> isAction = !isAction} class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg mr-2">
                <Icon icon="ic:outline-electric-bolt" class="{isAction == true ? 'text-yellow-300' : ''} text-[28px]" />
            </button>
            <button on:click={()=> parentAdd = !parentAdd} class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg">
                <Icon icon="mingcute:add-fill" class="{parentAdd == true ? 'rotate-45' : ''} text-[28px]" />
            </button>
            <div class="{parentAdd ? '' : 'hidden'}">
                <form class="flex items-center"><hr class="w-4 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" placeholder="Input name..." required bind:value={newMenu.name}/>
                    <hr class="w-4 h-[4px] bg-cyan-700">
                    <Input defaultClass="max-w-[300px]" placeholder="Input address..." required bind:value={newMenu.url}/>
                    <hr class="w-4 h-[4px] bg-cyan-700">
                    <button on:click={addMenu}>
                        <Icon icon="ep:success-filled" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                    </button>
                </form>
            </div>
        </div>
        {#each menus as menu (menu.id)}
        <MenuItem menu={menu} isAction={isAction}/>
        {/each}
    {/if}
    </div>
</div>
