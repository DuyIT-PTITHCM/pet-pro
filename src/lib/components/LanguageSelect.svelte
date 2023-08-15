<!-- LanguageSelect.svelte -->
<script lang="ts">
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";
    import { selectedLanguage } from "$lib/store/language";
    import { loadTranslations } from "$lib/translations";
    import {setCookie , removeCookie, getCookie} from "$lib/Utils/cookieUtils";
    // Danh sách các ngôn ngữ
    const languages = [
        { id: "en", name: "English" },
        { id: "vi", name: "Tiếng Việt" },
    ];

    selectedLanguage.set(getCookie('lang'));
    async function handleChange(event) {
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
</script>
<!-- <form method="POST" action="" use:enhance>
    <select bind:value={$selectedLanguage} name="lang" on:change={handleChange}>
        {#each languages as language}
            <option value={language.id}>{language.name}</option>
        {/each}
    </select>
</form> -->

<select class="dark:bg-slate-800" bind:value={$selectedLanguage} on:change={handleChange}>
    {#each languages as language}
      <option value={language.id}>{language.name}</option>
    {/each}
</select>

<style>
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
</style>