<script>
    import { loadingState } from "./../../../store/loading";
    import CreateUser from "./CreateUser.svelte";
    import UserList from "./UserList.svelte";
    import { Button, ButtonGroup } from "flowbite-svelte";
    import { RepositoryFactory } from "$lib/ClientService/RepositoryFactory";
    import UserFilter from "./UserFilter.svelte";
    import { isUserEdited } from "$lib/store/userManagement";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import {
        getAllQueryParams,
        queryParamsToObject,
        updateQueryParams,
    } from "$lib/Utils/queryParams";
    import Pagination from "$lib/components/common/Pagination.svelte";

    let isFilter = false;
    const userService = RepositoryFactory.get("userRepository");

    let queryParams = {
        page: 1, // Example query parameter
        email: null,
        gender: null,
        phone: null,
        name: null,
    };

    let users;
    loadingState.set(true);
    async function getUsers() {
        loadingState.set(true);
        let queryFilter = getAllQueryParams();
        queryParams = queryParamsToObject(queryFilter);
        const res = await userService.get(queryParams);
        users = res.data.data;

        loadingState.set(false);
    }
    onMount(() => {
        const unSubscribe = isUserEdited.subscribe((edited) => {
            edited && getUsers();
            isUserEdited.set(false);
        });

        return unSubscribe;
    });
    getUsers();

    async function filter() {
        await updateQueryParams(queryParams);
        await getUsers();
    }
    async function handlePageChange(page) {
        queryParams.page = page;
        updateQueryParams(queryParams);
        await getUsers();
    }

</script>

<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1
            class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold"
        >
            User management
        </h1>
        <div class="flex">
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
            ? 'h-fit mt-5 rounded-xl overflow-hidden'
            : 'hidden'} transition-all"
    >
        <UserFilter bind:parentValue={queryParams} />
        <Button class="float-right mt-4" outline on:click={filter}>OKE</Button>
    </div>
</div>
<div>
    {#if !users && !$loadingState}
        <h1>nodata</h1>
    {:else if !$loadingState}
        <div class="overflow-hidden">
            <UserList items={users.docs} />
        </div>
    {/if}
    {#if users?.pages}
        <Pagination
            currentPage={users.currentPage}
            totalPages={users.pages}
            onPageChange={handlePageChange}
        />
    {/if}
</div>
