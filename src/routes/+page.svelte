<script>
    import { t } from "$lib/translations";

    const pageName = "This page is Home page!";
</script>

<div>
    <!-- you can use `placeholders` and `modifiers` in your definitions (see docs) -->
    <h2>{$t("common.title", { pageName })}</h2>
    <p>{$t("common.title")}</p>
</div>
