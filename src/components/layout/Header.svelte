<script lang="ts">
	import Button from "../ui/Button.svelte";
	import IconButton from "../ui/IconButton.svelte";
	import NavItem from "../ui/NavItem.svelte";


</script>

<header class="w-full" >
    <nav class="flex justify-between items-center py-8 px-10 max-w-[1440px] mx-auto " aria-label="Main navigation">
        <a class="text-primary font-black text-[2.5rem] italic " href="./" aria-label="Logo">LYN</a>
        <div class='flex justify-between items-center gap-4'>
            <ul class="flex gap-6 list-none m-0 p-0">
                <li><NavItem label="Home" href="./"/></li>
                <li><NavItem label="About" href="#about" /></li>
                <li><NavItem label="Projects" href="#project" /></li>
            </ul>
            <div class="flex gap-2 list-none m-0 p-0">
                <IconButton icon="mingcute:sun-line"></IconButton>
                <IconButton icon="mingcute:palette-line"></IconButton>
                <IconButton icon="circle-flags:lang-vi"></IconButton>
            </div>
            <Button label="Get in Touch"></Button>
        </div>
        
    </nav>
</header>

