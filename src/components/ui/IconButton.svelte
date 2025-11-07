<script lang="ts">
    import Icon from "@iconify/svelte";
    export let icon:string=""
</script>
<button class="px-4 py-4 cursor-pointer">
    <Icon icon={icon}  class="text-lg text-primary"  />
</button>