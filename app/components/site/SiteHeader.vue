<script setup lang="ts">
const { isShowingSearch } = useSearching();
const { toggleMobileMenu } = useHelpers();
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

      <SiteHeaderNavigation
        class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4"
      />

      <div class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">
        <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
        <SearchTrigger class="" />

        <div class="flex gap-4 items-center">
          <SignInLink />
          <CartTrigger />
        </div>
      </div>
    </div>

    <Transition name="scale-y" mode="out-in">
      <div class="container mb-3 -mt-1 sm:hidden" v-if="isShowingSearch">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header>
</template>
