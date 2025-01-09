<script setup>
const { t } = useI18n()
const { storeSettings } = useAppConfig()
const { getOrderQuery, setOrderQuery } = await useSorting()

const selectedOrder = ref(getOrderQuery())

const order = ref(selectedOrder.value.order)
const orderby = ref(selectedOrder.value.orderBy || 'date')

// Update the URL when the checkbox is changed
watch([orderby, order], () => {
  setOrderQuery(orderby.value, order.value)
})

const options = [
  { value: 'date', label: t('messages.general.latest') },
  { value: 'alphabetically', label: t('messages.general.alphabetically') },
  { value: 'price', label: t('messages.shop.price') },
  storeSettings.showReviews && { value: 'rating', label: t('messages.shop.rating') },
  { value: 'discount', label: t('messages.shop.discount') },
].filter(Boolean)
</script>

<template>
  <UButtonGroup size="sm" orientation="horizontal">
    <UButton icon="ion:filter-outline" :ui="{ icon: { base: order === 'ASC' ? 'rotate-180' : '' } }" aria-label="Sort" @click="order = order === 'ASC' ? 'DESC' : 'ASC'" />
    <USelect v-model="orderby" :options aria-label="Order by" />
  </UButtonGroup>
</template>
