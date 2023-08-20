<script>
    import Icon from "@iconify/svelte";
    let toasts = [];
    function hideToast(toast) {
        toast.visible = false;
        setTimeout(() => {
            toasts = toasts.filter((t) => t !== toast);
        }, 300);
    }
</script>


<div class="toast-container">
    {#each toasts as toast (toast.id)}
        {#if toast.visible}
        <div class="toast {toast.type === 0 ? 'success' : 'error'}">
            <p class="flex items-center"><Icon class="text-3xl" icon="{toast.type === 0 ? 'fluent-emoji:cat-face' : 'fluent-emoji-flat:crying-cat'}" /> 
                {toast.message}
            </p>
            <button on:click={() => hideToast(toast)}
                ><Icon icon="foundation:x" /></button
            >
        </div>
        {/if}
    {/each}
</div>
<style>
    
     .toast {
        color: white;
        padding: 1rem;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
        animation: slide-in 0.5s linear forwards;
    }
    .success {
        background: #a8ff78;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #78ffc2, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #00ffb3, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .error {
        background: #ee0979; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ee0979, #ff6a00); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ee0979, #ff6a00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .info {
        background: #fff878;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0077ff, #fff478);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #00ffff, #166bff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .warning {
        background: #fff878;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #78ffd6, #fff478);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ffe678, #ffea00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>