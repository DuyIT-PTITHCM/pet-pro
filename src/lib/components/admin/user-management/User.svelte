<script>
    import CreateUser from './CreateUser.svelte';
    import UserFilter from './UserFilter.svelte';
    import UserList from './UserList.svelte';
    import { onMount } from "svelte";
    import { apiData, drinkNames } from './store.js';
    let users =  [
        { id: 1, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Toyota", email: "ABC@example.com", phone: 20172017 },
        { id: 2, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Ford", email: "CDE@example.com", phone: 20172017 },
        { id: 3, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Volvo", email: "FGH@example.com", phone: 20172017 },
        { id: 4, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Saab", email: "IJK@example.com", phone: 20172017 },
        { id: 5, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Toyota", email: "ABC@example.com", phone: 20172017 },
        { id: 6, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Ford", email: "CDE@example.com", phone: 20172017 },
        { id: 7, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Volvo", email: "FGH@example.com", phone: 20172017 },
        { id: 8, avatar: "https://media.thethaovanhoa.vn/Upload/YSu1TgnVnIyxx9zisEumA/files/2021/05/3005/1/1.jpg", name: "Saab", email: "IJK@example.com", phone: 20172017 },
    ];
    onMount(async () => {
    fetch("http://103.142.26.42/api/v1.0/user-management")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        apiData.set(data);
    }).catch(error => {
        console.log(error);
        return [];
    });
    });
</script>
<div class="header-manager bg-slate-100 dark:bg-slate-900 p-10 my-4 rounded-xl flex items-center justify-between">
    <h1 class="dark:text-white">User management</h1>
    <div class="">
        <UserFilter/>
        <CreateUser/>
    </div>
</div>
<h1>Whiskey Drinks Menu</h1>
<ul>
{#each $drinkNames as drinkName}
    <li>{drinkName}</li>
{/each}
</ul>
<div class="userdata">
    <UserList items={users}/>
</div>
<style>
    .header-manager h1{
        font-size: 28px;
        font-weight: bold;
    }
    .userdata{
        width: 100%;
    }

</style>

