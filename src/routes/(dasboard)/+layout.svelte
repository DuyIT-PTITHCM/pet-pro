<script>
    import "../../app.css";
    import { title, description } from "../../store/meta";
</script>

<svelte:head>
    <title>{$title}</title>
    <meta name="description" content={$description} />
</svelte:head>
<h1>admin layout</h1>
<main>
    <slot />
</main>
