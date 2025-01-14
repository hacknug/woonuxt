<script setup lang="ts">
const { theList } = useWishlist()
</script>

<template>
  <div class="grid gap-8">
    <UserBaseSection :title="$t('messages.shop.wishlist')">
      <ClientOnly>
        <div class="col-span-full">
          <ul v-if="theList.length" class="grid divide-y divide-gray-100">
            <li v-for="product in theList" :key="product.databaseId" class="py-4 first:pt-0 last:pb-0">
              <UserWishlistItem class="" :product="product" />
            </li>
          </ul>
          <div v-else class="flex text-center min-h-[600px] text-gray-500 items-center justify-center">
            <p>{{ $t('messages.shop.wishlistNoItems') }}</p>
          </div>
        </div>
      </ClientOnly>
    </UserBaseSection>
  </div>
</template>
