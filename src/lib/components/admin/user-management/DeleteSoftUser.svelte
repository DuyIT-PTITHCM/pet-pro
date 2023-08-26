<script lang="ts">
    import { RepositoryFactory } from '$lib/ClientService/RepositoryFactory';
    import ToastCustom from '$lib/components/common/ToastCustom.svelte';
    import { Button, Modal } from "flowbite-svelte";
    import { onMount } from "svelte";
    import Icon from '@iconify/svelte';
    export let userid = 0;
    const userService = RepositoryFactory.get("userRepository");
    async function deleteUser(uid) {
        try {
            const response = await userService.delete(uid);
            onMount(
                wastedTimeComponent.showToast(response.data.message, 0)
            );
        } catch (error) {
            wastedTimeComponent.showToast("Error deleting user:", error)
        }
    }
    let popupModal = false;
    let wastedTimeComponent: ToastCustom;
</script>

<Button outline color="red" on:click={() => (popupModal = true)} class="text-xl"><Icon icon="fluent:delete-20-filled" /></Button>
<Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this user?
        </h3>
        <Button color="red" class="mr-2" on:click={() => deleteUser(userid)}>Yes, I'm sure</Button>
        <Button color="alternative">No, cancel</Button>
    </div>
</Modal>
<ToastCustom bind:this={wastedTimeComponent} />