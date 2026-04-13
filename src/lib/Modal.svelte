<script lang="ts">
    export let visible;
</script>

{#if $visible}
    <div class="modalBackground">
        <div class="modalContent">
            <slot />
        </div>
    </div>
{/if}

<style>
    .modalBackground {
        position: fixed;
        z-index: 2;
        inset: 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 10vh;
        background: rgba(0, 0, 0, 0.4);
    }

    .modalContent {
        background: var(--c-surface);
        border: 1.5px solid var(--c-border);
        border-radius: var(--radius);
        padding: 1.75rem;
        width: min(480px, 90vw);
        max-height: 80vh;
        overflow: auto;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
    }
</style>
