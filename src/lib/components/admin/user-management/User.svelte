<script>
	import { loadingState } from './../../../store/loading.ts';
    import CreateUser from "./CreateUser.svelte";
    import UserList from "./UserList.svelte";
    import { Button } from "flowbite-svelte";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import UserFilter from "./UserFilter.svelte";
    import { isUserEdited } from "$lib/store/userManagement";
    import { onMount } from "svelte";
    let isFilter = false;
    const userService = RepositoryFactory.get("userRepository");
    let users;
    loadingState.set(true);

    async function getUsers() {
        loadingState.set(true);
        const res = await userService.get();
        loadingState.set(false);
        users = res.data.data.docs;
    }

    onMount(() => {
        const unSubscribe = isUserEdited.subscribe((edited) => {
            edited && getUsers();
            isUserEdited.set(false);
        });

        return unSubscribe;
    });

    getUsers();
</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            User management
        </h1>
        <div class="">
            <Button
                class="mr-2"
                on:click={() => {
                    isFilter = !isFilter;
                }}>Filter</Button
            >
            <CreateUser />
        </div>
    </div>
    <div
        class="bg-transparent {isFilter
            ? 'h-52 mt-5 rounded-xl overflow-hidden'
            : 'h-0 opacity-0'} transition-all"
    >
        <UserFilter />
    </div>
</div>
<div>
    {#if !users &&  !$loadingState}
        <h1>nodata</h1>
    {:else if !$loadingState}
        <div class="overflow-hidden">
            <UserList items={users} />
        </div>
    {/if}
</div>
