<script lang="ts">
    import { loadingState } from "../../../store/loading";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { Button, Checkbox, Input, Popover, Radio } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    import { toastErr } from "$lib/store/toastError";
    import MenuItem from "./MenuItem.svelte";
    import { onMount } from "svelte";
    import Category from "./Category.svelte";
    import Editor from "$lib/components/common/Editor.svelte";
    import { isMenuEdited } from "$lib/store/menuManagement";
    import Nodata from "$lib/components/common/Nodata.svelte";
    import { t } from "$lib/translations";

    const menuService = RepositoryFactory.get("menuRepository");
    let parentAdd = false;
    let isAction = true;
    let menuDetail: any;
    let showMenuById = 0;
    let menus: any;
    loadingState.set(true);
    let types = [
        {
            name: 'Product',
            value: 'product'
        },
        {
            name: 'Service',
            value: 'service'
        },
        {
            name: 'Blog',
            value: 'blog'
        }
    ]
    async function getMenus() {   
        loadingState.set(true);
        const res = await menuService.get();
        menus = res.data.data;
        console.log("hihi")
        console.log(menus)
        loadingState.set(false);
        return menus;
    }
    onMount(() => {
        const unSubscribe = isMenuEdited.subscribe((edited) => {
            edited && getMenus();
            isMenuEdited.set(false);
        });

        return unSubscribe;
    });
    getMenus()

    let newMenu = {
        id: null,
        name: null,
        url: null,
        parent_id: null,
        description: "",
        isShowDescription: true,
        active: true,
        type: "product",
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
            newMenu.description= "";
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

<div class="bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">
            {$t("common.menuManagement")}
        </h1>
    </div>
</div>
<div class="grid xl:grid-cols-5 grid-cols-1 w-full h-full bg-neutral-50  dark:bg-slate-900 rounded-lg p-6">
    {#if !menus && !$loadingState}
        <Nodata />
    {:else if !$loadingState}
        <div class="col-span-3 pl-4">
            <div class="flex">
                <button on:click={()=> isAction = !isAction} class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg mr-2">
                    <Icon icon="ic:outline-electric-bolt" class="{isAction == true ? 'text-yellow-300' : ''} text-[28px]" />
                </button>
                <button on:click={()=> parentAdd = !parentAdd} class="hover:opacity-80 p-2 bg-black dark:bg-gray-700 text-white rounded-lg">
                    <Icon icon="mingcute:add-fill" class="{parentAdd == true ? 'rotate-45' : ''} text-[28px]" />
                </button>
                <div class="{parentAdd ? '' : 'hidden'}">
                    <form class="flex items-center"><hr class="w-4 h-[4px] bg-cyan-700">
                        <Input defaultClass="max-w-[300px]" placeholder="Input name..." bind:value={newMenu.name}/>
                        <hr class="w-4 h-[4px] bg-cyan-700">
                        <Input defaultClass="max-w-[300px]" placeholder="Input address..." bind:value={newMenu.url}/>
                        <hr class="w-4 h-[4px] bg-cyan-700">
                        <Button color="dark" outline id="addsubmenu" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
                        <Popover class="w-full text-sm font-light " title="Description" translate="yes" triggeredBy="#addsubmenu" trigger="click">
                            <Editor bind:text={newMenu.description}/>
                            <Checkbox class="cursor-pointer" aria-describedby="helper-checkbox-text" bind:checked={newMenu.isShowDescription}>Show Description</Checkbox>
                        </Popover>
                        <hr class="w-4 h-[4px] bg-cyan-700">
                        <Button color="none" id="menuaddtype" class="text-xl p-0 m-0">
                            <Icon icon="{newMenu.type == 'product' ? 'fluent-emoji:cat' : newMenu.type == 'blog' ? 'openmoji:hacker-cat' : 'twemoji:guide-dog'}" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                        </Button>
                        <Popover class="text-sm font-light z-50" title="Type" triggeredBy="#menuaddtype" trigger="click">
                            <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
                                {#each types as type}
                                    <li><Radio class="p-3" bind:group={newMenu.type} value={type.value}>{type.name}</Radio></li>
                                {/each}
                            </ul>
                        </Popover>
                        <hr class="w-4 h-[4px] bg-cyan-700">
                        <button on:click={addMenu}>
                            <Icon icon="ep:success-filled" class="hover:opacity-80 text-[40px] p-2.5 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                        </button>
                    </form>
                </div>
            </div>
            <div>
                {#each menus as menu (menu.id)}
                    <MenuItem menu={menu} isAction={isAction} bind:categoriesMenu={menuDetail} bind:numCategory={showMenuById} showMenuId={showMenuById}/>
                {/each}
            </div>
        </div>
        <div class=" w-full col-span-2">
            {#if menuDetail}
            <div class="w-full h-full dark:text-white rounded-lg flex flex-col justify-center items-center">
                <Category menu={menuDetail}/>
            </div>
            {:else}
                <div class="w-full h-full dark:text-white rounded-lg flex flex-col justify-center items-center">
                    <img class="rounded-lg w-[200px]" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExandoOHd6NXU3bDB4bTJwMTg3NXVoN205N3NmNzU4YXRudzF5ZDJ6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AW6eOaOemvDv1FBpZ6/giphy.gif" alt="">
                    <b>{$t("common.chooseMenu")}</b>
                </div>
            {/if}
        </div>
    {/if}
</div>
