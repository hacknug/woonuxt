<script lang="ts" setup>
const { viewer } = useAuth()
const { cart } = useCart()
const route = useRoute()

const activeTab = computed(() => route.query.tab || 'my-details')
const showLoader = computed(() => !cart.value && !viewer)

useSeoMeta({
  title: `My Account`,
})
</script>

<template>
  <div class="container min-h-[600px]">
    <div v-if="showLoader" class="flex flex-col min-h-[500px]">
      <LoadingIcon class="m-auto" />
    </div>

    <template v-else>
      <LazyLoginAndRegister v-if="!viewer" />

      <div v-else class="grid gap-12 lg:grid-cols-[16rem_1fr] items-start w-full mt-8 mb-24">
        <UserSidebar class="top-24 lg:sticky" />

        <main class="top-24 lg:sticky">
          <UserDetails v-if="activeTab === 'my-details'" />
          <OrderList v-else-if="activeTab === 'orders'" />
          <DownloadList v-else-if="activeTab === 'downloads'" />
          <!-- NOTE: only `<WishList>` is used in other pages -->
          <UserWishlist v-else-if="activeTab === 'wishlist'" />
        </main>
      </div>
    </template>
  </div>
</template>
