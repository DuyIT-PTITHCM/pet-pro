<script>
    import Login from "$lib/components/admin/login/Login.svelte";
    import { title, description } from "$lib/store/meta";
    title.set("Login");
    description.set('Login page');
</script>
<Login/>