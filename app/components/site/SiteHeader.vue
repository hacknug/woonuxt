<script setup lang="ts">
const { isShowingSearch } = useSearching()
const { toggleMobileMenu } = useHelpers()

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500">
    <div class="container flex items-center justify-between py-4 gap-8">
      <div class="flex items-center gap-4">
        <button class="flex lg:hidden" @click="toggleMobileMenu()">
          <Icon name="ion:menu-outline" size="24" />
        </button>
        <SiteLogo />
      </div>

      <SiteHeaderNavigation class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4" />

      <div class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-2">
        <SiteHeaderSearch />
        <SiteHeaderUser />
        <SiteHeaderCart />
        <ClientOnly>
          <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" aria-label="Theme" @click="isDark = !isDark" />
          <template #fallback><div class="w-8 h-8" /></template>
        </ClientOnly>
      </div>
    </div>

    <Transition name="scale-y" mode="out-in">
      <div v-if="isShowingSearch" class="container mb-3 -mt-1 sm:hidden">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header>
</template>
