<!-- LanguageSelect.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { selectedLanguage } from "../../store/language";
    import { loadTranslations } from "$lib/translations";
    // Danh sách các ngôn ngữ
    const languages = [
        { id: "en", name: "English" },
        { id: "vi", name: "Tiếng Việt" },
    ];

    async function handleChange(event) {
        const newLanguage = event.target.value;
        selectedLanguage.set(newLanguage);
    }
    onMount(() => {
    const unsubscribe = selectedLanguage.subscribe(async (newLanguage) => {
        console.log(newLanguage);
        const { pathname } = window.location;
        console.log(pathname);
        await loadTranslations(newLanguage, pathname);
    });

    return unsubscribe;
});
    
</script>

<select value={$selectedLanguage} on:change={handleChange}>
    {#each languages as language}
        <option value={language.id}>{language.name}</option>
    {/each}
</select>
