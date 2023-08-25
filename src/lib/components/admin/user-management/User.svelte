<script>
    import CreateUser from './CreateUser.svelte';
    import UserList from './UserList.svelte';
    import { Button } from 'flowbite-svelte';
    import { RepositoryFactory } from '$lib/ClientService/RepositoryFactory';
    let isFilter = false
    const userService = RepositoryFactory.get("userRepository");
    async function getUsers() {
        const res = await userService.get();
        return res.data.data.docs;
    }
</script>
<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl">
    <div class="flex items-center justify-between">
        <h1 class="dark:text-white text-4xl font-bold">User management</h1>
        <div class="">
            <Button class="mr-2" on:click={() => {isFilter = !isFilter}}>Filter</Button>
            <CreateUser/>
        </div>
    </div>
    <div class="mt-5 bg-white {isFilter ? 'h-52' : 'h-0'} transition-all"></div>
</div>
<div class="w-full">
    
    {#await getUsers()}
        <h1>Loading...</h1>
    {:then users}
        <UserList items={users}/>
    {:catch error}
        <h1>{error}</h1>
    {/await}
</div>

