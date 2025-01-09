<script setup lang="ts">
const { t } = useI18n()
const { storeSettings } = useAppConfig()

const { node } = defineProps({
  node: { type: Object as PropType<Product>, required: true },
})

const salePercentage = computed((): string => {
  if (!node?.rawSalePrice || !node?.rawRegularPrice) return ''
  const salePrice = parseFloat(node?.rawSalePrice)
  const regularPrice = parseFloat(node?.rawRegularPrice)
  return Math.round(((salePrice - regularPrice) / regularPrice) * 100) + ` %`
})

const showSaleBadge = computed(() => node.rawSalePrice && storeSettings.saleBadge !== 'hidden')

const textToDisplay = computed(() => {
  return storeSettings?.saleBadge === 'percent'
    ? salePercentage.value
    : t('messages.shop.onSale') || 'Sale'
})
</script>

<template>
  <span
    v-if="showSaleBadge"
    class="p-2 text-xs/none tracking-tight text-white bg-primary rounded-md"
  >{{ textToDisplay }}</span>
</template>
