<script lang="ts">

    import { getHeading } from "$lib/Utils/common";
    import { Skeleton } from "flowbite-svelte";
    
    let menus = [{
        id: '',
        value: ''
    }]

    function gotoHeading(idHeading: string) {
    const element = document.getElementById(idHeading);
    
    if (element) {
        const topOffset = element.offsetTop - 80; // Độ lệch top 100px
        window.scrollTo({
            top: topOffset,
            behavior: "smooth"
        });
    }
}
</script>
{#await getHeading(menus)}
    <Skeleton size="sm" class="my-8" />
{:then res}
    <ul class="list-none leading-7 sm:text-base text-sm overflow-y-auto">
        <li class="uppercase text-base font-semibold border-b-2 dark:border-gray-600 mb-2 text-center p-3">contents</li>
        {#each menus as item}
            <li>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#"
                    on:click={() => gotoHeading(item.id)}
                    class="line-clamp-1 text-blue-600 dark:text-blue-500 hover:text-primary-600 dark:hover:text-primary-500"
                    >{item.value}</a
                >
            </li>
        {/each}
    </ul>
{/await}
