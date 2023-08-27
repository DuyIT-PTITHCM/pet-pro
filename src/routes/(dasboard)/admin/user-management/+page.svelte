<script>
import User from "$lib/components/admin/user-management/User.svelte";
import { title, description } from "$lib/store/meta";
    title.set("User Management");
    description.set('description');
</script>
<User/>