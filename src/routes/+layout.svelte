<script>
    import "../app.css";
    import { title , description } from "../store/meta";
</script>
<svelte:head>
  <title>{$title}</title>
  <meta name="description" content="{$description}">
</svelte:head>
<main>
  <slot />
</main>