<script lang="ts" setup>
const { storeSettings } = useAppConfig()

const { node } = defineProps<{
  node: Product
}>()
</script>

<template>
  <BaseCard :node>
    <template #figure>
      <ProductSaleBadge :node class="absolute top-2 right-2" />
    </template>
    <template #default="{ className }">
      <ProductRating v-if="storeSettings.showReviews" :rating="node.averageRating!" :count="node.reviewCount!" />
      <h2 :class="className.title">{{ node.name }}</h2>
      <ProductPrice :salePrice="node.salePrice" :regularPrice="node.regularPrice" />
    </template>
  </BaseCard>
</template>
