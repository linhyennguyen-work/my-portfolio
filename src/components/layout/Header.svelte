<script lang="ts">
	import Button from "../ui/Button.svelte";
	import NavItem from "../ui/NavItem.svelte";


</script>

<header class="w-full" >
    <nav class="flex justify-between items-center py-4 px-10 max-w-[1440px] mx-auto " aria-label="Main navigation">
        <a class="text-primary font-black text-[2.5rem] italic tracking-tighter" href="./" aria-label="Logo">LYN</a>
        <div class='flex justify-between items-center gap-15'>
            <ul class="flex gap-10 list-none m-0 p-0">
                <li><NavItem label="Experiences" href="#projects" /></li>
                <li><NavItem label="Projects" href="#about" /></li>
                <li><NavItem label="Skills" href="#pricing" /></li>
                <li><NavItem icon="mingcute:settings-5-line" href="#faq" /></li>
            </ul>
            <Button></Button>
        </div>
    </nav>
</header>

