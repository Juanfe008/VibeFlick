<template>
    <div 
        id="SideNavMain" 
        :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'" 
        class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto"
    >
        <div class="lg:w-full w-[55px] mx-auto">
            <NuxtLink to="/">
                <MenuItem iconString="For You" colorString="primary" sizeString="30"/>
            </NuxtLink>
            <MenuItem iconString="Following" colorString="#000000" sizeString="27"/>
            <MenuItem iconString="LIVE" colorString="#000000" sizeString="27"/>

            <div class="border-b lg:ml-2 mt-2"/>

            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Suggested accounts
            </div>

            <div class="lg:hidden block pt-3"/>

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button class="lg:block hidden text-primary pt-1.5 pl-2 text-[13px]">
                See All
            </button>

            <div class="border-b lg:ml-2 mt-2"/>

            <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Following accounts
            </div>

            <div class="lg:hidden block pt-3"/>

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button class="lg:block hidden text-primary pt-1.5 pl-2 text-[13px]">
                See more
            </button>

            <div class="lg:block hidden border-b lg:ml-2 mt-2"/>

            <div class="lg:block hidden text-[11px] text-gray-500">
                <div class="pt-4 px-2">© 2024 VibeFlick</div>
            </div>

            <div class="pb-14"></div>
        </div>
    
    </div>
</template>

<script setup>
const route=useRoute()

</script>

