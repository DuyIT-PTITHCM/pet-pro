<script>
    import CreateUser from './CreateUser.svelte';
    import UserList from './UserList.svelte';
    import { Button } from 'flowbite-svelte';
    import { RepositoryFactory } from '$lib/ClientService/RepositoryFactory';
    import UserFilter from './UserFilter.svelte';
    let isFilter = false
    const userService = RepositoryFactory.get("userRepository");
    async function getUsers() {
        const res = await userService.get();
        return res.data.data.docs;
    }
</script>
<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1 class="dark:text-white 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-lg sm:text-lg text-lg font-bold">User management</h1>
        <div class="">
            <Button class="mr-2" on:click={() => {isFilter = !isFilter}}>Filter</Button>
            <CreateUser/>
        </div>
    </div>
    <div class="bg-transparent {isFilter ? 'h-52 mt-5 rounded-xl overflow-hidden' : 'h-0 opacity-0'} transition-all">
        <UserFilter/>
    </div>
</div>
<div>
    
    {#await getUsers()}
        <h1>Loading...</h1>
    {:then users}
        <div class="overflow-hidden">
            <UserList items={users}/>
        </div>
    {:catch error}
        <h1>{error}</h1>
    {/await}
</div>

