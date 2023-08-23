<script>
    import CreateUser from './CreateUser.svelte';
    import UserList from './UserList.svelte';
    import { Button } from 'flowbite-svelte';
    import { RepositoryFactory } from '$lib/ClientService/RepositoryFactory';
    let isFilter = false
    const userService = RepositoryFactory.get("userRepository");
    let data;
    userService.get().then(res =>{
        data = res
    })
    console.log(data)
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
    <!-- <UserList items={$users} />
    {#each $users as user}
    <li>{user.id} and {user.name} and {user.phone}</li>
    {/each} -->
</div>

