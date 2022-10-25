<script lang="ts">
    import AuthWrapper from './AuthWrapper.svelte';
    import "$lib/common.css";
</script>

<AuthWrapper>
    <slot></slot>
</AuthWrapper>