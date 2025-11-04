<script lang="ts">
  export let label = 'Get in Touch';
</script>
<button class='relative overflow-hidden inline-flex items-center gap-4 bg-primary text-surface font-medium px-6 py-4 rounded-4xl group'>
  <span class="w-2 h-2 bg-surface rounded-full"></span>
  <span class="relative h-6 overflow-hidden">
    <span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">{label}</span>
  <span class="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
      {label}
    </span>
  </span>
  
</button>
