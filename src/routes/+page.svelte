<script>
    import { t } from "$lib/translations";
    import OutsideClick from "../components/common/OutsideClick.svelte";
    import { count } from "../store";

    const pageName = "This page is Home page!";

    function increment() {
        count.update((n) => n + 1); // Tăng giá trị của store lên 1
    }
    function handleOutsideClick() {
        console.log("Clicked outside the component.");
    }
</script>

<div>
    <!-- you can use `placeholders` and `modifiers` in your definitions (see docs) -->
    <h2>{ pageName }</h2>
    <p>{$t("common.title")}</p>
    <button on:click={increment}>Increment</button>
    <p>{$count}</p>
</div>
