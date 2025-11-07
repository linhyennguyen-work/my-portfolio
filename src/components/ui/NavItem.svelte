
<script lang='ts'>
  export let label: string= '';
  export let href = '#';
</script>

<a href={href} class='inline-flex items-center content-center gap-2 font-medium text-primary tracking-tights rounded-full select-none  transition group px-4 py-4'>
  <span class=' inline-block transform transition-transform duration-200 group-hover:translate-x-2'>[</span>
    <span>{label}</span>
  <span class='inline-block transform transition-transform duration-200 group-hover:-translate-x-2'>]</span>
</a>
