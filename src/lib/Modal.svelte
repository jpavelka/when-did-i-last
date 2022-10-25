<script lang="ts">
    export let visible;
    const handleClose = () => {
        visible.update(() => false);
    }
</script>

{#if $visible}
    <div class=modalBackground>
        <div class=modalContent>
            <slot />
            <div><button
                on:click={handleClose}
            >Close</button></div>
        </div>
    </div>
{/if}

<style>
    .modalBackground {
        position: fixed;
        z-index: 2;
        padding-top: 10vh;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }
    .modalContent {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 20pt;
        border: 1px solid #888;
        max-width: 80vw;
        max-height: 80vh;
        overflow: auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0);
        padding-bottom: 1em;
    }
</style>