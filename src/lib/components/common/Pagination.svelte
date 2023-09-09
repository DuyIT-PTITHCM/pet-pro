<script lang="ts">
    export let currentPage = 1;
    export let totalPages = 1;
    export let onPageChange;

    function changePage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            onPageChange(currentPage);
        }
    }

    function getDisplayRange() {
        const displayRange = 2;
        const start = Math.max(1, currentPage - displayRange);
        const end = Math.min(totalPages, currentPage + displayRange);

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
</script>

<div class="pagination flex justify-center items-center mt-20">
    <button
        on:click={() => changePage(currentPage - 1)}
        class="mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer bg-white dark:bg-gray-800 dark:text-white"
        disabled={currentPage === 1}
    >
        Previous
    </button>

    {#each getDisplayRange() as page}
        <button
            class:selected={currentPage === page}
            on:click={() => changePage(page)}
            class="mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer {currentPage === page ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-800 dark:text-white'}"
        >
            {page}
        </button>
    {/each}

    <button
        on:click={() => changePage(currentPage + 1)}
        class="mx-1 px-2 py-1 border border-gray-300 rounded cursor-pointer bg-white dark:bg-gray-800 dark:text-white"
        disabled={currentPage === totalPages}
    >
        Next
    </button>
</div>
