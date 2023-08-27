<script lang="ts">
    import { RepositoryFactory } from '$lib/ClientService/RepositoryFactory';
    import { Button, Modal } from "flowbite-svelte";
    import Icon from '@iconify/svelte';
    import { toastErr } from '$lib/store/toastError';
    export let userid = 0;
    const userService = RepositoryFactory.get("userRepository");
    async function deleteUser(uid = 0) {
        try {
            const response = await userService.delete(uid);
            toastErr.set([
                {
                    message: response.data.message,
                    type: "success"
                }
            ]);
        } catch (error) {
            toastErr.set([
                {
                    message: "Error deleting user:" + error,
                    type: "error"
                }
            ]);
        }
    }
    let popupModal = false;
</script>

<Button outline color="red" on:click={() => (popupModal = true)} class="text-xl rounded-e-lg"><Icon icon="fluent:delete-20-filled" /></Button>
<Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this user?
        </h3>
        <Button color="red" class="mr-2" on:click={() => deleteUser(userid)}>Yes, I'm sure</Button>
        <Button color="alternative">No, cancel</Button>
    </div>
</Modal>