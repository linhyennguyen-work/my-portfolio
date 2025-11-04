
<script lang='ts'>
  import Icon from "@iconify/svelte";

  export let label: string | null = null;
  export let href = '#';
  export let icon: string | null = null;

</script>

<a href={href} aria-label={label} class='inline-flex items-center content-center gap-2 font-medium text-primary tracking-tights rounded-full select-none  transition group '>
  <span class=' inline-block transform transition-transform duration-200 group-hover:translate-x-2'>[</span>

  {#if label}
    <span>{label}</span>
  {/if}

  {#if icon}
    <Icon icon={icon} class="text-primary"  />
  {/if}
  
  <span class='inline-block transform transition-transform duration-200 group-hover:-translate-x-2'>]</span>
</a>
