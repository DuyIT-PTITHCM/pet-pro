<script>
    import Login from "$lib/components/admin/login/Login.svelte";
    import { title, description } from "$lib/store/meta";
    title.set("about page");
    description.set('description page');
</script>
<Login/>