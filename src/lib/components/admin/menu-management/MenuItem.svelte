<script lang="ts">
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import { toastErr } from "$lib/store/toastError";
    import Icon from "@iconify/svelte";
    import { Badge, Button, Checkbox, Input, Modal, Popover, Radio, Toggle } from "flowbite-svelte";
    import { isMenuEdited } from "$lib/store/menuManagement";

    import Editor from "$lib/components/common/Editor.svelte";
    export let isAction = false;
    export let menu:any;
    export let categoriesMenu:any;
    export let numCategory = 0;
    export let showMenuId = 0;
    let isShowMenu = false;
    let isShowAdd = false;
    let deleteMenuId = 0;
    let deleteMenuName = '';
    let popupDeleteModal = false;
    let isButtonDisabled = false;

    let newMenu = {
        id: null,
        name: null,
        url: null,
        parent_id: 0,
        description: "",
        isShowDescription: true,
        active: true,
        type: "product",
    }
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
    const menuService = RepositoryFactory.get("menuRepository");
    async function addMenu(parent_id: number) {
        try {
            newMenu.parent_id = parent_id;
            const res = await menuService.post(newMenu);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            newMenu.name = null;
            newMenu.url = null;
            newMenu.description = "";
            isMenuEdited.set(true);
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
    async function editMenu(id = 0, name: string, url = null, description: string, isShow: boolean, parent_id = 0, active: boolean, type: string) {
        try {
            //isButtonDisabled = true;
            const menuEdit = {
                name: name,
                url: url,
                parent_id: parent_id == 0 ? null : parent_id,
                description: description,
                isShowDescription: isShow,
                active: active,
                type: type
            }
            const res = await menuService.put(id, menuEdit);
            toastErr.set([
                {
                    message: res.data.message,
                    type: "success"
                }
            ]);
            //disabledButton();
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
            isMenuEdited.set(true);
            
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
    function disabledButton(){
        isButtonDisabled = true;
        setTimeout(() => {
            isButtonDisabled = false;
            isMenuEdited.set(true);

        }, 2000);
    }
    function ShowCategory(menu: any){
        if(numCategory == menu.id){
            numCategory = 0;
            categoriesMenu = null;
        }else{
            numCategory = menu.id;
            categoriesMenu = menu
        }
    }
</script>

<div class="border-l-4 border-cyan-400 my-4">
    <div class="flex items-center">
        <hr class="w-2 h-[4px] bg-cyan-400">
        <Input defaultClass="max-w-[300px]" bind:value={menu.name} on:change={()=>{menu.url = menu.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}}/>
        <hr class="w-2 h-[4px] bg-cyan-400">
        <Input defaultClass="max-w-[300px]" bind:value={menu.url}/>
        <hr class="w-2 h-[4px] bg-cyan-400">
        <Button color="dark" outline id="submenu{menu.id}" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
        <Popover class="md:w-2/4 w-full text-sm font-light z-50" title="Description of {menu.name}" translate="yes" triggeredBy="#submenu{menu.id}" trigger="click">
            <!-- <Textarea rows="4" placeholder="Input your menu description..." bind:value={menu.description}/> -->
            <Editor bind:text={menu.description}/>
            <Checkbox class="cursor-pointer mt-1" aria-describedby="helper-checkbox-text" bind:checked={menu.isShowDescription}>Show Description</Checkbox>
        </Popover>
        <hr class="w-2 h-[4px] bg-cyan-400">
        <button id="type{menu.id}" class="text-xl">
            <Icon icon="{menu.type == 'product' ? 'fluent-emoji:cat' : menu.type == 'blog' ? 'openmoji:hacker-cat' : 'twemoji:guide-dog'}" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
        </button>
        <Popover class="text-sm font-light " title="Type" translate="yes" triggeredBy="#type{menu.id}" trigger="click">
            <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
                {#each types as type}
                    <li><Radio class="p-3" bind:group={menu.type} value={type.value}>{type.name}</Radio></li>
                {/each}
            </ul>
        </Popover>
        <hr class="w-2 h-[4px] bg-cyan-400">
        <button on:click={() => isShowMenu = !isShowMenu}>
            <Icon icon="{isShowMenu? 'icon-park-solid:up-one' : 'icon-park-solid:down-one'}" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
        </button>
        <div class="flex items-center {!isAction && 'hidden'}">
            <hr class="w-2 h-[4px] bg-cyan-400">
            <button on:click={() => {isShowAdd = !isShowAdd; isShowAdd == true ? isShowMenu = true : 1}} class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg">
                <Icon icon="mingcute:add-fill" class="{isShowAdd ? 'rotate-45' : ''}  text-[20px]" />
            </button>
            <hr class="w-2 h-[4px] bg-cyan-400">
            <button on:click={() => { editMenu(menu.id, menu.name, menu.url, menu.description, menu.isShowDescription, 0, menu.active, menu.type)}} disabled={isButtonDisabled}>
                <Icon icon="bxs:edit" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
            </button>
            <hr class="w-2 h-[4px] bg-cyan-400">
            <Toggle class="cursor-pointer p-2 dark:bg-gray-700 shadow-[inset_0_-2px_4px_rgba(0,0,0)] rounded-lg hover:opacity-80" bind:checked={menu.active}>Active</Toggle>
        </div>
        <hr class="w-2 h-[4px] bg-cyan-400">
        <button on:click={() => ShowCategory(menu)}>
            <Icon icon="icon-park-solid:right-one" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] {showMenuId == menu.id ? 'text-yellow-400' : 'text-gray-900 dark:text-white'} dark:bg-gray-700 rounded-lg" />
        </button>
    </div>

    <!-- Child menu -->

    <div class="{isShowMenu ? '' : 'hidden'} my-2">
        {#each menu.subMenus as subMenu, index}
        <div class="flex items-center my-2">
            <div class="flex items-center">
                <hr class="w-8 h-[4px] bg-cyan-400">
                <Input defaultClass="max-w-[300px]" bind:value={subMenu.name}  on:change={()=>{subMenu.url = subMenu.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}}/>
                <hr class="w-4 h-[4px] bg-cyan-400">
                <Input defaultClass="max-w-[300px]" bind:value={subMenu.url}/>
                <hr class="w-4 h-[4px] bg-cyan-400">
                <Button color="dark" outline id="submenu{subMenu.id}" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
                <Popover class="w-full text-sm font-light z-50" title="Description of {subMenu.name}" translate="yes" triggeredBy="#submenu{subMenu.id}" trigger="click">
                    <!-- <Textarea rows="4" placeholder="Input your menu description..." bind:value={subMenu.description}/> -->
                    <Editor bind:text={subMenu.description}/>
                    <Checkbox class="cursor-pointer" aria-describedby="helper-checkbox-text" bind:checked={subMenu.isShowDescription}>Show Description</Checkbox>
                </Popover>
                <hr class="w-4 h-[4px] bg-cyan-400">
                <button id="type{subMenu.id}" class="text-xl">
                    <Icon icon="{subMenu.type == 'product' ? 'fluent-emoji:cat' : subMenu.type == 'blog' ? 'openmoji:hacker-cat' : 'twemoji:guide-dog'}" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                </button>
                <Popover class="text-sm font-light z-50" title="Type" translate="yes" triggeredBy="#type{subMenu.id}" trigger="click">
                    <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
                        {#each types as type}
                            <li><Radio class="p-3" bind:group={subMenu.type} value={type.value}>{type.name}</Radio></li>
                        {/each}
                    </ul>
                </Popover>
                
            </div>
            <div class="flex items-center {!isAction && 'hidden'}">
                <hr class="w-2 h-[4px] bg-cyan-400">
                <button on:click={() => { editMenu(subMenu.id, subMenu.name, subMenu.url, subMenu.description, subMenu.isShowDescription, menu.id, subMenu.active, subMenu.type)} } disabled={isButtonDisabled}>
                    <Icon icon="bxs:edit" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg" />
                </button>
                <hr class="w-2 h-[4px] bg-cyan-400">
                <Toggle class="cursor-pointer p-2 dark:bg-gray-700 shadow-[inset_0_-2px_4px_rgba(0,0,0)] rounded-lg hover:opacity-80" bind:checked={subMenu.active}>Active</Toggle>
            </div>
            <hr class="w-2 h-[4px] bg-cyan-400">
            <button on:click={() => ShowCategory(subMenu)}>
                <Icon icon="icon-park-solid:right-one" class="hover:opacity-80 text-[40px] p-2.5 shadow-[inset_0_-2px_4px_rgba(0,0,0)] dark:bg-gray-700 {showMenuId == subMenu.id ? 'text-yellow-400' : 'text-gray-900 dark:text-white'} rounded-lg" />
            </button>
        </div>
        {/each}
    </div>

    <!-- Add child menu -->

    <div class="{isShowAdd ? '' : 'hidden'} my-2">
        <div class="flex items-center my-2"><hr class="w-8 h-[4px] bg-cyan-400">
            <Input defaultClass="max-w-[300px]" placeholder="Input name..." required bind:value={newMenu.name}  on:change={()=>{newMenu.url = newMenu.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}}/>
            <hr class="w-4 h-[4px] bg-cyan-400">
            <Input defaultClass="max-w-[300px]" placeholder="Input address..." required bind:value={newMenu.url}/>
            <hr class="w-4 h-[4px] bg-cyan-400">
            <Button color="dark" outline id="addsubmenu" class="text-xl"><Icon icon="material-symbols:description-rounded"/></Button>
            <Popover class="w-full text-sm font-light " title="Description of {newMenu.name}" translate="yes" triggeredBy="#addsubmenu" trigger="click">
                <!-- <Textarea rows="4" placeholder="Input your menu description..." bind:value={newMenu.description}/> -->
                <Editor bind:text={newMenu.description}/>
                <Checkbox class="cursor-pointer" aria-describedby="helper-checkbox-text" bind:checked={newMenu.isShowDescription}>Show Description</Checkbox>
            </Popover>
            <hr class="w-4 h-[4px] bg-cyan-400">
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
            <hr class="w-2 h-[4px] bg-cyan-400">
            <button on:click={() => addMenu(menu.id)}>
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