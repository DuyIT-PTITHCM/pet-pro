<script>
    import Database from "$lib/components/data/Database.svelte";
import { title, description } from "$lib/store/meta";
    title.set("about page");
    description.set('description page');
</script>
<Database/>