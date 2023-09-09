<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { toastErr } from "$lib/store/toastError";
    import Icon from "@iconify/svelte";
    import { Badge, Button, Checkbox, Input, Modal, Popover, Textarea, Toggle } from "flowbite-svelte";
    import { isUserEdited } from "$lib/store/userManagement";
    export let isAction = false;
    export let menu:any;
    export let categories:any;
    let isShowMenu = false;
    let isShowAdd = false;
    let deleteMenuId = 0;
    let deleteMenuName = '';
    let popupDeleteModal = false;
    let isButtonDisabled = false;
    let newMenu = {
                name: null,
                url: null,
                parent_id: null,
                description: null,
                isShowDescription: 0
            }
    const menuService = RepositoryFactory.get("menuRepository");
    async function addMenu(name = null, url = null, parent_id = 0) {
        try {
            const newMenuItem = {
                name: name,
                url: url,
                parent_id: parent_id,
            }
            const res = await menuService.post(newMenuItem);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            newMenu.name = null;
            newMenu.url = null;
            isUserEdited.set(true);
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
    async function editMenu(id = 0, name: string, url = null, description: string, active: boolean, parent_id = 0) {
        try {
            isButtonDisabled = true;
            const menuEdit = {
                name: name,
                url: url,
                parent_id: parent_id == 0 ? null : parent_id,
                description: description,
                isShowDescription: active,
            }
            const res = await menuService.put(id, menuEdit);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            // isUserEdited.set(true);
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
            isUserEdited.set(true);
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
    function disabledButton(){
        isButtonDisabled = true;
        setTimeout(() => {
            isButtonDisabled = false;
        }, 10000);
    }
    function ShowCategory(cate: any, menuname: string){
        categories = {
            cates: cate,
            manuname: menuname
        };
    }
</script>
<div class="border-l-4 border-cyan-400 my-4">
    <div class="flex items-center">
        <hr class="w-2 h-[4px] bg-primary-600">
        <Input defaultClass="max-w-[300px]" bind:value={menu.name}/>
        <hr class="w-2 h-[4px] bg-primary-600">
        <Input defaultClass="max-w-[300px]" bind:value={menu.url}/>
        <hr class="w-2 h-[4px] bg-primary-600">
        <Button color="dark" outline id="submenu{menu.id}" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
        <Popover class="w-64 text-sm font-light " title="Description" translate="yes" triggeredBy="#submenu{menu.id}" trigger="click">
            <Textarea rows="4" placeholder="Input your menu description..." bind:value={menu.description}/>
            <Checkbox class="cursor-pointer" aria-describedby="helper-checkbox-text" bind:value={menu.isShowDescription}>Show Description</Checkbox>
        </Popover>
        <hr class="w-2 h-[4px] bg-primary-600">
        <button on:click={() => isShowMenu = !isShowMenu}>
            <Icon icon="{isShowMenu? 'icon-park-solid:down-one' : 'icon-park-solid:up-one'}" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
        </button>
        <div class="flex items-center {!isAction && 'hidden'}">
            <hr class="w-2 h-[4px] bg-primary-600">
            <button on:click={() => {isShowAdd = !isShowAdd; isShowAdd == true ? isShowMenu = true : 1}} class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg">
                <Icon icon="mingcute:add-fill" class="{isShowAdd ? 'rotate-45' : ''}  text-[20px]" />
            </button>
            <hr class="w-2 h-[4px] bg-primary-600">
            <button on:click={() => { disabledButton() ; editMenu(menu.id, menu.name, menu.url, menu.description, menu.isShowDescription, 0)}} disabled={isButtonDisabled}>
                <Icon icon="bxs:edit" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
            </button>
            <hr class="w-2 h-[4px] bg-primary-600">
            <Toggle class="cursor-pointer p-2 dark:bg-gray-700 shadow-[inset_0_-2px_4px_rgba(0,0,0)] rounded-lg hover:opacity-80" bind:checked={menu.active}>{menu.active? 'Active' : 'InActive'}</Toggle>
        </div>
        <hr class="w-2 h-[4px] bg-primary-600">
        <button on:click={() => ShowCategory(menu.categories, menu.name)}>
            <Icon icon="icon-park-solid:right-one" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
        </button>
    </div>
    <div class="{isShowMenu ? '' : 'hidden'} my-2">
        {#each menu.subMenus as subMenu, index}
        <div class="flex items-center my-2">
            <div class="flex items-center">
                <hr class="w-10 h-[4px] bg-primary-600">
                <Input defaultClass="max-w-[300px]" bind:value={subMenu.name}/>
                <hr class="w-4 h-[4px] bg-primary-600">
                <Input defaultClass="max-w-[300px]" bind:value={subMenu.url}/>
                <hr class="w-4 h-[4px] bg-primary-600">
                <Button color="dark" outline id="submenu{subMenu.id}" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
                <Popover class="w-64 text-sm font-light " title="Description" translate="yes" triggeredBy="#submenu{subMenu.id}" trigger="click">
                    <Textarea rows="4" placeholder="Input your menu description..." bind:value={subMenu.description}/>
                    <Checkbox class="cursor-pointer" aria-describedby="helper-checkbox-text" bind:value={subMenu.isShowDescription}>Show Description</Checkbox>
                </Popover>
            </div>
            <div class="flex items-center {!isAction && 'hidden'}">
                <hr class="w-2 h-[4px] bg-primary-600">
                <button on:click={() => { disabledButton(); editMenu(subMenu.id, subMenu.name, subMenu.url, subMenu.description, subMenu.isShowDescription, menu.id)} } disabled={isButtonDisabled}>
                    <Icon icon="bxs:edit" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                </button>
                <hr class="w-2 h-[4px] bg-primary-600">
                <Toggle class="cursor-pointer p-2 dark:bg-gray-700 shadow-[inset_0_-2px_4px_rgba(0,0,0)] rounded-lg hover:opacity-80" bind:checked={subMenu.active}>{subMenu.active? 'Active' : 'InActive'}</Toggle>
            </div>
            <hr class="w-2 h-[4px] bg-primary-600">
            <button on:click={() => ShowCategory(subMenu.categories, subMenu.name)}>
                <Icon icon="icon-park-solid:right-one" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
            </button>
        </div>
        {/each}
    </div>
    <div class="{isShowAdd ? '' : 'hidden'} my-2">
        <div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-primary-600">
            <Input defaultClass="max-w-[300px]" placeholder="Input name..." required bind:value={newMenu.name}/>
            <hr class="w-4 h-[4px] bg-primary-600">
            <Input defaultClass="max-w-[300px]" placeholder="Input address..." required bind:value={newMenu.url}/>
            <hr class="w-4 h-[4px] bg-primary-600">
            <Button color="dark" outline id="addsubmenu" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
            <Popover class="w-64 text-sm font-light " title="Description" translate="yes" triggeredBy="#addsubmenu" trigger="click">
                <Textarea rows="4" placeholder="Input your menu description..." bind:value={newMenu.description}/>
                <Checkbox class="cursor-pointer" aria-describedby="helper-checkbox-text" bind:value={newMenu.isShowDescription}>Show Description</Checkbox>
            </Popover>
            <hr class="w-4 h-[4px] bg-primary-600">
            <button on:click={() => addMenu(newMenu.name, newMenu.url, menu.id)}>
                <Icon icon="ep:success-filled" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
            </button>
        </div>
    </div>
</div>
<Modal bind:open={popupDeleteModal} size="xs" autoclose>
    <div class="text-center">
      <Icon icon="fluent:delete-20-filled" class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete <Badge color="dark" class="text-lg">{deleteMenuName}</Badge> menu?</h3>
      <Button color="red" class="mr-2" on:click={()=> {deleteMenu(deleteMenuId)}}>Yes, I'm sure</Button>
      <Button color="alternative">No, cancel</Button>
    </div>
</Modal>