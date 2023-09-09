<!-- Pagination.svelte -->
<script lang="ts">
    export let currentPage = 1;
    export let totalPages = 1;
    export let onPageChange;

    // Function to handle page change
    function changePage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            onPageChange(currentPage);
        }
    }

    // Function to calculate the range of pages to display
    function getDisplayRange() {
        const displayRange = 2; // Number of pages to display on each side of the current page
        const start = Math.max(1, currentPage - displayRange);
        const end = Math.min(totalPages, currentPage + displayRange);

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
</script>

<div class="pagination">
    <button
        on:click={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
    >
        Previous
    </button>

    {#each getDisplayRange() as page}
        <button
            class:selected={currentPage === page}
            on:click={() => changePage(page)}
        >
            {page}
        </button>
    {/each}

    <button
        on:click={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
    >
        Next
    </button>
</div>

<style>
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    button {
        margin: 5px;
        padding: 5px 10px;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
    }

    button.selected {
        background-color: #007bff;
        color: #fff;
    }

    button[disabled] {
        cursor: not-allowed;
    }
</style>
