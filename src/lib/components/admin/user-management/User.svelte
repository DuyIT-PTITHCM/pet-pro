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

    let isFilter = false;
    const userService = RepositoryFactory.get("userRepository");

    let helper = { currentPage: 1, pages: 10, total: 100 };
    let queryParams = {
        page: helper.currentPage, // Example query parameter
    };

    let users;
    loadingState.set(true);
    async function getUsers() {
        loadingState.set(true);
        const res = await userService.get(queryParams);
        loadingState.set(false);
        users = res.data.data.docs;
        helper.total = res.data.data.total;
        helper.pages = res.data.data.pages;
    }

    onMount(() => {
        const unSubscribe = isUserEdited.subscribe((edited) => {
            edited && getUsers();
            isUserEdited.set(false);
        });

        return unSubscribe;
    });
    getUsers();

    // pagination
    let isPrev = true;
    let isNext = false;
    const previous = () => {
        helper.currentPage = Math.max(helper.currentPage - 1, 1);
        queryParams.page = helper.currentPage;
        isPrev = helper.currentPage == 1 ? true : false;
        isNext = false;
        getUsers();
    };

    const next = () => {
        helper.currentPage = Math.min(helper.currentPage + 1, helper.pages);
        queryParams.page = helper.currentPage;
        isNext = helper.currentPage == helper.pages ? true : false
        isPrev = false;
        getUsers();
    };
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
    {#if !users && !$loadingState}
        <h1>nodata</h1>
    {:else if !$loadingState}
        <div class="overflow-hidden">
            <UserList items={users} />
            <div class="flex flex-col items-center justify-center gap-2">
                <div class="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span
                        class="font-semibold text-gray-900 dark:text-white"
                        >{helper.currentPage}</span
                    >
                    of
                    <span class="font-semibold text-gray-900 dark:text-white"
                        >{helper.pages}</span
                    >
                    pages and
                    <span class="font-semibold text-gray-900 dark:text-white"
                        >{helper.total}</span
                    >
                    Entries
                </div>
                <div class="flex">
                    <ButtonGroup>
                        <Button class="py-1 px-4" color={"blue"} on:click={previous} disabled={isPrev}><Icon class="text-xl mr-1" icon="emojione:baby-chick" /><Icon class="text-3xl" icon="twemoji:dog"/></Button>
                        <Button class="py-1 px-4" color={"primary"} on:click={next} disabled={isNext}><Icon class="text-3xl" icon="twemoji:cat" hFlip={true} /><Icon class="text-xl ml-1" icon="noto:fish" hFlip={true} /></Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    {/if}
</div>
