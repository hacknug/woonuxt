<script setup lang="ts">
const { removeFromWishlist } = useWishlist()

const { product } = defineProps<{
  product: Product
}>()

const to = computed(() => `/product/${decodeURIComponent(product.slug || '')}`)
// const componentName = computed(() => product.slug ? 'NuxtLink' : 'span')
</script>

<template>
  <div class="flex gap-4 items-center">
    <NuxtLink v-if="product.slug" :to>
      <NuxtImg
        class="rounded-lg object-cover h-16 w-16"
        :src="product.image?.cartSourceUrl || product.image?.sourceUrl || '/images/placeholder.jpg'"
        :alt="product.image?.altText || product.name || 'Product image'"
        width="128"
        height="128"
        loading="lazy"
      />
    </NuxtLink>

    <div>
      <NuxtLink v-if="product.slug" :to>{{ product.name }}</NuxtLink>
      <ProductPrice :salePrice="product.salePrice" :regularPrice="product.regularPrice" class="ml-auto" />
    </div>

    <div v-if="product.databaseId" class="ml-auto">
      <UButton variant="soft" icon="ion:close-outline" aria-label="Remove Item" @click="removeFromWishlist(product.databaseId)" />
    </div>
  </div>
</template>
