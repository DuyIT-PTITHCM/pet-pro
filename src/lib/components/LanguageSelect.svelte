<!-- LanguageSelect.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { selectedLanguage } from "$lib/store/language";
    import { loadTranslations } from "$lib/translations";
    import {setCookie , removeCookie, getCookie} from "$lib/Utils/cookieUtils";
    import { Button, Popover } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    export let btnClass: string;
    // Danh sách các ngôn ngữ
    const languages = [
        { id: "en", name: "English", icon: "twemoji:flag-united-kingdom" },
        { id: "vi", name: "Tiếng Việt", icon: "twemoji:flag-vietnam" },
    ];
    let placement: any;
    let icon = languages[1].icon;
    selectedLanguage.set(getCookie('lang'));
    async function handleChange(event: any) {
        removeCookie('lang');
        setCookie('lang', event.target.value);

        // event.target.parentElement.submit();
    }
    onMount(() => {
        const unsubscribe = selectedLanguage.subscribe(async (newLanguage) => {
            const { pathname } = window.location;
            await loadTranslations(newLanguage, pathname);
        });

        return unsubscribe;
    });
    $selectedLanguage = "vi";
</script>
<!-- <form method="POST" action="" use:enhance>
    <select bind:value={$selectedLanguage} name="lang" on:change={handleChange}>
        {#each languages as language}
            <option value={language.id}>{language.name}</option>
        {/each}
    </select>
</form> -->

<!-- <select class="dark:bg-slate-800" bind:value={$selectedLanguage} on:change={handleChange}>
    {#each languages as language}
      <option value={language.id}>{language.name}</option>
    {/each}
</select> -->
<button 
    id="languge" 
    color="none" 
    class={btnClass} 
    on:mouseenter={() => (placement = 'bottom')}>
    <Icon icon = {icon}/>
</button>
<Popover triggeredBy="#languge" placement={placement} class="transition-all" trigger="click">
    {#each languages as language}
        <div class="">
            <input id="{language.id}" class="hidden" type="radio" name="language" value={language.id} on:click={() => {$selectedLanguage = language.id; icon=language.icon}}/>
            <label for="{language.id}" class="flex items-center text-xl cursor-pointer p-2 transition-all hover:text-primary-600 {icon == language.icon ? '' : 'opacity-50'}"><Icon icon={language.icon}/><span class="ml-4 text-base">{language.name}</span></label>
        </div>
    {/each}
</Popover>
<!-- <style>
    select{
        outline: none;
        border: none;
        padding: 0 24px;
        cursor: pointer;
        border-radius: 100px;
    }
    select:hover{
        opacity: .9;
    }
</style> -->