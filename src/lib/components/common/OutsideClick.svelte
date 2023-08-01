<!-- components/OutsideClick.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    // Props
    export let onOutsideClick: () => void;
  
    // Refs
    let node: HTMLElement;
  
    // Function to handle click outside the component
    function handleClickOutside(event: MouseEvent) {
      if (node && !node.contains(event.target as Node)) {
        onOutsideClick();
      }
    }
  
    // Register click event listener when the component is mounted
    onMount(() => {
      window.addEventListener('click', handleClickOutside);
    });
  
    // Unregister click event listener when the component is destroyed
    onDestroy(() => {
      window.removeEventListener('click', handleClickOutside);
    });
  </script>
  
  <div bind:this={node}>
    <!-- Content of the component, which can be any HTML or Svelte elements -->
    <slot />
  </div>
  