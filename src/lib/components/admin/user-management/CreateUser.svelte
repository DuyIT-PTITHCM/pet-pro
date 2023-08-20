<script>
    import { CloseButton, Drawer , Button } from "flowbite-svelte";
	import { sineIn } from 'svelte/easing';

    import Icon from '@iconify/svelte';
    let createUserFrom = true;
    let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };

</script>
<Button on:click={() => (createUserFrom = false)}>Create New User</Button>
<Drawer placement="right" width={"w-1/4"} transitionType="fly" transitionParams={transitionParamsRight} bind:hidden={createUserFrom} id="createUserForm">
    <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        <Icon icon="mdi:create" class="w-4 h-4 mr-2.5" />Create New User
          </h5>
          <CloseButton on:click={() => (createUserFrom = true)} class="mb-4 dark:text-white" />
        </div>
</Drawer>