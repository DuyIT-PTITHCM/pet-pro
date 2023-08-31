<script>
    import Menu from "$lib/components/admin/menu-management/Menu.svelte";
    import { title, description } from "$lib/store/meta";
    title.set("Menu Management");
    description.set('description');
</script>
<Menu/>